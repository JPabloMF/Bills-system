import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import { useFormik } from "formik";
import * as Yup from "yup";

function ForgotPassword() {
  const ForgotSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: ForgotSchema,
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
        <Box mt={2}>
          {" "}
          <Button type="submit" fullWidth variant="contained">
            recover password
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default ForgotPassword;
