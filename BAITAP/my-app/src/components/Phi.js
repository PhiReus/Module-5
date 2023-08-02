import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
const SignupSchema = Yup.object().shape({
    username: Yup.string()
        .required('Required'),
    password: Yup.string()
        .required('Required')
});
function Phi(props) {
    const [form, setForm] = useState({
        username: '',
        password: ''
    })
    const handleSubmit = (values) => {
        console.log(values);
    }
    return (
        <div>
            <Formik
                initialValues={form}
                onSubmit={(values) => handleSubmit(values)}
                validationSchema={SignupSchema}
            >
                {({ errors, touched }) => (
                    <Form>
                        <lable>username</lable>
                        <Field type="text" name="username" />
                        {errors.username && touched.username ? (
                            <div>{errors.username}</div>
                        ) : null}
                        <lable>password</lable>
                        <Field type="text" name="password" />
                        {errors.password && touched.password ? (
                            <div>{errors.password}</div>
                        ) : null}
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
export default Phi;