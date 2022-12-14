import React from 'react'
import { globalStyles } from '../src/themes/global-styles'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story: any) => {
    globalStyles()

    return <Story />
  },
];