import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from './index';

export default {
  title: 'Atoms/Input',
  component: Input,
  argTypes: {
    error: { control: 'text' },
    invalid: { control: 'boolean' },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
  return (
    <>
      <Input {...args} />
    </>
  )
}

export const Normal = Template.bind({});
export const Invalid = Template.bind({});

Invalid.args = {
  invalid: true,
}

export const WithError = Template.bind({});

WithError.args = {
  invalid: true,
  error: 'Mensagem de erro.'
}