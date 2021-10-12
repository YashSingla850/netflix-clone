import React, { useEffect, useState } from "react";
import "./nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 130) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav__blank"}`}>
      <img className="nav__logo" src="./images/2.png" alt="logo" />
      <img className="nav__avatar" src="./images/Netflix-avatar.png" alt="" />
    </div>
  );
}

export default Nav;
