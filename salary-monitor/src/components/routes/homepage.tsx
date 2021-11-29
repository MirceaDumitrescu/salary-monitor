import * as React from "react";
import "../styles/homepage.scss";

export function HomePage(props: any) {
  const shiftData = localStorage.getItem("shifts");
  const shifts = shiftData ? JSON.parse(shiftData) : [];
  const diff =
    Math.floor(parseInt(shifts.endTime) - parseInt(shifts.startTime)) *
    parseInt(shifts.wage);

  const listItems = shifts.map((d: any) => {
    return (
      <tr key={d.slug}>
        <th scope="row" className="p-3">
          {d.date}
        </th>
        <td className="p-3">{d.startTime}</td>
        <td className="p-3">{d.endTime}</td>
        <td className="p-3">{d.wage}</td>
        <td className="p-3">{d.location}</td>
        <td className="p-3">
          {Math.floor(parseInt(d.endTime) - parseInt(d.startTime)) *
            parseInt(d.wage)}{" "}
          $
        </td>
        <td className="p-3">{d.textarea}</td>
      </tr>
    );
  });

  return (
    <div>
      <main>
        <section>
          <div className="search-grid">
            <div className="from-date">
              <p>From Date</p>
              <input type="date" name="from-date" id="" />
            </div>
            <div className="to-date">
              <p>To Date</p>
              <input type="date" name="to-date" id="" />
            </div>
            <div className="shift-name">
              <p>Shift Name</p>
              <input type="text" />
            </div>
            <div className="search-button">
              <button>Search</button>
            </div>
          </div>
        </section>
        <section>
          <div className="result-table p-5">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" className="p-3">
                    Date{" "}
                  </th>
                  <th scope="col" className="p-3">
                    Beginning Time{" "}
                  </th>
                  <th scope="col" className="p-3">
                    End Time{" "}
                  </th>
                  <th scope="col" className="p-3">
                    Price per Hour
                  </th>
                  <th scope="col" className="p-3">
                    Shift Name{" "}
                  </th>
                  <th scope="col" className="p-3">
                    Total porfit per shift{" "}
                  </th>
                  <th scope="col" className="p-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>{listItems}</tbody>
            </table>
          </div>
        </section>
        <section>
          <div className="highest-earnings">
            <div className="alert alert-primary" role="alert">
              Highest Earnings made in: ....
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
