import React from 'react';
import { LoginFooter } from '../../organisms/LoginFooter';

import { LoginForm } from '../../organisms/LoginForm';
import { LoginHeader } from '../../organisms/LoginHeader';
import { Main, Wrapper } from './styles';

type Props = {

}

export const LoginTemplate: React.FC = () => {
  return (
    <Wrapper>
      <Main>
        <LoginHeader />

        <LoginForm />

        <LoginFooter />
      </Main>
    </Wrapper>
  )
}
