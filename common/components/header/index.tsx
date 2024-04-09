"use client";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  return (
    <header className="bg-green-500 p-4 text-white flex">
      <span
        className="text-2xl font-bold cursor-pointer"
        onClick={() => router.push("/")}
      >
        User Album App
      </span>
    </header>
  );
};

export default Header;
