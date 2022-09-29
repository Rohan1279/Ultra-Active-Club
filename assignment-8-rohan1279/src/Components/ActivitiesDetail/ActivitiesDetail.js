import React from "react";
import Break from "../Break/Break";
import ExerciseTime from "../ExerciseTime/ExerciseTime";

const ActivitiesDetail = () => {
  const breakTimes = [10, 20, 30, 40];
  return (
    <div className="bg-red-400 w-[25%] px-8 pt-3">
      <div className="flex justify-evenly items-center">
        <img
          src="https://cdn.muscleandstrength.com/sites/default/files/styles/800x500/public/muscular-guy-doing-cable-flys.jpg?itok=cSCNyLEj"
          alt="profile"
          className="rounded-full h-12 w-12"
        />
        <div>
          <h2 className="text-2xl font-semibold">John Hamm</h2>
          <p>California, USA</p>
        </div>
      </div>
      {/* user profile info */}
      <div className="bg-[#f5ebe0] rounded-lg flex justify-evenly px-2 py-1">
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
      <p className="text-left">Add A Break</p>
      {/* break selection */}
      <div className="bg-[#f5ebe0] rounded-lg flex justify-around px-1 py-4">
        {breakTimes.map((breakTime) => (
          <Break breakTime={breakTime}></Break>
        ))}
      </div>
      <p className="text-left">Exercise Detail</p>
      {/*Exercide Detail section  */}
      <div className="bg-[#f5ebe0] rounded-lg justify-around px-1 py-4">
        <ExerciseTime></ExerciseTime>
      </div>
      <div className="bg-[#f5ebe0] rounded-lg flex justify-around px-1 py-4">
        
      </div>
    </div>
  );
};

export default ActivitiesDetail;
