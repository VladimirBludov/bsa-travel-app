import { useState } from 'react';
import Button from 'components/Button';
import Input from 'components/Input';

import { Container, Form, SignUnLink, Title } from './SignInPage.styles';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);

      default:
        return;
    }
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  const handelSubmit = e => {
    e.preventDefault();
    const credentials = {
      email,
      password,
    };
    console.log('Credentials: ', credentials);

    resetForm();
  };

  return (
    <Container>
      <Form autoComplete="off" onSubmit={handelSubmit}>
        <Title>Sign In</Title>
        <Input
          title="Email"
          name="email"
          value={email}
          onChange={handleChange}
          type="email"
          required
        />
        <Input
          title="Password"
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
          minLength="3"
          maxLength="20"
          autocomplete="new-password"
          required
        />

        <Button text="Sign In" type="submit" />
      </Form>
      <span>
        Already have an account?
        <SignUnLink to="/sign-up"> Sign Up</SignUnLink>
      </span>
    </Container>
  );
}
