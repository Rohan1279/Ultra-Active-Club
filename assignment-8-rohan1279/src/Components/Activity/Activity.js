import React from "react";

const Activity = (props) => {
  console.log(props);
  const { name, age, time, ratings, img } = props.activity;
  return (
    <div>
      <div className="card w-full h-[450px]  glass">
        <figure>
          <img  src={img} alt="workout" className="w-full h-44 bg-violet-400 " />
        </figure>
        <div className="card-body text-left">
          <h2 className="card-title">{name}</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, saepe.</p>
          <p>For age: {age}</p>
          <p>Time required: {time}</p>

          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn now!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
