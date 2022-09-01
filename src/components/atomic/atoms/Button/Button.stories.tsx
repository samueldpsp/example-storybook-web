import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './index';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary'] },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean'},
    size: { control: 'select', options: ['normal', 'small'] },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  return (
    <>
      <Button {...args}>Hello DPSP</Button>
    </>
  )
}

export const Normal = Template.bind({});