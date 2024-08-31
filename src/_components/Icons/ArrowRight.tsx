import * as React from "react";
import { SVGProps } from "react";
const ArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlns="http://www.w3.org/2000/svg"
    className="pt-svgsprite -arrow-right-o"
    width={32}
    height={32}
    {...props}
  >
    <defs>
      <symbol
        viewBox="0 0 32 32"
        id="arrow-right-o"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m18 5 12 11m0 0L18 27m12-11H2"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.5}
        />
      </symbol>
    </defs>
    <use xlinkHref="#arrow-right-o" />
  </svg>
);
export default ArrowRight;
