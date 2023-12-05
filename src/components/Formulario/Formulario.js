import { useState } from 'react'
import Button from '../Button/Button'
import DropdownList from '../DropdownList/DropdownList'
import TextField from '../TextField/TextField'
import './Formulario.css'

const Formulario = () => {
    
    const times = [
        'Programação',
        'Front-end',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const save = (event) => {
        event.preventDefault()
        console.log('Form foi submetido =>', nome, cargo, imagem, time)
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
                    itens={times}
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