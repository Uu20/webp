import React from 'react'
import { modalState } from '../../atons/modalAtom';
import {useRecoilState} from "recoil";

function Modal() {

    const[open, setOpen] = useRecoilState(modalState);

  return (
    <div>
        <h1>MMMMModal</h1>
        {
            open &&<p>modal open</p>
        }
    </div>
  )
}

export default Modal