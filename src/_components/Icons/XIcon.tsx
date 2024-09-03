import * as React from "react";
import { SVGProps } from "react";
const XIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlns="http://www.w3.org/2000/svg"
    className="pt-svgsprite -twitter"
    width={26}
    height={25}
    {...props}
  >
    <defs>
      <symbol
        viewBox="0 0 26 25"
        id="twitter"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="m.28.93 9.76 13.09L.22 24.66h2.2l8.6-9.32 6.96 9.32h7.52L15.19 10.83l9.14-9.9h-2.2L14.2 9.5 7.8.93H.28Zm3.25 1.63H7l15.26 20.47H18.8L3.53 2.56Z"
        />
      </symbol>
    </defs>
    <g fill="#FFFFFF">
      <path
        fill="currentColor"
        d="m.28.93 9.76 13.09L.22 24.66h2.2l8.6-9.32 6.96 9.32h7.52L15.19 10.83l9.14-9.9h-2.2L14.2 9.5 7.8.93H.28Zm3.25 1.63H7l15.26 20.47H18.8L3.53 2.56Z"
      />
    </g>
  </svg>
);
export default XIcon;
