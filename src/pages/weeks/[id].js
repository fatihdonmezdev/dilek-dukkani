import Team from "@/components/team";
import myData from "@/weeks/data";
import { useRouter } from "next/router";
import React from "react";

const Details = () => {
  const router = useRouter();
  const data = myData.filter((data) => data.id == router.query.id);
  return (
    <div className="min-h-screen">
      {data.map((data) => (
        <div
          key={data.id}
          className="flex justify-center gap-20 items-center flex-col text-center mt-20"
        >
          <div className="text-3xl text-gray-700 font-bold">{data.Hafta}</div>
          <div className="mx-20 text-lg text-gray-500">{data.Detay}</div>
        </div>
      ))}
      <Team />
    </div>
  );
};

export default Details;
