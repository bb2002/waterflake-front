import React from "react";
import { Link } from "react-router-dom";
import {GoogleLogin, GoogleOAuthProvider} from "@react-oauth/google";

export default function Login() {
  const clientId = "395532129647-9i6uovdbb9d5i08u21scr7cc9pp24gtg.apps.googleusercontent.com"

  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-blueGray-500 text-sm font-bold">
                    Waterflake 에 로그인
                  </h6>
                </div>
                <div className="btn-wrapper text-center" style={{ marginTop: 32 }}>

                  <>
                    <GoogleOAuthProvider clientId={clientId}>
                    <GoogleLogin
                    onSuccess={(res) => {
                      console.log(res);
                    }}
                    onFailure={(err) => {
                      console.log(err);
                      }} />
                    </GoogleOAuthProvider>
                  </>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
