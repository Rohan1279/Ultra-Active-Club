import React, { useState } from "react";
import Break from "../Break/Break";
import BreakTime from "../BreakTime/BreakTime";
import ExerciseTime from "../ExerciseTime/ExerciseTime";
import Toast from "../Toast/Toast";

const ActivitiesDetail = (props) => {
  const { activityList } = props;

  const [breakTime, setBreakTime] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const addBreakTime = (selectedBreakTime) => {
    console.log(selectedBreakTime);
    setBreakTime(selectedBreakTime);
  };
  const showToast = () =>{
    // isClicked = true;
    let clicked = true
    setIsClicked(clicked);
  }

  const breakTimes = [10, 20, 30, 40];
  return (
    <div className="bg-slate-300 lg:w-[25%] px-8 pt-3 ">
      <div className="sticky top-0 grid grid-cols-1 gap-5">
        <div className="">
          <img
            src="https://cdn.muscleandstrength.com/sites/default/files/styles/800x500/public/muscular-guy-doing-cable-flys.jpg?itok=cSCNyLEj"
            alt="profile"
            className="rounded-full h-12 w-12 mx-auto"
          />
          <div>
            <h2 className="text-2xl font-semibold ">John Hamm</h2>
            <p>California, USA</p>
          </div>
        </div>
        {/* user profile info */}
        <div className="bg-gray-100 rounded-lg flex justify-evenly px-2 py-1">
          <div>
            <p className="text-2xl font-semibold">
              75<small className="font-light text-base">kg</small>
            </p>
            <p className="text-sm">Weight</p>
          </div>
          <div>
            <p className="text-2xl font-semibold">6.5</p>
            <p className="text-sm">Height</p>
          </div>
          <div>
            <p className="text-2xl font-semibold">
              25<small className="font-light text-base">yrs</small>
            </p>
            <p className="text-sm">Age</p>
          </div>
        </div>
        {/* break selection */}
        <div>
          <p className="text-left text-xl font-semibold">Add A Break</p>
          <div className="bg-gray-100 rounded-lg flex justify-around px-1 py-4">
            {breakTimes.map((breakTime) => (
              <Break breakTime={breakTime} addBreakTime={addBreakTime}></Break>
            ))}
          </div>
        </div>
        {/*Exercide Detail section  */}
        <div>
          <p className="text-left text-xl font-semibold">Exercise Detail</p>
          <div className="bg-gray-100 rounded-lg justify-around px-1 py-4">
            <ExerciseTime activityList={activityList}></ExerciseTime>
          </div>
        </div>
        <div className="bg-gray-100 rounded-lg justify-around px-1 py-4">
          <BreakTime breakTime={breakTime}></BreakTime>
        </div>
        <button onClick={()=>showToast()} className="btn btn-wide mx-auto my-8">Activity Completed</button>
      </div>
      <Toast isClicked={isClicked}></Toast>
    </div>
  );
};

export default ActivitiesDetail;
