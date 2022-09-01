import React from 'react';
import { Fieldset } from '../../atoms/Fieldset';
import { Input, Props as InputProps } from '../../atoms/Input';
import { Label } from '../../atoms/Label';
import { WrapperLabel } from './styles';

type Props = InputProps & {
  label: string
}

export const FieldsetInput: React.FC<Props> = ({ label, ...rest }) => {
  return (
    <Fieldset>
      <WrapperLabel>
        <Label>{label}</Label>
      </WrapperLabel>
      <Input {...rest} />
    </Fieldset>
  )
}
