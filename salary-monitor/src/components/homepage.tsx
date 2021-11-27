import * as React from "react";
import "./styles/homepage.scss";

export interface IAppProps {}

export function HomePage(props: IAppProps) {
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
              <tbody>
                <tr>
                  <th scope="row" className="p-3">
                    1
                  </th>
                  <td className="p-3">Mark</td>
                  <td className="p-3">Otto</td>
                  <td className="p-3">@mdo</td>
                  <td className="p-3">@mdo</td>
                  <td className="p-3">@mdo</td>
                  <td className="p-3">@mdo</td>
                </tr>
                <tr>
                  <th scope="row" className="p-3">
                    2
                  </th>
                  <td className="p-3">Mark</td>
                  <td className="p-3">Otto</td>
                  <td className="p-3">@mdo</td>
                  <td className="p-3">@mdo</td>
                  <td className="p-3">@mdo</td>
                  <td className="p-3">@mdo</td>
                </tr>
              </tbody>
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
