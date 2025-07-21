import ItemLista from "./ItemLista";
import { useState, useRef } from "react";
//icones
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

function App() {
  const [listaMercado, setListaMercado] = useState([]);

  const inputAdicionar = useRef();

  const adicionarElementoLista = () => {
    const novaLista = [...listaMercado];
    const valorInput = inputAdicionar.current.value;

    if (valorInput) {
      novaLista.push(valorInput);
      setListaMercado(novaLista);

      inputAdicionar.current.value = "";
    }
  };

  return (
    <>
      <div className="flex w-full max-w-96 flex-col items-center gap-4">
        <h1 className="text-3xl font-bold">Lista de Mercado</h1>
        <div className="flex w-full gap-2">
          <input
            className="w-full rounded-lg border border-gray-600 px-2"
            ref={inputAdicionar}
            type="text"
            placeholder="Digite um item"
          />
          <button
            onClick={() => adicionarElementoLista()}
            className="inline-flex cursor-pointer items-center rounded bg-green-600 px-4 py-2 font-bold text-white hover:bg-green-800"
          >
            <ShoppingCartIcon className="mr-2 h-5 w-5" />
            Adicionar
          </button>
        </div>
        {listaMercado.length > 0 ? (
          <ul className="flex w-full flex-col gap-2">
            {listaMercado.map((itemLista, index) => (
              <ItemLista
                key={index}
                itemLista={itemLista}
                listaMercado={listaMercado}
                setListaMercado={setListaMercado}
              />
            ))}
          </ul>
        ) : (
          <p className="italic">Você não tem nenhum item na sua lista</p>
        )}
      </div>
    </>
  );
}

export default App;
