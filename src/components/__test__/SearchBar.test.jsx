import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { SearchBar } from '../SearchBar'
import { PhrasesProvider } from '../../context/PhrasesContext'

describe('SearchBar', () => {
    it('renders search input', () => {
        render(
            <PhrasesProvider>
                <SearchBar />
            </PhrasesProvider>
        )

        expect(screen.getByPlaceholderText('Buscar frases...')).toBeInTheDocument()
    })

    it('handles input changes', () => {
        render(
            <PhrasesProvider>
                <SearchBar />
            </PhrasesProvider>
        )

        const input = screen.getByPlaceholderText('Buscar frases...')
        fireEvent.change(input, { target: { value: 'test' } })

        expect(input).toHaveValue('test')
    })
})