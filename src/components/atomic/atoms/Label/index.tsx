import { styled } from '@stitches/react';
import { mainTheme } from '../../../../themes/main';

export const Label = styled('label', {
  fontSize: '0.8rem',
  fontFamily: mainTheme.fonts.main,
  variants: {
    error: {
      true: {
        color: '#FF443A'
      }
    }
  }
})