import { GiWolfHowl } from "react-icons/gi";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={'/'} className="flex gap-1">
      <GiWolfHowl className="h-10 w-10 flex" />
      <span className="">
          Pawsome - Admin
        </span>
    </Link>
  );
}