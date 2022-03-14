import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Dropdown, Button, ButtonGroup } from 'react-bootstrap';
// import {  } from 'bootstrap';

const Sort = ({onSelectedChanged, display }) => {
    return (
        <Col xs={3} sm={3} md={3} lg={3}>
            <Dropdown as={ButtonGroup}>
                <Button variant="success">Sort by</Button>
                <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
                <Dropdown.Menu onClick={onSelectedChanged}>
                    <Dropdown.Item name="normal">NORMAL</Dropdown.Item>
                    <Dropdown.Item name="name_1">NAME ASC</Dropdown.Item>
                    <Dropdown.Item name="name_2">NAME DESC</Dropdown.Item>
                    <Dropdown.Item name="level_1">LEVEL ASC</Dropdown.Item>
                    <Dropdown.Item name="level_2">LEVEL DESC</Dropdown.Item>
                </Dropdown.Menu>
                <Button variant="secondary" size="sm" disabled>{display}</Button>
            </Dropdown>
        </Col>
    );
}

export default Sort;