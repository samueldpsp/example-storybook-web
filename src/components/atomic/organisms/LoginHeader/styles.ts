import { styled } from '@stitches/react';
import { mainTheme } from '../../../../themes/main';

export const LoginHeaderWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
})

export const Title = styled('h1', {
  fontSize: '2rem',
  fontFamily: mainTheme.fonts.main,
})

export const SeparatorTitle = styled('div', {
  display: 'block',
  backgroundImage: 'linear-gradient(to right, #1fa2ff, #12d8fa, #a6ffcb)',
  width: 70,
  height: 5,
  marginTop: 10,
})

export const TextWrapper = styled('div', {
  marginTop: 16,
})

export const Typography = styled('span', {
  fontSize: '0.8rem',
  fontFamily: mainTheme.fonts.main,
})
