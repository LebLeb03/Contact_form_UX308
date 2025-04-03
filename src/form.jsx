import 'bulma/css/bulma.min.css';
import { Form, Icon, Button } from 'react-bulma-components';

export function SubscriberForm() {
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formObject = Object.fromEntries(formData.entries());
        console.log(formObject);
      }}
    >
      <Form.Field>
        <Form.Label>Username</Form.Label>
        <Form.Control>
          <Form.Input
            color="success"
            name="username"
            placeholder="Enter your username"
            required
          />
          <Icon align="left" size="small">
            <i className="fas fa-user" />
          </Icon>
        </Form.Control>
        <Form.Help color="success">Looks good! 😊</Form.Help>
      </Form.Field>

      <Form.Field>
        <Form.Label>Email</Form.Label>
        <Form.Control>
          <Form.Input
            color="danger"
            name="email"
            type="email"
            placeholder="Enter your email address"
            required
            onInvalid={e => e.target.setCustomValidity('Please enter your email')}
            onInput={e => e.target.setCustomValidity('')}
          />
          <Icon align="left" size="small">
            <i className="fas fa-envelope" />
          </Icon>
        </Form.Control>
        <Form.Help color="danger">Please enter your email</Form.Help>
      </Form.Field>

      <Form.Field>
        <Form.Label>Subject</Form.Label>
        <Form.Field kind="group">
          <Form.Control>
            <Form.Select name="subject" required>
              <option value="">Choose a topic</option>
              <option value="pizza-feedback">Pizza Feedback</option>
              <option value="burger-feedback">Burger Feedback</option>
              <option value="order-question">Question About an Order</option>
              <option value="space-love">Just Saying Hi from Space 🌌</option>
            </Form.Select>
          </Form.Control>
        </Form.Field>
      </Form.Field>

      <Form.Field>
        <Form.Label>Message</Form.Label>
        <Form.Control>
          <Form.Textarea
            name="message"
            placeholder="Let us know how we can help you..."
            required
            onInvalid={e => e.target.setCustomValidity('Please leave a message')}
            onInput={e => e.target.setCustomValidity('')}
          />
        </Form.Control>
      </Form.Field>

      <Form.Field kind="group">
        <Form.Control>
          <Button color="link">🚀 Submit</Button>
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
