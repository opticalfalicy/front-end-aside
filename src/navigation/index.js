import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import './nav.css'

class Nav extends Component{
    render(){
        return(
            <navbar className="notes-nav">
                <header className="nav-title"> Lambda <br></br> Notes </header>
                <Link to="/"><button className="nav-button"> View Your Notes </button></Link>
                <Link to='/new'><button className="nav-button"> + Create New Notes </button></Link>
            </navbar>
        );
    };
};

export default Nav;