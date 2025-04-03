<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Dreamy Pizzeria Contact Form</title>
  <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap" rel="stylesheet">
  <style>
    body {
      margin: 0;
      padding: 40px;
      background: #0b0c10;
      font-family: 'Orbitron', sans-serif;
      color: #66fcf1;
    }

    form {
      max-width: 600px;
      margin: 0 auto;
      padding: 30px;
      background: rgba(11, 12, 16, 0.95);
      border-radius: 10px;
      box-shadow: 0 0 20px rgba(102, 252, 241, 0.3);
    }

    label {
      display: block;
      margin-bottom: 8px;
      color: #45a29e;
      font-weight: bold;
    }

    input, select, textarea {
      width: 100%;
      padding: 10px;
      margin-bottom: 20px;
      background: #1f2833;
      border: 1px solid #45a29e;
      border-radius: 5px;
      color: #66fcf1;
      font-size: 16px;
    }

    input::placeholder, textarea::placeholder {
      color: #66fcf1;
      opacity: 0.7;
    }

    small {
      display: block;
      margin-top: -16px;
      margin-bottom: 10px;
      color: #c5c6c7;
      font-size: 14px;
    }

    button {
      background-color: #45a29e;
      color: #0b0c10;
      border: none;
      padding: 12px 25px;
      border-radius: 6px;
      font-weight: bold;
      font-size: 16px;
      cursor: pointer;
      box-shadow: 0 0 10px rgba(69, 162, 158, 0.8);
      transition: background 0.3s ease;
    }

    button:hover {
      background-color: #66fcf1;
    }
  </style>
</head>
<body>

  <form onsubmit="return validateForm(event)">
    <h2 style="text-align:center; color:#66fcf1; text-shadow: 0 0 5px #45a29e;">🚀 Contact Dreamy Pizzeria</h2>

    <label for="username">Username</label>
    <input type="text" id="username" name="username" placeholder="Enter your username" required />
    <small>Looks good! 😊</small>

    <label for="email">Email</label>
    <input type="email" id="email" name="email" placeholder="Enter your email address" required />
    <small id="emailHelp">Please enter your email</small>

    <label for="subject">Subject</label>
    <select name="subject" id="subject" required>
      <option value="">Choose a topic</option>
      <option value="pizza-feedback">Pizza Feedback</option>
      <option value="burger-feedback">Burger Feedback</option>
      <option value="order-question">Question About an Order</option>
      <option value="space-love">Just Saying Hi from Space 🌌</option>
    </select>

    <label for="message">Message</label>
    <textarea name="message" id="message" rows="5" placeholder="Let us know how we can help you..." required></textarea>
    <small>Please leave a message</small>

    <div style="text-align: center;">
      <button type="submit">Submit 🚀</button>
    </div>
  </form>

  <script>
    function validateForm(event) {
      const email = document.getElementById('email');
      const message = document.getElementById('message');

      if (!email.validity.valid) {
        email.setCustomValidity("Please enter your email");
      } else {
        email.setCustomValidity("");
      }

      if (!message.validity.valid) {
        message.setCustomValidity("Please leave a message");
      } else {
        message.setCustomValidity("");
      }

      return true;
    }
  </script>

</body>
</html>
