import React, { Fragment } from 'react'
import { modalState } from '../../atons/modalAtom';
import {useRecoilState} from "recoil";
import {Dialog , Transition} from "@headlessui/react";

function Modal() {

    const[open, setOpen] = useRecoilState(modalState);

  return (
    <div>
        <Transition.Root show={open } as={Fragment}>
            <Dialog as='div'
            className="fixed z-10 inset-0 overflow-y-auto"
            onClose={setOpen}>
                <div className='flex items-end justify-center min-h-[800px] sm:min-h-screen
                 pt-4 px-4 pb-20 text-center sm:block sm:p-0'>


                </div>

            </Dialog>
        </Transition.Root>
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