import Link from "next/link";

function ReturnButton() {
  return (
    <nav className="flex">
      <Link href="/" className="flex items-center">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-auto stroke-ted-grey"
        >
          <path d="M14 7L9 12L14 17" stroke-width="1.5" />
        </svg>
        <h4 className="uppercase text-ted-grey text-caption">Return</h4>
      </Link>
    </nav>
  );
}

export default ReturnButton;
