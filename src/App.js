import React from 'react';
import Header from './componets/Header';
import Formulario from './componets/Formulario';
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
  return (
    <Contenedor>
     <Header
        titulo='Cotizador de Seguros'
     />
     <ContenedorFormulario>
       <Formulario
          
       />
     </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
