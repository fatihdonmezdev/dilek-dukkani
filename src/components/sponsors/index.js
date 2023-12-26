import Image from "next/image";
import React from "react";
import defacto from "../../../public/sponsors/DeFacto.png";
import LCW from "../../../public/sponsors/LCW.png";
import Cukurova from "../../../public/sponsors/Cukurova.png";
const Sponsors = () => {
  return (
    <div className="bg-gray-100 p-4">
      <div className="flex justify-center text-3xl font-bold items-center mb-10 mt-10">
        <div>Some of our supporters</div>
      </div>
      <div className="grid place-items-center gap-10 mb-10 mt-10">
        <Image src={defacto} width={150} height={150} />
        <Image src={LCW} width={150} height={150} />
        <Image
          src="https://i.ibb.co/qxhZxXR/mavi.png"
          width={150}
          height={150}
        />
        <Image src={Cukurova} width={150} height={150} />
      </div>
    </div>
  );
};

export default Sponsors;
