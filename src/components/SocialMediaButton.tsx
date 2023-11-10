import { speakerData } from "@/data/SpeakerData";
import Link from "next/link";

interface Props {
  instagram: string;
}

export default function SocialMediaButton(items: Props) {
  return (
    <div>
      <Link
        href={`${items.instagram}`}
        className="flex flex-row bg-white rounded-full p-5 align-center justify-around text-black font-sm uppercase"
      >
        Instagram
      </Link>
    </div>
  );
}
