import React, {useState} from 'react';
import Header from './componets/Header';
import Formulario from './componets/Formulario';
import Resumen from './componets/Resumen';
import Resultado from './componets/Resultado';
import styled from '@emotion/styled';

const Contenedor = styled.div`
  max-width: 600px;
  margin:0 auto;
`;

const ContenedorFormulario = styled.div`
  background: #fff;
  padding: 3rem;
`

function App() {

  const [resumen, guardarResumen] = useState({
    cotizacion:0,
    datos:{
      marca:'',
      year:'',
      plan:''
    }
  });
  const {datos, cotizacion} = resumen
  return (
    <Contenedor>
     <Header
        titulo='Cotizador de Seguros'
     />
     <ContenedorFormulario>
       <Formulario
          guardarResumen = {guardarResumen}
       />
       <Resumen
        datos = {datos}
       />
       <Resultado
        cotizacion = {cotizacion}
       />
     </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
