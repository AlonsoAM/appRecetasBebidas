import React from 'react';

const Formulario = () => {
    return (
        <>
            <form
                className="col-md-12"
            >
                <fieldset className="text-center">
                    <legend>Busca bebidas por Categoría o Ingrediente</legend>
                </fieldset>
                <div className="row mt-5">
                    <div className="col-md-4">
                        <input
                            name="ingredientes"
                            className="form-control"
                            type="text"
                            placeholder="Buscar por ingrediente"
                        />
                    </div>
                    <div className="col-md-4">
                        <select
                            className="form-control"
                            name="categoria"
                        >
                            <option value="">-- Selecciona Categoría --</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <input
                            className="btn btn-block btn-primary"
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
