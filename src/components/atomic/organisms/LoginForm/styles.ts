import { styled } from '@stitches/react';
import { mainTheme } from '../../../../themes/main';

export const Form = styled('form', {
  width: '100%',
})

export const Link = styled('a', {
  fontSize: '0.8rem',
  fontFamily: mainTheme.fonts.main,
  textDecoration: 'none',
  color: 'inherit'
})

export const WrapperSubmitButton = styled('div', {
  marginTop: '2rem',
})

export const SubmitButton = styled('button', {
  width: '100%',
  height: 50,
  border: 'none',
  backgroundColor: '#12d8fa',
  borderRadius: 50,
  fontSize: '0.8rem',
  fontFamily: mainTheme.fonts.main,
  color: '#ffffff',
  fontWeight: 500,
  cursor: 'pointer'
})

export const WrapperOptions = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: '2rem'
})
