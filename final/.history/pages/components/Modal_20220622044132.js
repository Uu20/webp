import React, { Fragment } from 'react'
import { modalState } from '../../atons/modalAtom';
import {useRecoilState} from "recoil";
import {Dialog , Transition} from "@headlessui/react";

function Modal() {

    const[open, setOpen] = useRecoilState(modalState);

  return (
    <div>
        <Transition.Root show={open as={Fragment}}
    </div>
  )
}

{/* <div>
        <h1>MMMMModal</h1>
        {
            open &&<p>modal open</p>
        }
</div> */}

export default Modal