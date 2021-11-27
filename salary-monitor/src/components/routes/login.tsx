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

export function LoginPage(props: IAppProps) {
  const [open, setOpen] = React.useState(false);

  const handleClose = (reason: any) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  function handleSubmit(e: any) {
    e.preventDefault();

    ////////////////////// CHECK USER INPUTS /////////////////////////
    if (e.target.email.value === "") {
      alert("Email is required");
    } else if (e.target.password.value === "") {
      alert("Password is required");
    } else {
      ////////////////////// LOGIN /////////////////////////
      let olddata: any = localStorage.getItem("formdata");
      if (olddata == null) {
        alert("No data found");
      } else {
        let data: any = JSON.parse(olddata);
        for (const user of data) {
          if (
            user.email === e.target.email.value &&
            user.password === e.target.password.value
          ) {
            setOpen(true);
            setTimeout(() => {
              window.location.href = "/";
            }, 1000);
            return;
          }
        }
        alert("Invalid email or password");
      }
    }
  }

  return (
    <div className="loginpage">
      <h1 className="login-title">LOGIN</h1>
      <main className="login-page-main">
        <section className="login-box">
          <h2 className="login-subtitle">LOGIN</h2>
          <form className="form" onSubmit={handleSubmit}>
            <div className="inputs">
              <input type="email" name="email" placeholder="nome@email.ro" />
              <input type="password" name="password" placeholder="password" />
            </div>
            <p>
              Forgot password? <Link to="/forgot-password">Click Here</Link>
            </p>
            <button className="primary">Login</button>
          </form>
        </section>
        <section className="register-box">
          <h2 className="login-subtitle">First time?</h2>
          <button>
            <Link to="/register">Register</Link>
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
            Succesfully Logged In!
          </Alert>
        </Snackbar>
      </Stack>
    </div>
  );
}
