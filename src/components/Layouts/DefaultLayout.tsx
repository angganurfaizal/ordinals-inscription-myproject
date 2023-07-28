import { useRouter } from "next/router";
import React, { PropsWithChildren } from "react";
import Navbar from "./Navbar";

const DefaultLayout = ({ children }: PropsWithChildren) => {
  const route = useRouter();

  return (
    <main className={"bg-[#111111] pb-16"}>
      <Navbar />
      {children}
    </main>
  );
};

export default DefaultLayout;
