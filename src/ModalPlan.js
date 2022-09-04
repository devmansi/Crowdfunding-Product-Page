import React from "react";

export default function ModalPlan({
  plan,
  planNumber,
  tally,
  initialPledge,
  inputType,
  selectedPlan,
  handleInput,
}) {
  return (
    <section
      className={`${planNumber} plan modal--plan${
        selectedPlan === `${planNumber}` && tally[`${planNumber}Left`] > 0
          ? " plan-change padding-bottom"
          : ""
      }${tally[`${planNumber}Left`] > 0 ? "" : " dull"}`}
    >
      <div className="plan-container">
        <div className="flex modal-plan">
          <div
            className={`radio-button${
              selectedPlan === `${planNumber}` && tally[`${planNumber}Left`] > 0
                ? " checked"
                : ""
            }${tally[`${planNumber}Left`] > 0 ? "" : " empty"}`}
          ></div>
          <div className="plan-details">
            <div className="flex plan-detail">
              <h3 className="secondary-heading modal-plan-heading">
                {plan.heading}
              </h3>
              <p className="plan-amt modal-plan-amt">{plan.pledge}</p>
              <p className="modal-left">
                <span>
                  <strong>{tally[`${planNumber}Left`]}</strong>
                </span>{" "}
                left
              </p>
            </div>
            <p className="secondary-text modal-text">{plan.description}</p>
          </div>
        </div>
      </div>
      <div
        className={`selected${
          selectedPlan === `${planNumber}` && tally[`${planNumber}Left`] > 0
            ? ""
            : " hide"
        }`}
      >
        <hr />
        <div className="selected-plan-details flex">
          <p className="pledge">Enter your pledge</p>
          <input
            type="text"
            value={inputType}
            name={`${planNumber}`}
            onInput={handleInput}
            className={`pledge-input${
              inputType < initialPledge ? " error" : ""
            }`}
          />
          <button className="selected-btn btn">Continue</button>
        </div>
      </div>
    </section>
  );
}
