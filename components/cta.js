import React from "react";
import Container from "./container";
import PopupWidget from "../components/popupWidget";

// CALL TO ACTION! 

export default function Cta() {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-blue-400 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-xl font-medium lg:text-2xl">
            Not Sure Where to Start?
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-md">
            Join us for an onboarding session where we break down all the concepts you need to understand!
          </p>
        </div>
        <div className="flex-shrink-0  text-center lg:w-auto border-gray-600 border-2 rounded-md">
          <PopupWidget/>
        </div>
      </div>
    </Container>
  );
}
