import { useEffect, useRef } from "react";

// The setInterval usage in React Hooks is tricky.
// This is a simple custom React Hooks that works exactly like the setInterval function.
// Dan Abramov, a developer from the React team, wrote a post about it and explained how to use it properly with React Hooks.
// Link: https://overreacted.io/making-setinterval-declarative-with-react-hooks/
const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

export default useInterval;
