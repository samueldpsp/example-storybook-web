import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TiSocialGooglePlus } from 'react-icons/ti';

import { Pin } from './index';

export default {
  title: 'Atoms/Pin',
  component: Pin,
} as ComponentMeta<typeof Pin>;

const Template: ComponentStory<typeof Pin> = () => {
  return (
    <>
      <Pin>
        <TiSocialGooglePlus size={24} />
      </Pin>
    </>
  )
}

export const Normal = Template.bind({});