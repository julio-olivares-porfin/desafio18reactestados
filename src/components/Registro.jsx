import React, { useState } from 'react';
import SocialButton from './SocialButton';
import Formulario from './Formulario';
import Alert from './Alert';
import { Container, Row, Col } from 'react-bootstrap';

const Registro = () => {
  const [alert, setAlert] = useState({ message: '', type: '' });

  const handleAlert = (message, type) => {
    setAlert({ message, type })
  };

  return (
    <Container className='content'>
      <Row className='justify-content-md-center'>
        <Col md='6'>
          <h1 className='text-center'>Bienvenido</h1>
          <p className='text-center'>Regístrate y únete a esta comunidad de aprendizaje</p>
          <div className='d-flex justify-content-center gap-4 my-3'>
            <SocialButton socialBrand='facebook' />
            <SocialButton socialBrand='twitter' />
            <SocialButton socialBrand='linkedin' />
          </div>
          <Formulario handleAlert={handleAlert} />
          {alert.message && <Alert message={alert.message} type={alert.type} />}
        </Col>
      </Row>
    </Container>
  )
}

export default Registro