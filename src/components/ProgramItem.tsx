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
  {
    return program.map((programInfo) => {
      const { time, desc, guest } = programInfo;
      return (
        <div>
          <h3>{props.time}</h3>
          <div className="">
            <h3>{props.desc}</h3>
            <h4 className="">{props.guest}</h4>
          </div>
        </div>
      );
    });
  }
}

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
