import Button from 'components/Button';
import Input from 'components/Input';
import { Container, Form, SignInLink, Title } from './SignUpPage.styles';

export default function SignUpPage() {
  return (
    <Container>
      <Form autoComplete="off">
        <Title>Sign Up</Title>
        <Input title="Full name" name="full-name" type="text" required />
        <Input title="Email" name="email" type="email" required />
        <Input
          title="Password"
          name="Password"
          type="password"
          autocomplete="new-password"
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
