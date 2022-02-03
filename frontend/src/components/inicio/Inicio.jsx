import React from "react"
import Main from "../template/Main/Main"
import Slide1 from '../../assets/images/1.png'
import Slide2 from '../../assets/images/2.png'
import Slide3 from '../../assets/images/3.png'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const headerProps = {

    icon: 'home',
    title: 'Pagina Inicial',
    subtitle: 'Bem vindo!'

}

export default function Inicio() {

    return (

        <Main {...headerProps}>

            <Carousel showStatus={false} showIndicators={false} autoPlay emulateTouch infiniteLoop interval={5000} thumbWidth={130}>

                <div>
                    <img src={Slide1} alt="Imagem 1"/>
                    <p className="legend">Imagem 1</p>
                </div>
                <div>
                    <img src={Slide2} alt="Imagem 2"/>
                    <p className="legend">Imagem 2</p>
                </div>
                <div>
                    <img src={Slide3} alt="Imagem 3"/>
                    <p className="legend">Imagem 3</p>
                </div>

            </Carousel>

        </Main>

    )

}