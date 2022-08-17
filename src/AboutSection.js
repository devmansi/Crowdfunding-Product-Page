import React from "react";

import data from "./data";
import OnScreenPlan from "./OnScreenPlan";

export default function AboutSection({ openInModalWithSelectedPlan, tally }) {
  const planList = ["one", "two", "three"];
  return (
    <section className="about-section">
      <h2 className="secondary-heading">About this project</h2>
      <p className="secondary-text margin-md-bt">
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand.
      </p>
      <p className="secondary-text">
        Featuring artisan craftsmanship, the simplicity of design creates extra
        desk space below your computer to allow notepads, pens, and USB sticks
        to be stored under the stand.
      </p>
      <article className="plans flex" onClick={openInModalWithSelectedPlan}>
        {data.map((plan, key) => {
          return (
            <OnScreenPlan
              plan={plan}
              planNumber={planList[key]}
              tally={tally}
              key={plan.heading}
            />
          );
        })}
      </article>
    </section>
  );
}

{
  /* <section
          className={`plan one${
            tally.totalAmount < 1000 && tally.oneLeft > 0 ? "" : " dull"
          }`}
        >
          <div className="flex justify-content">
            <h3 className="plan-heading">Bamboo Stand</h3>
            <p className="plan-amt">Pledge $25 or more</p>
          </div>
          <p className="plan-description">
            You get an ergonomic stand made of natural bamboo. You've helped us
            launch our promotional campaign, and you’ll be added to a special
            Backer member list.
          </p>
          <div className="flex justify-content">
            <p className="tally-head left">
              <span>{tally.oneLeft}</span> left
            </p>
            <button
              className={`btn select-btn${
                tally.oneLeft > 0 && tally.totalAmount < 1000
                  ? ""
                  : " out-of-stock"
              }`}
              disabled={
                tally.totalAmount < 1000 && tally.oneLeft > 0 ? false : true
              }
            >
              {tally.oneLeft > 0 ? "Select Reward" : "Out of stock"}
            </button>
          </div>
        </section>
        <section
          className={`plan two${
            tally.totalAmount < 1000 && tally.twoLeft > 0 ? "" : " dull"
          }`}
        >
          <div className="flex justify-content">
            <h3 className="plan-heading">Black Edition Stand</h3>
            <p className="plan-amt">Pledge $75 or more</p>
          </div>
          <p className="plan-description">
            You get a Black Special Edition computer stand and a personal thank
            you. You’ll be added to our Backer member list. Shipping is
            included.
          </p>
          <div className="flex justify-content">
            <p className="tally-head left">
              <span>{tally.twoLeft}</span> left
            </p>
            <button
              className={`btn select-btn${
                tally.twoLeft > 0 && tally.totalAmount < 1000
                  ? ""
                  : " out-of-stock"
              }`}
              disabled={
                tally.totalAmount < 1000 && tally.twoLeft > 0 ? false : true
              }
            >
              {tally.twoLeft > 0 ? "Select Reward" : "Out of stock"}
            </button>
          </div>
        </section>
        <section
          className={`plan three${
            tally.totalAmount < 1000 && tally.threeLeft > 0 ? "" : " dull"
          }`}
        >
          <div className="flex justify-content">
            <h3 className="plan-heading">Mahogany Special Edition</h3>
            <p className="plan-amt">Pledge $200 or more</p>
          </div>
          <p className="plan-description">
            You get two Special Edition Mahogany stands, a Backer T-Shirt, and a
            personal thank you. You’ll be added to our Backer member list.
            Shipping is included.
          </p>
          <div className="flex justify-content">
            <p className="tally-head left">
              <span>{tally.threeLeft}</span>left
            </p>
            <button
              className={`btn select-btn${
                tally.threeLeft > 0 && tally.totalAmount < 1000
                  ? ""
                  : " out-of-stock"
              }`}
              disabled={
                tally.totalAmount < 1000 && tally.threeLeft > 0 ? false : true
              }
            >
              {tally.threeLeft > 0 ? "Select Reward" : "Out of stock"}
            </button>
          </div>
</section> */
}
