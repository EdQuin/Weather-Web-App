import { useFormik } from "formik";
import * as Yup from "yup";
import { Label } from "./styles";
import { Input } from "./styles";
import { Button } from "./styles";

export const Schema = Yup.object().shape({
    city: Yup
        .string()
        .min(3, "City must be at least 3 characters long")
        .required("Required"),
});

const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
};

const CustomInput = (props) => {
    const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit, } =
        useFormik({
            initialValues: {
                city: "",
            },
            validationSchema: Schema,
            onSubmit,
        });

    return (
        <form onSubmit={handleSubmit} autoComplete="off">
            <Label htmlFor="city"></Label>
            <Input
                value={values.city}
                onChange={handleChange}
                id="city"
                type="city"
                placeholder="Please enter a City"
                onBlur={handleBlur}
                className={errors.city && touched.city ? "input-error" : ""}
            />
            {errors.city && touched.city && <p className="error">{errors.city}</p>}
            <Button disabled={isSubmitting} type="submit" onClick={() => props.changeWord(values.city)}>
                Submit
            </Button>
        </form>
    );
};
export default CustomInput

