import React, { Fragment ,useRef, useState } from 'react'
import { modalState } from '../../atons/modalAtom';
import {useRecoilState} from "recoil";
import {Dialog , Transition} from "@headlessui/react";
import { CameraIcon } from '@heroicons/react/outline';
import {db ,storage} from "../../firebase";
import {addDoc, collection, serverTimestamp, updateDoc,doc} from "@firebase/firestore"
import {useSession} from "next-auth/react"
import {ref, getDownloadURL,uploadString} from "@firebase/storage"

function Modal() {

    const {data: session} = useSession();
    const[open, setOpen] = useRecoilState(modalState);
    const filePickerRef = useRef(null);
    const captionRef = useRef(null);
    const [loading, setLoading] =useState(false);
    const[selectedFile, setSelectedFile] = useState(null);
    
    const upLoadPost =async () =>{
        if(loading) return;
        
        setLoading(true);

        //1)create a post and add to firestore
        //2)get post ID
        //3)upload img to firebase
        //4)get a Url and update post with img

        const docRef = await addDoc(collection(db, 'posts'),{
            username: session.user.username,
            caption: captionRef.current.value,
            profileImg: session.user.image,
            timestam: serverTimestamp()
        })

        const imageRef =ref(storage, `posts/${docRef.id}/image`);

        await uploadString(imageRef, selectedFile, "data_url").then(async snapshot =>{
            const downloadURL = await getDownloadURL(imageRef); 

            await updateDoc(doc(db,'posts', docRef.id),{
                image: downloadURL
            })
        })

        setOpen(false);
        setLoading(false);
        setSelectedFile(null);
    }

    
    const addImageToPost = (e) => {
        const reader = new FileReader();
        if(e.target.files[0]){
            reader.readAsDataURL(e.target.files[0]);
        }
        reader.onload =(readerEvent) => {
            setSelectedFile(readerEvent.target.result);
        };
    };


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
                                {
                                    selectedFile ?(
                                        <img src={selectedFile} onClick={() => setSelectedFile(null)}
                                         className="w-full object-contain cursor-pointer" alt=''/>
                                    ):
                                    (
                                    <div
                                    onClick={() => filePickerRef.current.click()}
                                    className= "mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 cursor-pointer">
                                    <CameraIcon className='h-6 w-6 text-red-500'
                                    aria-hidden="true"/>
                                </div>)
                                }




                                
                                <div>
                                    <div className='mt-3 text-center sm:mt-5'>
                                    <Dialog.Title as='h3' 
                                    className="text-lg leading-6 font-medium text-gray-800">
                                        UpLoad a Photo</Dialog.Title>
                                    <div>
                                    <input 
                                    ref={filePickerRef}
                                    type='file'
                                    hidden
                                    onChange={addImageToPost}
                                    />
                                    </div>

                                    <div className='mt-2'>
                                        <input className='border-none focus:ring-0 w-full
                                         text-center '
                                         type="text"
                                         ref={captionRef}

                                         placeholder="Enter a Caption"></input>
                                
                                        </div>

                                    </div>
                                </div>


                                <div className='mt-5 sm:mt-6'>
                                    <button type="button"
                                    disabled={!selectedFile}
                                    className="inline-flex justify-center w-full rounded-md 
                                    border border-transparent shadow-sm px-4 py-2 bg-red-500 
                                    text-base font-medium text-white hover:bg-red-600 focus:outline-none
                                    focus:ring-2 focus:ring-offset-2 focus:ring-red-400 sm:text-sm 
                                     disabled:bg-gray-300 disabled:cursor-not-allowed hover:disabled:bg-gray-400"
                                    onClick={upLoadPost}
                                    >
                                        {loading ? "Uploading" : "upLoad Post"}
                                    </button>
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