
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Error404() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Error 404">
                <section className="Error-section section-padding fix">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-9">
                                <div className="error-items">
                                    <div className="error-image">
                                        <img src="/assets/img/404.png" alt="img" />
                                    </div>
                                    <h2>
                                        ¡Ups! Esta Página se Perdió <br />
                                        en la Conversación
                                    </h2>
                                    <Link href="/" className="theme-btn wow fadeInUp" data-wow-delay=".8s">
                                        Volver al Inicio
                                        <i className="fa-solid fa-arrow-right-long" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}