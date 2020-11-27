import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios'

export const RecetasContext = createContext()

const RecetasProvider = (props) => {

    const [busqueda, buscarRecetas] = useState({
        ingrediente: '',
        categoria: ''
    });

    const [recetas, setRecetas] = useState([]);
    const [consultar, setConsultar] = useState(false);

    useEffect(() => {
        if (consultar) {
            const obtenerRecetas = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${busqueda.categoria}&i=${busqueda.ingrediente}`
                const resultado = await axios.get(url)
                setRecetas(resultado.data.drinks)
            }
            obtenerRecetas()
        }


    }, [busqueda])

    return (
        <RecetasContext.Provider
            value={{
                buscarRecetas,
                setConsultar,
                recetas
            }}
        >
            {props.children}
        </RecetasContext.Provider>
    );
};

export default RecetasProvider;
