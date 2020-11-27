import React, {useContext, useState} from 'react';
import PropTypes from 'prop-types';
import {ModalContext} from "../context/ModalContext";
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflowY: 'auto',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        width: 500,
        padding: theme.spacing(2, 4, 3),
        border: "2px solid #e95420",
        borderRadius: '10px',
    },
}));


const Receta = ({receta}) => {
    // Modal
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    // -----------------------------------

    const {idDrink, strDrink, strDrinkThumb} = receta

    const {setIdReceta, detalles, setDetalles} = useContext(ModalContext)

    // Muestra y formmatea los ingredientes
    const mostrarIngredientes = (detalles) => {
        let ingredientes = []
        for (let i = 0; i < 16; i++) {
            if (detalles[`strIngredient${i}`]){
                ingredientes.push(
                    <li>
                        {detalles[`strIngredient${i}`]} - {' '}
                        {detalles[`strMeasure${i}`]}
                    </li>
                )
            }
        }
        return ingredientes
    }

    return (
        <>
            <div className="col-md-4">
                <div className="card img-card">
                    <img src={strDrinkThumb} className="card-img-top" alt={strDrink}/>
                        <div className="card-body">
                            <h4 className="card-title text-center">{strDrink}</h4>
                            <button
                                type="button"
                                className="btn btn-primary btn-block"
                                onClick={()=>{
                                    setIdReceta(idDrink)
                                    handleOpen()
                                }}
                            >Ver Receta</button>
                            <Modal
                                className={classes.modal}
                                open={open}
                                onClose={() => {
                                        handleClose()
                                        setIdReceta(null)
                                        setDetalles({})
                                    }
                                }
                                closeAfterTransition
                                BackdropComponent={Backdrop}
                                BackdropProps={{
                                    timeout: 500,
                                }}
                            >
                                <Fade in={open}>
                                    <div className={classes.paper}>
                                        <h2 className="text-center">{detalles.strDrink}</h2>
                                        <h3 className="mt-4">Instrucciones</h3>
                                        <p>
                                            {detalles.strInstructions}
                                        </p>
                                        <div className="text-center">
                                            <img
                                                className="img-modal"
                                                src={detalles.strDrinkThumb}
                                                alt={detalles.strDrink}
                                            />
                                            <h3 className="text-left">Ingredientes y Cantidades</h3>
                                            <ul className="text-left">
                                                {mostrarIngredientes(detalles)}
                                            </ul>
                                        </div>

                                    </div>
                                </Fade>
                            </Modal>
                        </div>
                </div>
            </div>
        </>
    );
};

Receta.propTypes = {
    receta: PropTypes.object.isRequired
};

export default Receta;
