import program from "@/data/ProgramData";

interface Props {
  time: string;
  desc?: string;
  guest?: string;
}
interface ActualProps {
  items?: Props | Array<Props>;
}

export default function ProgramItem(props: Props) {
  return (
    <div className="flex grid-cols-3 gap-10">
      {/* {program.map((time, name, guest, index) => (
        <ProgramItem key={index} name={name} index={index} />
      ))}
      <h3>{props.time}</h3>
      <div className="grid-rows-2 gap-10">
        {" "}
        <h3>{props.name}</h3>
        <h4 className="">{props.guest}</h4>
        <img></img>
      </div> */}
    </div>
  );
}
