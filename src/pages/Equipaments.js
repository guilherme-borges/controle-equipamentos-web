import React from 'react';
import '../styles/equipaments.css';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

function Equipaments() {
  return (
    <>
      <Header />
      <div className="container">
        <Sidebar />
        <main>
          <h1>Equipamentos</h1>
          <table className="content-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Numero de série</th>
                <th>Local</th>
                <th>Responsável</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mouse sem fio</td>
                <td>d68dsvs8vd8s0v6s</td>
                <td>Sede</td>
                <td>TI</td>
                <td>Sem uso</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Mouse sem fio</td>
                <td>d68dsvs8vd8s0v6s</td>
                <td>Sede</td>
                <td>TI</td>
                <td>Sem uso</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Mouse sem fio</td>
                <td>d68dsvs8vd8s0v6s</td>
                <td>Sede</td>
                <td>TI</td>
                <td>Sem uso</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Mouse sem fio</td>
                <td>d68dsvs8vd8s0v6s</td>
                <td>Sede</td>
                <td>TI</td>
                <td>Sem uso</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Mouse sem fio</td>
                <td>d68dsvs8vd8s0v6s</td>
                <td>Sede</td>
                <td>TI</td>
                <td>Sem uso</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Mouse sem fio</td>
                <td>d68dsvs8vd8s0v6s</td>
                <td>Sede</td>
                <td>TI</td>
                <td>Sem uso</td>
              </tr>
            </tbody>
          </table>
        </main>
      </div>
    </>
  );
}

export default Equipaments;