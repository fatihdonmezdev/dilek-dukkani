import Image from "next/image";
import React from "react";
import hasan from "../../../public/team/hasanbedir.jpeg";
import fatih from "../../../public/team/fatih.jpg";
import Hedil from "../../../public/team/Hedil.jpg";
import asude from "../../../public/team/asude.jpg";
import can from "../../../public/team/can.jpeg";
const Team = () => {
  return (
    <div className="my-20">
      <div className="flex justify-center text-3xl font-bold items-center mb-10 mt-10">
        <div>Meet The Team</div>
      </div>
      <div className="flex text-center flex-col items-center">
        <div className="relative lg:w-96 lg:h-96 h-32 w-32">
          <Image src={hasan} layout="fill" objectFit="cover" />
        </div>
        <div className="text-xl font-bold mt-4">Hasan Bedir</div>
        <div className="text-gray-500">COORDINATOR</div>
      </div>
      <div className="flex justify-center text-3xl font-bold items-center mb-10 mt-10">
        <div>Organization</div>
      </div>
      <div className="flex justify-center">
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-10">
          <div className="flex text-center flex-col items-center">
            <div className="relative lg:w-96 lg:h-96 h-32 w-32">
              <Image src={fatih} layout="fill" objectFit="cover" />
            </div>
            <div className="text-xl font-bold mt-4">Fatih</div>
            <div className="text-gray-500">Website Organizer</div>
          </div>
          <div className="flex text-center flex-col items-center">
            <div className="relative lg:w-96 lg:h-96 h-32 w-32">
              <Image src={Hedil} layout="fill" objectFit="cover" />
            </div>
            <div className="text-xl font-bold mt-4">Hedil</div>
            <div className="text-gray-500">Store & Storage Organization </div>
          </div>
          <div className="flex text-center flex-col items-center">
            <div className="relative lg:w-96 lg:h-96 h-32 w-32">
              <Image src={Hedil} layout="fill" objectFit="cover" />
            </div>
            <div className="text-xl font-bold mt-4">Hedil</div>
            <div className="text-gray-500">Store & Storage Organization </div>
          </div>
          <div className="flex text-center flex-col items-center">
            <div className="relative lg:w-96 lg:h-96 h-32 w-32">
              <Image src={asude} layout="fill" objectFit="cover" />
            </div>
            <div className="text-xl font-bold mt-4">Asude</div>
            <div className="text-gray-500">
              Partners & Sponsors Organization
            </div>
          </div>
          <div className="flex text-center flex-col items-center">
            <div className="relative lg:w-96 lg:h-96 h-32 w-32">
              <Image src={can} layout="fill" objectFit="cover" />
            </div>
            <div className="text-xl font-bold mt-4">Can</div>
            <div className="text-gray-500">
              Partners & Sponsors Organization
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
