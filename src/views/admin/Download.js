import React from "react";

export default function Download() {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
                <h6 className="text-xl font-semibold">마인크래프트 자바 에디션용</h6>
                <p className="mt-2 mb-4 text-blueGray-500">
                  v0.0.1 BETA (Release 23.04.17)
                  <br /><br />
                  <button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                    <i className="fas fa-download"></i> {" "}다운로드
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
