import * as React from "react";
import "../styles/login.scss";

export interface IAppProps {}

export function EditProfile(props: IAppProps) {
  return (
    <div className="loginpage">
      <h3>Edit profile</h3>
      <main className="password-recovery">
        <section className="login-box">
          <h4>Edit Profile</h4>
          <div className="inputs">
            <input type="password" placeholder="password" />
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
