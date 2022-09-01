import React from 'react';
import { FiCheck } from 'react-icons/fi'
import { Conditional } from '../../../others/Conditional';

import { Button } from './styles';

type Props = {
  checked?: boolean
  onChange?: () => void
}

export const Checkbox: React.FC<Props> = ({ checked = false, onChange }) => {
  return (
    <Button checked={checked} onClick={onChange} type="button">
      <Conditional condition={checked}>
        <FiCheck size={16} />
      </Conditional>
    </Button>
  )
}
