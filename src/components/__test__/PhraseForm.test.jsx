import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import React from 'react'
import { PhraseForm } from '../PhraseForm'
import { PhrasesProvider } from '../../context/PhrasesContext'

describe('PhraseForm', () => {
    it('renders input and button', () => {
        render(
            <PhrasesProvider>
                <PhraseForm />
            </PhrasesProvider>
        )

        // Verificamos que el input y el botón estén presentes
        expect(screen.getByPlaceholderText("Ingresa una nueva frase...")).toBeInTheDocument()
        expect(screen.getByText("Agregar")).toBeInTheDocument()
    })

    it('handles form submission with a valid phrase', () => {
        render(
            <PhrasesProvider>
                <PhraseForm />
            </PhrasesProvider>
        )

        const input = screen.getByTestId('new-phrase')
        const form = screen.getByRole('form')

        fireEvent.change(input, { target: { value: 'Test phrase' } })
        fireEvent.submit(form)

        expect(input).toHaveValue('')
    })

    it('does not submit empty phrases', () => {
        render(
            <PhrasesProvider>
                <PhraseForm />
            </PhrasesProvider>
        )

        const input = screen.getByTestId('new-phrase')
        const form = screen.getByRole('form')

        fireEvent.change(input, { target: { value: '   ' } })
        fireEvent.submit(form)

        expect(input).toHaveValue('   ')
    })
})