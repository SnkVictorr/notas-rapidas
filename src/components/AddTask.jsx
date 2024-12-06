import { useState, useRef, useEffect } from "react";
import Input from "@/components/Input"



function AddTask(props) {


    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const textareaRef = useRef(null); // Referência para o textarea

    // Função para ajustar a altura do textarea
    // Função adjustHeight: Esta função é chamada para ajustar a altura do campo. Ela reseta a altura para "auto" e, em seguida, ajusta para o valor de scrollHeight.
    const adjustHeight = () => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto"; // Reseta a altura
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Ajusta a altura conforme o conteúdo
        }
    };

    // Ajusta a altura sempre que o valor mudar
    useEffect(() => {
        adjustHeight();
    }, [title]);


    return (
        <>
            <div className="bg-yellow-200 shadow-custom flex flex-col top-4 bottom-11 size items-start ps-[15px]">

                <div className="flex mt-10 ">
                    <h4 className="text-slate-500 font-bold">Titulo:</h4>
                    <Input placeholder="Digite o titulo"
                        // ref={textareaRef}
                        value={title}
                        onChange={(event) => {
                            setTitle(event.target.value);
                            adjustHeight(); // Ajusta a altura do textarea
                        }}
                        style={{ minHeight: "10px", maxHeight: "200px" }}
                        
                    />
                </div>
                <div className="flex  ">
                    <h4 className="text-slate-500 font-bold me-4 my-3">Descrição:</h4>
                    <textarea
                    
                        ref={textareaRef}
                        type="text"
                        className="outline-none  my-3 rounded-md placeholder-slate-500 placeholder-opacity-70 w-full resize-none text-slate-500   bg-transparent overflow-auto"
                        placeholder="Digite a descrição"
                        value={description}
                        onChange={(event) => {
                            adjustHeight();
                            setDescription(event.target.value)
                        }}
                        style={{ minHeight: "10px", maxHeight: "320px", width: "380px" }}

                    />
                </div>
            </div>
            {/* font-medium = negrito medio */}
            <div className="flex flex-row-reverse">
                <button
                    onClick={() => {

                        if (!title.trim() || !description.trim()) {
                            return alert("Preencha o título e a descrição da tarefa!");
                        } else {

                            props.onAddTaskSubmit(title, description);
                            setTitle(""); //Limpar campo do input
                            setDescription("");
                        }
                    }}
                    className="hover:bg-slate-500 bg-gray-800 text-white px-2 py-2  font font-medium  fixed
                    ">Adicionar</button>
            </div>
        </>
    );
};

export default AddTask;