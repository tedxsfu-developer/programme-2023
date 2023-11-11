"use client";

import { usePathname } from "next/navigation";
import { guestData } from "@/data/GuestsData";
import ReturnButton from "@/components/button/ReturnButton";
import Header from "@/components/layout/Header";
import { useState } from "react";
import GuestInfoTab from "@/components/GuestInfoTab";

export const getStaticPaths = async () => {
  const paths = guestData.map((items) => ({
    params: { slug: items.href.toString() || "" },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  console.log(params);
  const guests = guestData.filter((p) => p.href.toString() === params.slug);
  console.log(guests);
  return {
    props: {
      groupname: guests[0].groupname,
      href: guests[0].href,
      section: guests[0].section,
    },
  };
};

export default function Page() {
  const pathname = usePathname();
  const guest = guestData.find(
    (p: any) => "/guests/" + p.href.toString() === pathname
  );
  const [tab, setTab] = useState("info");
  const images = guest?.section.info;

  return (
    <main className=" min-h-screen bg-black text-white p-3 overflow-auto">
      <Header></Header>
      <ReturnButton></ReturnButton>
      <div className="grid grid-flow-col z-10 w-full justify-between items-center border-b pb-2 border-ted-grey">
        <div className="font-light text-name">
          {guest ? guest.groupname : ""}
        </div>
        {/* <div className="text-sm text-ted-grey capitalize font-normal">
          {guest ? guest.desc : ""}
        </div> */}
      </div>
      <GuestInfoTab></GuestInfoTab>

      {/* <div className="grid grid-flow-col z-10 w-full justify-between items-center border-b pb-2 border-ted-grey">
        <div className="font-light text-name">
          {guest ? guest.groupname : ""}
        </div>
        <div className="text-sm text-ted-grey capitalize font-normal">
          {guest.section.length ? guest : ""}
          {guest ? guest.section.info : ""}
        </div>
      </div> */}
      {/* <Carousel />

      <GuestInfoTab /> */}

      {/* <div className="my-[30px]">
        <InstagramButton instagram={speaker?.instagram}></InstagramButton>
      </div> */}
      {/* <div className="my-[30px]">
        <CTAButton links={speaker?.links}></CTAButton>
      </div>
      <div></div> */}
    </main>
  );
}
