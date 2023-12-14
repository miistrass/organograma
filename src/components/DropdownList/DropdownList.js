import "./DropdownList.css"

const DropdownList = ({label, itens, valor, aoAlterado, obrigatorio = false}) => {
    return(
        <div className="dropdown-list">
            <label>{label}</label>
            <select  required={obrigatorio} value={valor}onChange={event => aoAlterado(event.target.value)} >
            <option />
                {itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default DropdownList