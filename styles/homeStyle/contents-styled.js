import styled from "@emotion/styled";

export const ContentsStyle = styled.div`
  width: 100%;
  height: auto;
  background: #101725;
  .inner {
    display: flex;
    flex-direction: column;
    padding-top: 50px;
    padding-bottom: 50px;
    margin: 0 auto;
    width: 80%;
    height: auto;
    .head {
      opacity: 0;
      transition: opacity 0.2s ease;
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 300px;
      .desc {
        padding-left: 20px;
        border-left: 5px solid #fff;
        display: flex;
        flex-direction: column;
        color: #fff;
        font-family: "LINESeedKR-Bd";
        .big {
          font-size: 3.5rem;
        }
        .mini {
          font-size: 1.5rem;
        }
        .sns_link {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 25px;
          width: 100%;
          height: 100%;
          li {
            display: flex;
            width: 100%;
            height: 30px;
            background: rgba(133, 133, 230);
            border-radius: 15px;
            cursor: pointer;
            transition-duration: 0.1s;
            background: linear-gradient(
              90deg,
              rgba(133, 133, 230, 0.4) 24%,
              rgba(0, 212, 255, 0) 100%
            );
            .sns_img {
              width: 30px;
              height: 100%;
            }
            .sns_title {
              display: flex;
              flex-direction: column;
              justify-content: center;
              padding-left: 10px;
              width: auto;
              height: 100%;
              font-size: 1.3rem;
            }
            &:hover {
              background: rgba(133, 133, 230, 0.8);
            }
          }
        }
      }
      .profile_img_box {
        display: flex;
        justify-content: flex-end;
        width: 50%;
        height: 100%;
        padding-right: 100px;
      }
    }
    ._visible {
      opacity: 1;
    }
    .mydesc {
      opacity: 0;
      transition: opacity 1s ease;
      margin-top: 50px;
      width: 100%;
      .title {
        font-size: 2.5rem;
        font-weight: bold;
        color: #fff;
        border-bottom: 1px solid #fff;
      }
      .text {
        padding-top: 10px;
        color: #fff;
        font-size: 1.6em;
        line-height: 25px;
        font-family: "LINESeedKR-Bd";
      }
      .skill_bar_list {
        margin-top: 15px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        width: 100%;
        height: auto;
        li {
          display: flex;
          position: relative;
          width: 100%;
          height: 225px;
          border-radius: 15px;
          overflow: hidden;
          background: #ededed;
          box-shadow: 0px 0px 0px 2px inset #fff;
          .skill_img {
            position: relative;
            width: 125px;
            height: 100%;
            background: #b5e1df;
            img {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              height: 75%;
            }
          }
          .skill_text {
            padding: 10px;
            width: 80%;
            display: flex;
            flex-direction: column;
            .skill_title {
              display: block;
              width: 100%;
              font-size: 2rem;
              border-bottom: 1px solid #101725;
            }
            .text {
              color: #101725;
            }
          }
        }
      }
      .portFolio_list {
        margin-top: 15px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        width: 100%;
        height: auto;
        li {
          position: relative;
          margin-top: 10px;
          width: 100%;
          height: 300px;
          background: red;
          .title {
            width: 100%;
            height: 50px;
          }
          .image {
            position: absolute;
            top: 0px;
            left: 0px;
            img {
              width: 100%;
            }
          }
        }
      }
    }
    ._visible {
      opacity: 1;
    }
  }
`;
