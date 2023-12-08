import { useState } from 'react'
import Button from '../Button/Button'
import DropdownList from '../DropdownList/DropdownList'
import TextField from '../TextField/TextField'
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const save = (event) => {
        event.preventDefault()
        props.colaboradorCadastrado({
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
        <section className='formulario'>
            <form onSubmit={save}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField 
                    obri={true} label="Nome" placeholder="Digite seu nome" 
                    valor={nome} 
                    alterado={valor => setNome(valor)}/>
                <TextField 
                    obri={true} label="Cargo" placeholder="Digite seu cargo"
                    valor={cargo}
                    alterado={valor => setCargo(valor)}/>
                <TextField 
                    label="Imagem" 
                    placeholder="Digite o endereço  da sua imagem"
                    valor={imagem}
                    alterado={valor => setImagem(valor)}/>
                <DropdownList 
                    obri={true} 
                    label="Time" 
                    itens={props.teams}
                    valor={time}
                    alterado={valor => setTime(valor)}/>
                <Button>
                    Criar card
                </Button>
            </form>
        </section>
    )
}

export default Formulario