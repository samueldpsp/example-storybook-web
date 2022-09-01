import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LoginHeader } from './index';

export default {
  title: 'Organisms/LoginHeader',
  component: LoginHeader,
} as ComponentMeta<typeof LoginHeader>;

const Template: ComponentStory<typeof LoginHeader> = () => {
  return (
    <>
      <LoginHeader />
    </>
  )
}

export const Normal = Template.bind({});