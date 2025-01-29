import React from "react";

const LongArrowSideUp = ({ color = "#501720", strokeClassName = "" }) => {
  return (
    <svg
      width="29"
      height="29"
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.1508 16.287L19.1508 9.13342L11.9972 9.13342"
        stroke={color}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
        className={strokeClassName}
      />
      <path
        d="M9.13336 19.1506L19.0505 9.2334"
        stroke={color}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
        className={strokeClassName}
      />
    </svg>
  );
};

export default LongArrowSideUp;
