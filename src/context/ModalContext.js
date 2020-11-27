import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios'


export const ModalContext = createContext()

const ModalProvider = (props) => {

    const [idReceta, setIdReceta] = useState(null)
    const [detalles, setDetalles] = useState({})

    // una vez que tenemos una recete llamra la API
    useEffect(() => {
        const obtenerReceta = async () => {
            if (!idReceta) return
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`
            const resultado = await axios.get(url)
            setDetalles(resultado.data.drinks[0])
        }
        obtenerReceta()
    }, [idReceta])


    return (
        <ModalContext.Provider
            value = {{
                setIdReceta,
                setDetalles,
                detalles
            }}
        >
            {props.children}
        </ModalContext.Provider>
    );
};

export default ModalProvider;
