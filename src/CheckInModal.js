import React from "react";

import data from "./data";
import ModalPlan from "./ModalPlan";

export default function CheckInModal({
  closeInModal,
  selectedPlan,
  handleModalSelectedPlan,
  oneInput,
  twoInput,
  threeInput,
  handleInput,
  tally,
}) {
  const planList = ["one", "two", "three"];
  const pledge = [25, 75, 200];
  const type = [oneInput, twoInput, threeInput];
  return (
    <section className="modal-container" onClick={closeInModal}>
      <div className="modal-content">
        <svg
          className="close-modal"
          width="15"
          height="15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z"
            fill="#000"
            fillRule="evenodd"
            opacity=".4"
            className="close-modal"
          />
        </svg>
        <h2 className="secondary-heading margin-sm-bt">Back this project</h2>
        <p className="secondary-text margin-md-bt">
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>
        <article className="modal-plans flex" onClick={handleModalSelectedPlan}>
          <section
            className={`default plan modal--plan flex modal-plan${
              selectedPlan === "default" ? " plan-change" : ""
            }`}
          >
            <div
              className={`radio-button${
                selectedPlan === "default" ? " checked" : ""
              }`}
            ></div>
            <div className="plan-details">
              <h3 className="secondary-heading modal-plan-heading">
                Pledge with no reward
              </h3>
              <p className="secondary-text modal-left">
                Choose to support us without a reward if you simply believe in
                our project. As a backer, you will be signed up to receive
                product updates via email.
              </p>
            </div>
          </section>
          {data.map((plan, key) => {
            return (
              <ModalPlan
                plan={plan}
                planNumber={planList[key]}
                tally={tally}
                initialPledge={pledge[key]}
                inputType={type[key]}
                key={plan.pledge}
                selectedPlan={selectedPlan}
                handleInput={handleInput}
              />
            );
          })}
        </article>
      </div>
    </section>
  );
}
