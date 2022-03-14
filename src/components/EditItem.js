import React, { useState } from 'react';

const EditItem = ({ selectedAction, cancelAction, saveAction }) => {
    var choice = selectedAction.level;

    const onChangedText = (event) => {
        selectedAction.name = event.target.value;
    }

    const onChangedLevel = (event) => {
        selectedAction.level = event.target.value;
    }

    return (
        <tr>
            <td className="text-center">
                <select className="form-control" onChange={onChangedLevel}>
                    <option selected={`${choice === 'Small' ? 'selected' : ''}`} value="Small">Small</option>
                    <option selected={`${choice === 'Medium' ? 'selected' : ''}`} value="Medium">Medium</option>
                    <option selected={`${choice === 'High' ? 'selected' : ''}`} value="High">High</option>
                </select>
            </td>
            <td><input type="text" className="form-control" defaultValue={`${selectedAction.name}`} onChange={onChangedText} /></td>
            <td>
                <button type="button" className="btn btn-success btn-sm" onClick={() => saveAction(selectedAction.id, selectedAction)}>Save</button>
            </td>
            <td>
                <button type="button" className="btn btn-default btn-sm" onClick={cancelAction}>Cancel</button>
            </td>
        </tr>
    );
}

export default EditItem;