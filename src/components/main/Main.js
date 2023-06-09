import React from "react";
import { useNavigate } from "react-router-dom";
import MypageHeader from "../mypage/MypageHeader";

//카테고리 아이콘
import {FaUmbrellaBeach } from "react-icons/fa"
import {FaBookDead  } from "react-icons/fa"
import {FaLanguage  } from "react-icons/fa"
import {FaHamburger  } from "react-icons/fa"
import {FaRegCalendarAlt  } from "react-icons/fa"
import {FaDumbbell  } from "react-icons/fa"
import {GrDocumentText  } from "react-icons/gr"
import "./css/mainStyle.scss";



function Main(){
  const navigate = useNavigate();

  return(
    <>
      <h1 onClick={() => navigate('/mypage')} style={{display:"inline"}}>메인페이지입니다</h1>
        <div className="pageBg">
          <MypageHeader/>
          <br/> 
          <div>
            <div className="createButBox">
              <button className="createBut">버킷 작성</button>
            </div>
            <section className="categoryBox">
              <div className="categoryList">
                <GrDocumentText className="categoryAll"/>
              </div>
              <div className="categoryList">
                <FaUmbrellaBeach className="categoryAll" style={{color:"red"}}/>
              </div>
              <div className="categoryList">
                <FaBookDead className="categoryAll" style={{color:"green"}}/>
              </div>
              {/* <div className="categoryList">
                <FaLanguage className="categoryAll"/>
              </div> */}
              <div className="categoryList">
                <FaHamburger className="categoryAll" style={{color:"orange"}}/>
              </div>
              <div className="categoryList">
                <FaRegCalendarAlt className="categoryAll" style={{color:"purple"}}/>
              </div>
              <div className="categoryList">
                <FaDumbbell className="categoryAll" style={{color:"blue"}}/>
              </div>
            </section>
            <section >
              <div className="mainBox">
                <div className="bucketListBox">
                  <p className="bucketCheck"></p>
                  <p>list</p>
                </div>
                <div>
                  <p>X</p>
                </div>
              </div>
              <div className="mainBox">
                <div className="bucketListBox">
                  <p className="bucketClear">✔</p>
                  <p className="bucketClearTxt">list</p>
                </div>
                <div>
                  <p>X</p>
                </div>
              </div>
              <div className="mainBox">
                <div className="bucketListBox">
                  <p className="bucketCheck"></p>
                  <p>list</p>
                </div>
                <div>
                  <p>X</p>
                </div>
              </div>
              <div className="mainBox">
                <div className="bucketListBox">
                  <p className="bucketCheck"></p>
                  <p>list</p>
                </div>
                <div>
                  <p>X</p>
                </div>
              </div>
              <div className="mainBox">
                <div className="bucketListBox">
                  <p className="bucketCheck"></p>
                  <p>list</p>
                </div>
                <div>
                  <p>X</p>
                </div>
              </div>
              <div className="mainBox">
                <div className="bucketListBox">
                  <p className="bucketCheck"></p>
                  <p>list</p>
                </div>
                <div>
                  <p>X</p>
                </div>
              </div>
            </section>
          </div>
        </div>
    </>
  )
}

export default Main;