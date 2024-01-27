import React from "react";
import myData from "../../weeks/data";
import Link from "next/link";
import Team from "@/components/team";
const Weeks = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
          <svg
            viewBox="0 0 88 88"
            className="w-full max-w-screen-xl text-indigo-100"
          >
            <circle fill="currentColor" cx="44" cy="44" r="15.5" />
            <circle
              fillOpacity="0.2"
              fill="currentColor"
              cx="44"
              cy="44"
              r="44"
            />
            <circle
              fillOpacity="0.2"
              fill="currentColor"
              cx="44"
              cy="44"
              r="37.5"
            />
            <circle
              fillOpacity="0.3"
              fill="currentColor"
              cx="44"
              cy="44"
              r="29.5"
            />
            <circle
              fillOpacity="0.3"
              fill="currentColor"
              cx="44"
              cy="44"
              r="22.5"
            />
          </svg>
        </div>
        <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {myData.map((data) => (
            <>
              <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                <div className="p-5">
                  <>
                    <p key={data.Hafta} className="mb-2 font-bold">
                      {data.Hafta.substring(0, 100)}
                    </p>
                    <p className="text-sm leading-5 text-gray-900">
                      {data.Detay.substring(0, 200)}...
                    </p>
                    <Link href={`/weeks/${data.id}`}>
                      <p className="mt-4 underline font-bold text-gray-500 hover:text-gray-300 hover:cursor-pointer">
                        Detayları Gör
                      </p>
                    </Link>
                  </>
                </div>
                <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
              </div>
            </>
          ))}
          <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
            <div className="p-5">
              <>
                <p className="mb-2 font-bold">Sonuç Raporu</p>
                <p className="text-sm leading-5 text-gray-900"></p>
                <Link href={`/weeks/sonuc`}>
                  <p className="mt-4 underline font-bold text-gray-500 hover:text-gray-300 hover:cursor-pointer">
                    Detayları Gör
                  </p>
                </Link>
              </>
            </div>
            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          </div>
        </div>
        <Team />
      </div>
    </div>
  );
};

export default Weeks;
