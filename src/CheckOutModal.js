import React from "react";

export default function CheckOutModal({ checkOutStatus }) {
  function gotIt(e) {
    e.target.closest(".thank-you-container").classList.add("hide");
  }
  return (
    <section
      className={`modal-container thank-you-container${
        checkOutStatus ? "" : " hide"
      }`}
    >
      <div className="modal-content thank-you">
        <svg
          className="check-out"
          width="64"
          height="64"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd">
            <circle fill="#3CB3AB" cx="32" cy="32" r="32" />
            <path stroke="#FFF" strokeWidth="5" d="M20 31.86L28.093 40 44 24" />
          </g>
        </svg>
        <h2 className="thanks-heading">Thanks for your support!</h2>
        <p className="secondary-text">
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          completed.
        </p>
        <button className="btn got-it-btn" onClick={gotIt}>
          Got it
        </button>
      </div>
    </section>
  );
}
