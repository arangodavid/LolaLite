"use client";

import { useState } from "react";
import HeaderNav from "./HeaderNav";

const HeaderNavContainer = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const toggleMenu = () => setMenuOpen((open) => !open);

  const onHamburgerKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleMenu();
    }
  };

  return (
    <HeaderNav
      menuOpen={menuOpen}
      toggleMenu={toggleMenu}
      onHamburgerKeyDown={onHamburgerKeyDown}
      closeMenu={closeMenu}
    />
  );
};

export default HeaderNavContainer;
