import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Container, Col } from 'react-bootstrap';

import Title from './components/Title';
import Search from './components/Search';
import Sort from './components/Sort';
import Form from './components/Form';
import List from './components/List';
import ShowForm from './components/ShowForm';
import Pagination from './components/Pagination';

const App = () => {
    //Default todo actions
    const [actions, setActions] = useState([
        { id: '1', name: 'Checking email', level: 'High' },
        { id: '2', name: 'Eating', level: 'Small' },
        { id: '3', name: 'Learning new things', level: 'Medium' },
        { id: '4', name: 'Doing projects', level: 'High' },
        { id: '5', name: 'Overextending', level: 'Small' },
        { id: '6', name: 'Expecting', level: 'Medium' },
        { id: '7', name: 'Jogging', level: 'High' },
        { id: '8', name: 'Camping with Friends', level: 'High' },
        { id: '9', name: 'Finding a gf :)', level: 'High' },
    ]);
    //Actions after filtering by Search
    const [filteredActions, setFilteredActions] = useState([]);
    //Search Term
    const [term, setTerm] = useState('');
    //Open Adding Form 
    const [openForm, setOpenForm] = useState(false);
    //Set display for Sorting Form
    const [display, setDisplay] = useState('NORMAL');
    //Set selected for choosing action
    const [selectedAction, setSelectedAction] = useState({});
    //Set selected id for choosing action
    const [selectedId, setSelectedId] = useState('');

    //Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [actionsPerPage, setActionsPerPage] = useState(4);

    const indexOfLastAction = currentPage * actionsPerPage;
    const indexOfFirstAction = indexOfLastAction - actionsPerPage;
    const currentActions = filteredActions.slice(indexOfFirstAction, indexOfLastAction);

    //Set current page after choosed position
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    // useEffect(() => {
    //     // search()
    // }, [selectedAction])

    //Set default search term
    const searchDefault = (actions) => {
        const data = actions.filter((action) => action.name.toLowerCase().includes(''.toLowerCase()));
        setFilteredActions(data);
    }

    //Search after enter term in Search Box
    const search = (term, actions) => {
        const data = actions.filter((action) => action.name.toLowerCase().includes(term.toLowerCase()));
        setFilteredActions(data);
        setDisplay('NORMAL');
    }

    //Add event for Selected Option in Sorting Form
    const onSelectedChanged = (event) => {
        var name = event.target.name;
        var type = name.includes('name') ? 'name' : (name.includes('level') ? 'level' : 'normal');
        var order = name.includes('1') ? 1 : (name.includes('2') ? -1 : 0);
        setDisplay(event.target.innerHTML);
        if (type == 'name') {
            filteredActions.sort(function (a, b) {
                var nameA = a.name.toUpperCase();
                var nameB = b.name.toUpperCase();
                if (nameA < nameB) {
                    return -order;
                }
                if (nameA > nameB) {
                    return order;
                }
                return 0;
            });
        } else if (type == 'level') {
            filteredActions.sort(function (a, b) {
                var nameA = a.level.toUpperCase();
                var nameB = b.level.toUpperCase();
                if (nameA < nameB) {
                    return order;
                }
                if (nameA > nameB) {
                    return -order;
                }
                return 0;
            });
        } else {
            search(term, actions);
        }
    }

    //Add event for Button Add(big)
    const handleOpenForm = () => {
        if (openForm) {
            document.getElementById('demo').style.visibility = 'visible';
        } else {
            document.getElementById('demo').style.visibility = 'hidden'
        }
        setOpenForm(!openForm);
    }

    //Add event for Button Edit
    const handleButtonEdit = (id, action) => {
        setSelectedAction(action);
        setSelectedId(id);
    }

    //Add event for Button Delete
    const handleButtonDelete = (id) => {
        const newTodos = actions.filter((e) => e.id !== id);
        setActions(newTodos);
    }

    //Add event for Button Cancel
    const handleButtonCancel = () => {
        setSelectedId(0);
    }

    //Add event for button Save
    const handleButtonSave = (id, changedAction) => {
        for (var action of actions) {
            if (action.id == id) {
                action.name = changedAction.name;
                action.level = changedAction.level;
            }
        }
        console.log(id, changedAction);
        setSelectedId(0);
    }

    return (
        <Container>
            <Row>
                {/* 1.Component Title */}
                <Title/>
            </Row>
            <br />
            <Row>
                {/* 2.Component Search */}
                <Search
                    term={term}
                    setTerm={setTerm}
                    actions={actions}
                    onFormSubmit={search}
                />

                {/* 3.Component Sort */}
                <Sort
                    onSelectedChanged={onSelectedChanged}
                    display={display}
                />

                {/* Button to show the form */}
                <ShowForm handleOpenForm={handleOpenForm} />
            </Row>
            <br />
            <Row>
                {/* {openForm ? formOpened() : formClosed()} */}
                <Form
                    actions={actions}
                    setActions={setActions}
                    handleOpenForm={handleOpenForm}
                    search={search}
                    searchDefault={searchDefault}
                />
            </Row>
            <br />
            {/* 5.Component List */}
            <List
                setFilteredActions={setFilteredActions}

                deleteAction={handleButtonDelete}
                editAction={handleButtonEdit}
                cancelAction={handleButtonCancel}
                saveAction={handleButtonSave}

                selectedAction={selectedAction}
                selectedId={selectedId}

                currentActions={currentActions}
            />
            <Pagination actionsPerPage={actionsPerPage} totalActions={filteredActions.length} paginate={paginate} />
        </Container>
    );
}

export default App;