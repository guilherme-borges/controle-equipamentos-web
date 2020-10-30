import React, { useState } from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import '../styles/equipaments.css';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Modal from '../components/Modal';

function Equipaments() {

  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div className="equipaments-container">
      {isModalVisible ? <Modal /> : null}
      <Header />
      <Sidebar />
      <main>
        <div className="buttons-container">
          <h1>Equipamentos</h1>
          <button onClick={ () => setIsModalVisible(true) } className="button">Novo</button>
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
            <tr>
              <td>1</td>
              <td>Mouse sem fio</td>
              <td>d68dsvs8vd8s0v6s</td>
              <td>Sede</td>
              <td>TI</td>
              <td>Sem Uso</td>
              <td><FiEdit className="button btn-edit" /></td>
              <td><FiTrash2 className="button btn-delete" /></td>
            </tr>
            <tr>
              <td>1</td>
              <td>Mouse sem fio</td>
              <td>d68dsvs8vd8s0v6s</td>
              <td>Sede</td>
              <td>TI</td>
              <td>Sem Uso</td>
              <td><FiEdit className="button btn-edit" /></td>
              <td><FiTrash2 className="button btn-delete" /></td>
            </tr>
            <tr>
              <td>1</td>
              <td>Mouse sem fio</td>
              <td>d68dsvs8vd8s0v6s</td>
              <td>Sede</td>
              <td>TI</td>
              <td>Sem Uso</td>
              <td><FiEdit className="button btn-edit" /></td>
              <td><FiTrash2 className="button btn-delete" /></td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default Equipaments;