import styled from "@emotion/styled";

export const HeaderStyle = styled.div`
  display: flex;
  width: 100%;
  height: 65px;
  background: #101725;
  border-bottom: 2px solid rgba(255, 255, 255, 0.5);
  .inner {
    position: relative;
    display: flex;
    margin: 0 auto;
    width: 80%;
    height: 100%;
    .logo_box {
      display: flex;
      margin-right: 60px;
      width: auto;
      height: 100%;
      .logo {
        position: relative;
        width: 100px;
        height: 100%;
        background: url("/image/logo2.png") no-repeat center;
        background-size: 65%;
      }
      .logo_name {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: auto;
        height: 100%;
        color: #fff;
        padding-left: 15px;
        padding-top: 10px;
        font-size: 2rem;
        font-family: "GangwonEduPowerExtraBoldA";
        text-shadow: 2px 2px 2px #8585e6;
      }
    }
    .gnb {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-family: "GangwonEduPowerExtraBoldA";
      display: flex;
      gap: 15px;
      height: 100%;
      li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        color: #fff;
        font-size: 2.1rem;
        padding-top: 10px;
        cursor: pointer;
        transition-duration: 0.1s;
        &:hover {
          color: #8585e6;
        }
      }
    }
  }
`;
