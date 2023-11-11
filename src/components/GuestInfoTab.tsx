"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import { guestData } from "@/data/GuestsData";
import React from "react";

export default function GuestInfoTab() {
  const [tab, setTab] = useState("info");
  const pathname = usePathname();
  const guest = guestData;

  return (
    <div>
      <div className="flex pt-6 space-x-3 border-b border-ted-grey">
        <div className="font-light text-headline">
          {tab == "info" && (
            <div>
              {guest?.section?.map((item, index) => (
                <React.Fragment key={index}>
                  <h3 className="pt-2 text-headline font-light">{item.name}</h3>
                  <p className="pt-2 text-body font-normal">{item.desc}</p>
                  <p className="pt-3 text-body font-normal">{item.info}</p>
                </React.Fragment>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
