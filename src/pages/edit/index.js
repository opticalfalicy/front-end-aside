import React, { Component } from 'react';

import axios from 'axios';

import { Link } from 'react-router-dom';
// import { notes } from '../notes';

import '../pagestyles/card.css';
import '../pagestyles/page.css';

class EditNote extends Component{
    constructor(props){
        super();
        this.state = {
            _id: '',
            title: '',
            text: ''
        };
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    // handleSubmit = (event) => {
        // notes.splice(notes, 1, this.state);
        // this.setState({
        //     id: this.state.id,
        //     title: event.target.value,
        //     text: event.target.value
        // });


    // };

    handleSubmit = (event) => {
        event.preventDefault();
        // let id = this.state.id;

        const note = {
            _id,
            title: this.state.title,
            content: this.state.content
        }

        axios
        .put(`https://pensive-jones-2b4f45.netlify.com/edit/${this.state._id}`, { note })
        .then(res => {
            console.log(res);
            console.log(res.data);
        });
    }

    handleDelete = () => {
        // notes.splice(notes.id, 1);
        // console.log('del');
        axios.delete(`https://pensive-jones-2b4f45.netlify.com/edit/${this.state._id}`)
        .then( res => {
            console.log(res);
            console.log(res.data);
        })
    };

    render(){
        return(
            <div className='page-container'>
                <div className='page-title'>Edit Note:</div>
                <form className='card-form'>
                    <input name='title' className='form-input form-input-title' type='text' onChange={(event) => this.handleChange(event)} placeholder='-Edit Title Here-' value={this.state.title} />
                    <input name='text' className='form-input form-input-text' type='text' onChange={(event) => this.handleChange(event)} placeholder='-Edit Text Here-' value={this.state.text} />
                    <Link to={`/note/${this.state.id}`}><button onClick={(event) => {this.handleSubmit(event)}}>Submit</button></Link>
                    <Link to='/'><button onClick={this.handleDelete}>Delete</button></Link>
                    <Link to='/'><button>Cancel</button></Link>
                </form>
            </div>
        );
    };
};

export default EditNote;