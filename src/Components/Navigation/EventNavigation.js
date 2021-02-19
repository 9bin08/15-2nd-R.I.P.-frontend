import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function EventNavigation() {
  const [data, setData] = useState([]);

  return (
    <EventNavBar>
      <div className="subNaviContents">
        <Link to={{ pathname: "/Activity" }}>
          <span className="subNaviTitle">액티비티</span>
        </Link>
        <span className="subNaviTitle">배움</span>
        <span className="subNaviTitle">건강 뷰티</span>
        <span className="subNaviTitle">모임</span>
        <div className="subNaviSubTitle">
          {SUB_NAVI.map((element, index) => {
            return (
              <span className="subNaviElement" key={index}>
                {element}
              </span>
            );
          })}
        </div>
      </div>
    </EventNavBar>
  );
}

const SUB_NAVI = [
  "아웃도어",
  "서핑",
  "스포츠",
  "수상레져",
  "테마파크",
  "워터파크",
  "투어",
  "공연",
  "실내체험",
];

export default EventNavigation;

const EventNavBar = styled.div`
  height: 137px;
  background: linear-gradient(279deg, rgb(98, 201, 255), rgb(51, 151, 255));

  a {
    text-decoration: none;
    color: inherit;
  }
  .subNaviContents {
    max-width: 808px;
    margin: 0 auto;
    padding-top: 25px;
    height: 137px;

    .subNaviTitle {
      color: #fff;
      font-weight: bold;
      font-size: 20px;
      padding-right: 20px;
      padding-bottom: 5px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
      cursor: pointer;
      &:hover {
        color: #27d3db;
      }
    }
    .subNaviSubTitle {
      color: #fff;
      margin-top: 30px;
      cursor: pointer;

      .subNaviElement {
        padding-right: 20px;
        font-size: 12px;
        line-height: 18px;

        &:hover {
          color: #27d3db;
        }
      }
    }
  }
`;
