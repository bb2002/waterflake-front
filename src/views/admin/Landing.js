import React from "react";

// components

import {Link} from 'react-router-dom';

export default function Landing() {
  return (
    <>
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url(" + require("assets/img/wallpapers/minecraft-3.jpg").default + ")",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    대시보드에서 작업 시작
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                    현재 BETA 서비스를 진행하고 있습니다. 주요 변경사항은 디스코드에서 공유되므로, 아래 디스코드 링크에 참여해주세요.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-vr-cardboard"></i>
                    </div>
                    <h6 className="text-xl font-semibold">디스코드 커뮤니티</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      디스코드 커뮤니티에서 주요 변경 사항을 확인하고, 버그와 개선 사항을 건의해주세요.
                      <br />
                      <a href="https://discord.com/invite/JaWV3MUEE2" target="_blank" rel="noreferrer">
                        <button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                          커뮤니티 참가
                        </button>
                      </a>

                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                      <i className="fas fa-retweet"></i>
                    </div>
                    <h6 className="text-xl font-semibold">바로 도메인 서버 열기</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      로컬 PC 에서 서버를 열고, Waterflake 의 기능을 사용해 바로 유저들에게 게임 서버를 알리세요.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <i className="fas fa-network-wired"></i>
                    </div>
                    <h6 className="text-xl font-semibold">무제한 트래픽과 속도</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      베타 기간에는 아무 제약 없이 서비스를 이용 할 수 있습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center mt-32">
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-plus text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                1. 새 터널 만들기
              </h3>
              <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-600">
                로컬에서 실행되는 게임 서버와 Waterflake 의 터널링 서버와 연결하기 위해, 먼저 터널을 만들어야 합니다.
              </p>
              <p className="text-lg leading-relaxed mt-0 mb-4 text-blueGray-600">
                좌측 사이드바에서 '새 터널 만들기'를 선택하고 원하는 도메인과 서버 이름을 입력 후 터널 생성을 해 주세요.
              </p>
              <Link to="/admin/add" className="font-bold text-blueGray-700 mt-8">
                터널 생성으로 바로 이동
              </Link>
            </div>
            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                <img
                  alt="CreateTunnel"
                  src={require("assets/img/docs/create-tunnel.png").default}
                  className="w-full align-middle rounded-t-lg"
                  style={{ height: 250, objectFit: "cover" }}
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-lightBlue-500 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    터널 생성 팁
                  </h4>
                  <p className="text-md mt-2 text-white">
                    '서버 이름'은 Waterflake Dashboard 에서 사용하는 이름이며, 일반 사용자에게는 노출되지 않습니다. (인 게임 motd 가 아닙니다.) '서브 도메인'은 수정 할 수 없으며, 중복될 수 없으니 신중하게 선택해주세요.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center mt-32">
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-copy text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                2. Client 인증 정보 복사
              </h3>
              <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-600">
                생성한 터널의 ClientId 와 ClientSecret 을 복사하여 보관하세요.
              </p>
              <p className="text-lg leading-relaxed mt-0 mb-4 text-blueGray-600">
                이 인증정보는 Waterflake Client 가 터널링 서버에 연결하기 위한 인증 수단으로 사용됩니다. <b>이 값들이 외부에 유출되지 않도록 조심하세요.</b>
              </p>
            </div>
            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto" />
          </div>

          <div className="flex flex-wrap items-center mt-32">
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-unlock text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                3. 플러그인 설치 및 config.yml 파일 수정
              </h3>
              <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-600">
                버킷의 plugins 폴더에 Waterflake Client 플러그인을 설치하고, config.yml 파일을 수정하세요.
              </p>
              <p className="text-lg leading-relaxed mt-0 mb-4 text-blueGray-600">
                인증정보를 config.yml 파일에 입력하고, 서버를 재시작하여 적용합니다. 플러그인이 Waterflake 터널링 서버와 커넥션 풀을 만들면서 로컬 서버가 전 세계에 호스팅 될 수 있습니다.
              </p>
            </div>
            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                <img
                  alt="CreateTunnel"
                  src={require("assets/img/docs/docs2.png").default}
                  className="w-full align-middle rounded-t-lg"
                  style={{ height: 250, objectFit: "cover" }}
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-lightBlue-500 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    게임 서버 설정 팁
                  </h4>
                  <p className="text-md mt-2 text-white">
                    Waterflake 는 현재 75명의 최대 접속자를 지원합니다. server.properties 의 max-players 를 75 이하로 설정해야 안정성이 향상됩니다.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
