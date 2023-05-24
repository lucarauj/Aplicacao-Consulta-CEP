import './Consulta.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Consulta() {
  const [consulta, setConsulta] = useState({ cep: '' });
  const [cepValido, setCepValido] = useState(true);
  const [dadosConsulta, setDadosConsulta] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;

    if (name === 'cep') {
      const cepValue = value.replace(/\D/g, ''); // Remover caracteres não numéricos
      const limitedCepValue = cepValue.substring(0, 8); // Limitar o valor em 8 caracteres

      setConsulta({ ...consulta, [name]: limitedCepValue });
      setCepValido(true); // Resetar o estado de validação do CEP
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Verificar se o CEP é válido (8 caracteres numéricos)
    if (consulta.cep.length !== 8 || isNaN(consulta.cep)) {
      setCepValido(false);
      return; // Parar a execução do código se o CEP for inválido
    }

    const url = "https://back-cep-production.up.railway.app/endereco/consulta?cep=" + consulta.cep;

    axios.get(url)
      .then(response => {
        const consultaResult = response.data;
        setDadosConsulta(consultaResult);
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <div className="container">
      <h1>Busca CEP</h1>
      <form onSubmit={handleSubmit}>
        <div className="col-4">
          <div>
            <label className="form-label">Digite um CEP</label>
            <input
              onChange={handleChange}
              value={consulta.cep}
              name="cep"
              type="text"
              className="form-control"
            />
          </div>
          {!cepValido && (
            <div className="error-message">CEP inválido. Digite um CEP válido com 8 caracteres numéricos.</div>
          )}
          <br />
          <input type="submit" className="btn btn-primary" value="Buscar" />
        </div>
      </form>
      {dadosConsulta && (
        <>
          <hr />
          <hr />
          <table className="table">
            <tbody>
              <tr>
                <th scope="row">CEP</th>
                <td>{dadosConsulta.cep}</td>
              </tr>
              <tr>
                <th scope="row">LOGRADOURO</th>
                <td>{dadosConsulta.logradouro}</td>
              </tr>
              <tr>
                <th scope="row">BAIRRO</th>
                <td>{dadosConsulta.bairro}</td>
              </tr>
              <tr>
                <th scope="row">LOCALIDADE</th>
                <td>{dadosConsulta.localidade}</td>
              </tr>
              <tr>
                <th scope="row">UF</th>
                <td>{dadosConsulta.uf}</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default Consulta;
