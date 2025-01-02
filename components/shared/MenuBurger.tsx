'use client';
import { useState, useEffect } from 'react';
import {
  NavigationMenu,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import { Menu, X } from 'lucide-react';

const MenuBurger = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  // Ferme le menu automatiquement si la largeur dépasse 640px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640 && isOpen) {
        setIsOpen(false);
      }
    };

    // Ajoute un écouteur sur le redimensionnement
    window.addEventListener('resize', handleResize);

    // Nettoie l'écouteur lorsqu'on démonte le composant
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  return (
    <div>
      {isOpen ? (
        <NavigationMenu className="absolute left-0 min-w-full top-0 flex-col sm:flex-row justify-between py-8 px-5 bg-black text-2xl">
          <NavigationMenuLink
            href="/"
            className="mb-3 sm:mb-0 sm:mr-3 hover:text-sky-500"
          >
            Home
          </NavigationMenuLink>
          <NavigationMenuLink
            href="/#about"
            className="mb-3 sm:mb-0 sm:mr-3 hover:text-sky-500"
          >
            About
          </NavigationMenuLink>
          <NavigationMenuLink
            href="/#projects"
            className="mb-3 sm:mb-0 sm:mr-3 hover:text-sky-500"
          >
            Projects
          </NavigationMenuLink>
          <NavigationMenuLink
            href="/#contact"
            className="mb-8 sm:mb-0 hover:text-sky-500"
          >
            Contact
          </NavigationMenuLink>
          <X
            onClick={handleOpen}
            className="sm:hidden hover:text-sky-500 cursor-pointer"
          />
        </NavigationMenu>
      ) : (
        <Menu className="sm:hidden " onClick={handleOpen} />
      )}
    </div>
  );
};

export default MenuBurger;
