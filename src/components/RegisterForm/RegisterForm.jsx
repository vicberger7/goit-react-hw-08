import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegisterForm.module.css";

const registerUserSchema = Yup.object().shape({
  name: Yup.string().required("Username is required"),
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string()
    .required("Password is required")
    .min(7, "Password must be at least 7 characters")
    .max(40, "Password must not exceed 40 characters"),
});

const formInitialValues = {
  name: "",
  email: "",
  password: "",
};

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    dispatch(register(values))
      .unwrap()
      .then(() => {
        console.log("Registration success");
      })
      .catch(() => {
        console.log("Registration error");
      })
      .finally(() => {
        setSubmitting(false);
        resetForm();
      });
  };

  return (
    <div>
      <Formik
        initialValues={formInitialValues}
        validationSchema={registerUserSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <label className={css.label}>
            Username
            <Field type="text" name="name" placeholder="Enter your name" />
            <ErrorMessage component="p" name="name" />
          </label>
          <label className={css.label}>
            Email
            <Field type="email" name="email" placeholder="Enter your email" />
            <ErrorMessage component="p" name="email" />
          </label>
          <label className={css.label}>
            Password
            <Field
              type="password"
              name="password"
              placeholder="Enter your password"
            />
            <ErrorMessage component="p" name="password" />
          </label>
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};
