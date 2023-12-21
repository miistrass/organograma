import './Field.css'

const Field = ({ type = 'text', label, placeholder, valor, aoAlterado, obrigatorio = false}) => {
    
    return(
        <div className={`field field-${type}`}>
            <label>{label}</label>
            <input 
                type={type} 
                value={valor} 
                onChange={evento => aoAlterado(evento.target.value)} 
                required={obrigatorio} 
                placeholder={placeholder}>
            </input>
        </div>
    )
}

export default Field;