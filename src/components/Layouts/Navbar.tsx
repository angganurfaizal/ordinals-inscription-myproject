import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function Header() {
  const router = useRouter();

  return (
    <div className={"relative"}>
      <nav className={"relative z-20 w-full max-w-[85rem] mx-auto pt-8 px-2"}>
        <div
          className={
            "bg-[#8a8a8a47] rounded-full flex justify-between items-center px-4 py-2"
          }
        >
          <div className={"w-[50px] md:w-[65px] overflow-hidden"}>
            <Link href={"/"}>LOGO</Link>
          </div>
          <div className={"hidden md:block"}>
            <ul className={"flex gap-x-8 text-sm"}>
              <Link href={"/cllection"}>
                <li>Collections</li>
              </Link>
              <Link href={"/faq"}>
                <li>FAQ</li>
              </Link>
              <Link href={"/developer"}>
                <li>Developer</li>
              </Link>
            </ul>
          </div>
          <div className={"flex items-center gap-x-4"}>
            <div className={"cursor-pointer bg-[#999999] p-2 rounded-full"}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5287 15.9294C21.3687 15.6594 20.9187 15.2394 19.7987 15.4394C19.1787 15.5494 18.5487 15.5994 17.9187 15.5694C15.5887 15.4694 13.4787 14.3994 12.0087 12.7494C10.7087 11.2994 9.90873 9.40938 9.89873 7.36938C9.89873 6.22938 10.1187 5.12938 10.5687 4.08938C11.0087 3.07938 10.6987 2.54938 10.4787 2.32938C10.2487 2.09938 9.70873 1.77938 8.64873 2.21938C4.55873 3.93938 2.02873 8.03938 2.32873 12.4294C2.62873 16.5594 5.52873 20.0894 9.36873 21.4194C10.2887 21.7394 11.2587 21.9294 12.2587 21.9694C12.4187 21.9794 12.5787 21.9894 12.7387 21.9894C16.0887 21.9894 19.2287 20.4094 21.2087 17.7194C21.8787 16.7894 21.6987 16.1994 21.5287 15.9294Z"
                  fill="#292D32"
                ></path>
              </svg>
            </div>
            <div className={"hidden md:block"}>
              <button
                className={
                  "bg-[#000000] px-3 md:px-4 py-2.5 md:py-3 text-xs md:text-sm font-medium md:font-semibold rounded-full text-center text-[#ffffff] flex items-center gap-x-1"
                }
              >
                <span>Connect to Wallet</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.0017 2.41666C12.4217 2.41666 11.9625 2.87582 11.9625 3.45582V13.6783H16.3971L14.5 11.7812C14.1496 11.4308 14.1496 10.8508 14.5 10.5004C14.8504 10.15 15.4304 10.15 15.7809 10.5004L19.2125 13.9442C19.5629 14.2946 19.5629 14.8746 19.2125 15.225L15.7809 18.6687C15.5996 18.85 15.37 18.9346 15.1404 18.9346C14.9109 18.9346 14.6813 18.85 14.5 18.6687C14.1496 18.3183 14.1496 17.7383 14.5 17.3879L16.385 15.5029H11.9625V25.5683C11.9625 26.1362 12.4217 26.6075 13.0017 26.6075C20.1188 26.6075 25.085 21.6412 25.085 14.5242C25.085 7.40707 20.1067 2.41666 13.0017 2.41666Z"
                    fill="white"
                  ></path>
                  <path
                    d="M4.82123 13.6783C4.32581 13.6783 3.91498 14.0892 3.91498 14.5846C3.91498 15.08 4.32581 15.4908 4.82123 15.4908H11.9504V13.6783H4.82123Z"
                    fill="white"
                  ></path>
                </svg>
              </button>
            </div>
            <div className={"md:hidden"}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 16.5H22.5"
                  stroke="#d3d3d3"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M1.5 7.5H22.5"
                  stroke="#d3d3d3"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
