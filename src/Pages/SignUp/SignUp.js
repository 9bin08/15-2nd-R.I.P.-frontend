import React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { KAKAO_SIGNUP } from "../../config";
const { Kakao } = window;

function SignUp() {
  const history = useHistory();

  const kakaoLogin = () => {
    Kakao.Auth.login({
      success: function (authObj) {
        fetch(KAKAO_SIGNUP, {
          method: "POST",
          body: JSON.stringify({
            kakao_access_token: authObj.access_token,
          }),
        })
          .then(res => res.json())
          .then(res => {
            localStorage.setItem("kakao_access_token", res.ACCESS_TOKEN);
            if (res.ACCESS_TOKEN) {
              alert("KAKAO LOGIN SUCCESS");
              history.push("/SignIn");
            } else {
              alert("KAKAO LOGIN FAIL");
            }
          });
      },
      fail: function (err) {
        alert(JSON.stringify(err));
      },
    });
  };

  return (
    <div>
      <FullSignUp>
        <div className="signUpContainer">
          {HARD_CODING.map((element, index) => (
            <div key={index} className="explainSignUp">
              {element.title}
              <div className="subtitleSignUp">{element.subtitle}</div>
            </div>
          ))}
          <button className="signUpBtn" onClick={kakaoLogin}>
            카카오톡으로 시작
          </button>
          <div className="socialLoginButton">
            <button className="underBtn">
              <Link to="/StandardSignUp">
                <img className="signUpImg" src="/images/mail.png" alt="mail" />
              </Link>
            </button>
            <button>
              <img
                className="signUpImg"
                src="/images/facebook2.png"
                alt="mail"
              />
            </button>
            <button className="realLogin">로그인</button>
          </div>
        </div>
      </FullSignUp>
    </div>
  );
}

const HARD_CODING = [
  {
    id: 1,
    title: "반가워요!",
  },
  {
    id: 2,
    subtitle: "지금 RIP 가입하시고",
  },
  {
    id: 3,
    subtitle: "쿠폰 받아가세요",
  },
];

export default SignUp;

const FullSignUp = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin: 0px auto;
  max-width: 808px;
  width: 100%;
  padding: 0px;
  min-height: 653px;

  .signUpContainer {
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 100px;

    .explainSignUp {
      font-size: 24px;
      font-weight: bold;
      line-height: 36px;
      letter-spacing: -0.72px;
      color: rgb(51, 51, 51);
    }
    .subtitleSignUp {
      margin-top: 5px;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.42px;
      color: rgb(153, 153, 153);
    }
  }
  .signUpBtn {
    width: 260px;
    height: 48px;
    line-height: 24px;
    padding: 0px 13px;
    background-color: rgb(251, 232, 80);
    text-align: center;
    cursor: pointer;
    border-radius: 10px;
    color: rgb(51, 51, 51);
    font-size: 16px;
    font-weight: 500;
    margin: 20px 0px;
    border: 1px solid rgb(251, 232, 80);

    &:focus {
      outline: none;
    }
    &:hover {
      background-color: #c9bc0a;
    }
  }
  .socialLoginButton {
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 260px;
    margin-left: 275px;

    .signUpImg {
      width: 18px;
      height: 18px;
    }

    button {
      width: 48px;
      height: 48px;
      line-height: normal;
      padding: 0px 13px;
      background-color: rgb(255, 255, 255);
      text-align: center;
      cursor: pointer;
      border: 1px solid rgb(238, 238, 238);
      border-radius: 10px;
      font-size: 14px;
      &:focus {
        outline: none;
      }
      &:hover {
        background-color: #ebebeb;
      }
    }
    .realLogin {
      width: 138px;
      height: 48px;
      line-height: 20px;
      padding: 0px 13px;
      background-color: rgb(255, 255, 255);
      text-align: center;
      cursor: pointer;
      border: 1px solid rgb(238, 238, 238);
      border-radius: 10px;
      color: rgb(51, 51, 51);
      font-size: 14px;
      outline: none;

      &:hover {
        background-color: #ebebeb;
      }
    }
  }
`;
