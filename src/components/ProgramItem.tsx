import program from "@/data/ProgramData";

interface Props {
  time?: string;
  desc?: string | Array<string>;
  guest?: string | Array<string>;
}
interface ActualProps {
  items?: Props | Array<Props>;
}

function ProgramItem(props: Props) {
  const { time, desc, guest } = props;
  return (
    <div className="grid grid-cols-3 mb-10 w-full">
      <h3>{time}</h3>
      <div className="">
        <h3 className="">{desc}</h3>
        <h4 className="">{guest}</h4>
      </div>
    </div>
  );
}

export default ProgramItem;

//         return
//       })}
// <div className="flex grid-cols-3 gap-10">
//       <h3>{props.time}</h3>
//       <div className="grid-rows-2 gap-10">
//         {" "}
//         <h3>{props.desc}</h3>
//         <h4 className=""> {props.guest}</h4>
//       </div>
//     </div>
//   );
// }
