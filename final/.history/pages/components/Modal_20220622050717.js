import React, { Fragment } from 'react'
import { modalState } from '../../atons/modalAtom';
import {useRecoilState} from "recoil";
import {Dialog , Transition} from "@headlessui/react";

function Modal() {

    const[open, setOpen] = useRecoilState(modalState);

  return (
    <div>
        <Transition.Root show={open} as={Fragment}>
            <Dialog as='div'
            className="fixed z-10 inset-0 overflow-y-auto"
            onClose={setOpen}>
                <div className='flex items-end justify-center min-h-[800px] sm:min-h-screen
                 pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
                    <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterTo="opacity-100"
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'>
                        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75
                        transition-opacity"/>
                    </Transition.Child>

                    <span className='hidden sm:inline-block 
                    sm:align-middle sm:h-screen'>
                    &#8203;</span>

                    <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:scale-90 sm:translate-y-0"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                    leaveTo='opacity-0 translate-y-4 sm:scale-90 sm:translate-y-0'>
                        <div className='inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 
                        text-left overflow-hidden shadow-xl transform transition-all sm:my-8 
                        sm:align-middle sm:max-w-sm sm:w-full sm:p-6'>
                            <div>





                                <div className='mt-5 sm:mt-6'>
                                    <button type="button"
                                    disabled={!selectedFile}
                                    className="inline-flex justify-center w-full rounded-md 
                                    border border-transparent shadow-sm px-4 py-2 bg-red-500 
                                    text-base font-medium text-white hover:bg-red-600 focus:outline-none
                                    focus:ring-2 focus:ring-offset-2 focus:ring-red-400 sm:text-sm 
                                     disabled:bg-gray-300 disabled:cursor-not-allowed hover:disabled:bg-gray-400"

                                </div>
                            </div>
                        </div>
                        {/* <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75
                        transition-opacity"/> */}
                    </Transition.Child>
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