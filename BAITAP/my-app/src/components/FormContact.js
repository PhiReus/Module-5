import React, {useEffect, useState} from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';


const LoginSchema = Yup.object().shape({
    name: Yup.string().required("Vui long nhap ten"),
    email: Yup.string().required("Vui long nhap email"),
    phone: Yup.string().required("Vui long nhap email"),
    message: Yup.string().required("Vui long nhap email"),
  });
function FormContact(props) {
    const[form,setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    })
    // useEffect(() => {
    //     let user = {
    //         name: 'Võ Tòng',
    //         email: 'VT@gmail.com',
    //         phone: '0123456789',
    //         message: "Tôi đã hổ"
    //     }
    //     setForm(user);
    // })
    const handleSubmit = (values) => {
        if(values.name && values.email && values.phone && values.message) {
            alert('Thêm thành công!');
        }
    }

    return (
        <div>
            <Formik
        initialValues={form}
        onSubmit={(values) => handleSubmit(values)}
        validationSchema={LoginSchema}
        enableReinitialize={true}
      >
        {({ errors, touched }) => (
          <Form>
            <lable>Name</lable>
            <Field type="text" name="name"  />
            {errors.name && touched.name ? (
              <div>{errors.name}</div>
            ) : null}
            <lable>Email</lable>
            <Field type="text" name="email"/>
            {errors.email && touched.email ? (
              <div>{errors.email}</div>
            ) : null}
            <lable>Phone</lable>
            <Field type="text" name="phone"/>
            {errors.phone && touched.phone ? (
              <div>{errors.phone}</div>
            ) : null}
            <lable>Message</lable>
            <Field type="text" name="message"/>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
        </div>
    );
}

export default FormContact;