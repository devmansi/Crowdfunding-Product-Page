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

{
  /* <section
className={`one plan modal--plan${
  selectedPlan === "one" && tally.oneLeft > 0
    ? " plan-change padding-bottom"
    : ""
}${tally.oneLeft > 0 ? "" : " dull"}`}
>
<div className="plan-container">
  <div className="flex modal-plan">
    <div
      className={`radio-button${
        selectedPlan === "one" && tally.oneLeft > 0
          ? " checked"
          : ""
      }${tally.oneLeft > 0 ? "" : " empty"}`}
    ></div>
    <div className="plan-details">
      <div className="flex plan-detail">
        <h3 className="secondary-heading modal-plan-heading">
          Bamboo Stand
        </h3>
        <p className="plan-amt modal-plan-amt">
          Pledge $25 or more
        </p>
        <p className="modal-left">
          <span>
            <strong>{tally.oneLeft}</strong>
          </span>{" "}
          left
        </p>
      </div>
      <p className="secondary-text modal-text">
        You get an ergonomic stand made of natural bamboo. You've
        helped us launch our promotional campaign, and you’ll be
        added to a special Backer member list.
      </p>
    </div>
  </div>
</div>
<div
  className={`selected${
    selectedPlan === "one" && tally.oneLeft > 0 ? "" : " hide"
  }`}
>
  <hr />
  <div className="selected-plan-details flex">
    <p className="pledge">Enter your pledge</p>
    <input
      type="text"
      value={oneInput}
      name="oneInput"
      onInput={handleInput}
      className={`pledge-input${oneInput < 25 ? " error" : ""}`}
    />
    <button className="selected-btn btn">Continue</button>
  </div>
</div>
</section>
<section
className={`two plan modal--plan${
  selectedPlan === "two" && tally.twoLeft > 0
    ? " plan-change padding-bottom"
    : ""
}${tally.twoLeft > 0 ? "" : " dull"}`}
>
<div className="plan-container">
  <div className="flex modal-plan">
    <div
      className={`radio-button${
        selectedPlan === "two" && tally.twoLeft > 0
          ? " checked"
          : ""
      }${tally.twoLeft > 0 ? "" : " empty"}`}
    ></div>
    <div className="plan-details">
      <div className="flex plan-detail">
        <h3 className="secondary-heading modal-plan-heading">
          Black Edition Stand
        </h3>
        <p className="plan-amt modal-plan-amt">
          Pledge $75 or more
        </p>
        <p className="modal-left">
          <span>
            <strong>{tally.twoLeft}</strong>
          </span>{" "}
          left
        </p>
      </div>
      <p className="secondary-text modal-text">
        You get a Black Special Edition computer stand and a
        personal thank you. You’ll be added to our Backer member
        list. Shipping is included.
      </p>
    </div>
  </div>
</div>
<div
  className={`selected${
    selectedPlan === "two" && tally.twoLeft > 0 ? "" : " hide"
  }`}
>
  <hr />
  <div className="selected-plan-details flex">
    <p className="pledge">Enter your pledge</p>
    <input
      type="text"
      value={twoInput}
      name="twoInput"
      onInput={handleInput}
      className={`pledge-input${twoInput < 75 ? " error" : ""}`}
    />
    <button className="selected-btn btn">Continue</button>
  </div>
</div>
</section>
<section
className={`three plan modal--plan${
  selectedPlan === "three" && tally.threeleft > 0
    ? " plan-change padding-bottom"
    : ""
}${tally.threeLeft > 0 ? "" : " dull"}`}
>
<div className="plan-container">
  <div className="flex modal-plan">
    <div
      className={`radio-button${
        selectedPlan === "three" && tally.twoLeft > 0
          ? " checked"
          : ""
      }${tally.threeLeft > 0 ? "" : " empty"}`}
    ></div>
    <div className="plan-details">
      <div className="flex plan-detail">
        <h3 className="secondary-heading modal-plan-heading no-left">
          Mahogany Special Edition
        </h3>
        <p className="plan-amt modal-plan-amt">
          Pledge $200 or more
        </p>
        <p className="modal-left">
          <span>
            <strong>{tally.threeLeft}</strong>
          </span>{" "}
          left
        </p>
      </div>
      <p className="secondary-text modal-text">
        You get two Special Edition Mahogany stands, a Backer
        T-Shirt, and a personal thank you. You’ll be added to our
        Backer member list. Shipping is included.
      </p>
    </div>
  </div>
</div>
<div
  className={`selected${
    selectedPlan === "three" && tally.twoLeft > 0 ? "" : " hide"
  }`}
>
  <hr />
  <div className="selected-plan-details flex">
    <p className="pledge">Enter your pledge</p>
    <input
      type="text"
      value={threeInput}
      name="threeInput"
      onInput={handleInput}
      className={`pledge-input${twoInput < 200 ? " error" : ""}`}
    />
    <button className="selected-btn btn">Continue</button>
  </div>
</div>
</section> */
}
