import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LoginForm } from './index';

export default {
  title: 'Organisms/LoginForm',
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = () => {
  return (
    <>
      <LoginForm />
    </>
  )
}

export const Normal = Template.bind({});