import * as React from "react";
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

const authUsername: any = localStorage.getItem("auth");

export function AddShift(props: IAppProps) {
  useEffect(() => {
    let storage = localStorage.getItem("auth");
    if (!storage) {
      window.location.href = "/login";
    }
  }, []);

  const [SnackSuccess, setSnackSuccess] = React.useState(false);
  const [snackError, setSnackError] = React.useState(false);

  const handleClose = (reason: any) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackSuccess(false);
    setSnackError(false);
  };

  const [formData, setformData] = React.useState({
    date: "",
    startTime: "",
    endTime: "",
    wage: "",
    location: "",
    slug: "",
    textarea: "",
  });

  const [error, setError] = React.useState({
    date: "",
    startTime: "",
    endTime: "",
    wage: "",
    location: "",
    slug: "",
    textarea: "",
  });

  const [dataCheck, setDataCheck] = React.useState({
    startTime: true,
    endTime: true,
    date: true,
    wage: true,
    location: true,
    slug: true,
    textarea: true,
  });

  function onChangeDate(e: any) {
    const today = new Date();
    const date = new Date(e.target.value);

    const shiftStorage: any = localStorage.getItem(`${authUsername}-shifts`);
    const shiftData: any = JSON.parse(shiftStorage);
    if (shiftData) {
      //check if shiftData.date is already in localStorage
      for (let i = 0; i < shiftData.length; i++) {
        if (shiftData[i].date === e.target.value) {
          setError({
            ...error,
            date: "You can't add two shifts in the same day",
          });
          setDataCheck({ ...dataCheck, date: false });
        } else if (date > today) {
          setError({
            ...error,
            date: "You can't add a shift in the future",
          });
          setDataCheck({ ...dataCheck, date: false });
        } else {
          setDataCheck({ ...dataCheck, date: true });
        }
      }
    }
    setformData({ ...formData, date: e.target.value });
  }

  function onChangeStartTime(e: any) {
    const diff = Math.floor(
      parseInt(formData.endTime) - parseInt(e.target.value)
    );
    if (diff < 1) {
      setError({
        ...error,
        startTime: "Start time must be smaller than end time",
      });
      setDataCheck({ ...dataCheck, startTime: false });
      setDataCheck({ ...dataCheck, endTime: false });
    } else {
      setDataCheck({ ...dataCheck, startTime: true });
      setDataCheck({ ...dataCheck, endTime: true });
    }
    setformData({ ...formData, startTime: e.target.value });
  }

  function onChangeEndTime(e: any) {
    const diff = Math.floor(
      parseInt(e.target.value) - parseInt(formData.startTime)
    );
    if (diff < 1) {
      setError({
        ...error,
        endTime: "End time must be greater than start time",
      });
      setDataCheck({ ...dataCheck, endTime: false });
      setDataCheck({ ...dataCheck, startTime: false });
    } else {
      setDataCheck({ ...dataCheck, endTime: true });
      setDataCheck({ ...dataCheck, startTime: true });
    }
    setformData({ ...formData, endTime: e.target.value });
  }

  function onChangeWage(e: any) {
    if (e.target.value < 1 || e.target.value > 100) {
      setError({ ...error, wage: "Age is either to small or to big!" });
    } else {
      setformData({ ...formData, wage: e.target.value });
    }
  }

  function onChangeLocation(e: any) {
    setformData({ ...formData, location: e.target.value });
  }

  function onChangeSlug(e: any) {
    const regex = /\d/;
    const doesItHaveNumber = regex.test(e.target.value);
    const shiftData: any = localStorage.getItem(`${authUsername}-shifts`);
    const parsedData: any = JSON.parse(shiftData);
    const allSlugs: any = [];
    if (shiftData) {
      for (let i = 0; i < parsedData.length; i++) {
        allSlugs.push(parsedData[i].slug);
      }
    } else {
      allSlugs.push("");
    }

    if (doesItHaveNumber) {
      setError({ ...error, slug: "The slug should only contain letters" });
    } else if (e.target.value.length < 3) {
      setError({ ...error, slug: "The slug should be at least 3 characters" });
    } else if (allSlugs.includes(e.target.value)) {
      setError({ ...error, slug: "The slug is already taken" });
    } else {
      setError({ ...error, slug: "" });
    }
    setformData({ ...formData, slug: e.target.value.toLowerCase() });
  }

  function onChangeTextArea(e: any) {
    setformData({ ...formData, textarea: e.target.value });
  }

  function onSubmit(e: any) {
    e.preventDefault();
    if (
      dataCheck.startTime &&
      dataCheck.endTime &&
      dataCheck.date &&
      dataCheck.wage &&
      dataCheck.location &&
      dataCheck.slug &&
      dataCheck.textarea
    ) {
      const shiftStorage: any = localStorage.getItem(`${authUsername}-shifts`);
      if (!shiftStorage) {
        localStorage.setItem(
          `${authUsername}-shifts`,
          JSON.stringify([formData])
        );
      } else {
        const shiftData: any = JSON.parse(shiftStorage);
        shiftData.push(formData);
        localStorage.setItem(
          `${authUsername}-shifts`,
          JSON.stringify(shiftData)
        );
      }
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
      setSnackSuccess(true);
    } else {
      setSnackError(true);
    }
  }
  return (
    <div className="loginpage">
      <h3>Add Shift</h3>
      <main className="password-recovery">
        <section className="login-box">
          <h4>Add Shift</h4>
          <form className="form" onSubmit={onSubmit}>
            <div className="inputs" onSubmit={onSubmit}>
              <label htmlFor="date" className="text-start fs-6 fw-lighter ms-2">
                Starting Date
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={onChangeDate}
                required
              />
              <p
                className="form-error username-input"
                style={{ display: dataCheck.date ? "none" : "block" }}
              >
                {error.date}
              </p>
              <label htmlFor="time" className="text-start fs-6 fw-lighter ms-2">
                Starting Time
              </label>
              <input
                type="time"
                value={formData.startTime}
                onChange={onChangeStartTime}
                required
              />
              <p
                className="form-error username-input"
                style={{ display: dataCheck.startTime ? "none" : "block" }}
              >
                {error.startTime}
              </p>
              <label htmlFor="time" className="text-start fs-6 fw-lighter ms-2">
                Ending Time
              </label>
              <input
                type="time"
                value={formData.endTime}
                onChange={onChangeEndTime}
                required
              />
              <p
                className="form-error username-input"
                style={{ display: dataCheck.endTime ? "none" : "block" }}
              >
                {error.endTime}
              </p>
              <input
                type="number"
                placeholder="Hourly Wage"
                value={formData.wage}
                onChange={onChangeWage}
                required
              />
              <p
                className="form-error username-input"
                style={{ display: dataCheck.wage ? "none" : "block" }}
              >
                {error.wage}
              </p>
              <input
                type="text"
                placeholder="Workplace"
                value={formData.location}
                onChange={onChangeLocation}
                required
              />
              <input
                type="text"
                placeholder="Shift Slug"
                value={formData.slug}
                onChange={onChangeSlug}
                required
              />
              <p className="form-error username-input">{error.slug}</p>
              <textarea
                name=""
                id=""
                cols={30}
                rows={10}
                value={formData.textarea}
                onChange={onChangeTextArea}
                placeholder="Description"
              ></textarea>
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
            You must fill all fields!
          </Alert>
        </Snackbar>
      </Stack>
    </div>
  );
}
