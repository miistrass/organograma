import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Formulario from './components/Formulario/Formulario';
import Team from './components/Team/Team';
import Rodape from './components/Rodape/Rodape';

function App() {

  const teams = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Front-end',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ]
  
  const[colaboradores, setColaboradores] = useState([])

  function deletarColaborador() {

  }

  const novoColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }
  
  return (
    <div className="App">
      <Banner />
      <Formulario teams={teams.map(team => team.nome)} colaboradorCadastrado={colaborador => novoColaborador(colaborador)}/>

      <section className='times'>
        <h1>Minha organização</h1>
        {teams.map(team => <Team 
          key={team.nome} 
          nome={team.nome} 
          corPrimaria={team.corPrimaria} 
          corSecundaria ={team.corSecundaria} 
          colaboradores={colaboradores.filter(colaborador => colaborador.time === team.nome)}
          aoDeletar={deletarColaborador()} 
        />)}
      </section>

      <Rodape />

    </div>
  );
}

export default App;
