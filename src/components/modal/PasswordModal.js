import React, { useState } from "react";
import "./css/modalStyle.scss";
import { useDispatch } from "react-redux";
import { updateNickname, updatePassword } from "../../modules/redux/mypageSlice";

function PasswordModal({openClosePW}){
  const dispatch = useDispatch();
  const [password, setPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();


  const onChangeHandler = (event, setState) => {setState(event.target.value)};

  const onUpdatePW = (event) => {
    event.preventDefault();
    const payload = {
      password : password,
      newPassword : newPassword
    }

    if(newPassword !== passwordConfirm){
      window.alert("변경하실 비밀번호를 확인해주세요");
      return;
    }

    dispatch(updatePassword(payload))
    .then(openClosePW)
  }

  return(
    <>
      <div className="modalBox">
        <h2>비밀번호변경</h2>
        <form onSubmit={onUpdatePW}>
          <input type="password" className="passwordInput" name="password" placeholder="현재 비밀번호" onChange={(e) => onChangeHandler(e,setPassword)}/>
          <input type="password" className="passwordInput" name="newPassword" placeholder="변경할 비밀번호" onChange={(e) => onChangeHandler(e,setNewPassword)}/>
          <input type="password" className="passwordInput" name="passwordConfirm" placeholder="변경할 비밀번호 확인" onChange={(e) => onChangeHandler(e,setPasswordConfirm)}/>
          <div className="modalBtnBox">
            <button type="submit" className="updateBut">수정</button>
            <button className="cancelBut" onClick={openClosePW}>취소</button>
        </div>
        </form>
      </div>
    </>
  )
}

export default PasswordModal;