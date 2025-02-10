import React from 'react';
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { PhraseForm } from '../PhraseForm'
import { PhrasesProvider } from '../../context/PhrasesContext'

const placeholder="Ingresa una nueva frase..."
const id = "id-phraseFrom"

describe('PhraseForm', () => {
    it('renders input and button', () => {
        render(
            <PhrasesProvider>
                <PhraseForm placeholder={placeholder} id={id} />
            </PhrasesProvider>
        )

        expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument()
        expect(screen.getByText('Agregar')).toBeInTheDocument()
    })

    it('handles form submission', () => {
        render(
            <PhrasesProvider>
                <PhraseForm placeholder={placeholder} id={id}/>
            </PhrasesProvider>
        )

        const input = screen.getByPlaceholderText(placeholder)
        const form = screen.getByRole('form')

        fireEvent.change(input, { target: { value: 'Test phrase' } })
        fireEvent.submit(form)

        expect(input).to.have.property('value', '')
    })

    it('does not submit empty phrases', () => {
        render(
            <PhrasesProvider>
                <PhraseForm placeholder={placeholder} id={id}/>
            </PhrasesProvider>
        )

        const input = screen.getByPlaceholderText(placeholder)
        const form = screen.getByRole('form')

        fireEvent.change(input, { target: { value: '   ' } })
        fireEvent.submit(form)

        expect(input).to.have.property('value', '')
    })
})