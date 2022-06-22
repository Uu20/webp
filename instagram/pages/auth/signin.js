import React from "react";
import { getProviders, signIn as SignIntoProvider } from "next-auth/react";
import Header from "../../components/Header";
//Broswer
function signIn({ providers }) {
  return (
    <>
      <Header />
      <div>
          <p className="w-80">"                             "藍色水牛哞哞哞</p>
        </div>
      <div
        className="flex flex-col items-center justify-center 
        min-h-screen py-2 -mt-56 px-14 text-center"
      >
        <img className="w-80" src="https://links.papareact.com/ocw" alt="" />

        <img className="w-80" src="https://static.popdaily.com.tw/wp-content/uploads/2020/10/7mv8bzwcut0co0cgsgscc4oscqhnz78.jpg"/>
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
