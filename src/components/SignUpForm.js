import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup"
import axios from "axios";

export default function SignUpForm() {

    const SignupSchema = Yup.object().shape({
        email: Yup.string().email("* Invalid email!").required("* Required!")
    })

    const [succes, setSucces] = React.useState(false)

    async function submitForm(values, formik) {


        const { email } = values;
        try {
            const payload = {
                email_address: email
            };

            await axios.post('.netlify/functions/add-email-subscriber', payload);
            setSucces(true)
            formik.resetForm()

        } catch (error) {
            alert('Something went wrong ! ' + error.message);
        }

    }

    return (
        <div>

            <Formik
                initialValues={{ email: "" }}
                validationSchema={SignupSchema}
                onSubmit={submitForm}
            >
                {(formik, status) => (
                    <Form className="form">
                        <h1 className="600" >Subscribe with your email for the latest information:</h1>
                        <Field className="transparent-field" name="email" />
                        <ErrorMessage className="error-msg" name="email" component="div" />
                        {succes ? <div className="succes-msg">Welcome to the Crew ! You are subscribed </div> : ""}
                        <button
                            disabled={!formik.isValid || !formik.dirty}
                            type="submit"
                            className="small-button"
                        >
                            Submit
                        </button>
                    </Form>
                )
                }
            </Formik>
        </div>




    )
}