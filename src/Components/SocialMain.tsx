import { MotionValue } from "framer-motion";
import { Fluid } from "./Fluid";
import { Social } from "./Social";
const SocialMain = ({ x }: { x: MotionValue<number> }) => {
  return (
    <div className="main--wrapper">
      <Fluid x={x} id="balance" color="#FBF5FE" />
      <Social />
    </div>
  );
};
export { SocialMain };
