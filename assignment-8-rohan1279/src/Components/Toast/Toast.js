import React from "react";

const Toast = (props) => {
    const {isClicked} = props
    console.log(isClicked)
  if (isClicked) {
    return (
        <div>
          <div className="toast toast-end" >
            <div className="alert alert-info">
              <div>
                <span>Activity Completed Successfully</span>
              </div>
            </div>
          </div>
        </div>
      );
  }
};

export default Toast;
