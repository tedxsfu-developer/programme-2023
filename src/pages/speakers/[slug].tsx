"use client";
// import fs from "fs";
// import matter from "gray-matter";
// import { MDXRemote } from "next-mdx-remote";
// import { serialize } from "next-mdx-remote/serialize";
// import dynamic from "next/dynamic";
// import Head from "next/head";
// import Link from "next/link";
// import path from "path";

import { usePathname } from "next/navigation";
import { speakerData } from "@/data/SpeakerData";
import InfoTab from "@/components/InfoTab";
import ReturnButton from "@/components/button/ReturnButton";
import Header from "@/components/layout/Header";
import InstagramButton from "@/components/button/InstagramButton";
import CTAButton from "@/components/button/CTAButton";
import ImageLayout from "@/components/layout/ImageLayout";
import { useState } from "react";
import Footer from "@/components/layout/Footer";

export const getStaticPaths = async () => {
  const paths = speakerData.map((items) => ({
    params: { slug: items.href.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};

// @ts-ignore
export const getStaticProps = async ({ params }) => {
  console.log("hey");
  console.log(params);
  const speakers = speakerData.filter((p) => p.href.toString() === params.slug);
  console.log(speakers);
  return {
    props: {
      name: speakers[0].name,
      href: speakers[0].href,
      desc: speakers[0].desc,
      info: speakers[0].info,
    },
  };
};

export default function Page() {
  const pathname = usePathname();
  const speaker = speakerData.find(
    (p) => "/speakers/" + p.href.toString() === pathname
  );
  const [tab, setTab] = useState("info");

  return (
    <main className=" min-h-screen bg-black text-white p-3 overflow-auto">
      <Header />
      <ReturnButton />

      {speaker && (
        <>
          <div className="grid grid-flow-col z-10 w-full justify-between items-center border-b pb-2 border-ted-grey">
            <div className="font-light text-name">{speaker.name}</div>
            <div className="text-sm text-ted-grey capitalize font-normal">
              {speaker.desc}
            </div>
          </div>
          <ImageLayout image={speaker.image} name={speaker?.name} />

          <InfoTab />
          <Footer></Footer>
        </>
      )}

      <div></div>
    </main>
  );
}
