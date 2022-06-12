import { useState } from 'react';
import Button from 'components/Button';
import Input from 'components/Input';
import { Container, Form, SignInLink, Title } from './SignUpPage.styles';

export default function SignUpPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'full-name':
        return setFullName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);

      default:
        return;
    }
  };

  const resetForm = () => {
    setFullName('');
    setEmail('');
    setPassword('');
  };

  const handelSubmit = e => {
    e.preventDefault();
    const user = {
      fullName,
      email,
      password,
    };
    console.log('User: ', user);

    resetForm();
  };

  return (
    <Container>
      <Form autoComplete="off" onSubmit={handelSubmit}>
        <Title>Sign Up</Title>
        <Input
          title="Full name"
          name="full-name"
          value={fullName}
          onChange={handleChange}
          type="text"
          required
        />
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
          autoComplete="new-password"
          required
        />

        <Button text="Sign Up" type="submit" />
      </Form>
      <span>
        Already have an account?
        <SignInLink to="/sign-in"> Sign In</SignInLink>
      </span>
    </Container>
  );
}
