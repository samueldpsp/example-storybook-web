import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event';

import { Button } from '.'

describe('Button Component', () => {
  it('should be show a button', () => {
    const { getByText } = render(
      <Button>
        Hello World
      </Button>
    )

    const buttonElement = getByText('Hello World')

    expect(buttonElement).toBeInTheDocument()
  })

  it('should be show a disabled button', () => {
    const onClick = jest.fn()

    const { getByText } = render(<Button disabled onClick={onClick}>Carregando...</Button>)
    const disabledButton = getByText('Carregando...')

    userEvent.click(disabledButton)

    expect(disabledButton).toBeInTheDocument()
    expect(onClick).toHaveBeenCalledTimes(0)
  })
})