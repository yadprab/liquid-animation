import { MotionValue } from "framer-motion";
import { Fitness } from "./Fitness";
import { Fluid } from "./Fluid";
const FitnessMain = ({ x }: { x: MotionValue<number> }) => {
  return (
    <div className="main--wrapper">
      <Fluid x={x} id="social" color="#FF8A00" />
      <Fitness />
    </div>
  );
};
export { FitnessMain };
