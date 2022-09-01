import React from 'react';

type Props = {
  condition?: boolean
  children: React.ReactNode
}

export const Conditional: React.FC<Props> = ({ condition = true, children }) => {
  return (
    <>
      {condition && children}
    </>
  )
}
