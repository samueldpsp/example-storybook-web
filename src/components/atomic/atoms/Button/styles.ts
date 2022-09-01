import { styled } from '@stitches/react';
import { mainTheme } from '../../../../themes/main';

export const ButtonComponent = styled('button', {
  border: 'none',
  backgroundColor: '#12d8fa',
  borderRadius: 50,
  fontSize: '0.8rem',
  fontFamily: mainTheme.fonts.main,
  color: '#ffffff',
  fontWeight: 500,
  cursor: 'pointer',
  '&:hover': {
    filter: 'brightness(1.1)'
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: '#12d8fa',
      },
      secondary: {
        backgroundColor: '#1B2845',
      }
    },
    fullWidth: {
      true: {
        width: '100%',
      },
    },
    size: {
      normal: {
        height: 50,
        fontSize: '0.8rem',
        padding: '0rem 2rem',
      },
      small: {
        height: 40,
        fontSize: '0.65rem',
        padding: '0rem 1rem',
      }
    },
    disabled: {
      true: {
        backgroundColor: '#808080',
        opacity: 0.4,
        cursor: 'not-allowed'
      }
    }
  }
})
