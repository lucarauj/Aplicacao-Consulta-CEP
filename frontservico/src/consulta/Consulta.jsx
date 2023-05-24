import './Consulta.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Consulta() {

  const [consulta, setConsulta] = useState({ cep: '' });
  const [dadosConsulta, setDadosConsulta] = useState(null);

  function handleChange(event) {
    setConsulta({ ...consulta, [event.target.name]: event.target.value })
  }

  function handleSubmit(event) {
    event.preventDefault();

    const url = "http://localhost:8080/endereco/consulta?cep=" + consulta.cep;

    axios.get(url).then(response => {
      const result = response.data;
      setDadosConsulta(result);
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
          <br />
          <input type="submit" className="btn btn-primary" value={'Buscar'}></input>
        </div>
      </form>
      <hr /><hr />
      <table class="table">
  <tbody>
    <tr>
      <th scope="row">CEP</th>
      <td>{dadosConsulta ? dadosConsulta.cep : '-'}</td>
    </tr>
    <tr>
      <th scope="row">LOGRADOURO</th>
      <td>{dadosConsulta ? dadosConsulta.logradouro : '-'}</td>
    </tr>
    <tr>
      <th scope="row">BAIRRO</th>
      <td>{dadosConsulta ? dadosConsulta.bairro : '-'}</td>
    </tr>
    <tr>
      <th scope="row">LOCALIDADE</th>
      <td>{dadosConsulta ? dadosConsulta.localidade : '-'}</td>
    </tr>
    <tr>
      <th scope="row">UF</th>
      <td>{dadosConsulta ? dadosConsulta.uf : '-'}</td>
    </tr>
  </tbody>
</table>
    </div>
  );
}

export default Consulta;
