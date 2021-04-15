

import React, { useState ,useEffect} from  'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import Control from './components/Control';

function App() {

  // definir state 
  const [presupuesto, guardarPresupuesto]= useState(0)
  const [restante, guardarRestante]= useState(0)
  const [mostrarpregunta, actualizarPregunta]= useState(true) // la primera vez que abro la pag se muestra
  const [gastos, guardarGastos]= useState([])
  const [gasto, guardarGasto]= useState({})
  const [creargasto, guardarCrearGasto]= useState(false)



  useEffect(() => {
    guardarGastos([
      ...gastos,
      gasto
    ])
    const presupuestoRestante =restante - gasto.cantidad
    guardarRestante(presupuestoRestante)
    
    guardarCrearGasto(false)
  }, [gasto,creargasto,gastos,restante])
  
  // cuando agregamos un nuevo gasto

  return (
    <div className="container">
      <header>
      <h1>Gasto semanal</h1>
      <div className="contenido-principal contenido">

        {mostrarpregunta ? ( <Pregunta  guardarPresupuesto={guardarPresupuesto}
        guardarRestante={guardarRestante}
        actualizarPregunta={actualizarPregunta}
        />
         ) :
         (
          <div className="row">
          <div className="one-half column">
            <Formulario guardarGasto={guardarGasto}
            guardarCrearGasto={guardarCrearGasto} />

          </div>
          <div className="one-half column">
            <Listado 
            gastos={gastos}
            />
            <Control 
            presupuesto={presupuesto}
            restante={restante} />
            
          </div>
          </div>
        )
        }
      
       

        
       
      </div>
      </header>
    </div>
   
  );
}

export default App;
