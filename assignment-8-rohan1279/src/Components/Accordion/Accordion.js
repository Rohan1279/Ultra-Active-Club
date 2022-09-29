import React from "react";

const Accordion = () => {
  return (
    <div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-10"
      >
        <div className="collapse-title text-xl font-medium">
          Extra contents 
        </div>
        <div className="px-10 collapse-content ">
         
          <p className="text-lg font-bold ">How does React work?</p>
          <p className="px-5">
            <ul className="list-disc text-left list-inside">
              <li>React is a JS library for building complex UI</li>
              <li>
                It makes building complex, interactive and reactive UI simpler
              </li>
              <li>
                Whenever a component's state changes, React reacts and
                re-renders the component and its child component, even when the
                state change does not directly affect the child component.
              </li>
              <li>It uses JSX syntex</li>
            </ul>
          </p>
          <div className="">
            <p className="text-lg font-bold">
              What is the diffrence between <code>props</code> and{" "}
              <code>state</code>?
            </p>
            <div className="flex text-center px-5">
              <p className="">
                <span className="text-lg font-semibold underline underline-offset-8">
                  Props
                </span>
                <ul className="list-disc list-inside text-left">
                  <li>Props are read only</li>
                  <li>Props cannot be modified</li>
                  <li>Completely managed by component itself</li>
                  <li>
                    Allows child components to read values from parent component
                  </li>
                </ul>
              </p>
              <p className="">
                <span className="text-lg font-semibold underline underline-offset-8">
                  State
                </span>
                <ul className="list-disc list-inside text-left">
                  <li>State changes can be asynchronus</li>
                  <li>
                    State can be modified using <code>this.setState</code>
                  </li>
                  <li>
                    State is mutable and its value can be changed as per
                    requirement.
                  </li>
                  <li>State is set by parent component</li>
                </ul>
              </p>
            </div>
          </div>
          <div>
            <p className="text-lg font-bold ">
              Why <code>useEffect</code> is used other than data fetching?
            </p>
            <div className="text-left px-5">
              <p>◯ It performs side effects in function components</p>
              <p>
              ◯ useEffect Hook is used to eliminate the side-effects of using
                class-based components
              </p>
              <p>◯ Setting up subscriptions or timers</p>
              <p>◯ Updating the DOM</p>
              <p>
              ◯ You can have multiple useState in one component to separate
                different part of the state
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
