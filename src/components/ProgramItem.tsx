interface Props {
  time: string;
  desc: string;
  guest: string;
}

export default function ProgramItem(props: Props) {
  return (
    <div className="flex grid-cols-3 gap-10">
      <h3>{props.time}</h3>
      <div className="grid-rows-2 gap-10">
        {" "}
        <h3>{props.desc}</h3>
        <h4>{props.guest}</h4>
      </div>
    </div>
  );
}
