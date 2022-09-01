import React from 'react';
import { Link } from '../../atoms/Link';
import { WrapperOptions } from './styles';

export const LoginFooter: React.FC = () => {
  return (
    <WrapperOptions as="footer">
      <Link href="#">Política de privacidade</Link>
      <Link href="#">Termos e condições</Link>
    </WrapperOptions>
  )
}
