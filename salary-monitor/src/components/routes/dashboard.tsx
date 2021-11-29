import * as React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "../styles/login.scss";
import Snackbar from "@mui/material/Snackbar";
import { Stack } from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

export interface IAppProps {}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export function Dashboard(props: IAppProps) {
  const [SnackSuccess, setSnackSuccess] = React.useState(false);
  const [snackError, setSnackError] = React.useState(false);
  const [Valid, setValid] = React.useState(false);

  useEffect(() => {
    let storage = localStorage.getItem("auth");
    if (!storage) {
      window.location.href = "/login";
    }
  }, []);

  const handleClose = (reason: any) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackSuccess(false);
    setSnackError(false);
  };

  const [formData, setformData]: any = React.useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    age: "",
  });

  const [dataCheck, setDataCheck] = React.useState({
    email: true,
    password: true,
    firstName: true,
    lastName: true,
    age: true,
  });

  const [error, setError] = React.useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    age: "",
  });

  function onChangeEmail(e: any) {
    setformData({ ...formData, email: e.target.value });
    setValid(true);
  }

  function onChangePassword(e: any) {
    if (e.target.value.length < 8 || e.target.value.length > 16) {
      setDataCheck({ ...dataCheck, password: false });
      setError({ ...error, password: "Password to short or too long" });
    } else if (!e.target.value.match(/[a-z]/g)) {
      setDataCheck({ ...dataCheck, password: false });
      setError({ ...error, password: "Password does not contain lowercase" });
    } else if (!e.target.value.match(/[A-Z]/g)) {
      setDataCheck({ ...dataCheck, password: false });
      setError({ ...error, password: "Password does not contain uppercase" });
    } else if (!e.target.value.match(/[0-9]/g)) {
      setDataCheck({ ...dataCheck, password: false });
      setError({ ...error, password: "Password does not contain number" });
    } else if (!e.target.value.match(/[!@#$%^&*]/g)) {
      setDataCheck({ ...dataCheck, password: false });
      setError({
        ...error,
        password: "Password does not contain special character",
      });
    } else {
      setDataCheck({ ...dataCheck, password: true });
    }
    setformData({ ...formData, password: e.target.value });
    setValid(true);
  }

  function onChangefirstName(e: any) {
    if (e.target.value.length < 4) {
      setDataCheck({ ...dataCheck, firstName: false });
      setError({ ...error, firstName: "Name to short!" });
    } else {
      setDataCheck({ ...dataCheck, firstName: true });
    }
    setformData({ ...formData, firstName: e.target.value });
    setValid(true);
  }

  function onChangelastName(e: any) {
    if (e.target.value.length < 4) {
      setDataCheck({ ...dataCheck, lastName: false });
      setError({ ...error, lastName: "Name to short!" });
    } else {
      setDataCheck({ ...dataCheck, lastName: true });
    }
    setformData({ ...formData, lastName: e.target.value });
    setValid(true);
  }

  function onChangeAge(e: any) {
    if (e.target.value < 18 || e.target.value > 65) {
      setDataCheck({ ...dataCheck, age: false });
      setError({ ...error, age: "Age is either to small or to big!" });
    } else {
      setDataCheck({ ...dataCheck, age: true });
    }
    setformData({ ...formData, age: e.target.value });
    setValid(true);
  }

  function onSubmit(e: any) {
    e.preventDefault();

    let authData: any = localStorage.getItem("auth");
    let userData: any = localStorage.getItem(authData);
    let userDataObj: any = JSON.parse(userData);
    let newData: any = {};

    for (let key in formData) {
      if (formData[key] !== "") {
        newData[key] = formData[key];
      }
    }
    for (let key in userDataObj[0]) {
      if (!newData[key]) {
        newData[key] = userDataObj[0][key];
      }
    }
    localStorage.setItem(authData, JSON.stringify([newData]));
    if (Valid) {
      setSnackSuccess(true);
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    } else {
      setSnackError(true);
    }
  }
  return (
    <div className="loginpage">
      <h1 className="login-title">EDIT PROFILE</h1>
      <main className="password-recovery">
        <section className="login-box">
          <h2 className="login-subtitle">EDIT PROFILE</h2>
          <form className="form" onSubmit={onSubmit}>
            <div className="inputs">
              <input
                type="password"
                placeholder="password"
                value={formData.password}
                onChange={onChangePassword}
                className="password-input"
                style={{
                  border: dataCheck.password
                    ? "1px solid black"
                    : "1px solid red",
                }}
              />
              <p
                className="form-error password-input"
                style={{ display: dataCheck.password ? "none" : "block" }}
              >
                {error.password}
              </p>

              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={onChangeEmail}
                className="email-input"
              />

              <input
                type="text"
                placeholder="First Name"
                value={formData.firstName}
                onChange={onChangefirstName}
                className="firstName-input"
                style={{
                  border: dataCheck.firstName
                    ? "1px solid black"
                    : "1px solid red",
                }}
              />
              <p
                className="form-error firstName-input"
                style={{ display: dataCheck.firstName ? "none" : "block" }}
              >
                {error.firstName}
              </p>

              <input
                type="text"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={onChangelastName}
                className="lastName-input"
                style={{
                  border: dataCheck.lastName
                    ? "1px solid black"
                    : "1px solid red",
                }}
              />
              <p
                className="form-error lastName-input"
                style={{ display: dataCheck.lastName ? "none" : "block" }}
              >
                {error.lastName}
              </p>

              <input
                type="number"
                placeholder="Age"
                value={formData.age}
                onChange={onChangeAge}
                className="age-input"
                style={{
                  border: dataCheck.age ? "1px solid black" : "1px solid red",
                }}
              />
              <p
                className="form-error age-input"
                style={{ display: dataCheck.age ? "none" : "block" }}
              >
                {error.age}
              </p>
            </div>

            <button>Submit</button>
          </form>
        </section>
      </main>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar
          open={SnackSuccess}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Succesfully Edited information!
          </Alert>
        </Snackbar>
        <Snackbar
          open={snackError}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            You must fill at least one field!
          </Alert>
        </Snackbar>
      </Stack>
    </div>
  );
}
