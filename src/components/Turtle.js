import { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";

function Skin(props) {
  return (
    <g {...props}>
      <path
        fill="#B4D87D"
        d="M352.31 161.38c-4.69-.59-9.39-1.15-14.09-1.69-45.1-5.2-90.43-8.34-135.82-9.39-10.86-.26-21.73-.39-32.59-.41H40.8L.93 168.17C.31 174.05 0 180.02 0 186.06c0 6.75.39 13.41 1.16 19.96 1.28 11 3.62 21.68 6.9 31.93 2.71 8.47 6.06 16.65 10 24.48.09.17.17.33.25.49a169.84 169.84 0 0017.21 27.19h244.77c10.581 0 19.447-7.299 21.852-17.137H252.35c0-5.823 4.72-10.543 10.543-10.543h51.627c2.71 0 5.39-.23 8-.67 18-3.04 33.01-16.18 38.11-34.2l10.64-37.58c.59-2.07.86-4.15.86-6.18 0-11.07-8.21-20.97-19.82-22.42z"
      ></path>
      <path
        fill="#B4D87D"
        d="M80.55 228.83v101.88a170.94 170.94 0 01-45.03-40.6 169.84 169.84 0 01-17.21-27.19c-.08-.16-.16-.32-.25-.49-.64-1.27-1.26-2.55-1.87-3.84l64.36-29.76z"
      ></path>
    </g>
  );
}
function EyeWhite(props) {
  return (
    <g {...props}>
      <circle cx="291.174" cy="210.094" r="22.686" fill="#FFF"></circle>
      <circle cx="291.174" cy="210.094" r="9.634" fill="#4D4D4D"></circle>
    </g>
  );
}

function Shell(props) {
  return (
    <g {...props}>
      <path
        fill="#EFA245"
        d="M205.35 127.64l-35.54 22.25-19.91 28.38L29.96 282.51a169.962 169.962 0 01-11.65-19.59c-.08-.16-.16-.32-.25-.49-.64-1.27-1.26-2.55-1.87-3.84-3.14-6.65-5.86-13.54-8.13-20.64a168.992 168.992 0 01-6.87-31.64l-.03-.29C.39 199.47 0 192.81 0 186.06c0-6.04.31-12.01.93-17.89C5.01 129.12 22.3 94.01 48.26 67.36c74.38.38 122.75 32.43 138.74 44.87 3.86 3 18.35 15.41 18.35 15.41z"
      ></path>
      <path
        fill="#B76C34"
        d="M217.303 140.52L37.7 292.85c-.74-.91-1.47-1.82-2.18-2.74a169.548 169.548 0 01-14.64-22.32l177.025-150.142c6.315-5.356 15.777-4.579 21.134 1.736 5.358 6.316 4.581 15.779-1.736 21.136z"
      ></path>
    </g>
  );
}

const AnimatedSkin = animated(Skin);
const AnimatedEye = animated(EyeWhite);
const AnimatedShell = animated(Shell);

function Turtle() {
  const [toggle, setToggle] = useState(false);

  const bodyanm = useSpring({
    delay: 500,
    config: { duration: 300 },
    transform: toggle
      ? `translate3d(0px, 0px, 0px)`
      : `translate3d(-400px, 0px, 0px)`,
  });
  const shellanm = useSpring({
    delay: 500,
    config: { duration: 400 },
    transform: toggle
      ? `translate3d(0px, 0px, 0px)`
      : `translate3d(-400px, 0px, 0px)`,
    rotateZ: toggle ? 0 : -90,
  });

  useEffect(() => {
    setToggle(true);
  }, []);

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        enableBackground="new 0 0 372.13 372.13"
        version="1.1"
        viewBox="0 0 372.13 372.13"
        xmlSpace="preserve"
      >
        <AnimatedSkin style={bodyanm} />
        <AnimatedEye style={bodyanm} />
        <AnimatedShell style={shellanm} />
      </svg>
    </>
  );
}

export default Turtle;
