import React, { useEffect, useState } from "react";
import Accordion from "../Accordion/Accordion";
import Activity from "../Activity/Activity";

const Activities = (props) => {
    const {addTimeList} = props
  const [activities, setActivity] = useState([]);
  useEffect(() => {
    fetch("activities.json")
      .then((res) => res.json())
      .then((data) => {
        setActivity(data);
      });
  }, []);
  
  return (
    <div className="bg-blue-300 w-[75%] p-10">
      <div className="text-left ">
        <h1 className="text-3xl">Activity Tracker</h1>
        <h2 className="text-xl">Select today's activity</h2>
      </div>
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-5">
        {activities.map((activity) => (
          <Activity 
          key={activity.id} 
          activity={activity}
          addTimeList={addTimeList}
          ></Activity>
        ))}
      </div>
      <div>
        <Accordion></Accordion>
      </div>
    </div>
  );
};

export default Activities;
