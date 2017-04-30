import React from "react";

import Link from "next/link";

const NavBar = () => (
  <ul>
    <li><Link href="/"><a>Home</a></Link></li>
    <li><Link href="/about"><a>About</a></Link></li>
    <li><Link href="/ferienwohnungen"><a>Ferienwohnungen</a></Link></li>
    <style jsx>
      {`
      ul{
        list-style-type: none;
        background-color: skyblue;
        display:flex;
        padding:0;
        margin: 0;
        width:100vw;
        flex-wrap: wrap;
      }

      ul li{
        font-weight: 500;
        padding: .25em 0 .25em .8em
      }

      a{
        color:white;
        text-decoration: none;
        font-size: 2em;
      }
    `}
    </style>
  </ul>
);

export default NavBar;
