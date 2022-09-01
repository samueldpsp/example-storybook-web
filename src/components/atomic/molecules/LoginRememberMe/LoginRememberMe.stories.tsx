import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LoginRememberMe } from './index';

export default {
  title: 'Molecules/LoginRememberMe',
  component: LoginRememberMe,
} as ComponentMeta<typeof LoginRememberMe>;

const Template: ComponentStory<typeof LoginRememberMe> = () => {
  return (
    <>
      <LoginRememberMe />
    </>
  )
}

export const Normal = Template.bind({});