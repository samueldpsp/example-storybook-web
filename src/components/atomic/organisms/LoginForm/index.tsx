import React from 'react';
import { Button } from '../../atoms/Button';
import { Link } from '../../atoms/Link';
import { FieldsetInput } from '../../molecules/FieldsetInput';
import { LoginRememberMe } from '../../molecules/LoginRememberMe';

import {
  Form,
  WrapperOptions,
  WrapperSubmitButton
} from './styles';

type Invalid = {
  is?: boolean;
  message?: string
}

type Disabled = {
  is?: boolean;
}

type Props = {
  emailInvalid?: Invalid
  passwordInvalid?: Invalid
  buttonDisabled?: Disabled
}

export const LoginForm: React.FC<Props> = ({
  emailInvalid,
  buttonDisabled,
  passwordInvalid,
}) => {
  return (
    <Form>
      <FieldsetInput
        label='E-mail'
        placeholder='E-mail'
        invalid={emailInvalid?.is}
        error={emailInvalid?.message}
      />

      <FieldsetInput
        label="Senha"
        placeholder='Senha'
        type="password"
        invalid={passwordInvalid?.is}
        error={passwordInvalid?.message}
      />

      <WrapperOptions>
        <LoginRememberMe />

        <Link href="#">Esqueci minha senha</Link>
      </WrapperOptions>

      <WrapperSubmitButton>
        <Button
          disabled={buttonDisabled?.is}
          type="submit"
          fullWidth
        >
          Entrar
        </Button>
      </WrapperSubmitButton>
    </Form>
  )
}
