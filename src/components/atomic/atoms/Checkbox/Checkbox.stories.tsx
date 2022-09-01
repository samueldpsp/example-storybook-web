import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Checkbox } from './index';

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  argTypes: {
    checked: { control: 'boolean' },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => {
  return (
    <>
      <Checkbox {...args} />
    </>
  )
}

export const Normal = Template.bind({});