import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-prussian-500 p-4">
      <ul className="flex space-x-12 justify-center items-center font-forum">
        <li className="flex items-center mr-auto">
          <Link href="/" passHref>
            <Image
              src="/logo.png"
              alt="Logo"
              width={140}
              height={140}
              quality={100}
              className="pl-2 pr-6"
            />
          </Link>
          <h1 className="text-3xl font-bold text-white">Dola Re Dandiya</h1>
        </li>
        <li className="flex items-center">
          <Link
            href="/"
            className="text-white hover:text-blue-200 font-semibold"
          >
            Home
          </Link>
        </li>
        <li className="flex items-center">
          <Link
            href="/about"
            className="text-white hover:text-blue-200 font-semibold"
          >
            About
          </Link>
        </li>
        <li className="flex items-center">
          <Link
            href="/current-sponsors"
            className="text-white hover:text-blue-200 font-semibold"
          >
            Current Sponsors
          </Link>
        </li>
        <li className="flex items-center">
          <Link
            href="/potential-sponsors"
            className="text-white hover:text-blue-200 font-semibold"
          >
            Potential Sponsors
          </Link>
        </li>
        <li className="flex items-center">
          <Link
            href="/contact"
            className="text-white hover:text-blue-200 font-semibold pr-4"
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}
