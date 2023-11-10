"use client";

import { speakerData } from "@/data/SpeakerData";
import { useState, useEffect, useRef } from "react";

export default function InfoTab() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineleft] = useState(0);

  const tabsRef = useRef([]);

  const tabsData = [
    {
      label: "Info",
      content:
        "Ut irure mollit nulla eiusmod excepteur laboris elit sit anim magna tempor excepteur labore nulla.",
    },
    {
      label: "Q&A",
      content:
        "Fugiat dolor et quis in incididunt aute. Ullamco voluptate consectetur dolor officia sunt est dolor sint.",
    },
  ];

  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeTabIndex];
      setTabUnderlineleft(currentTab?.clientWidth ?? 0);
    }

    setTabPosition();
    window.addEventListener("resize", setTabPosition);

    return () => window.removeEventListener("resize", setTabPosition);
  }, [activeTabIndex]);

  return (
    <div>
      <div className="relative">
        <div className="flex space-x-3 border-b">
          {tabsData.map((items, index) => {
            return (
              <button
                key={index}
                ref={(el) => (tabsRef.current[index] = el)}
                className="pt-2 pb-3"
                onClick={() => setActiveTabIndex(index)}
              >
                Info
              </button>
            );
          })}
        </div>
        <span
          className="absolute bottom-0 block h-10 bg-white transition-all duration-300"
          style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
        />
      </div>
      <div className="py-4">
        <p>{tabsData[activeTabIndex].content}</p>
      </div>
    </div>
  );
}

//   key={index}
//             ref={(el) => (tabsRef.current[index] = el)}
