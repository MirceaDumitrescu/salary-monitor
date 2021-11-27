import * as React from "react";
import "../styles/login.scss";
import { Link } from "react-router-dom";

export interface IAppProps {}

export function ForgotPswd(props: IAppProps) {
  return (
    <div className="loginpage">
      <h3>Forgot Password</h3>
      <main className="password-recovery">
        <section className="login-box">
          <h4>Password Recovery</h4>
          <div className="inputs">
            <input type="text" placeholder="username" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="number" placeholder="Age" />
          </div>

          <button>Submit</button>
        </section>
      </main>
    </div>
  );
}
