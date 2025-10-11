
import ProjectSlider1 from '../slider/ProjectSlider1'



export default function Project1() {
    return (
        <>
            <section className="project-section section-padding pt-0 fix" id="project">
                <div className="section-title text-center">
                    <span className="wow fadeInUp">Proyectos Destacados</span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                        Proyectos desarrollados que impulsan resultados
                    </h2>
                </div>
                <ProjectSlider1 showDots/>
            </section>
        </>
    )
}
