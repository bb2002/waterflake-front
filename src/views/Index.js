/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import "../assets/styles/customs/Main.css"

export default function Index() {
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
              <h2 className="font-semibold"id="service-title">
                내 PC 에서 만든 서버를 전 세계에 빠르게 호스팅
              </h2>
              <p className="mt-4 text-lg" style={{ color: "#E1E1E1" }}>
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
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus?ref=nr-index"
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-orange-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
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
                  <i className="fas fa-file-alt text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold">
                  Dashboard 로 터널 관리
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  새 터널을 만들고, 게임 서버에 플러그인을 설치하면 이후 모든 과정은 Waterflake가 알아서 해결합니다. 도메인 서버를 열기 위해 그 이상의 노력은 필요 없습니다.
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
                src={require("assets/img/documentation.png").default}
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
