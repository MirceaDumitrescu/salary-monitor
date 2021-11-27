import * as React from "react";
import "../styles/wrong-route.scss";

export interface IAppProps {}

export function WrongRoute(props: IAppProps) {
  return (
    <main className="wrong-route">
      <h1 className="wrong-title">404</h1>
      <div className="bar"></div>
      <h2 className="wrong-subtitle">Page not found</h2>
    </main>
  );
}
