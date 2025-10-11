'use client'
import { useState } from 'react'
import dynamic from 'next/dynamic'
import 'react-modal-video/css/modal-video.css'

const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false,
})

export default function VideoPopup({ style }) {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            {style === 1 &&
                <div className="video-box">
                    <a onClick={() => setOpen(true)} className="video-btn ripple video-popup">
                        <i className="fa-solid fa-play" />
                    </a>
                </div>
            }
            {style === 2 &&
                <div className="video-box">
                    <a onClick={() => setOpen(true)} className="video-buttton video-popup">
                        <i className="fa-solid fa-play" />
                        <img src="/assets/img/about/circle-text.png" alt="text-img" className="text-circle" />
                    </a>
                </div>
            }
            {style === 3 &&
                <span className="button-text wow fadeInUp" data-wow-delay=".9s">
                    <a onClick={() => setOpen(true)} className="video-btn ripple video-popup">
                        <i className="fa-solid fa-play" />
                    </a>
                    <span className="ms-4 d-line">Ver video de TI</span>
                </span>
            }
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="uVM99LO20to" onClose={() => setOpen(false)} />
        </>
    )
}