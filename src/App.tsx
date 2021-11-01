import { motion, useSpring } from "framer-motion";
import { useEffect, useReducer } from "react";
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

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.balance) {
      document.body.className = "";
    } else if (state.fitness) {
      document.body.className = "fitness";
    } else {
      document.body.className = "social";
    }
  }, [state]);

  return (
    <motion.div className="wrapper">
      <dataContext.Provider value={{ state, dispatch }}>
        <motion.div className="outer--wrapper">
          <Master />
          {state.balance && <BalanceMain x={x} />}
          {state.fitness && <FitnessMain x={x} />}
          {state.social && <SocialMain x={x} />}
        </motion.div>
      </dataContext.Provider>
    </motion.div>
  );
}

export default App;
