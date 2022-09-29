import React, { useState } from "react";
import BreakTimes from "../BreakTimes/BreakTimes";
import BreakTime from "../BreakTime/BreakTime";
import ExerciseTime from "../ExerciseTime/ExerciseTime";
import Toast from "../Toast/Toast";
import profile from "../../utilities/profile.jpg";
import { addToDb } from "../../utilities/manageDB";

const ActivitiesDetail = (props) => {
  const { activityList } = props;

  const [breakTime, setBreakTime] = useState(0);

  const [isClicked, setIsClicked] = useState(false);

  const addBreakTime = (selectedBreakTime) => {
    console.log(selectedBreakTime);
    setBreakTime(selectedBreakTime);
    addToDb(selectedBreakTime);
  };
  const showToast = () => {
    // isClicked = true;
    // localStorage.setItem('selected-break-time',0)
    let clicked = true;
    setIsClicked(clicked);
  };

  const breakTimes = [
    { id: "_b1", duration: 10 },
    { id: "_b2", duration: 20 },
    { id: "_b3", duration: 30 },
    { id: "_b4", duration: 40 },
  ];
  // const breakTimes = [10, 20, 30, 40];

  return (
    <div className="bg-slate-300 lg:w-[25%] px-8 pt-3 ">
      <div className="sticky top-0 grid grid-cols-1 gap-5">
        <div className="flex justify-center gap-x-2 ">
          <img src={profile} alt="profile" className="rounded-full w-16 h-16" />
          <div className="">
            <h2 className="text-2xl font-semibold ">John Hamm</h2>
            <p>California, USA</p>
          </div>
        </div>
        {/* user profile info */}
        <div className="
          bg-gradient-to-t from-stone-200/50  to-stone-100/50 
          shadow-md rounded-lg flex justify-evenly p-2">
          <div>
            <p className="text-2xl font-semibold">
              75<small className="text-base text-gray-400">kg</small>
            </p>
            <p className="text-sm">Weight</p>
          </div>
          <div>
            <p className="text-2xl font-semibold">6.5</p>
            <p className="text-sm">Height</p>
          </div>
          <div>
            <p className="text-2xl font-semibold">
              25<small className="text-base text-gray-400">yrs</small>
            </p>
            <p className="text-sm">Age</p>
          </div>
        </div>
        {/* break selection */}
        <div>
          <p className="text-left text-xl font-semibold my-2">Add A Break</p>
          <div className="
          bg-gradient-to-t from-stone-200/50 to-stone-100/50 
          shadow-md rounded-lg flex justify-around px-1 py-4">
            {breakTimes.map((breakTime) => (
              <BreakTimes
                breakTime={breakTime}
                addBreakTime={addBreakTime}
              ></BreakTimes>
            ))}
          </div>
        </div>
        {/*Exercide Detail section  */}
        <div>
          <p className="text-left text-xl font-semibold my-2">
            Exercise Detail
          </p>
          <div className="
          bg-gradient-to-t from-stone-200/50 to-stone-100/50 
         shadow-md rounded-lg justify-around px-1 py-4">
            <ExerciseTime activityList={activityList}></ExerciseTime>
          </div>
        </div>
        <div className="
          bg-gradient-to-t from-stone-200/50 to-stone-100/50 
          shadow-md rounded-lg justify-around px-1 py-4">
          <BreakTime breakTime={breakTime}></BreakTime>
        </div>
        <button
          onClick={() => showToast()}
          className="btn btn-wide mx-auto my-4"
        >
          Activity Completed
        </button>
      </div>
      <Toast isClicked={isClicked}></Toast>
    </div>
  );
};

export default ActivitiesDetail;
