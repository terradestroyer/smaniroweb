import NavItemDes from "./navbar_item_desktop";
import Link from "next/link";
import Image from "next/image";
import NavItemMob from "./navbar_item_mobile";
import { FaBars, FaBell, FaUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="sticky top-0 bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-14 items-center justify-between">
          <div className="absolute group/menu inset-y-0 left-0 flex items-center md:hidden">
            {/* Mobile menu button*/}
            <button type="button" className="relative peer/menu inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              {/*Icon when menu is closed. Menu open: "hidden", Menu closed: "block"*/}
              <FaBars className="h-7 w-7" />
            </button>

            <div className="group-hover/menu:left-0 w-96 fixed -left-96 top-12 bg-gray-800  transition-all ease-out" id="mobile-menu">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                <NavItemMob href="#">Home</NavItemMob>
                <NavItemMob href="#" sub={[{ href: "#", children: "RKJP" }, { href: "#", children: "RKJM" }, { href: "#", children: "RKJT" }]}>Program Kerja</NavItemMob>
                <NavItemMob href="#">TPPK</NavItemMob>
                <NavItemMob href="#">Prestasi</NavItemMob>
                <NavItemMob href="#">Sambutan</NavItemMob>
                <NavItemMob href="#">Berita</NavItemMob>
                <NavItemMob href="#">Profil</NavItemMob>
                <NavItemMob href="#">Agenda</NavItemMob>
                <NavItemMob href="#">Fitur</NavItemMob>
                <NavItemMob href="#">TPPK</NavItemMob>
                <NavItemMob href="#">Prestasi</NavItemMob>
                <NavItemMob href="#">Sambutan</NavItemMob>
                <NavItemMob href="#">Berita</NavItemMob>
                <NavItemMob href="#">Profil</NavItemMob>
                <NavItemMob href="#">Agenda</NavItemMob>
                <NavItemMob href="#">Fitur</NavItemMob>
                <NavItemMob href="#">TPPK</NavItemMob>
                <NavItemMob href="#">Prestasi</NavItemMob>
                <NavItemMob href="#">Sambutan</NavItemMob>
                <NavItemMob href="#">Berita</NavItemMob>
                <NavItemMob href="#">Profil</NavItemMob>
                <NavItemMob href="#">Agenda</NavItemMob>
                <NavItemMob href="#">Fitur</NavItemMob>
              </div>
            </div>


          </div>
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Image width={44} height={44} src="/logo_smaniro_round.webp" alt="Smaniro" />
            </div>
            <div className="hidden md:ml-6 md:block">
              <div className="flex lg:space-x-4">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                <NavItemDes href="#">Home</NavItemDes>
                <NavItemDes href="#">Program Kerja</NavItemDes>
                <NavItemDes href="#">TPPK</NavItemDes>
                <NavItemDes href="#">Prestasi</NavItemDes>
                <NavItemDes href="#">Sambutan</NavItemDes>
                <NavItemDes href="#" sub={[{ href: "#", children: "Semprul" }, { href: "#", children: "Kampret" }]}>Berita</NavItemDes>
                <NavItemDes href="#">Profil</NavItemDes>
                <NavItemDes href="#">Agenda</NavItemDes>
                <NavItemDes href="#">Fitur</NavItemDes>
              </div>
            </div>
          </div>
          {/* Notification icon */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">View notifications</span>
              <FaBell className="h-7 w-7" />
            </button>

            {/* Profile dropdown */}
            <div className="relative group ml-3">
              <button type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none hover:ring-2 hover:ring-white hover:ring-offset-2 hover:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">Open user menu</span>
                <FaUserCircle className="h-7 w-7" />
              </button>

              <div className="scale-y-0 group-hover:scale-y-100 absolute right-0 z-10 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-transform ease-out" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex={-1}>
                {/* Active: "bg-gray-100", Not Active: "" */}
                <Link href="www.google.com" className="block px-4 py-2 text-sm text-gray-700 hover:text-white hover:bg-blue-500" role="menuitem" tabIndex={-1} id="user-menu-item-0">Your Profile</Link>
                <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-white hover:bg-blue-500" role="menuitem" tabIndex={-1} id="user-menu-item-1">Settings</Link>
                <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-white hover:bg-blue-500" role="menuitem" tabIndex={-1} id="user-menu-item-2">Sign out</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}

    </nav>
  );
}

export default Navbar;