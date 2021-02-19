import React, { Component } from "react";
import styled from "styled-components";

class FeedComment extends Component {
  constructor() {
    super();
    this.state = {
      commentValue: "",
      commentList: [],
    };
  }

  postDataToDb = () => {
    const commentValue = this.state;
    console.log(commentValue.commentValue);
    fetch("http://10.168.2.91:8000/board/feed/comment/2", {
      method: "POST",
      body: JSON.stringify({
        author_id: 1,
        review_id: 2,
        contents: commentValue.commentValue,
      }),
    });
  };

  //실행 시킴으로 postDataToDb가 실행되면 value값 전송
  onkeyPressEnter = e => {
    console.log(this.onkeyPressEnter);
    if (e.key === "Enter") {
      this.postDataToDb();
    }
  };

  //   토큰 없을 시 댓글 불가능
  haveLoginToken = () => {
    if (!localStorage.getItem("NICKNAME")) {
      alert("로그인이 필요합니다.");
    }
  };

  //댓글 삭제기능
  handleDelete = e => {
    const { commentList } = this.state;
    const delCommentBtnBox = commentList.filter(item => {
      return item.id !== Number(e.target.id);
    });
    this.setState({
      commentList: delCommentBtnBox,
    });
  };

  //댓글 기능
  addComment = e => {
    e.preventDefault();
    const { commentList, commentValue } = this.state;
    this.setState({
      commentList: [
        ...commentList,
        {
          id: commentList.length + 1,
          commentValue,
        },
      ],
      commentValue: "",
    });
  };

  //comment value값들
  handleCommenmtValue = e => {
    this.setState({
      commentValue: e.target.value,
    });
  };

  render() {
    return (
      <section>
        <MainTitle>댓글</MainTitle>
        <CommentListBox>
          <ul>
            {this.state.commentList.map(comment => {
              return (
                <ContentFullBox>
                  <span>
                    <img
                      className="userJpgForCommentList"
                      src="/images/boy.png"
                      alt="userJpg"
                    />
                  </span>
                  <span className="userNameComment">
                    <div className="userNickNameOn">
                      {localStorage.getItem("NICKNAME")}&nbsp;&nbsp;&nbsp;
                    </div>
                    <span className="showComment">{comment.commentValue}</span>
                  </span>
                  <span className="deleteBtn">
                    <button id={comment.id} onClick={this.handleDelete}>
                      X
                    </button>
                  </span>
                </ContentFullBox>
              );
            })}
          </ul>
        </CommentListBox>
        <TypeCommentSection>
          <span>
            <img src="/images/boy.png" alt="userImage" />
          </span>
          <span>
            <input
              value={this.state.commentValue}
              onChange={this.handleCommenmtValue}
              onClick={this.haveLoginToken}
              type="text"
              placeholder="댓글달기.."
              onKeyPress={this.onkeyPressEnter}
            />
          </span>
          <button onClick={this.addComment}>게시</button>
        </TypeCommentSection>
      </section>
    );
  }
}

export default FeedComment;

const MainTitle = styled.div`
  height: 50px;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.54px;
  color: rgb(51, 51, 51);
  padding-top: 20px;
  text-align: center;
  font-weight: bold;
  border-bottom: 1px solid #ebebeb;
`;

const CommentListBox = styled.div`
  height: 800px;
  max-width: 808px;
  margin: 0 auto;
  overflow: hidden;

  .userJpgForCommentList {
    width: 36px;
    height: 36px;
  }

  .userNickNameOn {
    font-size: 12px;
    letter-spacing: -0.43px;
    color: rgb(78, 89, 104);
    margin-bottom: 10px;
  }
`;

const TypeCommentSection = styled.form`
  display: flex;
  align-items: center;
  height: 70px;
  max-width: 808px;
  margin: 0 auto;
  border-top: 1px solid #ebebeb;

  img {
    width: 45px;
    height: 45px;
    margin-right: 15px;
    border-radius: 50%;
  }

  input {
    width: 580px;
    font-size: 14px;
    letter-spacing: -0.5px;
    line-height: 20px;
    color: rgb(78, 89, 104);
    border: 1px solid #35c5f0;
    border-radius: 22.5px;
    padding: 12px 50px 12px 15px;
    margin-right: 50px;

    &:focus {
      outline: none;
    }
  }
  button {
    display: inline-block;
    border: none;
    background: none;
    font: inherit;
    width: 85px;
    box-sizing: border-box;
    padding: 8px 0 10px;
    font-size: 15px;
    line-height: 21px;
    font-weight: 700;
    text-align: center;
    color: #fff;
    background-color: #35c5f0;
    border-radius: 4px;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }
`;

const ContentFullBox = styled.div`
  max-width: 808px;
  height: 90px;
  display: flex;
  align-items: center;

  .userNameComment {
    margin-left: 20px;
    .userNickNameOn {
      font-size: 12px;
      letter-spacing: -0.43px;
      color: rgb(78, 89, 104);
      margin-bottom: 3px;
    }

    .showComment {
      width: 550px;
      display: inline-block;
      font-size: 14px;
      line-height: 23px;
      padding: 10px 13px;
      letter-spacing: -0.5px;
      color: rgb(78, 89, 104);
      background-color: rgb(242, 243, 246);
      border-radius: 21.5px;
      margin-bottom: 4px;
    }
  }
  .deleteBtn {
    margin-left: 130px;
    button {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      background-color: #35c5f0;
      border: 1px solid #35c5f0;
      cursor: pointer;
      font-weight: 700;
      color: #fff;
      &:focus {
        outline: none;
      }
    }
  }
`;
