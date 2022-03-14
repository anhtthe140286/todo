import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import Item from './Item';
import EditItem from './EditItem';
import '../css/Pagination.css'

const List = ({ editAction, deleteAction, selectedAction, cancelAction, saveAction, selectedId, currentActions }) => {

    const renderedList = currentActions.map((action) => {
        const key = Math.floor(Math.random() * Math.floor(999999999));
        // console.log('alo')
        if (action.id == selectedId) {
            return <EditItem key={key} selectedId={selectedId} selectedAction={selectedAction} cancelAction={cancelAction} saveAction={saveAction} />
        } else {
            return <Item key={key} action={action} editAction={editAction} deleteAction={deleteAction} />;
        }
    });

    return (
        <div>
            <h3 className="label">List Item</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th style={{ width: '15%' }} className="text-center">Level</th>
                        <th>Name</th>
                        <th colSpan="2" style={{ width: '15%' }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {renderedList}
                </tbody>
            </Table>
        </div>
    );
}

export default List;