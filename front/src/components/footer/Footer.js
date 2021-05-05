import React, { useState } from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';


function Footer() {

    return (
        <>
            <footer >
                <div className="footer-container">
                    <div className="footer-location">
                        <h3>Localização</h3>
                        <p>Avenida Andrômeda, 2000. Bloco 6 e 8 Alphavile SP</p>
                        <p>brasil@corebiz.ag</p>
                        <p>+55 11 3090 1039</p>
                    </div>

                    <div className="footer-sac">
                        <a className="btn btn-footer" href="#">
                            <i class="fas fa-envelope"></i>
                            Entre em contato
                        </a>
                        <a className="btn btn-footer" href="#">
                            <i class="fas fa-headset"></i>
                            Fale com o nosso <br /> consultor online
                        </a>
                    </div>
                    <div className="footer-support">
                        <div>
                            <span>Created by</span>
                            <img src='/images/logo-b.svg' />
                        </div>
                        <div>
                            <span>Powered by</span>
                            <img src='/images/vtex-b.svg' />
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer;

