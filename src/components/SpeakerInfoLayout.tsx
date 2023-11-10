import Link from "next/link";

interface Props {
  title: any;
  desc: any;
}

function SpeakerInfoLayout(items: Props) {
  return (
    // const { time, desc, guest } = props;
    <Link
      href={items.title || ""}
      className={`${items.title ? "" : "pointer-events-none"}`}
    >
      <div className="grid grid-cols-3 py-1.5 border-ted-grey border-t">
        <h3 className="text-ted-grey">{items.desc}</h3>
      </div>
    </Link>
  );
}

export default SpeakerInfoLayout;
