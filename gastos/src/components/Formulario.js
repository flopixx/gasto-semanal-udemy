import React,{useState} from 'react';
import Error from './Error';
import shortid from 'shortid';
import PropTypes from 'prop-types';


const Formulario  = ({guardarGasto,guardarCrearGasto}) => {

    const [nombre, guardarNombre]=useState("")
    const [cantidad, guardarCantidad]=useState(0)
    const [error,guardarError]=useState(false) // no hay error al inicio


    const agregaGasto=e =>{
        e.preventDefault()

        //validar
  if(cantidad < 1  || isNaN(cantidad) || nombre.trim() === ""){
      guardarError(true)
      return
  }

  // si pasa la validacion vuelve a falso
  guardarError(false)


        // construir el gasto
        const gasto ={
          nombre,
          cantidad,
          id:shortid.generate()
        }
     

        // pasar el gasto al componenete principal
     guardarGasto(gasto)
     guardarCrearGasto(true) // cuando se genere el gasto el envio del form se muestra al costado pasa a true
        //resetear los input con el state una vez que se envia 

        guardarNombre("")
        guardarCantidad(0)






    }

    return (  

        <form
        onSubmit={agregaGasto}
        >
            <h2>Agrega tus gastos aqui</h2>

            {error ? <Error mensaje="Ambos campos son obligatorios o presupuesto incorrecto" /> : null}
            <div className="campo">
                <label>Nombre gasto</label>
                <input 
                type="text"
                className="u-full-width"
                placeholder="ej transporte"
                value={nombre}
                onChange={e  =>guardarNombre(e.target.value)}
                />
            </div>
            <div className="campo">
                <label>Cantidad gasto</label>
                <input 
                type="number"
                className="u-full-width"
                placeholder="ej 300"
                value={cantidad}
                onChange={e  =>guardarCantidad(parseInt( e.target.value))}
                />
            </div>
            <input 
                type="submit"
                className="button-primary u-full-width"
                value="Agregar gasto"
                />
        </form>
    );
}
 

Formulario.propTypes={
    guardarGasto:PropTypes.func.isRequired,
    guardarCrearGasto:PropTypes.func.isRequired
  }
 
export default   Formulario;

