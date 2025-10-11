// import 'swiper/css';
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import "/public/assets/css/bootstrap.min.css"        
import "/public/assets/css/all.min.css"
import "/public/assets/css/animate.css"
import "/public/assets/css/magnific-popup.css"
import "/public/assets/css/meanmenu.css"
import "/public/assets/css/swiper-bundle.min.css"
import "/public/assets/css/nice-select.css"
import "/public/assets/css/main.css"

import { Kumbh_Sans } from 'next/font/google'

const kumbh = Kumbh_Sans({
    weight: ['300', '400', '500', '600', '700','800','900'],
    subsets: ['latin'],
    display: 'swap',
})

export const metadata = {
  title: 'Palasoft Service - Soluciones de TI y Tecnología',
  description: 'Transformamos ideas en soluciones tecnológicas innovadoras que impulsan el crecimiento de tu negocio.',
  
  // Configuración para compartir en redes sociales
  openGraph: {
    title: 'Palasoft Service - Soluciones de TI y Tecnología',
    description: 'Transformamos ideas en soluciones tecnológicas innovadoras que impulsan el crecimiento de tu negocio.',
    url: 'https://palasoftservice.vercel.app/',
    siteName: 'Palasoft Service',
    images: [
      {
        url: '/assets/img/imgprincipal.jpg',
        width: 1200,
        height: 630,
        alt: 'Palasoft Service - Soluciones de TI y Tecnología',
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Palasoft Service - Soluciones de TI y Tecnología',
    description: 'Transformamos ideas en soluciones tecnológicas innovadoras que impulsan el crecimiento de tu negocio.',
    images: ['/assets/img/imgprincipal.jpg'],
  },
  keywords: [
    'soluciones TI',
    'tecnología',
    'desarrollo web',
    'aplicaciones móviles',
    'automatización',
    'transformación digital',
    'Colombia',
    'Mosquera'
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${kumbh.className}`}>{children}</body>
    </html>
  )
}
