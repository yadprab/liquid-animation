import { motion, useSpring } from "framer-motion";
import { Fluid } from "./Components/Fluid";
import "./Styles/Styles.css";
function App() {
  const x = useSpring(0, { stiffness: 300 });
  return (
    <motion.div className="wrapper">
      <Fluid x={x} />
    </motion.div>
  );
}

export default App;
