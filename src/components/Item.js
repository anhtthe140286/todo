import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Item = ({ action, editAction, deleteAction }) => {

    const [openEdit, setOpenEdit] = useState(false);

    const handleEditForm = () => {
        
    }

    // const handleNormalForm = () => {
    //     return (

    //     )
    // }

    const handleButtonEdit = () => {

    }

    return (
        <tr>
            <td className="text-center"><span className="label label-danger">{action.level}</span></td>
            <td>{action.name}</td>
            <td>
                <button type="button" className="btn btn-warning btn-sm" onClick={() => editAction(action.id, action)}>Edit</button>
            </td>
            <td>
                <button type="button" className="btn btn-danger btn-sm" onClick={() => deleteAction(action.id)}>Delete</button>
            </td>
            {/* { openEdit == true ? handleEditForm() : handleNormalForm()} */}
        </tr>

    );
}

export default Item;