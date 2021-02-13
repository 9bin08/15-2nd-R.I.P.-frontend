import React, { useState } from "react";
import { Button, Radio, Modal } from "antd";
import styled from "styled-components";
import ChatModal from "./ChatModal";

function RealtimeMsg() {
  const [size, setSize] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <RealTimeContainer>
        <Button type="primary" shape="circle" onClick={showModal}>
          문의하기
        </Button>
      </RealTimeContainer>
      {isModalVisible && <ChatModal isModalVisible={isModalVisible} />}
    </>
  );
}

export default RealtimeMsg;

const RealTimeContainer = styled.div`
  position: fixed;
  bottom: 50px;
  right: 50px;
  button {
    width: 70px;
    height: 70px;
    border: none;
    border-radius: 50%;
    outline: none;
    cursor: pointer;
    background-color: #61c8ff;
    opacity: 0.8;
    color: #fff;
  }
`;
