import React from "react";

let year = new Date().getFullYear;

function Footer() {
  return (
    <footer>
      <p>Copyright By Shambhu {year}</p>
    </footer>
  );
}

export default Footer;
