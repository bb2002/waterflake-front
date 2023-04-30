import React, {useEffect, useState} from "react";

import {useParams} from "react-router";
import {deleteTunnelAxios, editTunnelAxios, getTunnelAxios} from '../../axios/tunnel.axios';
import TrafficChart from "../../components/Cards/TrafficChart";
import ConnectionChart from "../../components/Cards/ConnectionChart";

const color = 'light'

export default function ViewTunnel() {
  const params = useParams()
  const [tunnel, setTunnel] = useState(null);
  const [editServerName, setEditServerName] = useState(false);
  const [newServerName, setNewServerName] = useState('')

  useEffect(() => {
    setTunnel(null)
    getTunnelAxios(params.clientId).then((res) => {
      setTunnel(res.data)
    })
  }, [params])

  const editOrSave = () => {
    if (editServerName) {
      editTunnelAxios(tunnel.clientId, { name: newServerName }).then((res) => {
        window.location.reload(false);
      })
    } else {
      setEditServerName(true);
      setNewServerName(tunnel?.name)
    }
  }

  const deleteTunnelConfirm = () => {
    const sure = window.confirm('정말로 터널을 제거하시겠습니까? 접속중인 유저는 모두 연결이 끊어지며, 돌이킬 수 없습니다!')
    console.log(sure)

    if (sure) {
      const clientId = tunnel.clientId;
      deleteTunnelAxios(clientId).then(() => {
        window.location.href = '/admin/dashboard'
      })
    }
  }

  if (params.clientId) {
    if (tunnel) {
      return (
          <div className="flex flex-wrap mt-4" style={{ maxWidth: 1024 }}>
            <div className="w-full mb-12 px-4">
              <div
                className={
                  "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
                  (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
                }
              >
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                  <div className="flex flex-wrap items-center">
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                      <h2
                        className={
                          "font-semibold text-lg " +
                          (color === "light" ? "text-blueGray-700" : "text-white")
                        }
                        style={{ fontSize: '1.75rem', marginTop: 16, marginBottom: 16 }}
                      >
                        OVERVIEW
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="block w-full overflow-x-auto">
                  {/* Projects table */}
                  <table className="items-center w-full bg-transparent border-collapse">
                    <tbody>
                    <tr>
                      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4 text-left flex items-center">
                        <span
                          className={
                            "ml-3 font-bold " +
                            +(color === "light" ? "text-blueGray-600" : "text-white")
                          }
                        >
                          서버 이름
                        </span>
                      </th>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4" style={{width: 250}}>
                        {
                          editServerName ? (
                            <input
                              type="text"
                              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                              placeholder="서버 이름을 입력하세요."
                              value={newServerName}
                              onChange={(e) => setNewServerName(e.target.value)}
                            />
                          ) : <>{tunnel.name}</>
                        }
                      </td>
                      <td>
                        <button className="bg-indigo-500 text-white active:bg-indigo-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={editOrSave}>
                          {editServerName ? <><i className="fas fa-save"></i> 저장</> : <><i className="fas fa-edit"></i> 수정</>}
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4 text-left flex items-center">
                        <span
                          className={
                            "ml-3 font-bold " +
                            +(color === "light" ? "text-blueGray-600" : "text-white")
                          }
                        >
                          서버 주소
                        </span>
                      </th>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4">
                        {tunnel.subDomain}.{tunnel.rootDomain}
                      </td>
                    </tr>
                    <tr>
                      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4 text-left flex items-center">
                        <span
                          className={
                            "ml-3 font-bold " +
                            +(color === "light" ? "text-blueGray-600" : "text-white")
                          }
                        >
                          리전
                        </span>
                      </th>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4">
                        {tunnel.region.name}
                      </td>
                    </tr>
                    <tr>
                      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4 text-left flex items-center">
                        <span
                          className={
                            "ml-3 font-bold " +
                            +(color === "light" ? "text-blueGray-600" : "text-white")
                          }
                        >
                          연결 상태
                        </span>
                      </th>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4">
                        <i className="fas fa-circle text-emerald-500 mr-2"></i>{" "}
                        정상
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {tunnel.outPort} -> {tunnel.inPort} 터널링 됨
                      </td>
                    </tr>
                    <br />
                    </tbody>
                  </table>
                </div>
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                  <div className="flex flex-wrap items-center">
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                      <h2
                        className={
                          "font-semibold text-lg " +
                          (color === "light" ? "text-blueGray-700" : "text-white")
                        }
                        style={{ fontSize: '1.75rem', marginTop: 16, marginBottom: 16 }}
                      >
                        SECRETS
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="block w-full overflow-x-auto">
                  {/* Projects table */}
                  <table className="items-center w-full bg-transparent border-collapse">
                    <tbody>
                    <tr>
                      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4 text-left flex items-center">
                        <span
                          className={
                            "ml-3 font-bold " +
                            +(color === "light" ? "text-blueGray-600" : "text-white")
                          }
                        >
                          ClientID
                        </span>
                      </th>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4">
                        {tunnel.clientId}
                      </td>
                    </tr>
                    <tr>
                      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4 text-left flex items-center">
                        <span
                          className={
                            "ml-3 font-bold " +
                            +(color === "light" ? "text-blueGray-600" : "text-white")
                          }
                        >
                          ClientSecret
                        </span>
                      </th>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4">
                        {tunnel.clientSecret}
                      </td>
                    </tr>
                    <br />
                    </tbody>
                  </table>
                </div>
                <div style={{ margin: 32 }}>
                  <h2
                    className={
                      "font-semibold text-lg " +
                      (color === "light" ? "text-blueGray-700" : "text-white")
                    }
                    style={{ fontSize: '1.75rem', marginTop: 16, marginBottom: 16 }}
                  >
                    트래픽 사용량
                  </h2>
                  <TrafficChart clientId={tunnel.clientId}/>
                </div>
                <div style={{ margin: 32 }}>
                  <h2
                    className={
                      "font-semibold text-lg " +
                      (color === "light" ? "text-blueGray-700" : "text-white")
                    }
                    style={{ fontSize: '1.75rem', marginTop: 16, marginBottom: 16 }}
                  >
                    평균 접속자
                  </h2>
                  <ConnectionChart clientId={tunnel.clientId}/>
                </div>

                <div className="rounded-t mb-0 px-4 py-3 border-0">
                  <div className="flex flex-wrap items-center">
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                      <h2
                        className={
                          "font-semibold text-lg " +
                          (color === "light" ? "text-blueGray-700" : "text-white")
                        }
                        style={{ fontSize: '1.75rem', marginTop: 16, marginBottom: 16 }}
                      >
                        DANGEROUS ZONE
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="block w-full overflow-x-auto">
                  {/* Projects table */}
                  <table className="items-center w-full bg-transparent border-collapse">
                    <tbody>
                    <tr>
                      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4 text-left flex items-center">
                        <span
                          className={
                            "ml-3 font-bold " +
                            +(color === "light" ? "text-blueGray-600" : "text-white")
                          }
                        >
                          터널 제거
                        </span>
                      </th>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4">
                        <button className="bg-red-500 text-white active:bg-indigo-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={deleteTunnelConfirm}>
                          터널 제거
                        </button>
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        이 작업은 돌이킬 수 없으며, 현재 이 서버에 접속중인 모든 플레이어의 연결이 끊어집니다!
                      </td>
                    </tr>
                    <br />
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
      )
    } else {
      return (
        <div className="text-white px-6 py-4 border-0 rounded relative mb-4 bg-emerald-500" style={{ width: '100%' }}>
          <span className="inline-block align-middle mr-8">
            <b className="capitalize">로드 중 입니다.</b>
          </span>
        </div>
      )
    }
  } else {
    return (
      <div className="text-white px-6 py-4 border-0 rounded relative mb-4 bg-orange-500" style={{ width: '100%' }}>
              <span className="inline-block align-middle mr-8">
                <b className="capitalize">ERROR</b> Tunnel is not found.
                <button
                  className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
                  style={{ paddingRight: 32 }}
                >
                <span>×</span>
              </button>
              </span>
      </div>
    )
  }
}
