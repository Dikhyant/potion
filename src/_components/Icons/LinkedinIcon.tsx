import * as React from "react";
import { SVGProps } from "react";
const LinkedinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlns="http://www.w3.org/2000/svg"
    className="pt-svgsprite -linkedin"
    width={32}
    height={30.48}
    {...props}
  >
    <defs>
      <symbol
        viewBox="0 0 32 30.48"
        id="linkedin"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M32 18.72v11.76h-7V19.59c0-2.83-1-4.59-3.45-4.59a3.1 3.1 0 0 0-3.26 2.39 3.24 3.24 0 0 0-.22 1.53v11.56h-7V10h7v2.83a7 7 0 0 1 6.09-3.48c4.57.01 7.84 3.06 7.84 9.37zM3.92 0C1.52 0 0 1.52 0 3.48A3.5 3.5 0 0 0 3.7 7c2.4 0 3.92-1.56 3.92-3.52A3.37 3.37 0 0 0 3.92 0zM.44 30.48h7V10h-7z" />
      </symbol>
    </defs>
    <g fill="currentColor">
      <path d="M32 18.72v11.76h-7V19.59c0-2.83-1-4.59-3.45-4.59a3.1 3.1 0 0 0-3.26 2.39 3.24 3.24 0 0 0-.22 1.53v11.56h-7V10h7v2.83a7 7 0 0 1 6.09-3.48c4.57.01 7.84 3.06 7.84 9.37zM3.92 0C1.52 0 0 1.52 0 3.48A3.5 3.5 0 0 0 3.7 7c2.4 0 3.92-1.56 3.92-3.52A3.37 3.37 0 0 0 3.92 0zM.44 30.48h7V10h-7z" />
    </g>
  </svg>
);
export default LinkedinIcon;
