

'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import projects from "@/data/projects"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    speed: 1500,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".dot-3",
        clickable: true,
    },
    breakpoints: {
        1199: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 3,
        },
        767: {
            slidesPerView: 2,
        },
        650: {
            slidesPerView: 2,
        },

        575: {
            slidesPerView: 1,
        },

        0: {
            slidesPerView: 1,
        },
    },
}
export default function ProjectSlider1({ showDots, cardStyle = "default" }) {
    return (
        <>
            <div className="swiper project-slider pt-5">
                <Swiper {...swiperOptions} className="swiper-wrapper">
                    {projects.map((project) => (
                        <SwiperSlide key={project.slug}>
                            <div className={`project-items ${cardStyle === "rectangular" ? "project-items-rectangular" : ""}`}>
                                <div className="project-image">
                                    <img 
                                        src={project.image} 
                                        alt="project-img" 
                                        style={cardStyle === "rectangular" ? {
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            aspectRatio: '1200/750'
                                        } : {}}
                                    />
                                    <div className="project-content">
                                        <p>{project.category}</p>
                                        <h4>
                                            <Link
                                                href={project.link}
                                                target={project.external ? "_blank" : undefined}
                                            >
                                                {project.title}
                                            </Link>
                                        </h4>
                                        <Link
                                            href={project.link}
                                            target={project.external ? "_blank" : undefined}
                                            className="icon"
                                        >
                                            <i className="fa-solid fa-arrow-right" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {showDots &&
                    <div className="swiper-dot-2">
                        <div className="dot-3" />
                    </div>
                }
            </div>
        </>
    )
}
