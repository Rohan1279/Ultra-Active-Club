import React from "react";

const Activity = (props) => {
  //   console.log(props);
  const { addTimeList, activity } = props;
  const { name, age, time, ratings, img } = activity;
  return (
    <div>
      <div className="card w-full h-[480px] glass">
        <figure>
          <img src={img} alt="workout" className="w-full h-44 bg-violet-400 " />
        </figure>
        <div className="card-body text-left">
          <h2 className="card-title text-2xl">{name}</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere,
            saepe.
          </p>
          <p className="font-medium">
            For age: <span className="font-bold">{age}</span>
          </p>
          <p className="font-medium">
            Time required: <span className="font-bold">{time}</span>
          </p>
          <p className="font-medium">
            Rating: <span className="font-bold">{ratings}</span>
          </p>
          <div
            onClick={() => {
              addTimeList(activity);
            }}
            className="card-actions justify-end"
          >
            <button className="btn btn-active btn-ghost w-full">
              Add to list
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
