"use client";

import { speakerData } from "@/data/SpeakerData";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import InstagramButton from "./button/InstagramButton";
import CTAButton from "./button/CTAButton";

export default function InfoTab() {
  const [tab, setTab] = useState("info");
  const pathname = usePathname();
  const speaker = speakerData.find(
    (p) => "/speakers/" + p.href.toString() === pathname
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
        <button
          onClick={(e) => setTab("qa")}
          className={`pb-2 uppercase text-caption border-white ${
            tab == "qa" ? "border-b" : "border-none"
          }`}
        >
          Q&A
        </button>
      </div>
      <div className="font-light text-headline">
        {tab == "info" && (
          <div>
            {speaker?.info?.map((item, index) => (
              <>
                <h3 className="pt-2 text-headline font-light">
                  {item.headline}
                </h3>
                <p className="pt-2 text-body font-normal">{item.body}</p>
                <p className="pt-3 text-body font-normal">{item.body2}</p>
                <div className="my-[30px]">
                  <InstagramButton
                    instagram={speaker?.instagram}
                  ></InstagramButton>
                </div>
                <div className="my-[30px]">
                  <CTAButton links={speaker?.links}></CTAButton>
                </div>
              </>
            ))}
          </div>
        )}
      </div>
      <div className="font-light text-headline">
        {tab == "qa" && (
          <div>
            {speaker?.qa?.map((item, index) => (
              <>
                <p className="text-ted-grey pt-3 text-sm font-medium normal-case tracking-normal">
                  {item.question}
                </p>
                <p className="pt-3 text-body font-normal">{item.answer}</p>
              </>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
