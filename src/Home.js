
import React from "react";
import { Component } from  'react';
import {Container, Form, Button, Spinner,  Card} from 'react-bootstrap';
const { Configuration, OpenAIApi } = require('openai');


 
class Home extends Component {
    constructor () {
        super ()
        this.state = {
            heading: 'See the AI response below',
            response: '(be patient! response may take up to 20 seconds to load)',
            loading:false
        }
    }

    toggleLoader = () => {
    
          this.setState({ loading: true });
        } 
    
    onFormSubmit = e => {
        e.preventDefault()
        

        const formData = new FormData(e.target),
        formDataObj = Object.fromEntries(formData.entries())

        const configuration = new Configuration({
            apiKey: process.env.REACT_APP_OPENAI_API_KEY,
          });
          const openai = new OpenAIApi(configuration);

          openai.createCompletion("text-davinci-002", {
            prompt: `Write a detailed and informative product description for ${formDataObj.productname}`,
            temperature: 0.8,
            max_tokens: 617,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          })
        .then((response) => {
            this.setState({
                heading: `AI Product Descriptions for: ${formDataObj.productname}` ,
                response: `${response.data.choices[0].text}`,
                loading: false
            })
        })
    }

    render () {
        return (
            <div>
                <Container>
                    <br />
                    <br />
                    <h1>Generate Free Product Descriptions</h1>
                    <br />
                    <h4>Generate a unique product description for any product in the world! Simply enter the product name and a few details</h4>
                    <br />
                    <br />
                    <Form onSubmit={this.onFormSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>What Product Would You Like a Description for?</Form.Label>
                            <Form.Control
                              type='text'
                              name='productname'
                              placeholder="Enter Product Name" />
                            <Form.Text className="text-muted">
                                Enter as much information as possible to help the AI. EX: Luxurious swimwear for older women
                            </Form.Text>
                        </Form.Group>

                        {this.state.loading ? (
            <Spinner
              style={{ marginBottom: 27 }}
              animation="border"
              variant="danger"
            />
          ) : null}

          <Button
            onClick={() => this.toggleLoader()}
            variant={"primary"}
            size="lg"
            type='submit'
          >
            {this.state.loading ? "Loading" : "Get AI Description"}
          </Button>
                    </Form>
                    <br />
                    <br />

                    <Card>
                        <Card.Body>
                            <Card.Title><h1>{this.state.heading}</h1></Card.Title>
                            <hr />
                            <br />
                            <Card.Text>
                                <h4>{this.state.response}</h4>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Container>
                <br />
                <br />
                <br />
                <br />
            </div>
        )
    }
}

export default Home



