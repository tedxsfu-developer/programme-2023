"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import { guestData } from "@/data/GuestsData";

export default function GuestInfoTab() {
  //   const [activeTabIndex, setActiveTabIndex] = useState(0);
  //   const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  //   const [tabUnderlineLeft, setTabUnderlineleft] = useState(0);

  //   const tabsRef = useRef([]);
  const [tab, setTab] = useState("info");
  const pathname = usePathname();
  const guest = guestData.find(
    (p) => "/guests/" + p.href.toString() === pathname
  );

  return (
    <div>
      <div className="flex pt-6 space-x-3 border-b border-ted-grey">
        <button
          onClick={(e) => {
            setTab("info");
          }}
          className={`pb-2 uppercase text-caption border-white ${
            tab == "info" ? "border-b" : "border-none"
          }`}
        >
          Info
        </button>
      </div>
      <div className="font-light text-headline">
        {tab == "info" && (
          <div>
            <p className="pt-2 text-body font-normal">{guest.info}</p>
          </div>
        )}
      </div>
    </div>
  );
}
