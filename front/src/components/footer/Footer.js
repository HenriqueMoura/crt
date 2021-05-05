import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';


function Footer() {

    return (
        <>

            <section class="newsletter">
                <div class="newsletter-container">
                    <div class="newsletter-form active" data-newsletter="box">
                        <h2>Participe de nossas news com promoções e novidades!</h2>
                        <form >
                            <div class="newsletter-box-input">
                                <input type="text" placeholder="Digite seu nome" />
                                <span class="alert-input" data-msg-input="name">Preencha com seu nome completo</span>
                            </div>
                            <div class="newsletter-box-input">
                                <input type="email" placeholder="Digite seu email" />
                                <span class="alert-input" data-msg-input="email">Preencha com um e-mail válido</span>
                            </div>
                            <button class="btn btn-form" type="submit" d>Eu quero!</button>
                        </form>
                    </div>
                    <div class="newsletter-box-success">
                        <h3>
                            Seu e-mail foi cadastrado com sucesso!
                            <span>A partir de agora você receberá as novidade e ofertas exclusivas.</span>
                        </h3>
                        <Link class="btn btn-newsletter-sucess" >Cadastrar novo e-mail</Link>
                    </div>
                </div>
            </section>
            <footer >
                <div className="footer-container">
                    <div className="footer-location">
                        <h3>Localização</h3>
                        <p>Avenida Andrômeda, 2000. Bloco 6 e 8 Alphavile SP</p>
                        <p>brasil@corebiz.ag</p>
                        <p>+55 11 3090 1039</p>
                    </div>

                    <div className="footer-sac">
                        <Link className="btn btn-footer" href="#">
                            <i class="fas fa-envelope"></i>
                            Entre em contato
                        </Link>
                        <Link className="btn btn-footer" href="#">
                            <i class="fas fa-headset"></i>
                            Fale com o nosso <br /> consultor online
                        </Link>
                    </div>
                    <div className="footer-support">
                        <div>
                            <span>Created by</span>
                            <img src='/images/logo-b.svg' alt="logo corebiz" />
                        </div>
                        <div>
                            <span>Powered by</span>
                            <img src='/images/vtex-b.svg' alt="logo vtex" />
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer;

