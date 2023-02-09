import styled from "styled-components";


export const Title = styled.h1`
margin: auto;
padding-top: 20px;
font-size: 3em;
text-align: center;
color: white;
font-family: Helvetica;

@media (max-width: 500px){
    font-size: 2em;
}

`;

export const MainPC = styled.div`
background-color: #42C2FF;
height: auto;
padding-bottom: 1%;
`;

export const MainAN = styled.div`
align-items: center;
height: auto;
background-color: #42C2FF;
`;

export const Info = styled.div`
margin: 5%;
width: 90%;
height 50%;
background: linear-gradient(252.44deg, rgba(239, 255, 253, 0.7) 0%, rgba(239, 255, 253, 0) 100%);
backdrop-filter: blur(40px);
border-radius: 85px;
`;
export const Daily = styled.div`

display: flex;
flex-direction: column;
padding: 3%;
background: linear-gradient(252.44deg, rgba(239, 255, 253, 0.7) 0%, rgba(239, 255, 253, 0) 100%);
backdrop-filter: blur(40px);
border-radius: 50px;

@media (max-width: 900px){
    padding: 5%;
    margin: 3%;
}
`;

export const WeatherBox = styled.div`
padding: 4%;
width: auto;
height: auto;
font-family: Helvetica;

@media (max-width: 1023px){
    text-align: center;
    padding: 8%;
}
`;

export const Boxtempo = styled.div`
@media (max-width){
    text-align: center;
}
@media (min-width: 1024px){
    display: flex;
    padding-right: 15%;
}
`;

export const Daysgroup = styled.div`
  display: flex;
justify-content: space-evenly;
@media (max-width: 500px){
    flex-direction: column;
    text-align: center;
    margin: 5%;
  
}
@media (max-width: 1023px){
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}
`;

export const Tempo = styled.h1`
color: white;
font-size: 6em;
display: inline;

@media (max-width: 500px){
    font-size: 3em;
}
`;

export const Label = styled.label`
color: white;
font-size: 2em;
padding: 6px;
`;

export const DailyTemp = styled.label`
color: white;
font-size: 2em;
font-family: Helvetica;
font-weight: bold;

`;

export const Input = styled.input`
border-radius: 10px;
padding: 10px;
box-shadow: 4px 38px 62px rgba(0, 0, 0, 0.5);
background: linear-gradient(269.42deg, #F2FBFF -1.71%, rgba(242, 251, 255, 0.3) 100%);
opacity: 0.5;
color: Black;

@media (max-width: 500px){
    display: block;
    width: 92.5%;
}
`;

export const Button = styled.button`
font_size: 25px;
width: 100px;
height: 40px;

background: #FFF380;
box-shadow: 4px 38px 62px rgba(0, 0, 0, 0.5);
border-radius: 10px;

@media (max-width: 500px){
    width: 100%;
}
`;

export const Chart = styled.div`

margin: 10px;
background: linear-gradient(252.44deg, rgba(239, 255, 253, 0.7) 0%, rgba(239, 255, 253, 0) 100%);
backdrop-filter: blur(40px);
border-radius: 20px;
`;

export const Chartext = styled.h1`
color: white;
font-family: Helvetica;
font-weight: bold;
text-align: center;
`;

