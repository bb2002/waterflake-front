import React, {useEffect, useState} from "react";

import {useParams} from "react-router";
import {getTunnelAxios} from "../../axios/tunnel.axios";
import TrafficChart from "../../components/Cards/TrafficChart";
import ConnectionChart from "../../components/Cards/ConnectionChart";

const color = 'light'

export default function ViewTunnel() {
  const params = useParams()
  const [tunnel, setTunnel] = useState(null);

  useEffect(() => {
    setTunnel(null)
    getTunnelAxios(params.clientId).then((res) => {
      setTunnel(res.data)
    })
  }, [params])

  if (params.clientId) {
    if (tunnel) {
      return (
          <div className="flex flex-wrap mt-4">
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
                        {tunnel.name}
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
              </div>

              <TrafficChart />
              <ConnectionChart />
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
