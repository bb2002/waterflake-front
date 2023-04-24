import React, {CSSProperties, useEffect} from 'react';
import { gapi } from 'gapi-script'
import { GoogleLogin } from 'react-google-login'
import KakaoLogin from 'react-kakao-login';

const TOKEN = {
  googleClientId: "395532129647-9i6uovdbb9d5i08u21scr7cc9pp24gtg.apps.googleusercontent.com",
  kakaoAccessToken: "ee6f852c642f85695e52513062b6b715"
}



export default function Login() {
  useEffect(() => {
    gapi.load('client:auth2', () => {
      gapi.client.init({
        clientId: TOKEN.googleClientId,
        scope: 'email'
      })
    })
  }, [])

  const onKakaoLoginSuccess = (response) => {
    console.log('KAKAO', response);
  }

  const onGoogleLoginSuccess = (response) => {
    console.log('GOOGLE', response);
  }

  const KakaoLoginStyle = {
    backgroundImage:
      "url(" + require("assets/img/buttons/kakao_login.png").default + ")",
    width: 300,
    height: 45,
    boxShadow: "0px 2px 0px #B1B6BC",
    borderRadius: 8
  }

  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0" style={{ minWidth: 300 }}>
              <div className="rounded-t mb-0 px-6 py-6" style={{ padding: 0, paddingTop: 32, paddingBottom: 32 }}>
                <div className="text-center mb-3">
                  <h6 className="text-blueGray-500 text-sm font-bold">
                    Waterflake 에 로그인
                  </h6>
                </div>
                <div className="btn-wrapper text-center" style={{ marginTop: 32 }}>
                  <>
                    <GoogleLogin
                      clientId={TOKEN.googleClientId}
                      onSuccess={onGoogleLoginSuccess}>
                      <p style={{ width: 240 }}>Google 계정으로 로그인</p>
                    </GoogleLogin>
                  </>
                  <div style={{ marginTop: 8 }} />
                  <>
                    <KakaoLogin token={TOKEN.kakaoAccessToken} onSuccess={onKakaoLoginSuccess} onFail={console.error} style={KakaoLoginStyle}>
                      <span></span>
                    </KakaoLogin>
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
