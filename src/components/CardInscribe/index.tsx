import React, { useState } from "react";
import Input from "../Input";

export default function index() {
  const [openTab, setOpenTab] = useState(1);
  return (
    <>
      <div
        className={
          "max-w-[65rem] mx-auto bg-[#ffffff4a] rounded-t-2xl overflow-hidden"
        }
      >
        <ul
          className={"flex justify-between items-center text-sm md:text-base"}
          role={"tablist"}
        >
          <li
            className={
              "w-full cursor-pointer whitespace-nowrap text-center px-2 py-6 md:px-8 md:py-4 " +
              (openTab === 1 ? " bg-[#222222]" : "hover:bg-[#444444]")
            }
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(1);
            }}
            data-toggle="tab"
            role="tablist"
          >
            File
          </li>
          <li
            className={
              "w-full cursor-pointer whitespace-nowrap text-center px-2 py-6 md:px-8 md:py-4 " +
              (openTab === 2 ? " bg-[#222222]" : "hover:bg-[#444444]")
            }
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(2);
            }}
            data-toggle="tab"
            role="tablist"
          >
            BRC-20
          </li>
          <li
            className={
              "w-full cursor-pointer whitespace-nowrap text-center px-2 py-6 md:px-8 md:py-4 " +
              (openTab === 3 ? " bg-[#222222]" : "hover:bg-[#444444]")
            }
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(3);
            }}
            data-toggle="tab"
            role="tablist"
          >
            BRC-115
          </li>
          <li
            className={
              "w-full cursor-pointer whitespace-nowrap text-center px-2 py-6 md:px-8 md:py-4 " +
              (openTab === 4 ? " bg-[#222222]" : "hover:bg-[#444444]")
            }
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(4);
            }}
            data-toggle="tab"
            role="tablist"
          >
            Text
          </li>
          <li
            className={
              "w-full cursor-pointer whitespace-nowrap text-center px-2 py-6 md:px-8 md:py-4 " +
              (openTab === 5 ? " bg-[#222222]" : "hover:bg-[#444444]")
            }
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(5);
            }}
            data-toggle="tab"
            role="tablist"
          >
            sats.
          </li>
        </ul>
      </div>
      <div>
        <section
          className={
            "w-full max-w-[65rem] mx-auto bg-[#222222] p-6 md:p-8 md:pt-12 rounded-b-2xl"
          }
        >
          <div className={openTab === 1 ? "block" : "hidden"}>
            <div
              className={
                "w-full flex justify-between items-center gap-x-6 my-2"
              }
            >
              <h4
                className={
                  "font-semibold text-lg md:text-2xl tracking-tighter whitespace-nowrap"
                }
              >
                Add files to Inscribe
              </h4>
              <div className={"flex justify-end items-center gap-x-2"}>
                <input
                  type={"checkbox"}
                  className={"w-[26px] h-[26px] rounded-lg"}
                />
                <p className={"text-xs md:text-sm"}>
                  Uncheck if file is already compressed
                </p>
              </div>
            </div>
            <div className={"w-full my-4"}>
              <input type={"file"} multiple style={{ display: "none" }} />
              <div
                className={
                  "border relative w-full h-auto border-[#949494] border-dashed rounded-md text-center min-h-[300px]"
                }
              >
                <div
                  className={
                    "absolute top-0 left-0 z-10 w-full h-full flex justify-center items-center"
                  }
                >
                  <div className={"flex flex-col items-center"}>
                    <svg
                      width="67"
                      height="67"
                      viewBox="0 0 98 98"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M83.7083 56.3908H71.9075C62.23 56.3908 54.3492 64.2716 54.3492 73.9491V85.75C54.3492 87.9958 52.5117 89.8333 50.2658 89.8333H32.9525C20.3758 89.8333 10.2083 81.6666 10.2083 67.0891V30.9108C10.2083 16.3333 20.3758 8.16665 32.9525 8.16665H65.0475C77.6242 8.16665 87.7917 16.3333 87.7917 30.9108V52.3075C87.7917 54.5533 85.9542 56.3908 83.7083 56.3908ZM47.0808 42.7525C46.4683 42.14 45.6925 41.8542 44.9167 41.8542C44.1408 41.8542 43.365 42.14 42.7525 42.7525L39.8125 45.6925V28.5833C39.8125 26.9092 38.4242 25.5208 36.75 25.5208C35.0758 25.5208 33.6875 26.9092 33.6875 28.5833V45.6925L30.7475 42.7525C29.5633 41.5683 27.6033 41.5683 26.4192 42.7525C25.235 43.9367 25.235 45.8966 26.4192 47.0808L34.5858 55.2475C34.8717 55.4925 35.1575 55.6967 35.4842 55.86C35.5658 55.9008 35.6883 55.9416 35.77 55.9825C36.015 56.0641 36.26 56.105 36.5458 56.1458C36.6683 56.1458 36.75 56.1458 36.8725 56.1458C37.1992 56.1458 37.5258 56.0641 37.8525 55.9416C37.8933 55.9416 37.8933 55.9416 37.9342 55.9416C38.2608 55.8191 38.5875 55.5741 38.8325 55.3291C38.8733 55.2883 38.9142 55.2883 38.9142 55.2475L47.0808 47.0808C48.265 45.8966 48.265 43.9367 47.0808 42.7525Z"
                        fill="url(#paint0_linear_6_39)"
                      ></path>
                      <path
                        d="M71.1725 62.0259C75.0517 61.985 80.4417 61.985 85.0558 61.985C87.3833 61.985 88.6083 64.7209 86.975 66.3542C81.095 72.275 70.56 82.9325 64.5167 88.9759C62.8425 90.65 59.9433 89.5067 59.9433 87.1792V72.9284C59.9433 66.9667 65.0067 62.0259 71.1725 62.0259Z"
                        fill="url(#paint1_linear_6_39)"
                      ></path>
                      <defs>
                        <linearGradient
                          id="paint0_linear_6_39"
                          x1="49"
                          y1="89.8333"
                          x2="49"
                          y2="8.16665"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#E9DCFB"></stop>
                          <stop offset="1" stopColor="#F6D2D4"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_6_39"
                          x1="73.8329"
                          y1="89.7715"
                          x2="73.8329"
                          y2="61.9851"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#E9DCFB"></stop>
                          <stop offset="1" stopColor="#F6D2D4"></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                    <h4 className={"text-sm text-gray-200 pt-4 px-2"}>
                      {" "}
                      Drop your file here, or{" "}
                      <span className={"font-semibold"}>
                        Click to select file
                      </span>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <Input
              type={"text"}
              name={"Receiving Address"}
              pHolder={"Taproot Address to receive inscription"}
            />
          </div>
        </section>
      </div>
    </>
  );
}
