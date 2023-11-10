import { speakerData } from "@/data/SpeakerData";
import Link from "next/link";

interface Props {
  links: string;
}

export default function CTAButton(items: Props) {
  return (
    <div>
      <Link
        href={`${items.links}`}
        className={`bg-white rounded-[30px] px-5 py-2 align-center justify-around text-black 
        text-sm tracking-wide uppercase ${items.links ? "" : "hidden"}`}
      >
        Sign up for Classes
      </Link>
    </div>
  );
}
