import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import Alert from "@mui/material/Alert";

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
    <div>
      <Box
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
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
          <Stack spacing={2} direction="row">
            {" "}
            <Button type="submit" variant="contained">
              sign up
            </Button>
          </Stack>
        </form>
      </Box>
    </div>
  );
}

export default SignUp;
