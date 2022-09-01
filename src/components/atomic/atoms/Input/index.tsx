import React, { InputHTMLAttributes } from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import { Conditional } from '../../../others/Conditional';
import { ErrorMessage, ErrorWrapper, InputField, InputWrapper } from './styles';

export type Props = InputHTMLAttributes<HTMLInputElement> & {
  invalid?: boolean
  error?: string
}

export const Input: React.FC<Props> = ({ invalid, error, ...rest }) => {
  return (
    <>
      <InputWrapper>
        <InputField invalid={invalid} {...rest} />

        <Conditional condition={!!error}>
          <ErrorWrapper>
            <FiAlertCircle size={12} />
            <ErrorMessage>{error}</ErrorMessage>
          </ErrorWrapper>
        </Conditional>
      </InputWrapper>
    </>
  )
}
