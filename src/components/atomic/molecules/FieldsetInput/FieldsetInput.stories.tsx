import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FieldsetInput } from './index';

export default {
  title: 'Molecules/FieldsetInput',
  component: FieldsetInput,
} as ComponentMeta<typeof FieldsetInput>;

const Template: ComponentStory<typeof FieldsetInput> = () => {
  return (
    <>
      <FieldsetInput label='E-mail' />
    </>
  )
}

export const Normal = Template.bind({});