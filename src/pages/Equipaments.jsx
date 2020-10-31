import React, { useState, useEffect } from 'react';
import api from '../services/api';
import { FiEdit, FiTrash2, FiX } from 'react-icons/fi';
import '../styles/equipaments.css';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Modal from '../components/Modal';

function Equipaments() {

  const [id, setId] = useState(0);
  const [name, setName] = useState('');
  const [serialNumber, setSerialNumber] = useState('');
  const [location, setLocation] = useState('');
  const [responsible, setResponsible] = useState('');
  const [status, setStatus] = useState(true);
  const [equipaments, setEquipaments] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    loadEquipaments();
  }, []);

  async function loadEquipaments() {
    const response = await api.get('/equipaments');
    setEquipaments(response.data);
  }

  return (
    <div className="equipaments-container">
      {isModalVisible ? (
        <Modal>
          <div className="modal-container-main">
            <div className="modal-header">
              <h1>Equipamentos</h1>
              <button onClick={() => setIsModalVisible(false)} className="btn-close">
                <FiX size={24} />
              </button>
            </div>
            <form className="modal-content">
              <input type="text" placeholder="Nome" />
              <input type="text" placeholder="Número de série" />
              <input type="text" placeholder="Local" />
              <input type="text" placeholder="Responsável" />
            </form>
          </div>
          <div className="modal-footer">
            <button className="button button-md">Salvar</button>
          </div>
        </Modal>
      ) : null}
      <Header />
      <Sidebar />
      <main>
        <div className="buttons-container">
          <h1>Equipamentos</h1>
          <button onClick={() => setIsModalVisible(true)} className="button">Novo</button>
        </div>
        <table className="content-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Numero de série</th>
              <th>Local</th>
              <th>Responsável</th>
              <th>Status</th>
              <th>Editar</th>
              <th>Excluir</th>
            </tr>
          </thead>
          <tbody>
            {equipaments.map(equipament => (
              <tr key={equipament.id}>
                <td>{equipament.id}</td>
                <td>{equipament.name}</td>
                <td>{equipament.serialNumber}</td>
                <td>{equipament.location}</td>
                <td>{equipament.responsible}</td>
                <td>{equipament.status}</td>
                <td><FiEdit className="button btn-edit" /></td>
                <td><FiTrash2 className="button btn-delete" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default Equipaments;