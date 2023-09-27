import { ContentsStyle } from "@/styles/homeStyle/contents-styled";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Progress } from "@nextui-org/react";

const Contents = () => {
  const [isVisible, setIsVisible] = useState(false);

  const Progressdata = [
    {
      data: 95,
      name: "HTML",
      pic: "/image/html.png",
      text: "Hypertext Markup Language를 사용하여 웹페이지의 틀을 구성하고 섹션구성 및 마크업 작업을 수행할 수 있습니다.",
    },
    {
      data: 95,
      name: "CSS",
      pic: "/image/css.png",
      text: "마크업된 웹페이지에 스타일을 입히거나 UI/UX등을 고려하여 다양한 레이아웃구성 및 반응형으로 구성할 수 있습니다. 일반 CSS외 Scss , Styled-Component , Css-module 여려가지 CSS 관련 라이브러리 도 활용하여 개발할 수 있습니다. ",
    },
    {
      data: 80,
      name: "JAVA-SCRIPT",
      pic: "/image/js.png",
      text: "JavsScript를 활용하여 웹페이지를 동적으로 구현할 수 있으며 애니메이션 혹은 데이터쓰고 읽기 등을 활용할 수 있습니다.",
    },
    {
      data: 80,
      name: "REACT",
      pic: "/image/react.png",
      text: "React를 활용하여 Single Page Applicaiton으로 개발할 수 있고 백앤드(Spring-boot)에서 받아오는 Swagger를 이용한 데이터를 받아 읽고쓰고 등 상태관리 라이브러리(Redux-toolkit)등을 활용한 프로젝트를 수행할 수 있습니다.",
    },
    {
      data: 75,
      name: "REDUX",
      pic: "/image/redux.png",
      text: "상태관리 라이브러리인 Redux-toolkit 등을 활용해서 다양한 방식의 상태를 관리하거나 전역으로 데이터를 관리하는 등의 작업이 가능합니다.",
    },
    { data: 82, name: "데이터활용" },
    { data: 72, name: "라이브러리 활용" },
    { data: 68, name: "디자인" },
  ];

  const PortFolioData = [
    {
      name: "캠핑스모어",
      giturl: "???",
      pic: "",
    },
  ];
  console.log(Progressdata);
  useEffect(() => {
    setIsVisible(true);
  });
  return (
    <ContentsStyle isVisible={isVisible}>
      <div className="inner">
        <div className={`head ${isVisible ? "_visible" : ""}`}>
          <div className="desc">
            <span className="big">
              안녕하세요
              <br />
              프론트엔드 개발자 휇 입니다
            </span>
            <span className="mini">
              어쩌고 저쩌고 거시기 저시기 여기엔 뭘 적나
            </span>
            <ul className="sns_link">
              <li>
                <div className="sns_img">
                  <Image
                    src="/image/Notion_App_Logo.png"
                    width={30}
                    height={30}
                  ></Image>
                </div>
                <div className="sns_title">정리 노션</div>
              </li>
              <li>
                <div className="sns_img">
                  <Image
                    src="/image/github_PNG84.png"
                    width={30}
                    height={30}
                  ></Image>
                </div>
                <div className="sns_title">깃허브 소스</div>
              </li>
            </ul>
          </div>
          <div className="profile_img_box">
            <div className="profile_img">
              <Image src="/image/myimg.png" width={300} height={300}></Image>
            </div>
          </div>
        </div>
        <div className={`mydesc ${isVisible ? "_visible" : ""}`}>
          <span className="title">ABOUT ME</span>
          <p className="text">
            저는 웹개발 과정을 배우고 있고 현재 프론트엔드를 공부하고 있습니다.
            <br />
            컴퓨터 관련 분야로 대학을 진학하였고 컴퓨터학부 학과과정을
            진행하면서 그래픽과 웹퍼블리싱,프론트엔드에 많은 흥미가 있어서
            웹디자인기능사 자격증을 취득하고 학원을 다니고
            <br /> 독학을 하며 개인 프로젝트도 만드는 등 해당 분야를 깊게
            공부하였습니다.
            <br />
            <br />
            프론트엔드 과정을 배우면서 JavaScript 와 React의 정의 각종 상태관리
            라이브러리 Redux 와 스타일을 적용하는 Css ,Scss , Styled-Component ,
            Css-module 등을 활용하면서 프로젝르를 진행하였습니다.
            <br />
            이외로 실제 백앤드(SpringBoot) 팀과 협업 프로젝트를 진행하며
            데이터를 읽고 쓰는 방법을 Asiox 또는 Proxy로 구축하여 API를 활용한
            프로젝트 개발도 진행하였습니다.
            <br />
            상태관리 라이브러리인 Redux-toolkit을 실제로 사용해봤고 프로젝트에
            적용해본적 있으며 DaumPost API , KaKaoOepnApi , React-Calendar ,
            Cookie 등 프로젝트에 필요한
            <br />
            라이브러리도 적응 활용해본 적이 있습니다.
          </p>
        </div>
        <div className={`mydesc ${isVisible ? "_visible" : ""}`}>
          <span className="title">SKILL</span>
          <ul className="skill_bar_list">
            {Progressdata.map((item, index) => (
              <li key={index}>
                <div className="skill_img">
                  <img src={item.pic}></img>
                </div>
                <div className="skill_text">
                  <div className="skill_title">{item.name}</div>
                  <div className="text">{item.text}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={`mydesc ${isVisible ? "_visible" : ""}`}>
          <span className="title">PortFolio</span>
          <ul className="portFolio_list">
            <li>
              <div className="title"></div>
              <div className="image"></div>
              <div className="gitUrl"></div>
              <div className="check_detail"></div>
            </li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </ContentsStyle>
  );
};

export default Contents;
