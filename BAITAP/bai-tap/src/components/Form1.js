import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
function Form1(props) {
    const [form, setForm] = useState({
        username: '',
        password: ''
    })
    const handleSubmit = (values) => {
        console.log(values);
    }
    const handleValidate = (values, props /* only available when using withFormik */) => {
        const errors = {};
        if (!values.username) {
            errors.username = 'Required';
        }
        //...
        return errors;
    };
    return (
        <div>
            <Formik
                initialValues={form}
                onSubmit={(values) => handleSubmit(values)}
                validate={handleValidate}
            >
                <Form>
                    <lable>username</lable>
                    <Field type="text" name="username" />
                    <lable>password</lable>
                    <Field type="text" name="password" />
                    <button type="submit">Click</button>
                </Form>
            </Formik>
        </div>
    );
}
export default Form1;