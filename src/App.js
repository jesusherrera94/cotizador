import React from 'react';
import Header from './componets/Header';
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
       
     </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
