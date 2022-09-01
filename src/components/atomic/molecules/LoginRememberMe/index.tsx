import React from 'react';
import { Checkbox } from '../../atoms/Checkbox';
import { Fieldset } from '../../atoms/Fieldset';
import { Label } from '../../atoms/Label';

export const LoginRememberMe: React.FC = () => {
  return (
    <Fieldset row>
      <Checkbox checked />
      <Label>Lembrar de mim</Label>
    </Fieldset>
  )
}
