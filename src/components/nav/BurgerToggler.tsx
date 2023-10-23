"use client";
import { Dispatch, SetStateAction } from "react";

interface BurgerTogglerProps {
  setShow: Dispatch<SetStateAction<boolean>>;
  show: boolean;
}

const BurgerToggler = ({ setShow, show }: BurgerTogglerProps) => {
  return (
    <div
      onClick={() => setShow(!show)}
      className="w-[30px] space-y-[4px] cursor-pointer md:hidden"
    >
      <div
        className={`w-full h-[4px] bg-red transition duration-300 ease-out ${
          show && "rotate-[135deg] translate-y-[7.5px]"
        }`}
      ></div>
      <div
        className={`w-full h-[4px] bg-red transition duration-100 ease-out ${
          show && "opacity-0"
        }`}
      ></div>
      <div
        className={`w-full h-[4px] bg-red transition duration-300 ease-out ${
          show && "rotate-[45deg] -translate-y-[8px]"
        }`}
      ></div>
    </div>
  );
};

export default BurgerToggler;
