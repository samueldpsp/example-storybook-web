import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Link } from './index';

export default {
  title: 'Atoms/Link',
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = () => {
  return (
    <>
      <Link href="#">Esqueci minha senha</Link>
    </>
  )
}

export const Normal = Template.bind({});