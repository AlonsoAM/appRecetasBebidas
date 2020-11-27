import React, {useContext, useState} from 'react';
import {CategoriaContext} from "../context/CategoriasContext";
import {RecetasContext} from "../context/RecetasContext";

const Formulario = () => {

    const {categorias} = useContext(CategoriaContext)
    const {buscarRecetas, setConsultar} = useContext(RecetasContext)

    const [busqueda, setBusqueda] = useState({
        ingrediente:'',
        categoria: ''
    })

    const obtenerDatosReceta = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <form
                className="col-md-12"
                onSubmit={e=>{
                    e.preventDefault()
                    buscarRecetas(busqueda)
                    setConsultar(true)
                }}
            >
                <fieldset className="text-center">
                    <legend>Busca bebidas por Categoría o Ingrediente</legend>
                </fieldset>
                <div className="row mt-3">
                    <div className="col-md-4">
                        <input
                            name="ingrediente"
                            className="form-control mt-2"
                            type="text"
                            placeholder="Buscar por ingrediente"
                            onChange={obtenerDatosReceta}
                        />
                    </div>
                    <div className="col-md-4">
                        <select
                            className="form-control mt-2"
                            name="categoria"
                            onChange={obtenerDatosReceta}
                        >
                            <option value="">-- Selecciona Categoría --</option>
                            {categorias.map(categoria=>(
                                <option key={categoria.strCategory} value={categoria.strCategory}>
                                    {categoria.strCategory}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-4">
                        <input
                            className="btn btn-block btn-primary mt-2"
                            type="submit"
                            value="Buscar Bebida"
                        />
                    </div>
                </div>
            </form>
        </>
    );
};

export default Formulario;
