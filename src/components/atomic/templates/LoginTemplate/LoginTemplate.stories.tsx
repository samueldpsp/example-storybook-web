import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LoginTemplate } from './index';

export default {
  title: 'Templates/LoginTemplate',
  component: LoginTemplate,
} as ComponentMeta<typeof LoginTemplate>;

const Template: ComponentStory<typeof LoginTemplate> = () => {
  return (
    <>
      <LoginTemplate />
    </>
  )
}

export const Normal = Template.bind({});