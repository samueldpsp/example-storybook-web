import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PinFacebook } from './index';

export default {
  title: 'Atoms/PinFacebook',
  component: PinFacebook,
} as ComponentMeta<typeof PinFacebook>;

const Template: ComponentStory<typeof PinFacebook> = () => {
  return (
    <>
      <PinFacebook />
    </>
  )
}

export const Normal = Template.bind({});