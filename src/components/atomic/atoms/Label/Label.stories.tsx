import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Label } from './index';

export default {
  title: 'Atoms/Label',
  component: Label,
  argTypes: {
    error: { control: 'boolean' },
  },
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => {
  return (
    <>
      <Label {...args}>Hello DPSP</Label>
    </>
  )
}

export const Normal = Template.bind({});