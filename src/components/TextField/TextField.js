import './TextField.css'

const TextField = ({label, placeholder, valor, aoAlterado, obrigatorio = false}) => {
    
    return(
        <div className='field-text'>
            <label>{label}</label>
            <input value={valor} onChange={evento => aoAlterado(evento.target.value)} required={obrigatorio} placeholder={placeholder}></input>
        </div>
    )
}

export default TextField;