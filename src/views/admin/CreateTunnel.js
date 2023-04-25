import React, {useState} from 'react';
import {createTunnelAxios} from '../../axios/tunnel.axios';

const createTunnelFormDefault = {
  localServer: 'minecraft_java',
  name: '',
  subDomain: '',
  rootDomain: 'blbt.app',
  planId: 1,
  regionId: 1,
}

export default function CreateTunnel() {
  const [createTunnelForm, setCreateTunnelForm] = useState(createTunnelFormDefault)
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const sendCreateTunnelRequest = async () => {
    setLoading(true);
    try {
      const response = await createTunnelAxios(createTunnelForm);

      if (response.status === 201) {
        const clientId = response.data.clientId;
        window.location.href = `/admin/dashboard/${clientId}`
      }

    } catch(ex) {
      setErrorMessage(ex.response.data.message)
    }
    setLoading(false);
  }

  return (
    <>

      <div className="flex flex-wrap">
        {
          errorMessage && (
            <div className="text-white px-6 py-4 border-0 rounded relative mb-4 bg-orange-500" style={{ width: '100%' }}>
              <span className="inline-block align-middle mr-8">
                <b className="capitalize">ERROR</b> {errorMessage}
                <button
                  className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
                  onClick={() => setErrorMessage(null)}
                  style={{ paddingRight: 32 }}
                >
                <span>×</span>
              </button>
              </span>

            </div>
          )
        }

        <div className="w-full lg:w-8/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div className="rounded-t bg-white mb-0 px-6 py-6">
              <div className="text-center flex justify-between">
                <h6 className="text-blueGray-700 text-xl font-bold">새 터널 만들기</h6>
              </div>
            </div>

            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form>
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  기본 정보
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        서버 이름
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="관리에 사용할 고유한 이름 입니다."
                        onChange={(e) => setCreateTunnelForm({...createTunnelForm, name: e.target.value})}
                        value={createTunnelForm.name}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        서버 타입
                      </label>
                      <select
                        name="region"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        defaultValue="minecraft_java"
                        onChange={(e) => setCreateTunnelForm({...createTunnelForm, localServer: e.target.value})}
                        value={createTunnelForm.localServer}
                      >
                        <option value="minecraft_java">마인크래프트 자바 에디션</option>
                      </select>
                    </div>
                  </div>
                </div>

                <hr className="mt-6 border-b-1 border-blueGray-300" />
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  터널 접속 정보
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        서브 도메인 (최소 4자, 최대 30지)
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="서버 접속에 필요한 주소"
                        minLength={4}
                        maxLength={30}
                        value={createTunnelForm.subDomain}
                        onChange={(e) => setCreateTunnelForm({...createTunnelForm, subDomain: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        루트 도메인
                      </label>
                      <select
                        name="rootDomain"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        defaultValue="blbt.app"
                        onChange={(e) => setCreateTunnelForm({...createTunnelForm, rootDomain: e.target.value})}
                        value={createTunnelForm.rootDomain}
                      >
                        <option value="blbt.app">blbt.app</option>
                        <option value="waterflake.co">waterflake.co</option>
                      </select>
                    </div>
                  </div>
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        게임 서버 접속 주소
                      </label>
                      <input
                        type="text"
                        readOnly={true}
                        value={`${createTunnelForm.subDomain.toLowerCase()}.${createTunnelForm.rootDomain}`}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        리전
                      </label>
                      <select
                        name="region"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        defaultValue="1"
                        onChange={(e) => setCreateTunnelForm({...createTunnelForm, regionId: Number(e.target.value)})}
                        value={createTunnelForm.regionId}
                      >
                        <option value="1">KR-SUWON-1</option>
                      </select>
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4"></div>
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
                <div className="w-full lg:w-6/12 px-4">
                  <br />
                  <button
                    className="bg-emerald-500 active:bg-lightBlue-600 uppercase text-white font-bold hover:shadow-md shadow px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => sendCreateTunnelRequest()}
                    disabled={loading}
                  >
                    {
                      loading ? <><i className="fas fa-truck-loading mr-2 text-sm"></i>{" "}처리 중</> : <><i className="fas fa-check mr-2 text-sm"></i>{" "}터널 생성</>
                    }

                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
