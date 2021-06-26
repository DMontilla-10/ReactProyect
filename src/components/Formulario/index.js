import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import * as axios from "axios";

const loginSchema = Yup.object().shape({
  nombre: Yup.string()
    .min(3, "El nombre debe tener por lo menos 3 letras")
    .max(100, "Nombre demasiado largo. Máx 100 caracteres")
    .required("Requerido"),
  email: Yup.string().email("El email es inválido").required("Requerido"),
});

const LoginForm = () => {
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    // setTimeout(()=>{
    //     alert(JSON.stringify(values, null, 2));
    //     setSubmitting(false)
    // }, 1000)

    axios
      .post("http://localhost:8000/api/usuarios", {
        nombre: values.nombre,
        email: values.email,
        estado: 1,
      })
      .then((resp) => {
        console.log(resp);
      })
      .catch((error) => {
        console.log(error);
      });

      resetForm()
  };

  return (
    <>
      <h1>Login</h1>
      <Formik
        initialValues={{ email: "", nombre: "" }}
        onSubmit={handleSubmit}
        validationSchema={loginSchema}
      >
        {({ isSubmitting }) => {
          return (
            <Form>
              <label>
                Nombre: <Field type="text" name="nombre" />
                <ErrorMessage name="nombre" component="div" />
              </label>
              <label>
                Email: <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" />
              </label>
              <button type="submit" disable={isSubmitting}>
                Ingresar
              </button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default LoginForm;
