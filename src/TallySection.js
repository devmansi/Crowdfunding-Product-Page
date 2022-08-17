import React from "react";

export default function TallySection({ tally }) {
  return (
    <div className="tally-section">
      <div className="tally-details flex">
        <p className="tally-head">
          <span className="total-backed">{tally.totalAmount}</span>of $1000
          backed
        </p>
        <hr />
        <p className="tally-head margin-md-rg">
          <span className="total-people">{tally.totalPeople}</span>total backers
        </p>
        <hr />
        <p className="tally-head">
          <span>56</span>days left
        </p>
      </div>
      <div className="total-bar">
        <div
          className="tally-bar"
          style={{
            width: `${
              tally.totalAmount <= 1000
                ? `${(tally.totalAmount / 1000) * 100}%`
                : "100%"
            }`,
          }}
        ></div>
      </div>
    </div>
  );
}
