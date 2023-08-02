import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import BookModel from '../models/BookModel';

const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .required("Required"),
    email: Yup.string()
        .required("Required")
});

function BookCreate(props) {
    const navigate = useNavigate()
    const form = {
        name: "",
        email: "",
    }

    const handleSubmit = (data) => {
        BookModel.store(data)
        .then((res) => {
            navigate('/')
        })
        .catch((err) => {
            console.err("Xảy ra lổi :",err)
        })
    }

    return (
        <div>
            <h1>BookCreate</h1>
            <Formik
                initialValues={form}
                validationSchema={SignupSchema}
                onSubmit={(values) => handleSubmit(values)}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div>
                            <label htmlFor="name">Name</label>
                            <Field name="name" />
                            {errors.name && touched.name ? (
                                <div>{errors.name}</div>
                            ) : null}
                        </div>
                        <div>
                            <label htmlFor="email">email</label>
                            <Field name="email" />
                            {errors.email && touched.email ? (
                                <div>{errors.email}</div>
                            ) : null}
                        </div>

                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default BookCreate;