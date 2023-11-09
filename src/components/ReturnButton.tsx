import { SvgUri } from "react-native-svg";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import { useRouter } from "next/router";
import PersonInfo from "./PersonInfo";

const router = useRouter();

function ReturnButton() {
  return (
    <button type="button" onClick={() => router.push("/Person")}>
      <div className="grid grid-flow-col">
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
            fill="grey"
            d="M1.5 -3.49691e-07L9.5 8L1.5 16L0.499997 15L7.5 8L0.5 0.999998L1.5 -3.49691e-07Z"
          />
        </svg>
        <h4 className="uppercase text-ted-grey text-caption">Return</h4>
      </div>
    </button>
  );
}

export default ReturnButton;
