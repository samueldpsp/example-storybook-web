import { styled } from '@stitches/react';
import { mainTheme } from '../../../../themes/main';

export const Button = styled('button', {
  width: 20,
  height: 20,
  borderRadius: 5,
  border: `1px solid ${mainTheme.colors.outline}`,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  variants: {
    checked: {
      true: {
        color: '#fff',
        backgroundColor: '#12d8fa'
      }
    }
  }
})