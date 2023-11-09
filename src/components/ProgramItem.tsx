interface Props {
  time: string;
  desc: string[];
  guest?: string[];
}

function ProgramItem(items: Props) {
  const a = items.desc;
  return (
    // const { time, desc, guest } = props;
    <div className="grid grid-cols-3 whitespace-nowrap py-1.5 border-ted-grey border-t">
      <h3 className="text-ted-grey">{items.time}</h3>
      <div>
        {items.desc.map((e, index) => (
          <div className="">
            <div>{e}</div>
            <div className="text-caption text-ted-grey pb-1.5">
              {items.guest ? items.guest[index] : <></>}
            </div>
          </div>
        ))}
      </div>
      {/* for icon */}
      <div className="translate-x-10">
        <svg
          width="10"
          height="16"
          viewBox="0 0 10 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.5 -3.49691e-07L9.5 8L1.5 16L0.499997 15L7.5 8L0.5 0.999998L1.5 -3.49691e-07Z"
            fill="white"
          />
        </svg>
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
