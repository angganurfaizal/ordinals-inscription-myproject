import React from "react";

type IProps = {
  text1?: string;
  text2?: string;
  text3?: string;
};
export default function index({ text1, text2, text3 }: IProps) {
  return (
    <>
      <header
        className={
          "w-full max-w-[85rem] mx-auto pt-32 pb-20 flex-col items-center"
        }
      >
        <h1
          className={
            "dark:text-[#ececec] font-semibold text-5xl md:text-7xl lg:text-7xl text-center tracking-tighter"
          }
        >
          {text1} <br />
          {text2}
          <br />
        </h1>
        <h1
          className={
            "font-semibold text-5xl md:text-7xl lg:text-7xl text-center tracking-tighter bg-gradient-to-r from-indigo-500 from-10% via-sky-200 via-30% to-emerald-500 to-60% bg-clip-text text-transparent"
          }
        >
          {text3}
        </h1>
      </header>
    </>
  );
}
