import { TrashIcon } from "@heroicons/react/24/solid";
const ItemLista = ({ itemLista, listaMercado, setListaMercado }) => {
  const removerItemDaLista = () => {
    const novaLista = [...listaMercado];
    const novaListaFiltrada = novaLista.filter(
      (itemAtual) => itemAtual !== itemLista,
    );
    setListaMercado(novaListaFiltrada);
  };

  return (
    <>
      <li className="flex justify-between gap-2">
        <p className="">{itemLista}</p>
        <button
          onClick={() => removerItemDaLista()}
          className="inline-flex cursor-pointer items-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        >
          <TrashIcon className="mr-1.5 h-4 w-4" />
          Remover
        </button>
      </li>
    </>
  );
};

export default ItemLista;
