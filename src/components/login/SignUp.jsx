import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import { useFormik } from "formik";
import * as Yup from "yup";

function SignUp() {
  const SignupSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(2, "Too Short!")
      .max(15, "Too Long!")
      .required("Required"),
    repeatpassword: Yup.string()
      .min(2, "Too Short!")
      .max(15, "Too Long!")
      .required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      repeatpassword: "",
    },
    validationSchema: SignupSchema,
    validateOnChange: false,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <Box
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
      noValidate
      autoComplete="off"
    >
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="standard-basic"
          label="Email"
          name="email"
          variant="standard"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors?.email ? (
          <Alert severity="error">{formik.errors.email}</Alert>
        ) : null}
        <TextField
          fullWidth
          id="standard-basic"
          label="Password"
          name="password"
          variant="standard"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors?.password ? (
          <Alert severity="error">{formik.errors.password}</Alert>
        ) : null}
        <TextField
          fullWidth
          id="standard-basic"
          label="Repeat password"
          name="repeatpassword"
          variant="standard"
          onChange={formik.handleChange}
          value={formik.values.repeatpassword}
        />
        {formik.errors?.repeatpassword ? (
          <Alert severity="error">{formik.errors.repeatpassword}</Alert>
        ) : null}
        <Box mt={2}>
          <Button type="submit" fullWidth variant="contained">
            sign up
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default SignUp;
