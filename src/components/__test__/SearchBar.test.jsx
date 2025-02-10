import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { SearchBar } from '../SearchBar'
import { PhrasesProvider } from '../../context/PhrasesContext'

const placeholder="Buscar frase..."

describe('SearchBar', () => {
    it('renders search input', () => {
        render(
            <PhrasesProvider>
                <SearchBar placeholder={placeholder} />
            </PhrasesProvider>
        )

        expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument()
    })

    it('handles input changes', () => {
        render(
            <PhrasesProvider>
                <SearchBar placeholder={placeholder} />
            </PhrasesProvider>
        )

        const input = screen.getByPlaceholderText(placeholder)
        fireEvent.change(input, { target: { value: 'test' } })

        expect(input).toHaveValue('test')
    })
})