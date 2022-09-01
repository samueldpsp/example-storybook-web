import { styled } from '@stitches/react';
import { mainTheme } from '../../../../themes/main';

export const Wrapper = styled('div', {
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const Main = styled('div', {
  backgroundColor: mainTheme.colors.box,
  borderRadius: 20,
  width: 500,
  minHeight: '80%',
  boxShadow: '3px 7px 42px 10px rgba(202,201,201,0.69)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '1rem 3rem',
})
