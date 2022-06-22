import { async } from '@firebase/util'
import {getProviders, signIn as SignIntoProvider} from "next-auth/react";
import React from 'react'
import Header from '../components/Header';
//Browser
function signIn({providers}) {
  return (
    <>
    <Header />
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button className='p-3 bg-blue-500 rounded-lg' onClick={() => SignIntoProvider(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </> 
  );
}

//Server side render
export async function getServerSideProps(){
    const providers = await getProviders();
    return{
        props:{
            providers
        }
    }

}

export default signIn