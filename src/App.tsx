import './App.css';
import { useState, FormEvent } from 'react';



export default function App() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [resultado, setResultado] = useState('');
  

  const anoAtual = new Date().getFullYear();

  function calcularIdade(event: FormEvent) {
    event.preventDefault();
    
    if(nome === '' || idade === '') {
      alert('Campo não pode ser vazio');
      return;
    }

    const calcResult = (anoAtual - Number(idade));

    setResultado(
      ` Olá ${nome} você tem ${calcResult} Anos `
    )
      
    setNome('');
    setIdade('');
  }
  return(
    <div className='App'>
      <h1 className='titleApp'>Calculadora de Idade</h1>
    
    <form className='form' onSubmit={calcularIdade}>
      <label>Digite seu nome?</label>
        <input type="text"
          placeholder='Digite seu nome'
          value={nome}
          onChange={ (e) => setNome(e.target.value) }
          
        />

        <label>Digite o ano que você nasceu?</label>
        <input type="text"
          placeholder='Ex: 1994'
          value={idade}
          onChange={ (e) =>  setIdade(e.target.value) }
        />

        <button onClick={calcularIdade} type='submit'>Descobrir Idade</button>
    </form>

    <p className='resultado'>{resultado}</p>


    </div>
  );
}