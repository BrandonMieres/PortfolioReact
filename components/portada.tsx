'use client'; // Asegúrate de que el componente esté marcado como un Client Component

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Link from 'next/link'; // Importa el Link de Next.js
import { debounce } from 'lodash'; // Importa debounce de lodash

export default function Portada() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const videoRef = useRef(null);

  // Bloquear el scroll siempre en esta página
  useEffect(() => {
    // Bloqueamos el scroll de manera global
    document.body.style.overflow = 'hidden';

    // Limpiar cuando el componente se desmonte
    return () => {
      document.body.style.overflow = 'auto'; // Restablecer el scroll cuando se salga de la página
    };
  }, []);

  // Optimización del evento de scroll con debounce
  useEffect(() => {
    const handleScroll = debounce(() => {
      setIsScrolled(window.scrollY > 20);
    }, 50);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Efecto para desactivar el scroll cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'; // Desactivar el scroll
    } else {
      document.body.style.overflow = 'hidden'; // Aseguramos que el scroll esté deshabilitado
    }
  }, [isMenuOpen]);

  return (
    <div className="page">
      <header>
        <div className={`sticky-nav ${isScrolled ? 'scrolled' : ''}`}>
          <motion.div
            className="logo"
            initial={{ opacity: 1 }}
            animate={{ opacity: isMenuOpen ? 0 : 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <img src="/img/bm.png" alt="BM Logo" style={{ width: '80px', height: 'auto' }} />
          </motion.div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="menu-overlay"
              initial={{ opacity: 0, y: '-100%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '-100%' }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="menu-container">
                <div className="menu-left">
                  <div className="menu-content">
                    <div className="menu-title-container">
                      <h1 className="menu-title">
                        Higher Technician
                        <br />
                        in Computer
                        <br />
                        Network Systems
                        <br />
                        Management<span className="dot">.</span>
                      </h1>
                      <div className="topographic-bg"></div>
                    </div>
                    <div className="contact-info">
                      <p>+55 5555555</p>
                      <p>b.mieres@sapalomera.cat</p>
                      <p>Brandon Mieres Touzet</p>
                    </div>
                    <div className="social-links">
                      <a href="https://linkedin.com/in/" className="social-link">linkedin</a>
                      <span className="separator">|</span>
                      <a href="https://facebook.com/" className="social-link">facebook</a>
                      <span className="separator">|</span>
                      <a href="https://instagram.com/" className="social-link">instagram</a>
                    </div>
                  </div>
                </div>

                <div className="menu-right">
                  <button
                    className="close-btn"
                    onClick={() => {
                      setIsMenuOpen(false); // Cierra el menú
                    }}
                    aria-label="Close menu"
                  >
                    <X size={32} color="#000" />
                  </button>
                  <div className="portfolio-link">
                    <Link href="/portfolio">
                      <h2>Portfolio</h2>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        <section className="hero">
          <div className="video-wrap">
            <video ref={videoRef} autoPlay loop muted playsInline>
              <source src="https://tactusmarketing.com/wp-content/uploads/tactus-waves-hero.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="content">
            <h1 className="hero-title">
              Portfolio
              <br />
              Brandon Mieres
            </h1>
            <button className="custom-btn" onClick={() => setIsMenuOpen(true)}>Open Menu</button>
          </div>
          {/* Corte blanco con curva */}
          <div className="white-cut"></div>
        </section>
      </main>



      
      <style jsx>{`
        :global(*) {
          box-sizing: border-box;
          cursor: default;
          margin: 0;
          padding: 0;
        }

        :global(body) {
          font-family: 'Montserrat', sans-serif;
          background-color: #212121;
          color: #efefef;
          overflow-x: hidden;
        }

        .page {
          min-height: 100vh;
          position: relative;
        }

        .sticky-nav {
          position: fixed;
          top: 20px;
          left: 20px;
          right: 20px;
          z-index: 9;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
        }

        .menu-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          z-index: 1;
          background: transparent;
        }

        .menu-container {
          width: 100%;
          height: 100vh;
          display: flex;
          flex-direction: row;
          z-index: 1;
        }

        .menu-left {
          flex: 0 0 70%;
          height: 100vh;
          background: #000000;
          position: relative;
          overflow: hidden;
          padding: 40px;
        }

        .menu-right {
          flex: 0 0 30%;
          height: 100vh;
          background: #00BCD4;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
        }

        .menu-content {
          position: relative;
          z-index: 1;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .menu-title-container {
          position: relative;
          margin-bottom: 60px;
        }

        .topographic-bg {
          position: absolute;
          top: -100%;
          left: -100%;
          width: 300%;
          height: 500%;
          background-image: url('https://assets.codepen.io/319606/bg-topographic.svg');
          background-size: 2000px;
          background-position: center;
          opacity: 0.5;
          z-index: -1;
          animation: moveBackground 60s linear infinite;
        }

        @keyframes moveBackground {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(-33.33%, -33.33%);
          }
        }

        .menu-title {
          position: relative;
          z-index: 1;
          font-size: 4rem;
          font-weight: 900;
          line-height: 1.1;
          color: #ffffff;
        }

        .dot {
          color: #00BCD4;
        }

        .contact-info {
          margin-bottom: 40px;
          font-size: 1.2rem;
        }

        .contact-info p {
          margin-bottom: 15px;
          color: #efefef;
        }

        .social-links {
          display: flex;
          gap: 15px;
          align-items: center;
          font-size: 0.9rem;
        }

        .social-link {
          color: #00BCD4;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .social-link:hover {
          color: #efefef;
        }

        .separator {
          color: #efefef;
        }

        .close-btn {
          position: absolute;
          top: 0%;
          right: 1%;
          color: #000000;
          padding: 7%; /* Aumentamos el área del botón para facilitar el clic */
          z-index: 1050;
          height: 1px;
          width: 1px;
        }

        .portfolio-link {
          text-align: center;
        }

        .portfolio-link h2 {
          font-size: 3rem;
          font-weight: 900;
          color: #ffffff;
          transition: color 0.3s ease; /* Transición suave para el cambio de color */
        }

        /* Efecto hover: cuando el cursor está encima, el texto se vuelve negro */
        .portfolio-link h2:hover {
          color: #000000; /* Cambia el color a negro */
        }


        .hero {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .video-wrap {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .video-wrap video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: rotate(180deg);
        }

        .content {
          position: relative;
          z-index: 1;
          text-align: center;
        }
        .hero-title {
          font-size: 5rem;
          font-weight: 900;

        }
        .custom-btn {
          background: #ffffff; /* Fondo blanco */
          color: #000000; /* Texto negro */
          border: none;
          padding: 15px 30px;
          font-size: 1.1rem;
          font-weight: 700;
          border-radius: 50px;
          cursor: pointer;
          text-transform: uppercase; /* Transformar a mayúsculas para más estilo */
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); /* Sombra sutil */
          transition: all 0.3s ease;
          outline: none; /* Quitar outline para un estilo más limpio */
        }

        .custom-btn:hover {
          background: #000000; /* Fondo negro en hover */
          color: #ffffff; /* Texto blanco en hover */
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.5); /* Aumenta la sombra al hacer hover */
          transform: translateY(-3px); /* Da la sensación de que el botón sube */
        }

        .custom-btn:active {
          transform: translateY(1px); /* Efecto de presionar el botón */
        }

        @media (max-width: 768px) {
          .menu-container {
            flex-direction: column;
          }

          .menu-left {
            flex: 0 0 60%;
            height: 60vh;
          }

          .menu-right {
            flex: 0 0 40%;
            height: 40vh;
          }

          .menu-title {
            font-size: 2.5rem;
          }

          .hero-title {
            font-size: 3rem;
          }
        }
      `}</style>
    </div>
  )
}

