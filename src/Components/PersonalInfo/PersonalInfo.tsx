import { FC } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { TextField, Button } from "@material-ui/core";
import * as Yup from "yup";
import Props from "../../Interfaces/PersonalInfo.interface";
import styles from "./PersonalInfo.module.css";

const PersonalInfo: FC<Props> = ({ handleNext, formValues }) => {
  return (
    <div>
      <Formik
        initialValues={{
          firstName: formValues[0].firstName,
          lastName: formValues[0].lastName,
          email: formValues[0].email,
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().required("First Name Required"),
          lastName: Yup.string().required("Last Name Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Email is Required"),
        })}
        onSubmit={(values) => {
          formValues[1]({
            ...formValues[0],
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
          });
          handleNext();
        }}
      >
        {({ errors, touched }) => (
          <Form className={styles.container}>
            <Field
              className={styles.textfield}
              label="First Name"
              placeholder="First Name"
              as={TextField}
              variant="outlined"
              id="firstName"
              type="text"
              name="firstName"
              error={errors.firstName && touched.firstName}
              helperText={<ErrorMessage name="firstName" />}
            />
            <Field
              className={styles.textfield}
              label="Last Name"
              placeholder="Last Name"
              as={TextField}
              variant="outlined"
              id="lastName"
              type="text"
              name="lastName"
              error={errors.lastName && touched.lastName}
              helperText={<ErrorMessage name="lastName" />}
            />
            <Field
              className={styles.textfield}
              label="Email"
              placeholder="Email"
              as={TextField}
              variant="outlined"
              id="email"
              type="email"
              name="email"
              error={errors.email && touched.email}
              helperText={<ErrorMessage name="email" />}
            />
            <Button className={styles.btn} type="submit">
              NEXT
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PersonalInfo;
