import { render, screen } from '@testing-library/react'

import Main from '.'
describe('<Main />', () => {
  it('should render the heading', () => {
    // Passo 01 - Renderizar o component
    const { container } = render(<Main />)
    // Passo 02 - Buscar o elemento
    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()
    // Passo 03 - Verificar a existencia

    //Gerar snapshot
    expect(container.firstChild).toMatchSnapshot()
  })
})
