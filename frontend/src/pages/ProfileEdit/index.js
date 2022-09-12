import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function ProfileEdit() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');
  const ongId = localStorage.getItem('ongId');

  const history = useHistory();

  useEffect(() => {
    const getOngData = async() => {
      try {
        let RequestongId = localStorage.getItem('ongId');
        const response = await api.post('ongs/get-ong', {id: RequestongId});
        
        setName(response.data[0].name);
        setEmail(response.data[0].email);
        setWhatsapp(response.data[0].whatsapp);
        setCity(response.data[0].city);
        setUf(response.data[0].uf);

      } catch (err) {
        console.log(err.response)
      }
    };

    getOngData();
  }, [])

  async function handleEditOng(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf,
      id: ongId
    };

    try {
      await api.post('ongs/edit-ong', data);

      alert(`Dados alterados com sucesso`);
      localStorage.setItem('ongName', name);

      history.push('/profile');
    } catch (err) {
      alert('Erro ao alterar seus dados, tente novamente.');
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero"/>

          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

          <Link className="back-link" to="/Profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar ao Perfil
          </Link>
        </section>

        <form onSubmit={handleEditOng}>
          <input 
            placeholder="Nome da ONG"
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <input 
            type="email" 
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <input 
            placeholder="WhatsApp"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
          />

          <div className="input-group">
            <input 
              placeholder="Cidade"
              value={city}
              onChange={e => setCity(e.target.value)}
            />

            <input 
              placeholder="UF" 
              style={{ width: 80 }}
              value={uf}
              onChange={e => setUf(e.target.value)}
            />
          </div>

          <button className="button" type="submit">Editar</button>
        </form>
      </div>
    </div>
  );
}