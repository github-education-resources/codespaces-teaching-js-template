/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header tests', () => {
  it('should render the given header text', () => {
    const { getByText } = render(<Header />);

    expect(getByText('Educator React Codespaces JS Template')).toBeInTheDocument()
  })
});