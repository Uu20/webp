import { async } from '@firebase/util'
import {getProviders, signIn} from "next-auth/react"
import React from 'react'

//Browser
function signin({providers}) {
  return (
    <div>
        <h1>i m signin page</h1>
    </div>
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