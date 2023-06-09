import React, { useState } from "react";
import "./css/modalStyle.scss";
import { useDispatch } from "react-redux";
import { updateNickname } from "../../modules/redux/mypageSlice";

function NicknameModal({closeNickname, nick}){
  const dispatch = useDispatch();
  const [nickname, setNickname] = useState(nick);

  const payload = {
    nickname : nickname
  }

  const updateNick = () => {
    dispatch(updateNickname(payload))
    .then(closeNickname)
  };

  const onChangeNick = (e) => {
    setNickname(e.target.value);
  }

  return(
    <>
      <div className="modalBox">
        <h2>닉네임변경</h2>
        <div>
          <input type="text" className="nicknameInput" name="nickname" value={nickname} onChange={onChangeNick} placeholder="수정할 닉네임을 입력해주세요"/>
        </div>
        <div className="modalBtnBox">
          <button className="updateBut" onClick={updateNick}>수정</button>
          <button className="cancelBut" onClick={closeNickname}>취소</button>
        </div>
      </div>
    </>
  )
}

export default NicknameModal;