import { FooterStyled, IconHeart, Link, Text } from './Footer.styles';

export default function Footer() {
  return (
    <FooterStyled>
      <Text>
        from
        <Link target="_blank" href="https://binary-studio.com">
          binary studio
        </Link>
        with
        <IconHeart />
      </Text>
    </FooterStyled>
  );
}
