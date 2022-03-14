import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col } from 'react-bootstrap';

const ShowForm = ({handleOpenForm}) => {
    return (
        <Col xs={5} sm={5} md={5} lg={5}>
            <Button variant="primary" block onClick={() => {handleOpenForm()}}>Add Item</Button>
        </Col>
    );
}

export default ShowForm;