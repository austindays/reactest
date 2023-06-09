import React, { useState } from "react";
import "./css/modalStyle.scss";
import { useDispatch } from "react-redux";
import { updateNickname } from "../../modules/redux/mypageSlice";

function UnregisterModal({openCloseModal}){
  const dispatch = useDispatch();

  // const updateNick = () => {
  //   dispatch(updateNickname(payload))
  //   .then(closeNickname)
  // };

  return(
    <>
      <div className="unregisterModalBox">
        <h2>정말 탈퇴하시겠습니까?</h2>
        <div className="modalBtnBox">
          <button className="unregisterBut" onClick={openCloseModal}>수정</button>
          <button className="cancelBut" onClick={openCloseModal}>취소</button>
        </div>
      </div>
    </>
  )
}

export default UnregisterModal;