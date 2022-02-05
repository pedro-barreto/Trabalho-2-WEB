import './Inicio.css'
import React from "react"
import Main from "../template/Main/Main"
import Slide1 from '../../assets/images/1.png'
import Slide2 from '../../assets/images/2.png'
import Slide3 from '../../assets/images/3.png'
import Slide4 from '../../assets/images/4.png'
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
                <div>
                    <img src={Slide4} alt="Imagem 4"/>
                    <p className="legend">Imagem 4</p>
                </div>

            </Carousel>

            <div className="form">
                <div className="row">

                    <div className="col-12 col-md-12 noticia-titulo first-notice">
                        <div className="form-group">

                            <h2>Noticia 1</h2>

                        </div>
                    </div>

                    <div className="col-12 col-md-12">
                        <div className="form-group">

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum consequatur architecto omnis delectus natus, id dolor eos deserunt nostrum neque numquam eveniet aspernatur quisquam est soluta sint vel nulla ipsum molestiae temporibus a maiores impedit perferendis! Blanditiis, ipsum ducimus? Esse, sit. Dolor aspernatur ea maxime alias in? Omnis voluptatum illum quisquam rerum ullam debitis eligendi aperiam repellat repudiandae quia quibusdam iure blanditiis placeat, maxime, natus sequi fugit quam quidem? Magni.</p>

                        </div>
                    </div>

                    <div className="col-12 col-md-12 divs"><hr /></div>

                    <div className="col-12 col-md-12 noticia-titulo">
                        <div className="form-group">

                            <h2>Noticia 2</h2>

                        </div>
                    </div>

                    <div className="col-12 col-md-12">
                        <div className="form-group">

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium laudantium exercitationem voluptatem impedit facere suscipit odit quaerat reiciendis veniam placeat rerum asperiores tempora velit libero minima quidem consectetur est repellat, fugiat dolorum! Rerum quos eius natus veritatis. Beatae, placeat tempora est saepe illum incidunt amet corporis eaque dolore, voluptatem ex magni. Magnam accusantium nisi nihil vero amet fugiat earum necessitatibus repudiandae in similique dicta nostrum dolores voluptate exercitationem quisquam, nam sint repellendus voluptatibus suscipit, maxime cupiditate labore ad. Adipisci, iusto inventore. Provident laborum soluta dignissimos laudantium impedit? Pariatur optio ut officiis veritatis, consequuntur voluptas sequi ab veniam ratione. Vero esse nemo assumenda, quam sapiente distinctio, nostrum quibusdam animi sunt, quae molestias non dolorem aspernatur optio magni saepe dolore perferendis sit?</p>

                        </div>
                    </div>

                    <div className="col-12 col-md-12 divs"><hr /></div>

                    <div className="col-12 col-md-12 noticia-titulo">
                        <div className="form-group">

                            <h2>Noticia 3</h2>

                        </div>
                    </div>

                    <div className="col-12 col-md-12">
                        <div className="form-group">

                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam maxime autem molestiae enim officiis ducimus assumenda veniam neque harum, voluptatem distinctio eaque voluptatibus quasi doloribus culpa amet rerum aliquid, pariatur quae accusantium alias odit porro quas dolorem! Unde at enim, amet tempore laborum, porro suscipit et odit dolorem, quam libero.</p>

                        </div>
                    </div>

                    <div className="col-12 col-md-12 divs"><hr /></div>

                    <div className="col-12 col-md-12 noticia-titulo">
                        <div className="form-group">

                            <h2>Noticia 4</h2>

                        </div>
                    </div>

                    <div className="col-12 col-md-12">
                        <div className="form-group">

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi id inventore numquam porro repellendus officiis ipsum iusto, voluptates consectetur atque maiores quia perferendis? Dicta est voluptates voluptatum nesciunt. Ullam laboriosam reprehenderit temporibus perspiciatis facilis minima atque. Qui quod, quaerat obcaecati a odit totam ipsum voluptates eum atque. Adipisci earum quaerat dignissimos corrupti reprehenderit a iusto sit quidem dolorum delectus sequi dolor natus error at harum commodi ut quod itaque, iste necessitatibus vero rerum similique repudiandae unde. Nisi sed sit est!</p>

                        </div>
                    </div>

                    <div className="col-12 col-md-12 divs"><hr /></div>

                    <div className="col-12 col-md-12 noticia-titulo">
                        <div className="form-group">

                            <h2>Noticia 5</h2>

                        </div>
                    </div>

                    <div className="col-12 col-md-12 last-notice">
                        <div className="form-group">

                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti esse quia atque tempora mollitia vero dolorum non porro doloremque quod in quos quo autem fugit at ut, vitae eveniet nihil reprehenderit voluptatum commodi delectus illum odio quisquam. Exercitationem officiis, tempore vero officia nostrum laborum delectus! Praesentium velit doloribus dicta sit animi iusto nihil eos repudiandae eligendi dolores expedita ullam, laudantium ipsa excepturi corporis odit odio debitis adipisci temporibus obcaecati voluptatem porro. Harum officia cupiditate, ab ratione tenetur vero excepturi blanditiis minima iste in voluptatem architecto voluptates at tempore dolores cumque nemo doloremque, deserunt recusandae similique possimus fuga repudiandae. Debitis, quasi, odit optio qui ad nulla vitae atque alias ratione illum dolorem fugiat minima numquam natus? Corrupti magnam maxime assumenda dolorem cupiditate? At quis explicabo sequi facilis eum, deleniti repudiandae eveniet ratione molestias enim impedit. Deserunt accusantium assumenda sint quia perferendis neque ut, a id repellat ducimus illum sunt nam ex omnis, laudantium adipisci debitis fugit placeat soluta veniam dolorum autem!</p>

                        </div>
                    </div>
                </div>
            </div>
        </Main>

    )

}