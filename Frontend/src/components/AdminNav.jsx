import React from "react";
import { Link } from "react-router-dom";

const AdminNav = () => {
  return (
    <>
      <section class="w-full px-8 text-gray-700 bg-orange-500">
        <div class="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
          <div class="relative flex flex-col md:flex-row">
            <a
              href="#_"
              class="flex items-center mb-5 font-medium text-white lg:w-auto lg:items-center lg:justify-center md:mb-0"
            >
              <span class="mx-auto text-xl font-black leading-none text-white select-none">
                JusticeCraft<span class="text-green-600">.</span>
              </span>
            </a>
            <nav class="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
              <Link
                to="/admin"
                class="mr-5 font-medium leading-6 text-white hover:text-green-500"
              >
                Users
              </Link>
              <Link
                to="/entry"
                class="mr-5 font-medium leading-6 text-white hover:text-green-500"
              >
                IPC Entry
              </Link>
            </nav>
          </div>

          <div class="inline-flex items-center ml-5 space-x-6 lg:justify-end">
            <Link
              to="/signin"
              class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-orange-500 whitespace-no-wrap bg-white border border-transparent rounded-md shadow-sm hover:bg-green-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            >
              Log Out
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminNav;
