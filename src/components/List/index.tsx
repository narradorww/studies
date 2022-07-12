import React from "react";
import { ITarefa } from "../../types/ITarefa";
import Item from "./Item";
import style from "./Lista.module.scss";

interface Props {
  tarefas: ITarefa[];
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

function List({tarefas, selecionaTarefa}: Props) {
 

  return (
    <aside className={style.listaTarefas}>
      <h2 > Estudos do Dia</h2>
      <ul>
        {tarefas.map((tarefa, index) => (
          <Item selecionaTarefa={selecionaTarefa} key={tarefa.id} {...tarefa} />
        ))}
      </ul>
    </aside>
  );
}

export default List;


