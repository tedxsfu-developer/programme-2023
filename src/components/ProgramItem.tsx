import Link from "next/link";

interface Props {
  time: string;
  desc: string[];
  guest?: string[];
  href?: any;
}

function ProgramItem(items: Props) {
  return (
    // const { time, desc, guest } = props;
    // <Link
    //   href={items.href || ""}
    //   className={`${items.href ? "" : "pointer-events-none"}`}
    // >
    <Link
      href={items.href ? items.href : ""}
      className={items.href ? "" : "pointer-events-none"}
    >
      <div className="grid grid-cols-3 py-1.5 font-normal border-ted-grey border-t">
        <h6 className="text-ted-grey leading-5">{items.time}</h6>
        <div className="flex flex-row col-span-2">
          <div className="flex flex-col">
            {items.desc.map((e, index) => (
              <div className="w-full" key={index}>
                <div className="w-full leading-5">{e}</div>
                <div className="text-caption text-ted-grey pb-1.5">
                  {items.guest ? items.guest[index] : <></>}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-grow-0 ml-auto">
            <svg
              width="10"
              height="16"
              viewBox="0 0 10 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={items.href ? "" : "hidden"}
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
      </div>
    </Link>
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
