import * as React from "react";
import { useEffect } from "react";

export interface IAppProps {}

export function EditShift(props: IAppProps) {
  useEffect(() => {
    let storage = localStorage.getItem("auth");
    if (!storage) {
      window.location.href = "/login";
    }
  }, []);
  return (
    <div>
      <h2>Edit Shift works</h2>
    </div>
  );
}
