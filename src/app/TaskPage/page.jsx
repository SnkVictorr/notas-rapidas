"use client"

// O nome da pasta é o nome que vai estar na url

import { ChevronLeftIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";


import { Suspense, useEffect, useState } from "react";

function TaskDetails() {

    // Usando rotas
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");


    // parametros de url
    const searchParams = useSearchParams();


    // useEffect é ponte para o sistema externo
    useEffect(() => {
        // P de parametro
        const titleP = searchParams.get("titulo");
        const descriptionP = searchParams.get("descricao");

        // Title = titlep(se tiver valor) ou "Sem titulos se estiver vazio"
        setTitle(titleP || "Sem titulos");
        setDescription(descriptionP || "Sem descrição")
        // dependencias do codigo fora do excopo
    },[searchParams])

    function onBackClick() {
        // vai pra pagina inicial
        router.push("/"); // router.push: navega para determinada pagina
    }


    return (
        <div className="h-screen w-screen p-6 relative">
            <div className="absolute inset-0 opacity-30">
            </div>
            {/* mx-auto - Centraliza a div no eixo x */}
            <div className="w-[500px] mx-auto space-y-4 relative z-10">
                <div className="flex justify-center relative mb-5">
                    <button className="absolute left-0 top-0 bottom-0 text-slate-100"
                        // onClick={()=> router.back()}    // Volta para tras
                        onClick={onBackClick}
                    >
                        <ChevronLeftIcon />
                    </button>
                    <h1 className="Créditos text-2xl text-slate-500">Detalhes da Nota</h1>
                </div>

                <div className="bg-yellow-200  p-4 relative z-10 shadow-custom">
                    <h2 className="text-xl font-bold text-slate-500">Titulo: {title}</h2>
                    <p className="text-slate-500 text-xl">Descrição: {description}</p>
                </div>
            </div>
        </div>
    );
}

function TaskPage() {

    return (
        // Carrega a pagina antes de mostrar
        <Suspense fallback={<div>Carregando...</div>}>
            <TaskDetails/>
        </Suspense>

       
    );
};
export default TaskPage;