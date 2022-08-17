import React from "react";

import HeroSection from "./HeroSection";
import TallySection from "./TallySection";
import AboutSection from "./AboutSection";
import CheckInModal from "./CheckInModal";
import CheckOutModal from "./CheckOutModal";

export default function MainContent() {
  const [checkInStatus, setCheckInStatus] = React.useState(false);
  const [checkOutStatus, setCheckOutStatus] = React.useState(false);
  const [selectedPlan, setSelectedPlan] = React.useState();
  const [tally, setTally] = React.useState({
    totalAmount: 0,
    totalPeople: 0,
    oneLeft: 2,
    twoLeft: 2,
    threeLeft: 0,
  });
  const [oneInput, setOneInput] = React.useState("25");
  const [twoInput, setTwoInput] = React.useState("75");
  const [threeInput, setThreeInput] = React.useState("25");

  function handleInput(e) {
    const { name, value } = e.target;

    name === "oneInput" ? setOneInput(value) : setTwoInput(value);
  }

  function openSelectedPlan(plan) {
    setSelectedPlan(plan);
  }

  function handleModalSelectedPlan(e) {
    if (e.target.closest(".dull")) {
      return;
    }

    if (
      e.target.classList.contains("radio-button") &&
      !e.target.closest(".modal--plan").classList.contains("dull")
    ) {
      setCheckOutStatus(false);
      if (e.target.closest(".modal--plan").classList[0] === "default") {
        setTally({ ...tally, totalPeople: Number(tally.totalPeople) + 1 });
        setCheckInStatus(false);
        setCheckOutStatus(true);
      }
      setSelectedPlan(e.target.closest(".modal--plan").classList[0]);
    }

    if (
      e.target.classList.contains("selected-btn") &&
      e.target.previousElementSibling.value
    ) {
      if (
        e.target.closest(".modal--plan").classList[0] === "one" &&
        Number(oneInput) < 25
      ) {
        setOneInput("");
      } else if (
        e.target.closest(".modal--plan").classList[0] === "two" &&
        Number(twoInput) < 75
      ) {
        setTwoInput("");
      } else {
        e.target.closest(".modal--plan").classList[0] === "one"
          ? setTally({
              ...tally,
              totalAmount: Number(tally.totalAmount) + Number(oneInput),
              totalPeople: Number(tally.totalPeople) + 1,
              oneLeft: Number(tally.oneLeft) - 1,
            })
          : setTally({
              ...tally,
              totalAmount: Number(tally.totalAmount) + Number(twoInput),
              totalPeople: Number(tally.totalPeople) + 1,
              twoLeft: Number(tally.twoLeft) - 1,
            });

        e.target.closest(".modal--plan").classList[0] === "one"
          ? setOneInput("25")
          : setTwoInput("75");

        setCheckInStatus(false);
        setCheckOutStatus(true);
      }
    }
  }

  function openInModalWithSelectedPlan(e) {
    if (
      e.target.classList.contains("out-of-stock") ||
      !e.target.classList.contains("select-btn")
    ) {
      return;
    }

    setCheckInStatus(true);
    setCheckOutStatus(false);
    openSelectedPlan(e.target.closest(".plan").classList[1]);
    e.target.closest(".plan").classList[1] === "one"
      ? setOneInput("25")
      : setTwoInput("75");
  }

  function openInModal() {
    setCheckInStatus(true);
    setCheckOutStatus(false);
    setSelectedPlan();
  }

  function closeInModal(e) {
    if (
      !e.target.classList.contains("modal-container") &&
      !e.target.classList.contains("close-modal")
    ) {
      return;
    }

    setCheckInStatus(false);
  }

  return (
    <>
      <HeroSection openInModal={openInModal} tally={tally} />
      <TallySection tally={tally} />
      <AboutSection
        openInModalWithSelectedPlan={openInModalWithSelectedPlan}
        tally={tally}
      />
      <CheckInModal
        checkInStatus={checkInStatus}
        closeInModal={closeInModal}
        selectedPlan={selectedPlan}
        handleModalSelectedPlan={handleModalSelectedPlan}
        oneInput={oneInput}
        twoInput={twoInput}
        threeInput={threeInput}
        handleInput={handleInput}
        tally={tally}
      />
      <CheckOutModal checkOutStatus={checkOutStatus} />
    </>
  );
}
