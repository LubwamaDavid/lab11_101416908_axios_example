import React, { Component } from 'react';
import axios from 'axios';

class PersonList extends Component {
    
    state = {
        persons: []
    };

        componentDidMount() {
        axios.get('https://randomuser.me/api/?results=10')
            .then(res => {
                console.log(res.data); 
                const persons = res.data.results; 
                this.setState({ persons }); 
            })
            .catch(error => console.error("Error fetching data:", error)); 
    }

       render() {
        return (
            <div className="container mt-5">
                <h2>Person List</h2>
                <ul className="list-group">
                    {this.state.persons.map((person, index) => (
                        <li key={index} className="list-group-item">
                            {person.name.first} {person.name.last}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default PersonList;
