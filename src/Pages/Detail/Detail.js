import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import ContactUs from "./ContactUs";
import DetailNextProcess from "./DetailNextProcess";
import KakaoMaps from "./KakaoMaps";
import { Link, useHistory, withRouter } from "react-router-dom";
import Review from "./Review";
import { SERVER } from "../../config";

function Detail(props) {
  const [detailFripData, setDetailFripData] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [select, setSelect] = useState("");
  const history = useHistory();

  useEffect(() => {
    getLoadDetailData();
  }, [detailFripData]);

  const getLoadDetailData = async () => {
    const result = await axios.get(
      `${SERVER}/product/${props.match.params.id}`
    );

    setDetailFripData(result.data.product_detail);
    setIsLoading(false);
  };

  return (
    <>
      <Center>
        <Firp>
          {!isLoading && (
            <FripContainer>
              <img
                src={detailFripData.image_urls[0].image_url}
                alt={detailFripData.title}
              />
              <div className="fripInfo">
                <div className="fripDetail">
                  <div>
                    <span className="fripTitle">
                      {detailFripData.title} / {detailFripData.subtitle}
                    </span>
                    <br />
                    <span className="fripSubTitle"></span>
                    <br />
                    <span className="fripPrice">
                      {Math.floor(detailFripData.price).toLocaleString()}원
                    </span>
                  </div>
                  <span className="fripNotice">
                    유효기간 : 구매일로부터 30일까지
                  </span>
                </div>
                <div className="host">
                  <img
                    className="hostImg"
                    src="/images/Host_784_8261_1608521624.jpeg"
                    alt="host"
                  />
                  <div className="hostInfo">
                    <div className="hostDetail">
                      <h3>{detailFripData.host.host_name} ＞ </h3>
                      <span>프립 {detailFripData.host.frip_count}</span>
                      <span>후기 {detailFripData.host.review_count}</span>
                    </div>
                    <div>
                      <img
                        src={
                          detailFripData.bookmark
                            ? "/images/redbookmark.svg"
                            : "/images/bookmark.png"
                        }
                        alt="mark"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </FripContainer>
          )}
        </Firp>
        <section>
          <div className="review">
            <div>
              <div className="reviewInfo">
                <img src="/images/다운로드 (12).svg" alt="star" />
                <img src="/images/다운로드 (12).svg" alt="star" />
                <img src="/images/다운로드 (12).svg" alt="star" />
                <img src="/images/다운로드 (12).svg" alt="star" />
                <img src="/images/다운로드 (12).svg" alt="star" />
                <h2>{detailFripData.star_rating}</h2>
                <span> {detailFripData.hit_count}개 후기</span>
              </div>
            </div>
            <span>
              경험한 대원의 {detailFripData.hit_count}명이{" "}
              {detailFripData.five_star_count}점을 줬어요 !
            </span>
          </div>
          <div className="reviewSlide">
            <Review
              reviewcount={detailFripData.hit_count}
              id={props.match.params.id}
            />
          </div>
        </section>
        <section className="fripContents">
          <img
            src="/images/Fortnite-Poster-design-2-insta.jpg"
            alt="contentImg"
          />
        </section>
        <section className="fripMap">
          {!isLoading && (
            <KakaoMaps address={detailFripData.activity_address} />
          )}
        </section>
        <ContactUs title="자주 묻는 질문" />
        <Link
          to={{
            pathname: `/qna`,
            state: { detailFripData: detailFripData },
          }}
        >
          <ContactUs title="문의하기" />
        </Link>

        <Link
          to={{
            pathname: `/detailReview`,
            state: { detailFripData: detailFripData },
          }}
        >
          <ContactUs title="후기 쓰기" />
        </Link>
      </Center>
      <DetailNextProcess
        detailFripData={detailFripData}
        select={select}
        setSelect={setSelect}
      />
    </>
  );
}

export default withRouter(Detail);

const Center = styled.div`
  margin: 0 auto;
  width: 828px;
  padding: 40px 30px 30px;

  a {
    text-decoration: none;
    color: #000;
  }

  .review {
    margin-top: 60px;
    display: flex;
    flex-direction: column;

    .reviewInfo {
      display: flex;
      height: 24px;
      align-items: center;
      flex-direction: row;
      margin-bottom: 15px;

      h2 {
        font-weight: 800;
        padding-top: 2px;
        margin: 0px 10px;
      }

      span {
        padding-top: 2px;
        margin: 0px 10px;
        color: #aaa;
      }
    }

    span {
      font-size: 18px;
    }
  }

  .reviewSlide {
    height: 581px;
  }

  .fripContents {
    display: block;
    width: 100%;
    height: 900px;
    margin-top: 100px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .fripMap {
    height: 522px;
    display: block;
  }
`;

const Firp = styled.div`
  display: flex;
  font-weight: 500;
  cursor: pointer;
  margin-top: 30px;
  font-size: 12px;
  line-height: 16px;
  color: rgb(170, 170, 170);
`;

const FripContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 29px;

  img {
    max-width: 375px;
    height: 375px;
    border-radius: 5px;
  }

  .fripInfo {
    padding: 0px 0px 0px 20px;
    display: flex;
    flex-direction: column;
    height: 375px;

    .fripDetail {
      width: 369px;
      height: 294px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .fripNotice {
        padding-bottom: 10px;
      }
    }

    .fripTitle {
      margin: 0px;
      max-width: 320px;
      line-height: 28px;
      font-size: 21px;
      letter-spacing: -0.6px;
      word-break: keep-all;
      overflow: hidden;
      text-overflow: ellipsis;
      color: rgb(51, 51, 51);
    }

    .fripSubTitle {
      font-size: 12px;
      color: #aaa;
    }

    .fripPrice {
      font-size: 24px;
      font-weight: bold;
      line-height: 36px;
      letter-spacing: -0.72px;
      color: rgb(51, 51, 51);
      margin-right: 6px;
    }

    .host {
      width: 369px;
      height: 81px;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding-top: 10px;
      border-top: 1px solid #ddd;

      > img {
        width: 56px;
        height: 56px;
        border-radius: 100%;
        margin-right: 20px;
      }

      .hostInfo {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        line-height: 24px;

        img {
          width: 25px;
          height: 25px;
          line-height: normal;
          padding: 0px;
          background-color: transparent;
          text-align: center;
          cursor: pointer;
          border-radius: 5px;
          font-size: 14px;
          outline: none;
        }

        .hostDetail {
          max-width: 212px;

          h3 {
            display: block;
            font-weight: bold;
            font-size: 18px;
            line-height: 26px;
            letter-spacing: -0.54px;
            color: rgb(51, 51, 51);
          }

          span {
            margin-right: 10px;
          }
        }
      }
    }
  }
`;
