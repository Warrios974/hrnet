/**
 * Header component
 * @returns Header component
 */
"use client";

import logo from "@/assets/logo-transparent.png";
import menuIcon from "@/assets/menu.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type HeaderLinkProps = {
  path: string;
  text: string;
  isActive: boolean;
};

export default function Header() {
  const currentPage = usePathname();

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center flex-wrap py-3">
          <div className="flex-shrink-0">
            <Link
              href={"/"}
              className="text-white"
              aria-current="page"
              aria-label="Home"
            >
              <Image className="h-8 w-8" src={logo} alt="" />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <HeaderLink
                path={"/"}
                text={"Dashboard"}
                isActive={currentPage === "/"}
              />
              <HeaderLink
                path={"/registration"}
                text={"Registration"}
                isActive={currentPage === "/registration"}
              />
            </div>
          </div>
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}

const HeaderLink = ({ path, text, isActive }: HeaderLinkProps) => {
  const className = isActive
    ? "active-btn-main-menu"
    : "inactive-btn-main-menu";
  const ariaCurrent = isActive ? "page" : ("" as "page");

  return (
    <Link href={path} className={className} aria-current={ariaCurrent}>
      {text}
    </Link>
  );
};

const MobileMenu = () => {
  const currentPage = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Image
        onClick={() => setIsOpen(!isOpen)}
        className="sm:hidden cursor-pointer"
        src={menuIcon}
        alt=""
      />
      <div
        className={`${isOpen ? "" : "hidden"} md:hidden w-full`}
        id="mobile-menu"
      >
        <div className="flex flex-col space-y-1 px-2 pb-3 pt-2 sm:px-3">
          <HeaderLink
            path={"/"}
            text={"Dashboard"}
            isActive={currentPage === "/"}
          />
          <HeaderLink
            path={"/registration"}
            text={"Registration"}
            isActive={currentPage === "/registration"}
          />
        </div>
      </div>
    </>
  );
};
