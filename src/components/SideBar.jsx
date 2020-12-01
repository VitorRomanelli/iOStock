import React, { useContext } from 'react';
import { FiArrowLeft, FiLogOut, FiAirplay, FiList, FiEdit, FiEdit3} from "react-icons/fi";
import "../styles/components/SideBar.css";

import history from "../history";

import { Context } from "../Context/AuthProvider";

export default function SideBar() {

  const { handleLogOut } = useContext(Context);

  function StockMovesPage() {
    history.push("/stockmoves");
  }

  function StockMoveRegisterPage() {
    history.push("/register/stockmove");
  }

  function ProductRegisterPage() {
    history.push("/register/product");
  }

  function HomePage() {
    history.push("/home");
  }

  return (
    <div className="side-bar">

      <aside className="app-sidebar">
        <footer>
          <button type="button" title="Sair" onClick={handleLogOut}>
            <FiLogOut size={24} color="#FFF" />
          </button>
          <button type="button" title="Cadastrar Produto" onClick={ProductRegisterPage}>
            <FiEdit3 size={24} color="#FFF" />
          </button>
          <button type="button" title="Listar Produtos" onClick={HomePage}>
            <FiList size={24} color="#FFF" />
          </button>
          <button type="button" title="Cadastrar Movimentações do Estoque" onClick={StockMoveRegisterPage}>
            <FiEdit size={24} color="#FFF" />
          </button>
          <button type="button" title="Listar Movimentações do Estoque" onClick={StockMovesPage}>
            <FiAirplay size={24} color="#FFF" />
          </button>
          <div id="back">
            <button type="button" onClick={history.goBack}>
              <FiArrowLeft size={24} color="#FFF" />
            </button>
          </div>
        </footer>
      </aside>

    </div>
  );
}