import Colaborador from '../Colaborador/Colaborador'
import './Time.css'

const Time = ({time, colaboradores, corSecundaria, aoDeletar}) => {
    return (
        (colaboradores.length) > 0 && <section className='time' style={{ backgroundImage: 'url(/images/fundo.png)', backgroundColor: time.corPrimaria }}>
            <input value={time.corSecudaria} type='color' className='input-cor' />
            <h3 style={{ borderColor: time.corSecundaria }}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) => <Colaborador key={indice} colaborador={colaborador} corDeFundo={time.corSecundaria} aoDeletar={time.aoDeletar}/>)}
            </div>
        </section>
    )
}

export default Time