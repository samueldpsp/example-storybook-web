import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SocialMediaLogin } from './index';

export default {
  title: 'Organisms/SocialMediaLogin',
  component: SocialMediaLogin,
} as ComponentMeta<typeof SocialMediaLogin>;

const Template: ComponentStory<typeof SocialMediaLogin> = () => {
  return (
    <>
      <SocialMediaLogin />
    </>
  )
}

export const Normal = Template.bind({});