import React from "react";

const Toast = (props) => {
    const {isClicked} = props
    console.log(isClicked)
  if (isClicked) {
    return (
        <div>
          <div className="toast toast-center toast-bottom " >
            <div className="alert alert-info w-80 ">
              <div className="mx-auto">
                <span>Activity Completed Successfully</span>
              </div>
            </div>
          </div>
        </div>
      );
  }
};

export default Toast;
