import { useState } from 'react'
import Botao from '../Botao/index'
import DropdownList from '../DropdownList/DropdownList'
import Field from '../Field/Field'
import './Formulario.css'

const Formulario = ({ aoCadastrar, times, cadastrarTime }) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')

    const save = (event) => {
        event.preventDefault()
        console.log('form enviado', nome, cargo, imagem, time)
        aoCadastrar({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }
    
    return(
        <section className='formulario-container'>
            <form className="formulario" onSubmit={save}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <Field 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    valor={nome} 
                    aoAlterado={valor => setNome(valor)}/>
                <Field 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}/>
                <Field 
                    label="Imagem" 
                    placeholder="Digite o endereço  da sua imagem"
                    aoAlterado={valor => setImagem(valor)}/>
                <DropdownList 
                    obri={true} 
                    label="Time" 
                    itens={times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}/>
                <Botao>Criar Card</Botao>
            </form>
            <form className="formulario" onSubmit={(evento) => {
                evento.preventDefault() 
                cadastrarTime({nome:nomeTime, cor: corTime})
            }}>
                <h2>Preencha os dados para criar um novo time</h2>
                <Field 
                    obrigatorio
                    label="Nome" 
                    placeholder="Digite o nome do time" 
                    valor={nomeTime} 
                    aoAlterado={valor => setNomeTime(valor)}/>
                <Field 
                    obrigatorio
                    type='color'
                    label="Cor" 
                    placeholder="Digite a cor do time"
                    valor={corTime}
                    aoAlterado={valor => setCorTime(valor)}/>
                <Botao>Criar um novo time</Botao>
            </form>
        </section>
    )
}

export default Formulario