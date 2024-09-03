import * as React from "react";
import { SVGProps } from "react";
const FacebookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlns="http://www.w3.org/2000/svg"
    className="pt-svgsprite -facebook"
    width={16.76}
    height={32}
    {...props}
  >
    <defs>
      <symbol
        viewBox="0 0 16.76 32"
        id="facebook"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M13.71 5.33h3.05V.15C16.3.15 14.48 0 12.34 0 7.92 0 5 2.59 5 7.47v4.26H0v5.64h5V32h6V17.37h4.88l.76-5.64h-5.82V8.08c0-1.68.46-2.75 2.89-2.75z" />
      </symbol>
    </defs>
    <g fill="currentColor">
      <path d="M13.71 5.33h3.05V.15C16.3.15 14.48 0 12.34 0 7.92 0 5 2.59 5 7.47v4.26H0v5.64h5V32h6V17.37h4.88l.76-5.64h-5.82V8.08c0-1.68.46-2.75 2.89-2.75z" />
    </g>
  </svg>
);
export default FacebookIcon;
