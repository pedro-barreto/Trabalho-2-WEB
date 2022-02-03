import './SobreNos.css'
import React from "react"
import Main from "../template/Main/Main"
import Imagem1 from '../../assets/images/1.png'
import Imagem2 from '../../assets/images/2.png'
import Imagem3 from '../../assets/images/3.png'

const headerProps = {

    icon: 'info',
    title: 'Sobre Nós',
    subtitle: 'Saiba mais um pouco sobre nós e nossa escola'

}

export default function SobreNos() {

    return (

        <Main {...headerProps}>

            <div className="form">
                <div className="row">

                    <div className="col-12 col-md-8">
                        <div className="form-group">

                            <h2>Instituto</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium iure veritatis consequuntur beatae, suscipit provident voluptatum distinctio eaque, quas nobis nam eos aliquid. Accusamus commodi sunt molestiae a facere nostrum eaque nobis laborum ad fugiat corrupti quas ea, tempora amet praesentium ratione officia totam! Aperiam mollitia numquam esse porro voluptas?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur reiciendis consectetur vero magnam sequi ad qui unde ipsum nisi nam?</p>

                        </div>
                    </div>

                    <div className="col-12 col-md-4 align-img">
                        <div className="form-group">

                            <img src={Imagem1} alt="Instituro" />

                        </div>
                    </div>

                    <div className="col-12 col-md-12"><hr/></div>

                    <div className="col-12 col-md-8">
                        <div className="form-group">

                            <h2>Professores</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi possimus inventore doloribus quos eum quibusdam et voluptate sint dicta, atque sed totam veniam perspiciatis quo aut omnis! Quidem perspiciatis quisquam minus! Quae tenetur neque earum doloremque reprehenderit voluptas id dolor minus eum nemo, quas autem rerum? Iusto, beatae natus! Sequi nemo ducimus ipsum ullam, similique sapiente quod impedit enim quae, obcaecati, vel possimus eaque asperiores explicabo. Molestiae veniam eveniet in laborum sint dolor deserunt vel, suscipit eos. Dicta, quibusdam voluptates!</p>

                        </div>
                    </div>

                    <div className="col-12 col-md-4 align-img">
                        <div className="form-group">

                            <img src={Imagem2} alt="Instituro" />

                        </div>
                    </div>

                    <div className="col-12 col-md-12"><hr/></div>

                    <div className="col-12 col-md-8">
                        <div className="form-group">

                            <h2>Alunos</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe minus dignissimos doloremque? Nemo, minima incidunt ratione, quaerat consectetur architecto accusamus quam facilis qui porro, repellendus placeat iste iure adipisci unde totam debitis quia molestias a obcaecati omnis enim maiores amet! Facere voluptatem quia porro officiis, veritatis exercitationem tempora numquam hic neque non deleniti! Nostrum iusto adipisci facere sed officiis. Illum atque non eligendi, officia cupiditate autem. Repudiandae, dolorem est consectetur praesentium animi maiores. Odit quis, quibusdam nam expedita distinctio pariatur eos quisquam dicta maxime, quidem impedit, repellendus magnam consectetur vitae.</p>

                        </div>
                    </div>

                    <div className="col-12 col-md-4 align-img">
                        <div className="form-group">

                            <img src={Imagem3} alt="Instituro" />

                        </div>
                    </div>

                    <div className="col-12 col-md-12"><hr/></div>

                    <div className="col-12 col-md-8">
                        <div className="form-group">

                            <h2>Projetos</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam alias iure magni ipsam? Doloremque, vitae! Ratione sequi enim nesciunt dolores. Nemo cum, reiciendis ipsam quibusdam ea maxime accusantium repellendus! Voluptas nihil doloribus voluptatem recusandae, fugiat error! Laborum debitis, sapiente exercitationem natus magni maiores, voluptates ea iste quia voluptatibus architecto consequuntur eligendi consectetur facilis! Unde, voluptatem eaque culpa consequatur molestias aut veritatis necessitatibus? Accusamus maxime dolores commodi, eaque impedit deleniti fugit, corporis neque quis iure ea amet laborum vitae, possimus excepturi delectus libero aliquam placeat quo eligendi cum quasi quod ex necessitatibus. Architecto aspernatur explicabo nostrum dignissimos non. Id ut blanditiis amet molestiae sapiente ab delectus nihil officia obcaecati optio at quidem esse maxime, facere ratione aliquid corporis iste, alias consequuntur.</p>

                        </div>
                    </div>

                    <div className="col-12 col-md-4 align-img">
                        <div className="form-group">

                            <img src={Imagem1} alt="Instituro" className="align-middle"/>

                        </div>
                    </div>

                </div>
            </div>

        </Main>

    )

}