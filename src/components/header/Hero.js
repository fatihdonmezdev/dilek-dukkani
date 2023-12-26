import React from "react";
import { FcTodoList } from "react-icons/fc";
import { GoGoal } from "react-icons/go";

const Hero = () => {
  return (
    <div className="mb-10">
      <div className="text-2xl font-bold text-center text-blue-500 uppercase font-sans mt-20 ">
        About The Project
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
        <div className="lg:ml-40 mt-20 mx-4 border-2 border-gray-200 p-8 ">
          <p className="flex text-xl font-bold flex-col items-center ">
            <FcTodoList size={30} />
            The Project
            <span className="text-blue-500">Summary</span>
          </p>
          <p className="border-2 mx-8"></p>
          <p className="text-gray-500 mt-4 lg:text-lg text-sm">
            Dilek Dukkani is a Çukurova University project developed by it's
            academian Prof. Dr. Zuhal OKAN(the ex-head of ELT Department at
            Çukurova University.) and her students. The project aims to help
            students who are financially weak and cannot afford to buy clothes.
            The project is currently in development and will be available to
            everyone soon.
          </p>
        </div>
        <div className="lg:mr-40 mx-4  mt-20 border-2 border-gray-200  p-8">
          <p className="flex text-xl font-bold flex-col items-center ">
            <GoGoal size={30} color="blue" />
            The Project
            <span className="text-blue-500">Goals</span>
          </p>
          <p className="border-2 mx-8"></p>
          <p className="text-gray-500 mt-4 lg:text-lg text-sm">
            The project goal is to provide free clothes to students who are
            financially weak. We are a group of students who are passionate
            about helping others. We are currently looking for donators who can
            donate clothes to our organization. If you are interested, please
            fill out the form above and we will contact you as soon as possible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
