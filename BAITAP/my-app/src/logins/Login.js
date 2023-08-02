import React, { useState, useEffect } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const LoginSchema = Yup.object().shape({
  email: Yup.string().required("Vui long nhap email"),
  password: Yup.string().required("Vui long nhap password"),
});

function Login(props) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (values) => {
    if (values.email === "Phireus2002@gmail.com" && values.password === "123456") {
      navigate("/employee");
    } else {
      alert("Email hoặc mật khẩu không đúng");
    }
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
            <label>Email</label>
            <Field type="text" name="email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <lable>Password</lable>
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

export default Login;
