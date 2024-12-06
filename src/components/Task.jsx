{/* Component lucide */ }
import { Target, Trash } from "lucide-react";
// import Link from "next/link";
import { useRouter } from "next/navigation";

// Component
// props = propriedades 
// props recebidas de <Task tasks={tarefas} onTaskClick={clicarTarefa}/>
function Task(props) {
  // function Task({tasks, onTaskClick, onDeleteTaskClick}) {

  const router = useRouter();

  function onSeeDetailsClick(task) {
    // https://developer.mozilla.org/pt-BR/docs/Web/API/URLSearchParams
    const query = new URLSearchParams(task); // A interface URLSearchParams define métodos utilitários para trabalhar com os parâmetros de uma URL.
    query.set("titulo", task.title); // Define o valor associado a um determinado parâmetro de pesquisa para o valor fornecido. Se houver vários valores, os demais serão excluídos.
    query.set("descricao", task.description);

    router.push(`/TaskPage?${query.toString()}`) // navega para determinada pagina
  }

  // console.log(props)
  return (
    <>
      {/* space = margin */}
      <ul className=" flex flex-wrap justify-between " style={{ width: "1000px" }}>
        {props.tasks.map((task) => (
          // flex deixa os elementos um do lado do outro
          <li key={task.id} className="flex mb-2 shadow-custom bg-yellow-200
          ">
            <div className="flex min-h-24 w-60">
              {/* Evento = Ação = Função */}
              <div
                // onClick Recebe uma função
                onClick={() => props.onTaskClick(task.id)}
                // text-left - align-itens    // rounded-md = border radius
                className="text-left w-60 text-slate-500 p-4">
                {task.title}



              </div>
              <div className=" flex justify-end ">
                <button className="p-2 rounded-md text-slate-500"
                  onClick={() => onSeeDetailsClick(task)}
                >
                  {/* Component lucide */}
                  <Target />
                </button>
                {/* </Link> */}
              </div>
              <div className="flex justify-end">
                {/* <Link href="/TaskPage"> */}
                <button onClick={() => props.onDeleteTaskClick(task.id)} className=" p-2 rounded-md text-slate-500 "><Trash /></button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  )

}

export default Task; //Exportar component