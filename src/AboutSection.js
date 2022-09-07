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
