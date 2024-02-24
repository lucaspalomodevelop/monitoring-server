import React from "react";


const { default: Sidebar } = require("../sidebar/sidebar");

function Shell(props) {
  console.log(props);
  return (
    <div>
      <Sidebar />
      {props.children}
    </div>
  );
}

export default Shell;
