import React from "react";
import style from './Listas.module.scss';

function Listas() {
    const tarefas = [{
        tarefa: "React",
        tempo: "02:00:00", //obj 1
    },
    {
        tarefa: "Javascritp",
        tempo: "01:00:00", //obj 2
    },

    ]
    return (

        <aside className={style.listaTarefas} >
            <h2>
                Estudos do dia
            </h2>

            <ul>
                {tarefas.map((item, index) => (
                    <li key={index} className={style.item}>
                        <h3>
                            {item.tarefa}
                        </h3>
                        <span>
                            {item.tempo}
                        </span>
                    </li>

                ))}
            </ul>

            

        </aside>


    )

}

export default Listas;