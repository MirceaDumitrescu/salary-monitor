import * as React from "react";
import "../styles/login.scss";
import { Link } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import { Stack } from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { useEffect } from "react";

export interface IAppProps {}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export function ForgotPswd(props: IAppProps) {
  useEffect(() => {
    let storage = localStorage.getItem("auth");
    if (storage) {
      window.location.href = "/dashboard";
    }
  }, []);
  const [open, setOpen] = React.useState(false);
  const [error, setError] = React.useState(false);

  const handleError = (status: any) => {
    status === true ? setError(true) : setError(false);
  };

  const handleClose = (reason: any) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  function checkForm(e: any) {
    e.preventDefault();
    ////////////////////// CHECK USER INPUTS /////////////////////////
    if (e.target.email.value === "") {
      alert("Email is required");
    } else if (e.target.username.value === "") {
      alert("Username is required");
    } else {
      ////////////////////// RECOVER /////////////////////////
      let olddata: any = localStorage.getItem(e.target.username.value);
      if (olddata == null) {
        handleError(true);
      } else {
        let data: any = JSON.parse(olddata);
        if (
          data[0].email === e.target.email.value &&
          data[0].username === e.target.username.value
        ) {
          localStorage.removeItem(e.target.username.value);
          setOpen(true);
          handleError(false);
          setTimeout(() => {
            window.location.href = "/register";
          }, 1000);
        } else {
          handleError(true);
        }
      }
    }
  }

  return (
    <div className="loginpage">
      <h3>Forgot Password</h3>
      <main className="password-recovery">
        <section className="login-box">
          <h4>Password Recovery</h4>
          <form className="recovery-form" onSubmit={checkForm}>
            <div
              className="alert alert-danger"
              role="alert"
              style={{ display: error ? "block" : "none" }}
            >
              No username or email found in the database!
            </div>
            <div className="inputs">
              <input type="username" name="username" placeholder="username" />
              <input type="email" name="email" placeholder="nome@email.ro" />
            </div>
            <button>Submit</button>
            <p>
              Need an account?<Link to="/register">Register now!</Link>
            </p>
            <p>
              Remembered your data?<Link to="/login">Login!</Link>
            </p>
          </form>
        </section>
      </main>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            We sent you an email!
          </Alert>
        </Snackbar>
      </Stack>
    </div>
  );
}
