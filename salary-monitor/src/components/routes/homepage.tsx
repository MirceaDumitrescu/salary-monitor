import * as React from "react";
import "../styles/homepage.scss";

const authUsername: any = localStorage.getItem("auth");

export function HomePage(props: any) {
  const shiftData = localStorage.getItem(`${authUsername}-shifts`);
  const shifts = shiftData ? JSON.parse(shiftData) : [];
  let filteredShifts: any = [];
  const [highestProfit, setHighestProfit] = React.useState("");
  const [searchData, setSearchData] = React.useState({
    fromDate: "",
    toDate: "",
    shiftName: "",
  });
  const [displayData, setDisplayData] = React.useState([]);

  function fromDateSearch(e: any) {
    setSearchData({ ...searchData, fromDate: e.target.value });
  }

  function toDateSearch(e: any) {
    setSearchData({ ...searchData, toDate: e.target.value });
  }

  function shiftNameSearch(e: any) {
    setSearchData({ ...searchData, shiftName: e.target.value });
  }

  function handleSearch(e: any) {
    e.preventDefault();
    filteredShifts = shifts.filter((shift: any) => {
      if (
        searchData.shiftName.toLowerCase().includes(shift.slug.toLowerCase()) ||
        (shift.date >= searchData.fromDate && shift.date <= searchData.toDate)
      ) {
        return shift;
      }
    });
    setDisplayData(filteredShifts);
    setHighestProfit(() => {
      let max = 0;
      let date = "";
      filteredShifts.map((shift: any) => {
        if (shift.wage > max) {
          max = shift.wage;
          date = shift.date;
        }
      });
      return date;
    });
  }

  const renderListItem = (param: any) => {
    return param.map((d: any) => {
      return (
        <tr>
          <th scope="row" className="p-3">
            {d.date}
          </th>
          <td className="p-3">{d.startTime}</td>
          <td className="p-3">{d.endTime}</td>
          <td className="p-3">{d.wage}</td>
          <td className="p-3">{d.slug}</td>
          <td className="p-3">
            {Math.floor(parseInt(d.endTime) - parseInt(d.startTime)) *
              parseInt(d.wage)}{" "}
            $
          </td>
          <td className="p-3">{d.textarea}</td>
        </tr>
      );
    });
  };

  return (
    <div>
      <main>
        <section>
          <form className="form search-grid" onSubmit={handleSearch}>
            <div className="from-date">
              <p>From Date</p>
              <input
                type="date"
                name="from-date"
                id=""
                value={searchData.fromDate}
                onChange={fromDateSearch}
              />
            </div>
            <div className="to-date">
              <p>To Date</p>
              <input
                type="date"
                name="to-date"
                id=""
                value={searchData.toDate}
                onChange={toDateSearch}
              />
            </div>
            <div className="shift-name">
              <p>Shift Name</p>
              <input
                type="text"
                value={searchData.shiftName}
                onChange={shiftNameSearch}
              />
            </div>
            <div className="search-button">
              <button>Search</button>
            </div>
          </form>
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
                    Total profit per shift{" "}
                  </th>
                  <th scope="col" className="p-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>{renderListItem(displayData)}</tbody>
            </table>
          </div>
        </section>
        <section>
          <div className="highest-earnings p-5">
            <div className="alert alert-primary" role="alert">
              Highest Earnings made in: {highestProfit ? highestProfit : "none"}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
