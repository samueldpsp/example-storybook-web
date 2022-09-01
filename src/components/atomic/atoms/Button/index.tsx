import React, { ButtonHTMLAttributes } from 'react';
import { ButtonComponent } from './styles';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary'
  fullWidth?: boolean;
  size?: 'small' | 'normal'
}

export const Button: React.FC<Props> = ({ children, variant, fullWidth = true, size = 'normal', ...rest }) => {
  return (
    <ButtonComponent variant={variant} fullWidth={fullWidth} size={size} {...rest}>
      {children}
    </ButtonComponent>
  )
}
