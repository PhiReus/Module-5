import React, { useState, useEffect } from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import BookModel from "../models/BookModel";

const SignupSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().required("Required"),
});
function BookEdit(props) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
  });
  const { id } = useParams();

  useEffect(() => {
    BookModel.find(id)
      .then((res) => {
        // console.log(res);

        setForm(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  const handleSubmit = (data) => {
    BookModel.update(id,data)
      .then((res) => {
        // console.log(res);
        navigate("/");
      })
      .catch((err) => {
        console.error("Lỗi khi sửa :", err);
      });
  };
  return (
    <div>
      <h1>BookEdit</h1>
      <Formik
        initialValues={form}
        validationSchema={SignupSchema}
        onSubmit={(values) => handleSubmit(values)}
        enableReinitialize={true}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <label htmlFor="name"> Name</label>
              <Field name="name" />
              {errors.name && touched.name ? <div>{errors.name}</div> : null}
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <Field name="email" />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
            </div>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default BookEdit;
