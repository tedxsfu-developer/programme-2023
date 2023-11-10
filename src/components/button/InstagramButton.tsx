import { speakerData } from "@/data/SpeakerData";
import Link from "next/link";

interface Props {
  instagram: string;
}

export default function InstagramButton(items: Props) {
  return (
    <div>
      <Link
        href={`${items.instagram}`}
        className={`bg-white rounded-[30px] px-5 py-2 align-center justify-around text-black 
        text-sm tracking-wide uppercase ${items.instagram ? "" : "hidden"}`}
      >
        Instagram
      </Link>
    </div>
  );
}
