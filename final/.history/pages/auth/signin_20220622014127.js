import { async } from '@firebase/util'
import {getProviders, signIn} from "next-auth/react"
import React from 'react'

//Browser
function signin({providers}) {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  )
}

//Server side render
export async function getServerIdeProps(){
    const providers = getProviders();
    return{
        props:{
            providers
        }
    }

}

export default signin