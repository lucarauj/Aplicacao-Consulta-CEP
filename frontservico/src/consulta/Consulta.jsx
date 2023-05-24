import './Consulta.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

function Consulta() {

    const[consulta, setConsulta] = useState({cep:''});
    const[consultas, setConsultas] = useState([]);

    function handleChange(event) {
        setConsulta({...consulta, [event.target.name]:event.target.value})
    }

    function handleSubmit(event) {
        event.preventDefault();

        const url = "http://localhost:8080/endereco/consulta?cep=" + consulta.cep;

        axios.get(url, consulta).then(result=>{
            console.log(result);
        });
    }


  return (
    <div className="container">
      <h1>Busca CEP</h1>
      <form onSubmit={handleSubmit}> 
        <div className='col-2'>
          <div>
            <label className='form-label'>Digite um CEP</label>
            <input onChange={handleChange} value={consulta.cep} name='cep' type="text" className='form-control' />
          </div>
            <br/>
          <input type="submit" className="btn btn-primary" value={'Buscar'}></input>
        </div>
      </form>
    </div>
  );
}

export default Consulta;
