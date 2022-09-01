import { styled } from '@stitches/react';

export const Fieldset = styled('fieldset', {
  background: 'none',
  border: 'none',
  display: 'flex',
  flexDirection: 'column',
  '& + fieldset': {
    marginTop: 16,
  },

  variants: {
    row: {
      true: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
      }
    }
  }
})