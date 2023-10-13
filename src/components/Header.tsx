'use client'

import Image from "next/image"
import Link from "next/link";
import logo from '@/assets/logo-transparent.png'
import { usePathname } from "next/navigation";

export default function Header() {

  const currentPage = usePathname()

  function generateLink(path: string, text : string, isActive: boolean) {
    const className = isActive ? 'active-btn-main-menu' : 'inactive-btn-main-menu';
    const ariaCurrent = isActive ? 'page' : '' as "page";
  
    return (
      <Link href={path} className={className} aria-current={ariaCurrent}>
        {text}
      </Link>
    );
  }

  const NavMenu = () => {

    return (
      <>
        {generateLink('/', 'Dashboard', currentPage === '/')}
        {generateLink('/registration', 'Registration', currentPage === '/registration')}
        {generateLink('/employees', 'All employees', currentPage === '/employees')}
      </>
    )
  }
  
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Image className="h-8 w-8" src={logo} alt="" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavMenu />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          <Link href={'/'} className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</Link>
          <Link href={'/'} className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Registration</Link>
        </div>
      </div>
    </nav>
  )
}