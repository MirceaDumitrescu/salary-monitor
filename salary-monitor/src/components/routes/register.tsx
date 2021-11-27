import * as React from "react";
import { Link } from "react-router-dom";
import "../styles/login.scss";
import Snackbar from "@mui/material/Snackbar";
import { Button, Stack } from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

export interface IAppProps {}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export function RegisterPage(props: IAppProps) {
  const [open, setOpen] = React.useState(false);

  const handleClose = (reason: any) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const [formData, setformData] = React.useState({
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    age: "",
  });

  const [dataCheck, setDataCheck] = React.useState({
    username: true,
    email: true,
    password: true,
    firstName: true,
    lastName: true,
    age: true,
  });

  const [error, setError] = React.useState({
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    age: "",
  });

  function onChangeUserName(e: any) {
    if (e.target.value.length < 6) {
      setDataCheck({ ...dataCheck, username: false });
      setError({ ...error, username: "Username to short!" });
    } else {
      setDataCheck({ ...dataCheck, username: true });
    }
    setformData({ ...formData, username: e.target.value });
  }

  function onChangeEmail(e: any) {
    setformData({ ...formData, email: e.target.value });
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
  }

  function onChangefirstName(e: any) {
    if (e.target.value.length < 4) {
      setDataCheck({ ...dataCheck, firstName: false });
      setError({ ...error, firstName: "Name to short!" });
    } else {
      setDataCheck({ ...dataCheck, firstName: true });
    }
    setformData({ ...formData, firstName: e.target.value });
  }

  function onChangelastName(e: any) {
    if (e.target.value.length < 4) {
      setDataCheck({ ...dataCheck, lastName: false });
      setError({ ...error, lastName: "Name to short!" });
    } else {
      setDataCheck({ ...dataCheck, lastName: true });
    }
    setformData({ ...formData, lastName: e.target.value });
  }

  function onChangeAge(e: any) {
    if (e.target.value < 16 || e.target.value > 100) {
      setDataCheck({ ...dataCheck, age: false });
      setError({ ...error, age: "Age is either to small or to big!" });
    } else {
      setDataCheck({ ...dataCheck, age: true });
    }
    setformData({ ...formData, age: e.target.value });
  }

  function onSubmit(e: any) {
    e.preventDefault();
    let ob = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
      firstName: formData.firstName,
      lastName: formData.lastName,
      age: formData.age,
    };
    let olddata: any = localStorage.getItem("formdata");

    if (
      dataCheck.username &&
      dataCheck.email &&
      dataCheck.password &&
      dataCheck.firstName &&
      dataCheck.lastName &&
      dataCheck.age
    ) {
      if (olddata == null) {
        olddata = [];
        olddata.push(ob);
        localStorage.setItem("formdata", JSON.stringify(olddata));
      } else {
        let oldArr = JSON.parse(olddata);
        // check if oldArr contains the same username
        let checkUsername = oldArr.some(
          (el: any) => el.username === ob.username
        );
        let checkEmail = oldArr.some((el: any) => el.email === ob.email);
        if (checkUsername || checkEmail) {
          alert("Username or Password already exists!");
        } else {
          oldArr.push(ob);
          localStorage.setItem("formdata", JSON.stringify(oldArr));
          console.log(oldArr, "hhg");
          setOpen(true);
          setTimeout(() => {
            window.location.href = "/login";
          }, 1000);
        }
      }
    }
  }
  return (
    <div className="loginpage">
      <h1 className="login-title">REGISTER</h1>
      <main className="login-page-main">
        <section className="login-box">
          <h2 className="login-subtitle">REGISTER</h2>
          <form className="form" onSubmit={onSubmit}>
            <div className="inputs">
              <input
                type="text"
                placeholder="username"
                value={formData.username}
                onChange={onChangeUserName}
                required
                className="username-input"
                style={{
                  border: dataCheck.username
                    ? "1px solid black"
                    : "1px solid red",
                }}
              />
              <p
                className="form-error username-input"
                style={{ display: dataCheck.username ? "none" : "block" }}
              >
                {error.username}
              </p>
              <input
                type="password"
                placeholder="password"
                value={formData.password}
                onChange={onChangePassword}
                required
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
                required
                className="email-input"
              />

              <input
                type="text"
                placeholder="First Name"
                value={formData.firstName}
                onChange={onChangefirstName}
                required
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
                required
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
                required
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

            <button>Register</button>
          </form>
        </section>
        <section className="register-box">
          <h2 className="login-subtitle">Go back?</h2>
          <button>
            <Link to="/login">Login</Link>
          </button>
        </section>
      </main>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Succesfully Registered!
          </Alert>
        </Snackbar>
      </Stack>
    </div>
  );
}
