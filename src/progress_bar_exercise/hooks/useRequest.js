import { useReducer } from "react";

import useInterval from "./useInterval";

// When we want to simular a request, we can imagine that we're going to have a few specific states.
// I would choose a finite state machine library like XState for handling this use case because it is a reliable way of handling a finite number of states.
// It would help to make sure that we're not having any unexpected side effects.
// I opted to use the "useReducer" hook because it is the nearest way that I can get to use a finite number of states using a built-in React Hook.
const initialState = {
  progress: 0,
  idle: true,
  loading: false,
  finished: false,
  error: undefined,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "IDLE":
      return {
        ...state,
        idle: true,
        loading: false,
        finished: false,
        progress: action.payload.progress,
      };
    case "INCREMENT_PROGRESS":
      return {
        ...state,
        progress: action.payload.progress,
      };
    case "LOAD":
      return {
        ...state,
        idle: false,
        loading: true,
      };
    case "FINISH":
      return {
        ...state,
        idle: false,
        loading: false,
        finished: true,
        progress: 100,
      };
    case "ERROR":
      return {
        ...state,
        progress: action.payload.progress,
        idle: false,
        loading: false,
        finished: false,
        error: "Something went wrong...",
      };
    default:
      return state;
  }
};

const useRequest = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useInterval(() => {
    // When the current state is "idle", it does nothing.
    if (state.idle) return;
    // When the current state is "loading" and "progress" is equal to 0, we start the request.
    if (state.loading && state.progress === 0) onStartRequest();
    // While the current state of "progress", is not equal to 100, we increment it.
    if (state.progress < 100) onIncrementProgress();
    // When the current state is "finished" and "progress" is equal to 100, we finish the request.
    if (state.progress === 100 || state.finished) onFinishRequest();
  }, 100);

  // The useInterval hook is being used to check if the request has finished.
  // In case the request has finished, we set the state do idle.
  // By doing this, it will make the progress bar "fade away" after 3 seconds.
  useInterval(() => {
    if (state.finished) {
      dispatch({
        type: "IDLE",
        payload: {
          progress: 0,
        },
      });
    }
  }, 3000);

  const onStartRequest = () => {
    dispatch({ type: "LOAD" });
  };

  const onIncrementProgress = () => {
    if (state.finished) {
      return;
    } else {
      dispatch({
        type: "INCREMENT_PROGRESS",
        payload: {
          progress: (state.progress += 2),
        },
      });
    }
  };

  const onFinishRequest = () => {
    dispatch({ type: "FINISH" });
  };

  return {
    state,
    onStartRequest,
    onFinishRequest,
  };
};

export default useRequest;
