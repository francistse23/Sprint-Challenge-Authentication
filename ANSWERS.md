<!-- Answers to the Short Answer Essay Questions go here -->

1. What is the purpose of using _sessions_?

- Sessions provide a way to persist data across requests. We¡¦ll use it to persist authentication information so there is no need to re-enter credentials on every new request the client makes to the server.

2. What does bcrypt do to help us store passwords in a secure manner.

- Bcrypt derives an encryption key from the password using an algorithm, salt and cost factor.

3. What does bcrypt do to slow down attackers?

- Increases the "time" by hashing the password multiple times 2^x.

4. What are the three parts of the JSON Web Token?

 - payload, secret, options.
