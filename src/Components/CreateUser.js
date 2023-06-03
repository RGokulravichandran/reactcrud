import React from "react";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../Global";

function CreateUser() {
  const navigate = useNavigate();

  const createUserValidationSchema = yup.object({
    name: yup
      .string()
      .min(3, "need a bigger name")
      .required("This field should not be empty"),
    avatar: yup.string().required("This field should not be empty"),
    email: yup.string().required("This field should not be empty"),
    phone: yup.number().required("This field should not be empty"),
    address: yup.string().required("This field should not be empty"),
  });

  const { handleSubmit, values, handleChange, handleBlur, touched, errors } =
    useFormik({
      initialValues: {
        name: "",
        avatar: "https://img.freepik.com/free-icon/user_318-749758.jpg",
        email: "",
        phone: "",
        address: "",
      },
      validationSchema: createUserValidationSchema,
      onSubmit: (newUserValues) => {
        addUser(newUserValues);
      },
    });

  const addUser = (newUserValues) => {
    fetch(`${API_URL}`, {
      method: "POST",
      body: JSON.stringify(newUserValues),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    }).then(() => navigate("/"));
  };

  return (
    <form onSubmit={handleSubmit} className="UserInputs">
      <img
        className="CreateUserGiff"
        src="https://zulu.org.za/travel/wp-content/uploads/sites/2/2021/04/default-avatar.jpg"
        alt="logo"
      />

      <Divider>
        <Chip label="CREATE USER" />
      </Divider>

      <TextField
        id="outlined-size-small"
        size="small"
        label="Name"
        type="name"
        variant="outlined"
        name="name"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.name && errors.name}
        helperText={touched.name && errors.name ? errors.name : null}
      />
      <TextField
        id="outlined-size-small"
        label="Profile Picture Link"
        variant="outlined"
        type="pic"
        name="avatar"
        size="small"
        value={values.avatar}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.avatar && errors.avatar}
        helperText={touched.avatar && errors.avatar ? errors.avatar : null}
      />

      <TextField
        id="outlined-size-small"
        size="small"
        label="Email"
        type="email"
        variant="outlined"
        name="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.email && errors.email}
        helperText={touched.email && errors.email ? errors.email : null}
      />

      <TextField
        id="outlined-size-small"
        size="small"
        label="Phone"
        type="number"
        variant="outlined"
        name="phone"
        value={values.phone}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.phone && errors.phone}
        helperText={touched.phone && errors.phone ? errors.phone : null}
      />

      <TextField
        id="outlined-size-small"
        label="Address"
        size="small"
        variant="outlined"
        name="address"
        value={values.address}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.address && errors.address}
        helperText={touched.address && errors.address ? errors.address : null}
      />

      <Button variant="contained" type="submit">
        Add User
      </Button>
    </form>
  );
}

export default CreateUser;
