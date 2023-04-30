/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import "../assets/styles/customs/Main.css"

export default function Index() {

  const gettingStart = () => {
    if (localStorage.getItem('token')) {
      window.location.href = '/admin/dashboard';
    }  else {
      window.location.href = '/auth/login';
    }
  }

  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <img
          id="background-img"
          style={{ zIndex: -1 }}
          src={require("assets/img/wallpapers/minecraft-1.jpg").default}
          alt="Wallpaper"
        />
        <div className="container mx-auto items-center flex flex-wrap" >
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0" style={{ maxWidth: 470 }}>
              <h2 className="font-semibold" id="service-title" style={{ wordBreak: 'keep-all' }}>
                내 PC 에서 만든 서버를 전 세계에 빠르게 호스팅
              </h2>
              <p className="mt-4 text-lg" style={{ color: "#E1E1E1", wordBreak: 'keep-all' }}>
                Waterflake는 여러분의 홈 서버가 모두에게 전달 될 수 있도록 돕습니다.
                복잡한 네트워크 설정은 잊고 알찬 서버를 만들기 위해 더 많은 것을 투자하세요.
              </p>
              <ul id="service-title-ul">
                <li>서버 주소에 포트 넘버 없음</li>
                <li>선택 가능한 무료 도메인 주소</li>
                <li>한국을 포함한 다양한 리전 선택 (예정)</li>
              </ul>
              <div className="mt-12">
                <a
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-orange-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  onClick={() => gettingStart()}
                  style={{ cursor: "pointer" }}
                >
                  무료로 시작하기
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4 pb-32 pt-48">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-play text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold">
                  대시보드에서 모든 작업을 제어
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500" style={{ wordBreak: 'keep-all' }}>
                  관리자의 확인이 필요한 절차가 없습니다. 생성 후 5초 이내로 터널이 만들어지고, 서버에 접속할 준비가 완료됩니다.
                </p>
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src={require("assets/img/dashboard/dashboard1.png").default}
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4 pb-32 pt-48">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="dashboard2"
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src={require("assets/img/dashboard/dashboard2.png").default}
              />
            </div>

            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-download text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold">
                  간단한 설치
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500" style={{ wordBreak: 'keep-all' }}>
                  복잡한 명령줄은 필요하지 않습니다. 플랫폼에 맞는 플러그인이 지원되어 설치가 간단합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
