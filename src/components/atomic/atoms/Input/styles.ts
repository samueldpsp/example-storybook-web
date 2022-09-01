import { styled } from '@stitches/react';
import { mainTheme } from '../../../../themes/main';

export const InputField = styled('input', {
  width: '100%',
  backgroundColor: 'transparent',
  border: `1px solid ${mainTheme.colors.outline}`,
  borderRadius: 5,
  padding: '1rem',
  '&:focus': {
    borderColor: '#12d8fa'
  },

  variants: {
    invalid: {
      true: {
        borderColor: '#FF443A'
      }
    }
  }
})

export const InputWrapper = styled('div', {
  width: '100%',
})

export const ErrorWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 5,
  marginTop: '0.2rem',
  color: '#FF443A'
})

export const ErrorMessage = styled('span', {
  fontSize: '0.7rem',
  fontFamily: mainTheme.fonts.main,
  color: '#FF443A'
})