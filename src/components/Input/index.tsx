import React from "react";

type IProps = {
  type: string;
  name?: string;
  pHolder?: string;
};

export default function index({ type, name, pHolder }: IProps) {
  return (
    <div className={"w-full mt-10 mb-8"}>
      <p className={"inline-block font-semibold pb-2"}>{name}</p>
      <input
        type={type}
        placeholder={pHolder}
        className={
          "w-full px-4 py-4 rounded-lg focus:outline-none border focus:bourder-[#797c7e] bg-transparent text-[#ffffff]"
        }
      />
    </div>
  );
}
