import React from "react";

export default function onScreenPlan({ plan, planNumber, tally }) {
  return (
    <section
      className={`plan ${planNumber} ${
        tally.totalAmount < 1000 && tally[`${planNumber}Left`] > 0 ? "" : "dull"
      }`}
    >
      <div className="flex justify-content">
        <h3 className="plan-heading">{plan.heading}</h3>
        <p className="plan-amt">{plan.pledge}</p>
      </div>
      <p className="plan-description">{plan.description}</p>
      <div className="flex justify-content">
        <p className="tally-head left">
          <span>{tally[`${planNumber}Left`]}</span> left
        </p>
        <button
          className={`btn select-btn${
            tally[`${planNumber}Left`] > 0 && tally.totalAmount < 1000
              ? ""
              : " out-of-stock"
          }`}
          disabled={tally.totalAmount < 1000 && tally[`${planNumber}Left`] > 0}
        >
          {tally[`${planNumber}Left`] > 0 ? "Select Reward" : "Out of stock"}
        </button>
      </div>
    </section>
  );
}
