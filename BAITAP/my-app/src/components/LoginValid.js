import React, { useState,useEffect} from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";


const LoginSchema = Yup.object().shape({
  name: Yup.string().required("Vui long nhap ten"),
  email: Yup.string().required("Vui long nhap email"),
  address: Yup.string().required("Vui long nhap email"),
});

function LoginValid(props) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
  });
  useEffect(() => {
    let user = {
        name: "phi",
    email: "phi@gmail.com",
    address: "linh chieu",
    }

    setForm(user);
    
  }, [])

  const handleSubmit = (values) => {
    console.log(values);
  };

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
            <lable>Address</lable>
            <Field type="text" name="address"/>
            {errors.address && touched.address ? (
              <div>{errors.address}</div>
            ) : null}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default LoginValid;
