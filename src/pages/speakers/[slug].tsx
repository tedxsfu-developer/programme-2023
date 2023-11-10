"use client";
import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import path from "path";
import ReturnButton from "@/components/ReturnButton";
import { speakerData } from "@/data/SpeakerData";
import { postFilePaths, POSTS_PATH } from "@/utils/mdxUtils";
import { usePathname } from "next/navigation";
import type { InferGetStaticPropsType, GetStaticProps } from "next";

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
      <div>{pathname}</div>
      <div>{speaker ? speaker.name : ""}</div>
      <div>{speaker ? speaker.href : ""}</div>
      <div>{speaker ? speaker.desc : ""}</div>
      <div>{speaker ? speaker.info : ""}</div>
    </main>
  );
}
