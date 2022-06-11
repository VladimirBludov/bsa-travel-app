import Button from 'components/Button';
import Input from 'components/Input';
import { Container, Form, SignUnLink, Title } from './SignInPage.styles';

export default function SignInPage() {
  return (
    <Container>
      <Form autocomplete="off">
        <Title>Sign In</Title>
        <Input title="Email" name="email" type="email" required />
        <Input
          title="Password"
          name="Password"
          type="password"
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
