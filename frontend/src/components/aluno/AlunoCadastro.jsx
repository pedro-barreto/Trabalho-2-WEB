import Main from '../template/Main/Main'
import axios from 'axios'
import React, { useState, useEffect } from "react"
import InputMask from 'react-input-mask'
import './AlunoCadastro.css'

const baseUrl = 'http://localhost:3001/alunos'

const headerProps = {

    icon: 'users',
    title: 'Aluno',
    subtitle: 'Cadastrar alunos - CRUD'

}

const initialState = { nome: '', responsavel: '', sexo: '', nascimento: '', cpf: '', rg: '', serie: '', pais: '', estado: '', cidade: '', bairro: '', rua: '', n_casa: '', telefone: '', celular: '', email: '' }

export default function AlunoCadastro() {

    const [aluno, setAluno] = useState(initialState)
    const [alunoList, setItens] = useState([])

    const save = () => {

        if (aluno.nome === '' || aluno.cpf === '' || aluno.email === '' || aluno.sexo === '' || aluno.nascimento === '' || aluno.rg === '' || aluno.responsavel === '' || aluno.pais === '' || aluno.estado === '' || aluno.cidade === '' || aluno.bairro === '' || aluno.rua === '' || aluno.n_casa === '' || aluno.celular === '' || aluno.serie === '') {

            alert('Campo vazio')

        } else {

            const method = aluno.id ? 'put' : 'post'
            const url = aluno.id ? `${baseUrl}/${aluno.id}` : baseUrl
            axios[method](url, aluno).then(resp => {

                const list = getUpadeteList(resp.data)
                setItens(list)
                clear()

            })

        }

    }

    const getUpadeteList = (data) => {

        const list = alunoList.filter((aluno) => aluno.id !== data.id)
        list.unshift(data)
        return list

    }

    const clear = () => {

        setAluno(initialState)

    }

    const updateField = (event) => {

        setAluno({

            ...aluno, [event.target.name]: event.target.value

        })

    }

    function renderForm() {

        return (

            <div className="form">
                <div className="row">

                    <div className="col-12 col-md-12">
                        <div className="form-group">

                            <h2>Dados pessoais</h2>
                            <hr />

                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">

                            <label>Nome Completo <span className='text-danger'>*</span></label>
                            <input type="text" className="form-control" name='nome' value={aluno.nome}
                                placeholder="Digite seu nome completo..." onChange={e => updateField(e)} />

                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">

                            <label>Responsavel <span className='text-danger'>*</span></label>
                            <input type="text" className="form-control" name='responsavel' value={aluno.responsavel}
                                placeholder="Digite o nome completo do seu responsavel..." onChange={e => updateField(e)} />

                        </div>
                    </div>

                    <div className="col-12 col-md-2">
                        <div className="form-group">

                            <label>Sexo <span className='text-danger'>*</span></label>
                            <select className="form-control" name='sexo' value={aluno.sexo} onChange={e => updateField(e)}>

                                <option value="">Selecione</option>
                                <option value="M">Masculino</option>
                                <option value="F">Feminino</option>
                                <option value="O">Outro</option>

                            </select>

                        </div>
                    </div>

                    <div className="col-12 col-md-2">
                        <div className="form-group">

                            <label>Nasacimento <span className='text-danger'>*</span></label>
                            <InputMask type="text" className="form-control" name='nascimento' value={aluno.nascimento}
                                placeholder="Data do nascimento..." onChange={e => updateField(e)} mask={'99/99/9999'} />

                        </div>
                    </div>

                    <div className="col-12 col-md-3">
                        <div className="form-group">

                            <label>CPF <span className='text-danger'>*</span></label>
                            <InputMask type="text" className="form-control" name='cpf' value={aluno.cpf}
                                placeholder="Digite seu CPF..." onChange={e => updateField(e)} mask={'999.999.999-99'} />

                        </div>
                    </div>

                    <div className="col-12 col-md-3">
                        <div className="form-group">

                            <label>RG <span className='text-danger'>*</span></label>
                            <InputMask type="text" className="form-control" name='rg' value={aluno.rg}
                                placeholder="Digite seu RG..." onChange={e => updateField(e)} mask={'99.999.999-9'} />

                        </div>
                    </div>

                    <div className="col-12 col-md-2">
                        <div className="form-group">

                            <label>Serie <span className='text-danger'>*</span></label>
                            <select className="form-control" name='serie' value={aluno.serie} onChange={e => updateField(e)}>

                                <option value="">Selecione</option>
                                <option value="1">1º Ano</option>
                                <option value="2">2º Ano</option>
                                <option value="3">3º Ano</option>
                                <option value="4">4º Ano</option>

                            </select>

                        </div>
                    </div>

                    <div className="col-12 col-md-12 sep">
                        <div className="form-group">

                            <h2>Localidade</h2>
                            <hr />

                        </div>
                    </div>

                    <div className="col-12 col-md-1">
                        <div className="form-group">

                            <label>País <span className='text-danger'>*</span></label>
                            <input type="text" className="form-control" name='pais' value={aluno.pais}
                                placeholder="Pais..." onChange={e => updateField(e)} />

                        </div>
                    </div>

                    <div className="col-12 col-md-1">
                        <div className="form-group">

                            <label>Estado <span className='text-danger'>*</span></label>
                            <input type="text" className="form-control" name='estado' value={aluno.estado}
                                placeholder="Estado..." onChange={e => updateField(e)} />

                        </div>
                    </div>

                    <div className="col-12 col-md-2">
                        <div className="form-group">

                            <label>Cidade <span className='text-danger'>*</span></label>
                            <input type="text" className="form-control" name='cidade' value={aluno.cidade}
                                placeholder="Nome da cidade..." onChange={e => updateField(e)} />

                        </div>
                    </div>

                    <div className="col-12 col-md-2">
                        <div className="form-group">

                            <label>Bairro <span className='text-danger'>*</span></label>
                            <input type="text" className="form-control" name='bairro' value={aluno.bairro}
                                placeholder="Digite o nome do seu bairro..." onChange={e => updateField(e)} />

                        </div>
                    </div>

                    <div className="col-12 col-md-4">
                        <div className="form-group">

                            <label>Rua <span className='text-danger'>*</span></label>
                            <input type="text" className="form-control" name='rua' value={aluno.rua}
                                placeholder="Digite o nome da sua rua..." onChange={e => updateField(e)} />

                        </div>
                    </div>

                    <div className="col-12 col-md-2">
                        <div className="form-group">

                            <label>Nº da casa <span className='text-danger'>*</span></label>
                            <input type="text" className="form-control" name='n_casa' value={aluno.n_casa}
                                placeholder="Numero da casa..." onChange={e => updateField(e)} />

                        </div>
                    </div>

                    <div className="col-12 col-md-12 sep">
                        <div className="form-group">

                            <h2>Contato</h2>
                            <hr/>

                        </div>
                    </div>

                    <div className="col-12 col-md-4">
                        <div className="form-group">

                            <label>Telefone</label>
                            <InputMask type="text" className="form-control" name='telefone' value={aluno.telefone}
                                placeholder="Digite o numero do seu telefone residencial..." onChange={e => updateField(e)} mask={'(99) 99999-9999'} />

                        </div>
                    </div>

                    <div className="col-12 col-md-4">
                        <div className="form-group">

                            <label>Celular <span className='text-danger'>*</span></label>
                            <InputMask type="text" className="form-control" name='celular' value={aluno.celular}
                                placeholder="Digite o numero do seu celular..." onChange={e => updateField(e)} mask={'(99) 99999-9999'} />

                        </div>
                    </div>

                    <div className="col-12 col-md-4">
                        <div className="form-group">

                            <label>E-mail <span className='text-danger'>*</span></label>
                            <input type="email" className="form-control" name='email' value={aluno.email}
                                placeholder="Digite seu email..." onChange={e => updateField(e)} />

                        </div>
                    </div>

                </div>

                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary" onClick={e => save(e)}>
                            Salvar
                        </button>
                        <button className="btn btn-secondary ml-2" onClick={e => clear(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>

            </div>

        )

    }
    useEffect(() => {

        const getAllAlunos = async () => {

            const allAlunos = await retrieveAlunos()

            if (allAlunos) {

                setItens(allAlunos)

            }

        }

        getAllAlunos()

    }, [])

    const retrieveAlunos = async () => {

        try {

            const response = await axios.get(baseUrl)
            return (response.data)

        } catch (err) {

            console.error(err.message)

        }

    }

    const load = (aluno) => {

        setAluno(aluno)

    }

    const remove = (alunoSelected) => {

        axios.delete(`${baseUrl}/${alunoSelected.id}`).then(resp => {

            const newList = alunoList.filter(aluno => aluno !== alunoSelected)
            setItens(newList)

        })

    }

    function renderTable() {

        return (

            <table className="table mt-4">
                <thead>

                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Ações</th>
                    </tr>

                </thead>
                <tbody>

                    {renderRows()}

                </tbody>
            </table>

        )

    }

    function renderRows() {

        return alunoList.map(aluno => {

            return (

                <tr key={aluno.id}>

                    <td>{aluno.id}</td>
                    <td>{aluno.nome}</td>
                    <td>{aluno.cpf}</td>
                    <td>


                        <button className="btn btn-warning" onClick={() => load(aluno)}>

                            <i className="fa fa-pencil"></i>

                        </button>

                        <button className="btn btn-danger ml-2" onClick={() => remove(aluno)}>

                            <i className="fa fa-trash"></i>

                        </button>

                    </td>

                </tr>

            )

        })

    }

    return (

        <Main {...headerProps}>

            {renderForm()}
            {renderTable()}

        </Main>

    )

}