import 'bulma/css/bulma.min.css';
import { Form, Icon, Button } from 'react-bulma-components';
import React from 'react';

export function SubscriberForm() {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formObject = Object.fromEntries(formData.entries());
        console.log(formObject);
      }}
      style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '2rem',
        borderRadius: '12px',
        backgroundColor: '#0b0c10',
        boxShadow: '0 0 20px rgba(102, 252, 241, 0.3)',
        fontFamily: 'Orbitron, sans-serif',
        color: '#66fcf1',
      }}
    >
      <Form.Field style={{ marginBottom: '1.5rem' }}>
        <Form.Label style={{ color: '#45a29e' }}>Username</Form.Label>
        <Form.Control>
          <Form.Input
            color="success"
            name="username"
            placeholder="Enter your username"
            required
            style={{
              backgroundColor: '#1f2833',
              borderColor: '#45a29e',
              color: '#66fcf1',
            }}
          />
          <Icon align="left" size="small">
            <i className="fas fa-user" />
          </Icon>
        </Form.Control>
        <Form.Help style={{ color: '#c5c6c7', textAlign: 'left' }}>
          Looks good! 😊
        </Form.Help>
      </Form.Field>

      <Form.Field style={{ marginBottom: '1.5rem' }}>
        <Form.Label style={{ color: '#45a29e' }}>Email</Form.Label>
        <Form.Control>
          <Form.Input
            color="danger"
            name="email"
            type="email"
            placeholder="Enter your email address"
            required
            onInvalid={(e) =>
              e.target.setCustomValidity('Please enter your email')
            }
            onInput={(e) => e.target.setCustomValidity('')}
            style={{
              backgroundColor: '#1f2833',
              borderColor: '#45a29e',
              color: '#66fcf1',
            }}
          />
          <Icon align="left" size="small">
            <i className="fas fa-envelope" />
          </Icon>
        </Form.Control>
        <Form.Help style={{ color: '#c5c6c7', textAlign: 'left' }}>
          Please enter your email
        </Form.Help>
      </Form.Field>

      <Form.Field style={{ marginBottom: '1.5rem' }}>
        <Form.Label style={{ color: '#45a29e' }}>Subject</Form.Label>
        <Form.Control>
          <Form.Select
            name="subject"
            required
            style={{
              backgroundColor: '#1f2833',
              borderColor: '#45a29e',
              color: '#66fcf1',
            }}
          >
            <option value="">Choose a topic</option>
            <option value="pizza-feedback">🍕 Pizza Feedback</option>
            <option value="burger-feedback">🍔 Burger Feedback</option>
            <option value="order-question">📦 Question About an Order</option>
            <option value="space-love">🌌 Just Saying Hi from Space</option>
          </Form.Select>
        </Form.Control>
      </Form.Field>

      <Form.Field style={{ marginBottom: '1.5rem' }}>
        <Form.Label style={{ color: '#45a29e' }}>Message</Form.Label>
        <Form.Control>
          <Form.Textarea
            name="message"
            placeholder="Let us know how we can help you..."
            required
            onInvalid={(e) =>
              e.target.setCustomValidity('Please leave a message')
            }
            onInput={(e) => e.target.setCustomValidity('')}
            style={{
              backgroundColor: '#1f2833',
              borderColor: '#45a29e',
              color: '#66fcf1',
            }}
          />
        </Form.Control>
        <Form.Help style={{ color: '#c5c6c7', textAlign: 'left' }}>
          Please leave a message
        </Form.Help>
      </Form.Field>

      <Form.Field kind="group" align="center">
        <Form.Control>
          <Button
            color="link"
            style={{
              backgroundColor: '#45a29e',
              color: '#0b0c10',
              borderRadius: '6px',
              fontWeight: 'bold',
              boxShadow: '0 0 10px rgba(69, 162, 158, 0.8)',
            }}
          >
            🚀 Submit
          </Button>
        </Form.Control>
        <Form.Control>
          <Button color="link" colorVariant="light" type="reset">
            Cancel
          </Button>
        </Form.Control>
      </Form.Field>
    </form>
  );
}
