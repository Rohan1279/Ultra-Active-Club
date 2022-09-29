import React from "react";

const BreakTimes = (props) => {
  const { breakTime, addBreakTime } = props;

  // console.log(breakTime);
  console.log(breakTime.id);
  return (
    <div>
      <button
        onClick={() => {
          addBreakTime(breakTime.duration);
        }}
        className="focus:bg-blue-400 focus:text-white bg-white p-2 rounded-full font-medium"
      >
        {breakTime.duration}
      </button>
    </div>
  );
};

export default BreakTimes;
