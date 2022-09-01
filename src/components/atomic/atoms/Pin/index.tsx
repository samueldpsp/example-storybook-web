import { styled } from '@stitches/react';
import { mainTheme } from '../../../../themes/main';

export const Pin = styled('button', {
  borderRadius: '50%',
  backgroundColor: mainTheme.colors.box,
  width: 50,
  height: 50,
  border: `1px solid ${mainTheme.colors.outline}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  '&:hover': {
    filter: 'brightness(0.95)'
  },
})
