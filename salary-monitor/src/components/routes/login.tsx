import * as React from "react";
import { Link } from "react-router-dom";
import "../styles/login.scss";
import Snackbar from "@mui/material/Snackbar";
import { Stack } from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { useEffect } from "react";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export function LoginPage(props: any) {
  useEffect(() => {
    let storage = localStorage.getItem("auth");
    if (storage) {
      window.location.href = "/dashboard";
    }
  }, []);
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
    if (e.target.username.value === "") {
      alert("Username is required");
    } else if (e.target.password.value === "") {
      alert("Password is required");
    } else {
      ////////////////////// LOGIN /////////////////////////
      let olddata: any = localStorage.getItem(e.target.username.value);
      if (olddata == null) {
        alert("No data found");
      } else {
        let data: any = JSON.parse(olddata);
        if (
          data[0].username === e.target.username.value &&
          data[0].password === e.target.password.value
        ) {
          localStorage.setItem("auth", e.target.username.value);
          setOpen(true);
          setTimeout(() => {
            window.location.href = "/";
          }, 1000);
          return;
        } else {
          localStorage.removeItem("auth");
          alert("Invalid username or password");
        }
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
              <input type="username" name="username" placeholder="username" />
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
