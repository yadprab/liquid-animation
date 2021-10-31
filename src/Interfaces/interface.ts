export interface IState {
  balance: boolean;
  fitness: boolean;
  social: boolean;
}
export type ActionTypes = { type: string; payload: string };

export interface IContext {
  ctx: {
    state: IState;
    dispatch: React.Dispatch<ActionTypes>;
  };
}
