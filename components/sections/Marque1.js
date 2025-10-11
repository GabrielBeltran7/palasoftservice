export default function Marque1() {
    const items = [
        "Negocios",
        "Soluciones TI",
        "Procesos de Trabajo",
        "Tecnología",
        "Innovación",
        "Ciberseguridad",
        "Transformación Digital",
        "Desarrollo Web",
        "Aplicaciones Móviles",
        "Inteligencia Artificial",
        "Automatización",
        "Servicios en la Nube"
    ];

    return (
        <div className="marque-section">
            <div className="marquee-wrapper text-slider">
                <div className="marquee-inner to-left">
                    <ul className="marqee-list d-flex">
                        <li className="marquee-item">
                            {items.map((item, index) => (
                                <span key={index} className="text-slider">
                                    {item}
                                    <img
                                        src="/assets/img/star.svg"
                                        alt="icono"
                                        className="inline-block mx-2"
                                    />
                                </span>
                            ))}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

