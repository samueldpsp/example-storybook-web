import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PinTwitter } from './index';

export default {
  title: 'Atoms/PinTwitter',
  component: PinTwitter,
} as ComponentMeta<typeof PinTwitter>;

const Template: ComponentStory<typeof PinTwitter> = () => {
  return (
    <>
      <PinTwitter />
    </>
  )
}

export const Normal = Template.bind({});