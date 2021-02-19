import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { SERVER } from "../../config";

function DetailNextProcessOptionSelect({
  title,
  showProcessModal,
  setShowProcessModal,
  select,
  setSelect,
  detailFripData,
  props,
}) {
  const [selectOption, setSelectOption] = useState([]);

  useEffect(() => {
    getLoadDetailData();
  }, [selectOption]);

  const getLoadDetailData = async () => {
    const result = await axios.get(
      `${SERVER}/product/${detailFripData.id}/option`
    );
    setSelectOption(result.data.product_option);
  };

  const selectDate = e => {
    setSelect(e.target.firstChild.data);
  };

  const resetSelect = () => {
    setSelect("");
  };

  const closeProcessModal = () => {
    setShowProcessModal(!showProcessModal);
  };

  return (
    <Modal>
      <ModalContainer>
        <ModalHeader>
          <img
            src="/images/leftarrow.svg"
            alt="arrow"
            onClick={closeProcessModal}
          />
        </ModalHeader>
        <Option>
          <ul className="menu">
            <li>
              <div className="title">
                <label htmlFor="menuBtn" className="labelBtn">
                  {title}
                </label>
              </div>
            </li>
          </ul>
        </Option>
        <Booking>
          <ul className="menu">
            <li>
              <input type="checkbox" />
              <div className="title">
                {select ? (
                  <>
                    <TrueSelect>
                      <label>일정</label>
                      <span className="selectDate" onClick={resetSelect}>
                        {select} (월요일)
                      </span>
                      <div className="datePrice">
                        {select} (월요일)
                        <span>참가비 (1인)</span>
                        <span className="much">
                          {Math.floor(detailFripData.price).toLocaleString()} 원
                        </span>
                      </div>
                    </TrueSelect>
                  </>
                ) : (
                  <>
                    <label htmlFor="menuBtn" className="labelBtn">
                      일정
                    </label>
                    <img src="/images/다운로드 (13).svg" alt="arrow" />
                  </>
                )}
              </div>
              {!select && (
                <section className="subMenu">
                  {selectOption.map((date, index) => (
                    <div
                      key={date.id}
                      datafis={date.due_date}
                      onClick={selectDate}
                    >
                      <div>
                        {date.due_date} (월요일)
                        <br /> ~ {date.end_date} (금요일)
                        <br />
                        <span>
                          {date.headcount} / {date.capacity} | 신청 마감{" "}
                          {date.start_date}
                        </span>
                      </div>
                    </div>
                  ))}
                </section>
              )}
            </li>
          </ul>
        </Booking>
      </ModalContainer>
    </Modal>
  );
}

export default DetailNextProcessOptionSelect;

const Modal = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  z-index: 100;
`;

const ModalContainer = styled.div`
  width: 828px;
  height: 100vh;
  margin: 0 auto;
  background-color: #fff;
  z-index: 10;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  height: 69px;
`;

const Booking = styled.div`
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  max-width: 828px;

  label {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: 800;
    padding-top: 2px;
    margin: 0px 10px;
    height: 63px;
    font-size: 14px;
    color: #aaa;
  }
  input {
    width: 828px;
    height: 60px;
    position: absolute;
    overflow: hidden;
    cursor: pointer;
    opacity: 0;
  }

  .subMenu {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    font-size: 13px;
    line-height: 1.8;

    div {
      padding: 16px;
      background-color: rgb(249, 249, 249);
      cursor: pointer;

      span {
        font-size: 13px;
        color: #aaa;
      }
    }
  }

  .title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .menu .subMenu {
    padding: 0;
    margin: 0;
    height: 0px;
    transform: scaleY(0);
    transform-origin: top;
    transition: all 0.5s;
  }

  .subMenu {
    display: block;
    height: 200px;
    background-color: #f9f9f9;
  }

  input:checked ~ .subMenu {
    transform: scaleY(1);
    display: block;
    height: 300px;
  }

  .visiable {
    display: none;
  }
`;

const Option = styled(Booking)`
  cursor: default;
  label {
    font-size: 15px;
    color: #000;
  }
`;

const TrueSelect = styled.div`
  display: flex;
  flex-direction: column;

  .selectDate {
    font-size: 16px;
    color: #000;
    margin: 20px;
  }

  .datePrice {
    width: 728px;
    margin: 20px auto;
    padding: 50px;
    background-color: rgb(249, 249, 249);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 15px;

    .much {
      font-weight: 800;
      color: rgb(51, 151, 255);
    }
  }
`;
