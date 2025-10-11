
import Layout from "@/components/layout/Layout"
import projects from "@/data/projects"
export default function Project() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Proyecto">
                <section className="project-section section-padding fix">
                    <div className="container">
                        <div className="row g-4">
                            {projects.map((project, index) => (
                                <div
                                    className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                                    data-wow-delay={[".3s", ".5s"][index % 2]}
                                    key={project.slug}
                                >
                                    <div className="project-items project-hover-container" style={{position: 'relative', overflow: 'hidden'}}>
                                        <div className="project-image">
                                            <img 
                                                src={project.image} 
                                                alt="project-img" 
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                    aspectRatio: '1400/750'
                                                }}
                                            />
                                            <div 
                                                className="project-content project-hover-content" 
                                                style={{
                                                    backgroundColor: '#384BFF', 
                                                    padding: '20px', 
                                                    borderRadius: '10px',
                                                    position: 'absolute',
                                                    bottom: '0',
                                                    left: '0',
                                                    right: '0',
                                                    transition: 'opacity 0.3s ease-in-out'
                                                }}
                                            >
                                                <p style={{color: '#ffffff'}}>{project.category}</p>
                                                <h4>
                                                    <span style={{color: '#ffffff', cursor: 'default'}}>
                                                        {project.title}
                                                    </span>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}