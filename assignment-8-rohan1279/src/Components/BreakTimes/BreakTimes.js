import React from "react";

const BreakTimes = (props) => {
  const { breakTime, addBreakTime } = props;
  return (
    <div>
      <button
        onClick={() => {
          addBreakTime(breakTime.duration);
        }}
        className="focus:bg-blue-400 focus:text-white bg-white/70 p-2 rounded-full font-medium"
      >
        {breakTime.duration}s
      </button>
    </div>
  );
};

export default BreakTimes;
