import React from "react";
import HeaderButton from "../components/layout/HeaderButton";

const Header = () => {
  return (
    <section>
      <div className="top-0 h-12 shadow-md fixed w-full bg-white z-40">
        <div className="menu">
          <div className="flex items-center">
            <div className="ml-10 flex items-baseline space-x-4">
              <HeaderButton goLink={"/"} title="HOME" />
            </div>
          </div>
        </div>
        <div className="search-container h-full items-center pr-5 ">
          <div className="font-sans text-black  flex items-center h-8 justify-center">
            <div className="border overflow-hidden flex bg-white">
              <input
                type="text"
                className="px-4 py-1 outline-0"
                placeholder="Search..."
              />
              <button className="flex items-center justify-center px-4 border-l">
                <svg
                  className="h-4 w-4 text-grey-dark"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div className="avatar online m-2 cursor-pointer">
              <div className="w-8 rounded-full" tabIndex="0">
                <img src="https://placeimg.com/192/192/people" />
              </div>
            </div>
            <div
              tabIndex="0"
              className="dropdown-content shadow bg-base-100 box w-80 h-96 overflow-scroll overflow-x-hidden"
            >
              <div className="w-full mx-auto px-8 py-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">2d ago</span>
                  <span className="text-emerald-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                      />
                    </svg>
                  </span>
                </div>
                <div className="mt-6 w-fit mx-auto">
                  <img
                    src="https://placeimg.com/192/192/people"
                    className="rounded-full w-28"
                    alt="profile "
                  />
                </div>

                <div className="mt-8 ">
                  <h2 className="text-black font-bold text-2xl tracking-wide">
                    Jonathan <br /> Smith
                  </h2>
                </div>
                <p className="text-emerald-400 font-semibold mt-2.5">Active</p>

                <div className="h-1 w-full bg-black mt-8 rounded-full">
                  <div className="h-1 rounded-full w-2/5 bg-yellow-500 "></div>
                </div>
                <div className="mt-3 text-white text-sm">
                  <span className="text-gray-400 font-semibold">Storage:</span>
                  <span>40%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
