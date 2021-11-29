import * as React from "react";
import { useEffect } from "react";
import "../styles/login.scss";
export interface IAppProps {}

export function AddShift(props: IAppProps) {
  useEffect(() => {
    let storage = localStorage.getItem("auth");
    if (!storage) {
      window.location.href = "/login";
    }
  }, []);
  return (
    <div className="loginpage">
      <h3>Add Shift</h3>
      <main className="password-recovery">
        <section className="login-box">
          <h4>Add Shift</h4>
          <div className="inputs">
            <input type="date" />
            <input type="time" />
            <input type="time" />
            <input type="number" placeholder="Hourly Wage" />
            <input type="text" placeholder="Workplace" />
            <input type="text" placeholder="Shift Slug" />
            <textarea name="" id="" cols={30} rows={10}></textarea>
          </div>

          <button>Submit</button>
        </section>
      </main>
    </div>
  );
}
