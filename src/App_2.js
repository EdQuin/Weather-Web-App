import { Tempo, Title, Boxtempo, Info, WeatherBox, Daily, DailyTemp, Daysgroup } from "./styles";
import { useEffect, useState } from "react"
import CustomInput from "./Custominput";
import BarChart from "./BarChart";

export function SearchForm() {

    const [searchCity, setSearchCity] = useState("Lisboa");
    const [cityInfo, setCityInfo] = useState([""]);
    const [temp, setTemp] = useState("");
    const [daylyTemp, setDaylyTemp] = useState([]);
    const [hourtemp, setHourTemp] = useState([])


    useEffect(() => {
            //Api for weather
        fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + searchCity + "&limit=1&appid=")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                return response.json();
            })
            .then(response => {
                setCityInfo(response);

            })
            .catch((err) => {
                console.log("Fetch1", err.message)
            });

    }, [searchCity])

    useEffect(() => {
        fetch("https://api.openweathermap.org/data/3.0/onecall?lat=" + cityInfo[0].lat + "&lon=" + cityInfo[0].lon + "&units=metric&appid=")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                return response.json();
            })
            .then(response => {
                setTemp(response.current.temp);
                setDaylyTemp(response.daily);
                setHourTemp(response.hourly);
            })
            .catch((err) => {
                console.log("Fetch2", err.message)
            });
    }, [cityInfo]);


    function fiveDays() {
        const days = daylyTemp.slice(0, 5);
        

        var daysFormat = [];

        days.map((day) => {
            let value = new Date(day.dt * 1000);
            let data_format = value.getDate() + "/" + value.getMonth();
            daysFormat.push(data_format);
            console.log(daysFormat)
        })
        return days.map((day, key) => {

            return (
                <Daily key={key}>
                    <DailyTemp style={{ color: "#000066" }}>
                        Day {daysFormat[key]}
                    </DailyTemp>
                    <DailyTemp>
                        {day.temp.day} ºC
                    </DailyTemp>
                </Daily>
            )
        })
    };


    function Response() {
        return (
            <Boxtempo>
                <Title>{cityInfo[0].name}</Title>
                <Tempo>{temp}</Tempo>
                <Tempo>ºC</Tempo>
            </Boxtempo>
        )
    }
    return (
        <div>
            <Info>
                <WeatherBox>
                    <CustomInput changeWord={searchCity => setSearchCity(searchCity)}></CustomInput>
                    <Response></Response>
                </WeatherBox>
            </Info>
            <Daysgroup>
                {fiveDays()}
            </Daysgroup>
            <BarChart data={hourtemp}/>
        </div>
    )
}


