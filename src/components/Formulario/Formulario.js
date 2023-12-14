import { useState } from 'react'
import Button from '../Button/Button'
import DropdownList from '../DropdownList/DropdownList'
import TextField from '../TextField/TextField'
import './Formulario.css'

const Formulario = ({ aoCadastrar, times }) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

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
        <section className='formulario'>
            <form onSubmit={save}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    valor={nome} 
                    aoAlterado={valor => setNome(valor)}/>
                <TextField 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}/>
                <TextField 
                    label="Imagem" 
                    placeholder="Digite o endereço  da sua imagem"
                    aoAlterado={valor => setImagem(valor)}/>
                <DropdownList 
                    obri={true} 
                    label="Time" 
                    itens={times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}/>
                <Button texto='Criar Card' />
            </form>
        </section>
    )
}

export default Formulario