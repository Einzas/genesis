import React from 'react';
import '../pages/css/Terms.css'; // Importamos el archivo de estilos CSS

const Terms = () => {
  return (
    <div className="background-container"> {/* Contenedor adicional para el fondo animado */}
      <div className="animated-bg galaxy"> {/* Clases para el fondo animado */}
        <div className="terms-container"> {/* Contenedor del contenido principal */}
          <div className="max-w-3xl mx-auto mt-8 px-6 py-8 bg-white shadow-lg rounded-lg text-xs"> {/* Tamaño de fuente aún más reducido */}
            <h1 className="text-2xl font-bold mb-6 text-center">Términos y Condiciones</h1> {/* Título con tamaño de fuente ajustado */}
            <div className="prose lg:prose-lg mx-auto">
              <section>
                <h2 className="text-lg font-semibold mb-3">1. Uso del sitio web</h2> {/* Título con tamaño de fuente ajustado */}
                <p className="mb-4">
                  Al acceder y utilizar el Sitio web, usted acepta cumplir con estos Términos y Condiciones y todas las leyes y regulaciones aplicables. Si no está de acuerdo con alguno de estos términos, tiene prohibido usar o acceder a este sitio. El material contenido en este sitio web está protegido por leyes de derechos de autor y marcas comerciales aplicables.
                </p>
              </section>
              <section>
                <h2 className="text-lg font-semibold mb-3">2. Propiedad intelectual</h2> {/* Título con tamaño de fuente ajustado */}
                <p className="mb-4">
                  El Sitio web y su contenido original, características y funcionalidad son y seguirán siendo propiedad exclusiva de nosotros y nuestros licenciantes. El Sitio web está protegido por leyes de derechos de autor, marcas comerciales y otras leyes de los Estados Unidos y extranjeras. Nuestras marcas comerciales no pueden usarse en relación con ningún producto o servicio sin el consentimiento previo por escrito de nosotros.
                </p>
              </section>
              <section>
                <h2 className="text-lg font-semibold mb-3">3. Limitación de responsabilidad</h2> {/* Título con tamaño de fuente ajustado */}
                <p className="mb-4">
                  En ningún caso seremos responsables ante usted o cualquier otra persona por cualquier daño indirecto, incidental, especial, punitivo o consecuente de ningún tipo que surja de su acceso o uso del sitio web.
                </p>
              </section>
              <section>
                <h2 className="text-lg font-semibold mb-3">4. Cambios</h2> {/* Título con tamaño de fuente ajustado */}
                <p className="mb-4">
                  Nos reservamos el derecho, a nuestra entera discreción, de modificar o reemplazar estos Términos en cualquier momento. Si una revisión es importante, intentaremos proporcionar un aviso de al menos 30 días antes de que entren en vigencia los nuevos términos. Lo que constituye un cambio material se determinará a nuestra sola discreción.
                </p>
              </section>
              <section>
                <h2 className="text-lg font-semibold mb-3">5. Contacto</h2> {/* Título con tamaño de fuente ajustado */}
                <p className="mb-4">
                  Si tiene alguna pregunta sobre estos Términos, contáctenos.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terms;
