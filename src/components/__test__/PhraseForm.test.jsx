import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
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
        expect(screen.getByPlaceholderText('Ingresa una nueva frase')).toBeInTheDocument()
        expect(screen.getByText('Agregar')).toBeInTheDocument()
    })

    it('handles form submission with a valid phrase', () => {
        render(
            <PhrasesProvider>
                <PhraseForm />
            </PhrasesProvider>
        )

        const input = screen.getByPlaceholderText('Ingresa una nueva frase')
        const form = screen.getByRole('form')

        // Cambiar el valor del input
        fireEvent.change(input, { target: { value: 'Test phrase' } })
        fireEvent.submit(form)

        // Verificamos que el input se haya vaciado tras el envío
        expect(input).toHaveValue('')
        // Aquí podrías verificar que el estado o la lista de frases se haya actualizado correctamente,
        // si tienes alguna forma de hacerlo.
    })

    it('does not submit empty phrases', () => {
        render(
            <PhrasesProvider>
                <PhraseForm />
            </PhrasesProvider>
        )

        const input = screen.getByPlaceholderText('Ingresa una nueva frase')
        const form = screen.getByRole('form')

        // Intentamos enviar el formulario con un valor vacío
        fireEvent.change(input, { target: { value: '   ' } })
        fireEvent.submit(form)

        // Verificamos que el input no se haya vaciado ni el formulario haya sido enviado
        expect(input).toHaveValue('   ')  // No debería estar vacío
        // Si tu formulario maneja un mensaje de error, verifica que aparezca
        // expect(screen.getByText('No puede estar vacío')).toBeInTheDocument();
    })
})