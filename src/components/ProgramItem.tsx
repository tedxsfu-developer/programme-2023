interface Props {
  time: string;
  desc: string[];
  guest?: string[];
}

function ProgramItem(items: Props) {
  const a = items.desc;
  return (
    // const { time, desc, guest } = props;
    <div className="mb-10">
      <h3>{items.time}</h3>
      <div>
        {items.desc.map((e, index) => (
          <div>
            <div>{e}</div>
            <div>{items.guest ? items.guest[index] : <></>}</div>
          </div>
        ))}
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
