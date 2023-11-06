"use client";

import React, { useState } from "react";

// headless vi
import { Menu } from "@headlessui/react";

//icons
import { FaMapMarkedAlt } from "react-icons/fa";

export default function HoursSelection() {
  return (
    <Menu as="div" className="w-full h-full flex xl:flex-row">
      <div className="relative flex-1">
        {/* btn */}
        <Menu.Button
          className="dropdwon-btn w-full h-full flex flex-col
         justify-center items-center xl:items-start xl:pl-8"
        >
          <div
            className="flex flex-col xl:flex-row items-center xl:gap-x-2
              gap-y-2 xl:gap-y-0
              "
          >
            <FaCalendarAlt className="text-accent" />
            <div className="text-[15px] uppercase font-bold">Select Date</div>
          </div>
          <div>
            <div>{format(date[0].startDate, "dd/MM/yyy")}</div>
            <FaArrowRightLong className="text-accent text-[12px]" />
            <div>
              {date[0].endDate ? (
                <div>{format(date[0].endDate, "dd/MM/yyyy")}</div>
              ) : (
                <div>{format(date[0].startDate, "dd/MM/yyyy")}</div>
              )}
            </div>
          </div>
        </Menu.Button>

        {/* menu */}
        <Menu.Items
          className="drodown-menu shadow-lg absolute -top-96 xl:top-[90px]
        left-1/2 xl:left-0 z-50 transform -translate-x-1/2 xl:-translate-x-0 rounded-[10px]
        overflow-hidden
        "
        >
          menu items
        </Menu.Items>
      </div>
    </Menu>
  );
}
