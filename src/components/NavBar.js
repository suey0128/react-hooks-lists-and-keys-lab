import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linkItorator = links.map((link) => {
    return <a key={link} href= {"#"+link}>{link}</a>
  });

  return (
    <nav>
      {linkItorator}
    </nav>
  );
}

export default NavBar;
