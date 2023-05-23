import './Consulta.css';
import React, {useEffect, useState} from 'react';

function Consulta() {

    const[consulta, setConsulta] = useState({cep:''});
    const[consultas, setConsultas] = useState([]);

    function handleChange(event) {
        setConsulta({...consulta, [event.target.name]:event.target.value})
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(consulta)
    }


  return (
    <div className="container">
      <h1>Busca CEP</h1>
      <form onSubmit={handleSubmit}> 
        <div className='col-2'>
          <div>
            <label className='form-label'>Digite um CEP</label>
            <input onChange={handleChange} value={consulta.cep} name='cep' type="number" className='form-control' />
          </div>
            <br/>
          <input type="submit" class="btn btn-primary" value={'Buscar'} />
        </div>
      </form>
    </div>
  );
}

export default Consulta;
