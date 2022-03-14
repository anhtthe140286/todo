import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col } from 'react-bootstrap';

const Form = ({ actions, setActions, handleOpenForm, searchDefault}) => {
    const [newTerm, setNewTerm] = useState('');
    const [newType, setNewType] = useState('Small')

    useEffect(() => {
        searchDefault(actions);
    }, [actions]);

    const onSubmitForm = (event) => {
        event.preventDefault();
    }

    const onTypeChanged = (event) => {
        setNewTerm(event.target.value);
    }

    const onSelectedType = (event) => {
        setNewType(event.target.value);
        console.log(newType);
    }

    const onClick = (term, type) => {
        if (term.trim() === "") {
            alert('Please enter name of action! :)')
        } else {
            setActions(arr => [...arr, {
                id: `${actions.length +1}`,
                name: term,
                level: type
            }]);
            alert('Added successfully!');
            console.log(actions);
        }
    }

    return (
        <Col id="demo" md={{ span: 7, offset: 6 }} >
            <form className="form-inline justify-content-md-center" onSubmit={onSubmitForm}>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Item Name" onChange={onTypeChanged} required />
                </div>
                <div className="form-group">
                    <select className="form-control" onChange={onSelectedType}>
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </div>
                <button type="button" className="btn btn-primary" onClick={() => onClick(newTerm, newType)}>Add</button>
                <button type="button" className="btn btn-default" onClick={handleOpenForm}>Cancel</button>
            </form>
        </Col>
    );
}

export default Form;