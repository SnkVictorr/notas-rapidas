"use client"

// import Image from "next/image";
import { useState } from "react";
import { v4 } from "uuid";
import { AddNota } from "@/components/AddNota"


function Home() {
  const [notas, setNotas] = useState([]);

  function clicarNotas(notaID) {
    const notasNovas = notas.map((nota) => {
      useEffect(() => {
        // verifica o tipo. Verifica se está do lado do cliente
        if(typeof window !== "undefined") { //Se janela não for undefined
          const storedTasks = JSON.parse(localStorage.getItem("notas"));
          setTasks(storedTasks)
    
        }
      },[])
      
      if (nota.id === notaID) {
        return { ...nota }
      };
      return nota; // Else
    })
    setTasks(notasNovas);
  }

  function adicionarNota(titulo, descricao) {
    const notasNovas = {
      id: v4(),
      title: titulo,
      description: descricao,
    }

    setNotas([...notas, notasNovas]);
  }

  function deletarNota(notaID) {
    const notasNovas = notas.filter(nota => notas.id !== notaID);
    setNotas(notasNovas);
  }

  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center bg-amber-300">
        <div>
          <div className="w-[600] space-y-4 z-10">
            <h1 className="text-3xl font-bold text-center">Notas Adesivas</h1>
            <Nota notasP={notas} deletarNotaP={deletarNota} clicarNotasP={clicarNotas}/>
            <AddNota adicionarNotaP={adicionarNota}/>
          </div>
        </div>
      </div>
    </>


  );
}

export default Home;