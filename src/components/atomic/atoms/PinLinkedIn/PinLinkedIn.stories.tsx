import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PinLinkedIn } from './index';

export default {
  title: 'Atoms/PinLinkedIn',
  component: PinLinkedIn,
} as ComponentMeta<typeof PinLinkedIn>;

const Template: ComponentStory<typeof PinLinkedIn> = () => {
  return (
    <>
      <PinLinkedIn />
    </>
  )
}

export const Normal = Template.bind({});