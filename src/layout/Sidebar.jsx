import React from "react";
import MenuButton from "../components/layout/MenuButton";
import logo from "../logo.svg";
const Sidebar = () => {
  return (
    <section>
      <div className="sidebar drop-shadow-md">
        <div className="header-sub border-b-2 border-b-gray h-12">
          <div className="flex items-center logo">
            <img src={logo} /> REACT ADMIN PANEL
          </div>
        </div>

        <div className="p-4 bg-white dark:bg-gray-800">
          <div className="flex flex-row items-start gap-4">
            <img
              src="https://placeimg.com/192/192/people"
              className="w-28 h-28 rounded"
              alt=""
            />
            <div className="h-28 w-full flex flex-col justify-between">
              <div>
                <p className="text-gray-800 dark:text-white text-xl font-medium">
                  RubidSoft Official
                </p>
                <p className="text-gray-400 text-xs">FullStack dev</p>
              </div>
              <div className="rounded bg-blue-100 dark:bg-white p-2 w-full">
                <div className="flex items-center justify-between text-xs text-gray-400 dark:text-black">
                  <p className="flex flex-col">
                    Articles
                    <span className="text-black dark:text-indigo-500 font-bold">
                      34
                    </span>
                  </p>
                  <p className="flex flex-col">
                    Followers
                    <span className="text-black dark:text-indigo-500 font-bold">
                      455
                    </span>
                  </p>
                  <p className="flex flex-col">
                    Rating
                    <span className="text-black dark:text-indigo-500 font-bold">
                      9.3
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between gap-4 mt-6">
            <button
              type="button"
              className="w-1/2 px-4 py-2 text-base border rounded text-grey-500 bg-white hover:bg-gray-200"
            >
              Site Settings
            </button>
            <a
              type="button"
              href="/"
              target="blank"
              className="w-1/2 text-center px-4 py-2 text-base border rounded text-white bg-indigo-500 hover:bg-indigo-700"
            >
              View Site
            </a>
          </div>
        </div>
        <hr />
        <div className="bg-white dark:bg-gray-800">
          <nav className="mt-10 px-6">
            <MenuButton
              active={false}
              btn={1}
              goLink={"/dashbord"}
              title="DASHBORD"
            />
            <div>
              <p className="text-gray-300 w-full border-b-2 pt-2 border-gray-100 mt-4 text-md font-normal">
                Addons
              </p>

              <MenuButton
                active={false}
                btn={2}
                goLink={"/forms"}
                title="Forms"
              />
              <MenuButton
                active={false}
                btn={2}
                goLink={"/tables"}
                title="Tables"
              />
              <MenuButton active={false} btn={2} goLink={"/"} title="Charts" />
              <MenuButton active={false} btn={2} goLink={"/"} title="Pages" />
              <MenuButton
                active={false}
                btn={2}
                goLink={"/"}
                title="Contacts"
              />
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
