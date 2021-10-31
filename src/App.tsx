import { motion, useSpring, useTransform } from "framer-motion";
import { useReducer } from "react";
import { BalanceMain } from "./Components/BalanceMain";
import { dataContext } from "./Components/dataContext";
import { FitnessMain } from "./Components/FitnessMain";
import { Master } from "./Components/Master";
import { SocialMain } from "./Components/SocialMain";
import { ActionTypes, IState } from "./Interfaces/interface";
import "./Styles/Styles.css";
const initialState = {
  balance: true,
  fitness: false,
  social: false,
};

const reducer = (state: IState, action: ActionTypes) => {
  const copy = { ...initialState, balance: false };
  switch (action.type) {
    case action.payload:
      return {
        ...copy,
        [action.payload]: true,
      };

    default:
      return state;
  }
};
function App() {
  const x = useSpring(0, { stiffness: 300 });
  const x2 = useSpring(0, { stiffness: 300 });
  const x3 = useSpring(0, { stiffness: 300 });

  const background = useTransform(
    x,
    [0, -150],
    ["hsla(280, 82%, 98%, 1)", " hsla(286, 85%, 23%, 1)"]
  );
  const background2 = useTransform(
    x2,
    [0, -150],
    ["hsla(286, 85%, 23%, 1)", " hsla(32, 100%, 50%, 1)"]
  );
  const background3 = useTransform(
    x3,
    [0, -150],
    ["hsla(32, 100%, 50%, 1)", "hsla(280, 82%, 98%, 1)"]
  );

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <motion.div
      className="wrapper"
      style={{
        background: state.balance
          ? background
          : state.fitness
          ? background2
          : background3,
      }}
    >
      <dataContext.Provider value={{ state, dispatch }}>
        <motion.div className="outer--wrapper">
          <Master />
          {state.balance && <BalanceMain x={x} />}
          {state.fitness && <FitnessMain x={x2} />}
          {state.social && <SocialMain x={x3} />}
        </motion.div>
      </dataContext.Provider>
    </motion.div>
  );
}

export default App;
