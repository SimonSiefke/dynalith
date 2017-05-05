import React from "react";

import NavBar from "./NavBar";

const Layout = () => (
  <div>
    <NavBar />
    <style jsx>
      {`


      span{
        position: absolute;
        text-align: center;
        background-color:rgba(255,255,255,0.7);
        bottom:0;
        left:0;
        padding: .25em .5em;
        border-radius:10px;
        margin:1em;
        font-size: 2.25em;
        font-family: "Lobster Two", sans-serif;
        }
    `}
    </style>
    <style jsx global>{`
     body {
       margin:0;
     }
   `}</style>
  </div>
);

export default Layout;
