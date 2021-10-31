import { motion, MotionValue, useTransform } from "framer-motion";
import { useContext, useEffect, useRef, useState } from "react";
import { d } from "./d";
import { dataContext } from "./dataContext";
const Fluid = ({
  x,
  id,
  color,
}: {
  x: MotionValue<number>;
  id: string;
  color: string;
}) => {
  const [Value, setValue] = useState({ state: 0 });
  const context = useContext(dataContext);

  const ref = useRef(false);
  const width = useTransform(x, [0, -100, -300], [79, 428, 1700]);

  const width2 = useTransform(x, [0, -100, -300], [20, 348, 1000]);

  useEffect(() => {
    x.onChange((y) => {
      const res = Math.abs(y);
      if (res <= 10) {
        setValue({ state: 0 });
      } else if (res > 10 && res <= 20) {
        setValue({ state: 1 });
      } else if (res > 20 && res <= 40) {
        setValue({ state: 2 });
      } else if (res > 40 && res <= 60) {
        setValue({ state: 3 });
      } else if (res > 60 && res <= 80) {
        setValue({ state: 4 });
      } else {
        setValue({ state: 4 });
      }
    });

    return () => {
      x.destroy();
    };
  }, [x]);

  useEffect(() => {
    ref.current = true;
    function updateOpacity() {
      x.set(0);
    }

    const unsubscribeX = x.onChange(updateOpacity);

    return () => {
      ref.current = false;
      unsubscribeX();
    };
  }, [x]);
  const handleDrag = () => {
    x.onChange((v) => {
      if (Math.abs(v) >= 150) {
        context?.dispatch({ type: id, payload: id });
      }
    });
  };

  const stateUpdate = () => {
    if (ref.current) {
      handleDrag();
    }
  };

  return (
    <motion.svg
      width={79}
      height={926}
      viewBox="0 0 79 926"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width }}
      id="fluid"
    >
      <motion.g
        id="DRAG_P"
        drag="x"
        style={{ x }}
        dragConstraints={{ right: 0, left: -1000 }}
      >
        <motion.rect
          id="Rectangle"
          x={60}
          width={20}
          height={926}
          fill={color}
          style={{ width: width2 }}
        />
        <motion.g
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          id="click"
          onDrag={stateUpdate}
        >
          <motion.path
            id="Ellipse"
            d="M61 563C61 525.426 29.8258 516.679 18.5736 505.426C7.3214 494.174 0.999996 478.913 0.999996 463C0.999995 447.087 7.3214 431.826 18.5736 420.574C29.8258 409.321 61 400.574 61 363L61 463L61 563Z"
            fill={color}
            animate={{ d: d[Value.state] }}
          />
          <g id="Icons 2px">
            <path
              id="Vector"
              d="M43 457L37 463L43 469"
              stroke="white"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </motion.g>
      </motion.g>
    </motion.svg>
  );
};
export { Fluid };
