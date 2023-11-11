"use client";
// import fs from "fs";
// import matter from "gray-matter";
// import { MDXRemote } from "next-mdx-remote";
// import { serialize } from "next-mdx-remote/serialize";
// import dynamic from "next/dynamic";
// import Head from "next/head";
// import Link from "next/link";
// import path from "path";

import { motion, AnimatePresence } from "framer-motion";
import CarouselContent from "@/components/CarouselContent";
import Carousel from "@/components/Carousel";
import { usePathname } from "next/navigation";
import { guestData } from "@/data/GuestsData";
import GuestInfoTab from "@/components/GuestInfoTab";
import ReturnButton from "@/components/button/ReturnButton";
import Header from "@/components/layout/Header";
import { useState } from "react";

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
      section: guests[0].section,
      // href: guests[0].href,
      // desc: guests[0].desc,
      // info: guests[0].info,
    },
  };
};

export default function Page() {
  const pathname = usePathname();
  const guest = guestData.find(
    (p: any) => "/guests/" + p.href.toString() === pathname
  );
  const [tab, setTab] = useState("info");
  // const images = guest?.image;

  return (
    <main className=" min-h-screen bg-black text-white p-3 overflow-auto">
      <Header></Header>
      <ReturnButton></ReturnButton>

      {/* <div>{pathname}</div> */}
      {/* <div>{speaker ? speaker.href : ""}</div> */}
      <div className="grid grid-flow-col z-10 w-full justify-between items-center border-b pb-2 border-ted-grey">
        <div className="font-light text-name">
          {guest ? guest.groupname : ""}
        </div>
        <div className="text-sm text-ted-grey capitalize font-normal">
          {guest.section.length ? guest : ""}
        </div>
      </div>
      <Carousel />

      <GuestInfoTab />

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
