import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import { notes } from '../notes';

import axios from 'axios';

import '../pagestyles/page.css'
import '../pagestyles/card.css';

class Front extends Component{

    constructor(props){
        super(props);
        this.state = {
            notes: [],
            title: '',
            content: ''
        }
    }

    componentDidMount(){
        axios
        .get('https://swedishgood-note.herokuapp.com/notes')
        .then(response => {
            this.setState(() => {notes: response.data});
        })
    }

    render(){
    return(
        <div className="page-container">
            <div className="page-title">Your Notes:</div>
            <div className='note-card-container'>
                {this.props.notes.map(note => {
                    return(
                    <Link className="note-card" to={`/note/${note.id}`} >
                        <div key={note.id} className="note-card">
                            <div className='note-title'>{note.title}</div>
                            <div className='note-text'>{note.text}</div>
                        </div>
                    </Link>
                    )}
                )}
            </div>    
        </div>
    )
  }
}

export default Front;