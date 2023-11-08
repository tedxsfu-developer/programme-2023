import program from "@/data/ProgramData";

interface Props {
  time: string;
  desc?: string | Array<string>;
  guest?: string | Array<string>;
}
interface ActualProps {
  items?: Props | Array<Props>;
}

function ProgramItem(props: Props) {
  return program.map(() => {
    // const { time, desc, guest } = props;
    <div className="mb-10">
      <h3>{props.time}</h3>
      <div className="">
        <h3 className="grid">{props.desc}</h3>
        <h4 className="">{props.guest}</h4>
      </div>
    </div>;
  });
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
