import React from "react";
import { getProviders, signIn as SignIntoProvider } from "next-auth/react";
import Header from "../../components/Header";
//Broswer
function signIn({ providers }) {
  return (
    <>
      <Header />
      <div>
          <p className="w-80">123</p>
        </div>
      <div
        className="flex flex-col items-center justify-center 
        min-h-screen py-2 -mt-56 px-14 text-center"
      >
        <img className="w-80" src="https://links.papareact.com/ocw" alt="" />

        <img className="w-80" src="https://s.yimg.com/ny/api/res/1.2/CBN_7ZtGxJb3LSG6cLM36g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQ3OA--/https://s.yimg.com/uu/api/res/1.2/oBZl0XKCBUGCqHI9fe91qQ--~B/aD01OTc7dz04MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/zh-tw/setn.com.tw/f492aecec94233d09b53e685df08991e"/>
        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="p-3 bg-blue-500 rounded-lg
          text-white"
                onClick={() => SignIntoProvider(provider.id, { callbackUrl: "/" })}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
//Server
export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
export default signIn;
