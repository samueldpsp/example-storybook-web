import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LoginFooter } from './index';

export default {
  title: 'Organisms/LoginFooter',
  component: LoginFooter,
} as ComponentMeta<typeof LoginFooter>;

const Template: ComponentStory<typeof LoginFooter> = () => {
  return (
    <>
      <LoginFooter />
    </>
  )
}

export const Normal = Template.bind({});