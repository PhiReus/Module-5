// import React, { useState } from "react";
// import { Formik, Field, Form } from 'formik';
// import * as Yup from 'yup';

// const LoginSchema = Yup.object().shape({
//   title: Yup.string().required("Vui long nhap tieu de"),
//   quantity: Yup.string().required("Vui long nhap so luong"),
// });
// function Book(props) {
//   const [form, setForm] = useState({
//     id: Date.now(),
//     title: "Muôn Kiếp Nhân Sinh",
//     quantity: "10",
//   });
//   const [books, setBooks] = useState("Lịch sử");

//   const handleSubmit = (values, { resetForm }) => {
//     const newBook = {
//       id: Date.now(),
//       title: values.title,
//       quantity: values.quantity,
//     };
//     setBooks([...books, newBook]);
//     resetForm();
//   };

//   return (
//     <div>
//       <Formik
//         initialValues={{ title: "", quantity: "" }}
//         validationSchema={validationSchema}
//         onSubmit={onSubmit}
//       >
//         {({ errors, touched }) => (
//           <Form>
//           <lable>Title</lable>
//           <Field type="text" name="title"  />
//           {errors.title && touched.title ? (
//             <div>{errors.title}</div>
//           ) : null}
//           <lable>Quantity</lable>
//           <Field type="text" name="quantity"/>
//           {errors.quantity && touched.quantity ? (
//             <div>{errors.quantity}</div>
//           ) : null}
          
//           <button type="submit">Submit</button>
//         </Form>
//         )}
//       </Formik>
//     </div>
//   );
// }

// export default Book;
