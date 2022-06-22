import { async } from '@firebase/util'
import {getProviders, signIn as SignInto} from "next-auth/react"
import React from 'react'
// import dynamic from 'next/dynamic'

// const DynamicComponentWithNoSSR = dynamic(
//   () => import('react-apexcharts'),
//   { ssr: false }
// )
//Browser
function signin({providers}) {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => SignInto(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  )
}

//Server side render
export async function getServerIdeProps(){
    const providers = await getProviders();
    return{
        props:{
            providers
        }
    }

}

export default signin