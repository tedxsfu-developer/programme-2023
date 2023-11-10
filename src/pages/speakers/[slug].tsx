"use client";
// import fs from "fs";
// import matter from "gray-matter";
// import { MDXRemote } from "next-mdx-remote";
// import { serialize } from "next-mdx-remote/serialize";
// import dynamic from "next/dynamic";
// import Head from "next/head";
// import Link from "next/link";
// import path from "path";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { speakerData } from "@/data/SpeakerData";
import InfoTab from "@/components/InfoTab";
import ReturnButton from "@/components/ReturnButton";
import SpeakerInfoLayout from "@/components/SpeakerInfoLayout";
import Header from "@/components/layout/Header";
import SocialMediaButton from "@/components/SocialMediaButton";

export const getStaticPaths = async () => {
  const paths = speakerData.map((items) => ({
    params: { slug: items.href.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};

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

  return (
    <main className=" min-h-screen bg-black text-white p-3">
      <Header></Header>
      <ReturnButton></ReturnButton>

      {/* <div>{pathname}</div> */}
      {/* <div>{speaker ? speaker.href : ""}</div> */}
      <div className="grid grid-flow-col z-10 w-full justify-between items-center">
        <div className="font-light text-name">
          {speaker ? speaker.name : ""}
        </div>
        <div className="text-sm text-ted-grey capitalize font-normal">
          {speaker ? speaker.desc : ""}
        </div>
      </div>
      <Image
        src="/img/headshot-hayley.png"
        width={500}
        height={500}
        alt="Hayley Honeyman"
      />
      <InfoTab />
      <div className="font-light text-headline">
        {speaker ? speaker.info[0] : ""}
      </div>
      <div className="font-normal text-body pt-2">
        {speaker ? speaker.info[1] : ""}
      </div>
      <div className="mt-10">
        <SocialMediaButton instagram={speaker?.instagram}></SocialMediaButton>
      </div>
    </main>
  );
}
