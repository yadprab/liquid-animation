import { MotionValue } from "framer-motion";
import { Balance } from "./Balance";
import { Fluid } from "./Fluid";
const BalanceMain = ({ x }: { x: MotionValue<number> }) => {
  return (
    <div className="main--wrapper">
      <Fluid x={x} id="fitness" color="#55096C" />
      <Balance />
    </div>
  );
};
export { BalanceMain };
