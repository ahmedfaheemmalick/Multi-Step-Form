import { FC } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { TextField, Button } from "@material-ui/core";
import * as Yup from "yup";
import Props from "../../Interfaces/AccountInfo.interface";
import styles from "./AccountInfo.module.css";

const PersonalInfo: FC<Props> = ({ handleNext, handleBack, formValues }) => {
  return (
    <div>
      <Formik
        initialValues={{
          userName: formValues[0].userName,
          password: formValues[0].password,
          confirmPassword: formValues[0].confirmPassword,
        }}
        validationSchema={Yup.object({
          userName: Yup.string().required("User Name is Required"),
          password: Yup.string()
            .required("Password is Required")
            .min(8, "Password must be 8 chracter long"),
          confirmPassword: Yup.string()
            .required("Password is Required")
            .min(8, "Password must be 8 chracter long")
            .oneOf([Yup.ref("password")], "Passwored is not matching"),
        })}
        onSubmit={(values) => {
          formValues[1]({
            ...formValues[0],
            userName: values.userName,
            password: values.password,
            confirmPassword: values.confirmPassword,
          });
          handleNext();
        }}
      >
        {({ errors, touched }) => (
          <Form className={styles.container}>
            <Field
              className={styles.textfield}
              label="User Name"
              placeholder="User Name"
              as={TextField}
              variant="outlined"
              id="userName"
              type="text"
              name="userName"
              error={errors.userName && touched.userName}
              helperText={<ErrorMessage name="userName" />}
            />
            <Field
              className={styles.textfield}
              label="Password"
              placeholder="Password"
              as={TextField}
              variant="outlined"
              id="password"
              type="password"
              name="password"
              error={errors.password && touched.password}
              helperText={<ErrorMessage name="password" />}
            />
            <Field
              className={styles.textfield}
              label="Confirm Password"
              placeholder="Confirm Password"
              as={TextField}
              variant="outlined"
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              error={errors.confirmPassword && touched.confirmPassword}
              helperText={<ErrorMessage name="confirmPassword" />}
            />
            <div className={styles.btnDiv}>
              <Button className={styles.btn} type="submit" onClick={handleBack}>
                BACK
              </Button>
              <span></span>
              <Button className={styles.btn} type="submit">
                NEXT
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PersonalInfo;
