import React from 'react';
import { orbitronFont } from '@/app/fonts/fonts';
import {
  NavigationMenu,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import MenuBurger from '../shared/MenuBurger';
import BlurIn from '../ui/blur-in';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 left-4 w-full h-24 md:h-32 p-4 flex justify-between items-center backdrop-blur-lg brightness-100 z-10">
      <Link href={'/'}>
        <BlurIn
          word="Florian Imbert"
          className={`${orbitronFont.className} text-2xl md:text-3xl font-bold`}
        />
      </Link>
      <div className=" md:max-w-6xl flex justify-between items-center ">
        <div>
          <NavigationMenu className="hidden sm:block text-xl space-x-6">
            <NavigationMenuLink
              href="/"
              className="hover:opacity-60 hover:text-sky-500 fade-in delay-1"
            >
              Home
            </NavigationMenuLink>
            <NavigationMenuLink
              href="/#about"
              className="hover:opacity-60 hover:text-sky-500 fade-in delay-1"
            >
              About
            </NavigationMenuLink>
            <NavigationMenuLink
              href="/#projects"
              className="hover:opacity-60 hover:text-sky-500 fade-in delay-2"
            >
              Projects
            </NavigationMenuLink>
            <NavigationMenuLink
              href="/#contact"
              className="hover:opacity-60 hover:text-sky-500 fade-in delay-3"
            >
              Contact
            </NavigationMenuLink>
          </NavigationMenu>
        </div>
        <div>
          <MenuBurger />
        </div>
      </div>
    </header>
  );
};

export default Header;
