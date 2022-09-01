import React from 'react';
import { PinFacebook } from '../../atoms/PinFacebook';
import { PinLinkedIn } from '../../atoms/PinLinkedIn';
import { PinTwitter } from '../../atoms/PinTwitter';
import { SocialMediaWrapper } from './styles';

export const SocialMediaLogin: React.FC = () => {
  return (
    <SocialMediaWrapper>
      <PinFacebook />
      <PinLinkedIn />
      <PinTwitter />
    </SocialMediaWrapper>
  )
}
