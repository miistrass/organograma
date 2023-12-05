import './TextField.css'

const TextField = (props) => {
    
    const typed = (event) => {
        props.alterado(event.target.value)
    }
    
    return(
        <div className='field-text'>
            <label>{props.label}</label>
            <input value={props.valor} onChange={typed} required={props.obri} placeholder={props.placeholder}></input>
        </div>
    )
}

export default TextField;