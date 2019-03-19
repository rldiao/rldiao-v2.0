import React, { Component } from "react"
import Layout from "../components/Layout"
import { Form, FormGroup, Input, Label, Button } from "reactstrap"

import styles from "../styles/pages/email-page.module.css"

// Credit to https://www.youtube.com/watch?v=HZOXPta21PI

// TODO: 
// No backend support for form submission
// Form overflows weirdly on small screens

class Email extends Component {
  constructor() {
    super()

    // this.state = {
    //   name: "",
    //   email: "",
    //   message: "",
    //   subject: "",
    // }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <Layout>
        <div className={styles.container}>
          <Form className={styles.form}>
            <div className={styles.header}>Send me an email</div>
            <FormGroup>
              <Label for="name" className={styles.labelText}>Name</Label>
              <Input
                type="text"
                name="name"
                bsSize="lg"
                onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <Label for="email" className={styles.labelText}>Email</Label>
              <Input
                type="email"
                name="email"
                bsSize="lg"
                onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <Label for="subject" className={styles.labelText}>Subject</Label>
              <Input
                type="text"
                name="subject"
                bsSize="lg"
                onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <Label for="message" className={styles.labelText}>Message</Label>
              <Input
                type="textarea"
                name="message"
                bsSize="lg"
                rows="5"
                onChange={this.handleChange} />
            </FormGroup>
            <div className={styles.submitContainer}>
              <Button color="primary" size="lg">Submit</Button>
            </div>
          </Form>
        </div>
      </Layout>
    )
  }
}

export default Email;