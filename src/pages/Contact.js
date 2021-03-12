import React, { Component } from "react";
import Container from '../components/Container'
import Jumbotron from '../components/Jumbotron'
import Form from '../components/Form'

class Contact extends Component {
    state = {
        name: "",
        email: "",
        message: "",
    };

    handleInputChange = event => {
        this.setState({ 
            name: event.target.value,
            email: event.target.value,
            message: event.target.value
        });
        console.log(this.state)
    };
    
    handleFormSubmit = () => {
        // This is a lie. I do not plan on keeping this page in my real portfolio. Only for this assignment.
        alert("Message sent!")
    };


    render() {
        return (
            <Container>
                <Jumbotron>
                    <h1 className="display-4">Contact</h1>
                    <hr className="my-4"></hr>
                    <Form
                        handleFormSubmit={this.handleFormSubmit}
                        handleInputChange={this.handleInputChange}
                    />
                </Jumbotron>
            </Container>
        );
    }
}
  
export default Contact;