import React from 'react';
import { SocialMediaLogin } from '../SocialMediaLogin';

import { Title, SeparatorTitle, TextWrapper, Typography, LoginHeaderWrapper } from './styles';

export const LoginHeader: React.FC = () => {
  return (
    <LoginHeaderWrapper>
      <Title>Log in</Title>
      <SeparatorTitle />

      <SocialMediaLogin />

      <TextWrapper>
        <Typography>Ou use seu e-mail</Typography>
      </TextWrapper>
    </LoginHeaderWrapper>
  )
}
