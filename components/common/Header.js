import { HeaderStyle } from "@/styles/commonStyle/header-styled";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [thisLiIndex, SetThisLiIndex] = useState("");
  return (
    <HeaderStyle thisLiIndex={thisLiIndex}>
      <div className="inner">
        <div className="logo_box">
          <div className="logo">
            {/* <Image src="/image/logo2.png" width={97} height={65}></Image> */}
          </div>
          <div className="logo_name">Lambda PortFolio</div>
        </div>
        {/* <ul className="gnb">
          <li>
            <span>Home</span>
          </li>
          <li>
            <span>PortFolio</span>
          </li>
          <li>
            <span>About-Me</span>
          </li>
        </ul> */}
      </div>
    </HeaderStyle>
  );
};

export default Header;
