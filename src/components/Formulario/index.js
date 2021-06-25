import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
    password: Yup.string().min(6, "Contraseña demasiado corta").max(15, "Contraseña demasiado larga. Máx 15 caracteres").required("Requerido"),
    email: Yup.string().email("El email es inválido").required("Requerido")
})

const LoginForm = () => {
    const handleSubmit = (values, {setSubmitting}) => {
        setTimeout(()=>{
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false)
        }, 1000)
    }

    return (
        <>
        <h1>Login</h1>
        <Formik
            initialValues={{email: "", password: ""}}
            onSubmit={handleSubmit}
            validationSchema={loginSchema}
        >
        {({isSubmitting}) => {
            return (
                <Form>
                    <label>
                        Email: <Field type='email' name='email' />
                        <ErrorMessage name='email' component='div' />
                    </label>
                    <label>
                        Password: <Field type='password' name='password' />
                        <ErrorMessage name='password' component='div' />
                    </label>
                    <button type='submit' disable={isSubmitting}>
                        Ingresar
                    </button>
                </Form>
            )
        }}
        </Formik>
        </>
    )
}

export default LoginForm;