import CounterUpAnimated from "../elements/CounterUpAnimated"


export default function Achievement1() {
    return (
        <>
            <section className="achievement-section fix section-padding pt-0">
                <div className="container">
                    <div className="achievement-wrapper">
                        <div className="section-title mb-0">
                            <span className="text-white wow fadeInUp">logros</span>
                            <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                                Estamos Aumentando <br /> el Éxito Empresarial
                            </h2>
                        </div>
                        <div className="counter-area">
                            <div className="counter-items wow fadeInUp" data-wow-delay=".3s">
                                <div className="icon">
                                    <img src="/assets/img/achievement-icon/01.svg" alt="icon-img" />
                                </div>
                                <div className="content">
                                    <h2><CounterUpAnimated count={1000} delay={300}/>+</h2>
                                    <p>Clientes Satisfechos</p>
                                </div>
                            </div>
                            <div className="counter-items wow fadeInUp" data-wow-delay=".5s">
                                <div className="icon">
                                    <img src="/assets/img/achievement-icon/02.svg" alt="icon-img" />
                                </div>
                                <div className="content">
                                    <h2><CounterUpAnimated count={250} delay={500}/>+</h2>
                                    <p>Proyectos Completados</p>
                                </div>
                            </div>
                            <div className="counter-items wow fadeInUp" data-wow-delay=".7s">
                                <div className="icon">
                                    <img src="/assets/img/achievement-icon/03.svg" alt="icon-img" />
                                </div>
                                <div className="content">
                                    <h2><CounterUpAnimated count={30} delay={700}/>+</h2>
                                    <p>Expertos Calificados</p>
                                </div>
                            </div>
                            <div className="counter-items wow fadeInUp" data-wow-delay=".9s">
                                <div className="icon">
                                    <img src="/assets/img/achievement-icon/04.svg" alt="icon-img" />
                                </div>
                                <div className="content">
                                    <h2><CounterUpAnimated count={6} delay={900}/>+</h2>
                                    <p>Años de Experiencia</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
