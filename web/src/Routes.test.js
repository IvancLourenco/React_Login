import React from 'react'
import { Router } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import Routes from './Routes'

describe('Testing routes component', () => {

  test('landing on a bad page', () => {
    const history = createMemoryHistory()
    history.push('/some/bad/route')
    render(
      <Router location={history.location} navigator={history}>
        <Routes />
      </Router>
    )
  
    expect(screen.getByText(/não encontrada/i)).toBeInTheDocument()
  })

  test('landing on root page', () => {
    const history = createMemoryHistory()
    history.push('/')
    render(
      <Router location={history.location} navigator={history}>
        <Routes />
      </Router>
    )
  
    expect(screen.getByText(/learn react/i)).toBeInTheDocument()
  })
})
  