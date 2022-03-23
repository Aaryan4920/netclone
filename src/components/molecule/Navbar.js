import React from "react";
import "../../styles/Navbar.css";
import { Icon } from "@iconify/react";
import { Buttons } from "../atom/Buttons";

function Navbar() {
  return (
    <div className="nav">
      <Icon icon="logos:netflix" className="nav_logo" />
      <div className="nav_buttons">
        <Buttons classname='nav_button_login' buttonDiscription='Login' />
        <Buttons classname='nav_button_signup' buttonDiscription='Sign In' />
      </div>
    </div>
  );
}

export default Navbar;
