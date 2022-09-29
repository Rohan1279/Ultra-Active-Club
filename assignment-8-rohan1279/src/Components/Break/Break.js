import React from "react";

const Break = (props) => {
  const { breakTime, addBreakTime } = props;
  // console.log(breakTime);
  return (
    <div>
      <button
        onClick={() => {
          addBreakTime(breakTime);
        }}
        className="active:bg-blue-400 active:text-white bg-white p-2 rounded-full font-medium"
      >
        {breakTime}s
      </button>
    </div>
  );
};

export default Break;
