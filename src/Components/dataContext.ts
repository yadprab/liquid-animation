import { createContext } from "react";
import { IContext } from "./../Interfaces/interface";

export const dataContext = createContext<IContext["ctx"] | null>(null);
