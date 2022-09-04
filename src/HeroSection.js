import React from "react";

export default function HeroSection({ openInModal, tally }) {
  const [isBookmarked, setIsBookmarked] = React.useState(false);

  return (
    <section className="hero-section">
      <svg
        className="mastercraft-logo"
        width="56"
        height="56"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" fillRule="evenodd">
          <circle fill="#000" cx="28" cy="28" r="28" />
          <g fillRule="nonzero">
            <path
              d="M15.565 28.565a1.93 1.93 0 012.606-.113l.122.113 10.142 10.142a1.93 1.93 0 01-2.606 2.84l-.122-.112-10.142-10.142a1.93 1.93 0 010-2.728z"
              fill="#444"
            />
            <path
              d="M36.19 17.48c1.006-.996 2.706-.34 2.805 1.026l.005.126v10.736c0 .9-.737 1.629-1.646 1.629a1.64 1.64 0 01-1.642-1.507l-.005-.122v-6.805l-8.043 7.957c-1.006.996-2.707.34-2.806-1.026l-.004-.126v-6.805L16.81 30.52a1.66 1.66 0 01-2.224.095l-.105-.095a1.616 1.616 0 01-.096-2.2l.096-.103L25.336 17.48c1.006-.996 2.707-.34 2.806 1.026l.004.126v6.804l8.043-7.956z"
              fill="#FFF"
            />
          </g>
        </g>
      </svg>
      <h2 className="main-heading">Mastercraft Bamboo Monitor Riser</h2>
      <p className="main-text">
        A beautiful &amp; handcrafted monitor stand to reduce neck and eye
        strain
      </p>
      <div className="flex main-buttons">
        <button
          className={`back-project-btn btn ${
            tally.totalAmount >= 1000 ? "done" : ""
          }`}
          onClick={openInModal}
          disabled={tally.totalAmount >= 1000}
        >
          Back this project
        </button>
        <button
          className={`bookmark-btn btn ${isBookmarked ? "bookmark-cg" : ""}`}
          onClick={() => {
            setIsBookmarked(!isBookmarked);
          }}
        >
          <svg
            className={`bookmark-svg ${isBookmarked ? "bookmark-svg-cg" : ""}`}
            width="56"
            height="56"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fillRule="evenodd">
              <circle fill="#2F2F2F" cx="28" cy="28" r="28" />
              <path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z" />
            </g>
          </svg>
          <span>{isBookmarked ? "Bookmarked" : "Bookmark"}</span>
        </button>
      </div>
    </section>
  );
}
