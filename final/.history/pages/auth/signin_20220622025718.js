import { async } from '@firebase/util'
import {getProviders, signIn as SignIntoProvider} from "next-auth/react";
import React from 'react'
import Header from '../components/Header';
//Browser
function signIn({providers}) {
  return (
    <>
    <Header />
    <div>
        <img src='https://links.papareact.com/ocw' alt=''/>
      <div className='mt-40'>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button className='p-3 bg-blue-500 rounded-lg text-stone-50' 
          onClick={() => SignIntoProvider(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}  
    </div>  
    </div>
    
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