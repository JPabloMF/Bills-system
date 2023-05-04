import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../../style/SignIn.css";

function SignIn() {
  const SigninSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(2, "Too Short!")
      .max(15, "Too Long!")
      .required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: SigninSchema,
    validateOnChange: false,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="containerSignIn">
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
            variant="standard"
            name="email"
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
            variant="standard"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors?.password ? (
            <Alert severity="error">{formik.errors.password}</Alert>
          ) : null}
          <Stack spacing={2} direction="row">
            {" "}
            <Button type="submit" variant="contained">
              sign in
            </Button>
          </Stack>
        </form>
      </Box>
    </div>
  );
}

export default SignIn;
