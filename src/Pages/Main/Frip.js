import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { MAINFRIP, SERVER } from "../../config";
import { withRouter, Link } from "react-router-dom";

function Frip(props) {
  const [mainFripData, setMainFripData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getFripData();
  }, [mainFripData]);

  const getFripData = async () => {
    const result = await axios(
      `${SERVER}/product/list?order=${props.order}&category=8&offset=0&limit=4`
    );
    setMainFripData(result.data.product_list);
    setIsLoading(false);
  };

  return (
    <Rip>
      {!isLoading &&
        mainFripData.map((item, index) => (
          <Link key={item.id} to={{ pathname: `detail/${item.id}` }}>
            <FripContainer>
              <FripImgarea>
                <img src={item.image_url} alt={item.title} id={item.id} />
                <img
                  id={item.bookmark}
                  className="bookmark"
                  src={
                    item.bookmark
                      ? "images/다운로드 (1).svg"
                      : "images/다운로드 (2).svg"
                  }
                  alt={item.title}
                />
              </FripImgarea>
              <FripInfo>
                <span className="fripsubTitle">{item.subtitle}</span>
                <span className="fripTitlePrice">{item.title}</span>
                <span className="fripTitlePrice">
                  {Math.floor(item.price).toLocaleString()} 원
                </span>
                <span className="fripRating">👑{item.star_rating}</span>
              </FripInfo>
            </FripContainer>
          </Link>
        ))}
    </Rip>
  );
}

export default withRouter(Frip);

const Rip = styled.div`
  display: flex;
  font-weight: 500;
  cursor: pointer;
  margin-top: 30px;
  font-size: 12px;
  line-height: 16px;
  color: rgb(170, 170, 170);

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const FripContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 29px;

  img {
    width: 180px;
    height: 180px;
    border-radius: 5px;
  }
`;

const FripImgarea = styled.div`
  position: relative;

  .bookmark {
    position: absolute;
    width: 20px;
    height: 18px;
    top: 10px;
    right: 10px;
  }
`;

const FripInfo = styled(FripContainer)`
  margin: 0;

  .fripsubTitle {
    font-size: 12px;
    margin-top: 14px;
  }

  .fripTitlePrice {
    font-size: 14px;
    margin-top: 10px;
    color: #000;
  }
  .fripRating {
    margin-top: 5px;
  }
`;
