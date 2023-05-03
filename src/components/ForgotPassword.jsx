import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import Alert from "@mui/material/Alert";

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
    <div>
      {" "}
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
          <Stack spacing={2} direction="row">
            {" "}
            <Button type="submit" variant="contained">
              recover password
            </Button>
          </Stack>
        </form>
      </Box>
    </div>
  );
}

export default ForgotPassword;
