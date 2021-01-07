import React, { useState } from "react";
import styled from "styled-components";
// import { MAINFRIP } from "../../config";

function ActivityCard({ product, isLoading }) {
  return (
    <Rip>
      {!isLoading &&
        product.map((item, index) => (
          <FripContainer key={index}>
            <FripImgarea>
              <img src={item.image_url} alt={item.title} />
              <img
                id={item.bookmark}
                className="bookmark"
                src="/images/bookmark.png"
                alt={item.title}
                bookmark={item.bookmark}
              />
            </FripImgarea>
            <FripInfo>
              <span className="fripsubTitle">{item.subtitle}</span>
              <span className="fripTitlePrice">{item.title}</span>
              <span className="fripTitlePrice">{item.price}원</span>
              <span className="fripRating">👑{item.star_rating} / 5</span>
            </FripInfo>
          </FripContainer>
        ))}
    </Rip>
  );
}

export default ActivityCard;

const Rip = styled.div`
  display: flex;
  font-weight: 500;
  cursor: pointer;
  margin-top: 30px;
  font-size: 12px;
  line-height: 16px;
  color: rgb(170, 170, 170);
  display: grid;
  justify-content: space-between;
  grid-template-rows: repeat(5, 330px);
  grid-template-columns: repeat(4, 180.75px);
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
    right: -20px;
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
