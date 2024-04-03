import { useState } from 'react';
import { IoMdClose } from "react-icons/io";

export default function VideoModal({ showModal, setShowModal }: { showModal: boolean, setShowModal: React.Dispatch<React.SetStateAction<boolean>> }) {
    const [videoSrc, _] = useState<string>('https://www.youtube.com/embed/d2OONzqh2jk?si=RkCI5-de6uT6FTJk');

    // Function to close the modal and stop the video playback
    const handleCloseModal = () => {
        setShowModal(false); // Close the modal
    };

    return (
        <>
            <div className='bg-black bg-opacity-60 pt-[80%] md:pt-0 h-screen w-screen fixed md:top-0 left-0 md:pl-16 z-50'>
                <div className='flex justify-end text-white cursor-pointer md:pr-12' onClick={handleCloseModal}>
                    <IoMdClose className='text-4xl'/>
                </div>
                <div className={`${!showModal ? 'hidden' : 'visible'} flex justify-center items-top md:w-[90vw] md:h-[90vh]`}>
                    <iframe
                        width="100%"
                        height="100%"
                        src={showModal ? videoSrc : ''}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        ></iframe>
                </div>
            </div>
        </>
    );
}
