import React, { useEffect, useState } from "react";
import "./css/mypageStyle.scss";
import MypageHeader from "./MypageHeader";
import { useDispatch, useSelector } from "react-redux";
import { getNickname } from "../../modules/redux/mypageSlice";
import { useNavigate } from "react-router-dom";
import NicknameModal from "../modal/NicknameModla";
import PasswordModal from "../modal/PasswordModal";
import { removeCookie, setCookie } from "../../shared/Cookie";

function Mypage(){
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [nicknameModal, setNicknameModal] = useState(false);
  const [passwordModal, setPasswordModal] = useState(false);
  const [modalBg, setModalBg] = useState(false);
  const {info, isLoading, error} = useSelector((state) => state?.mypageSlice)

  useEffect(() => {
    dispatch(getNickname());
    setCookie('test', '테스트입니다');
  },[nicknameModal,passwordModal]);

  const removeCookies = () => {
    console.log("작동")
    removeCookie('test');
  };

  const openCloseNickname = () => {
    setNicknameModal(!nicknameModal);
    setModalBg(!modalBg);
  }

  const openClosePW = () => {
    setPasswordModal(!passwordModal);
    setModalBg(!modalBg);
  }


  return(
    <>
      {modalBg
      ? <div className="modalsBg"></div>
      : null
      }
      <div className="pageBg">
        <MypageHeader/>
        <br/> 
        <div className="pageBox">
          <h2 style={{textAlign:"center"}}>마이 페이지</h2>
          <section className="bucketCountBox">
            <div className="bucketCountDesc">
              <p><span className="bucketPlanTxt">8</span> <span className="bucketCountTxt">예정</span></p>
              <p><span className="bucketClearTxt">1</span> <span className="bucketCountTxt">완료</span></p>
            </div>
            <div className="bucketCountTotal">
              <p><span className="bucketCountTxt">total</span> <span className="bucketTotalTxt">9</span></p>
            </div>
          </section>
          <section className="myInfoBox">
            <div className="updateInfoBox">
              <p className="updateInfoTxt">{info?.nickname || ""}</p>
              <button className="updateBtn" onClick={openCloseNickname}>수정</button>
            </div>
            <div className="updateInfoBox">
              <p className="updateInfoTxt">비밀번호</p>
              <button className="updateBtn" onClick={openClosePW}>수정</button>
            </div>
            <p className="unregisterBtn" onClick={() => navigate('/mypage/unregister')}>회원탈퇴</p>
          </section>
          <div className="mainBtnBox">
            <button onClick={() => navigate('/')}>main</button>
          </div>
        </div>
        {nicknameModal
        ? <NicknameModal closeNickname={openCloseNickname} nick={info?.nickname}/>
        : null
        }
        {passwordModal
        ? <PasswordModal openClosePW={openClosePW}/>
        : null
        }
      </div>
    </>
  )
}

export default Mypage;