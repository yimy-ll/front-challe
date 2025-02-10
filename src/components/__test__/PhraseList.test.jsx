import React from 'react';
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { PhraseList } from '../PhraseList'
import { PhrasesProvider } from '../../context/PhrasesContext'
import { usePhrases } from '../../context/PhrasesContext'

vi.mock('../../context/PhrasesContext', async () => {
    const actual = await vi.importActual('../../context/PhrasesContext')
    return {
        ...actual,
        usePhrases: vi.fn()
    }
})

describe('PhraseList', () => {
    it('renders phrases', () => {
        const mockPhrases = ['Phrase 1', 'Phrase 2']
        vi.mocked(usePhrases).mockReturnValue({
            filteredPhrases: mockPhrases,
            deletePhrase: vi.fn(),
            phrases: mockPhrases,
            searchTerm: '',
            setSearchTerm: vi.fn(),
            addPhrase: vi.fn()
        })

        render(
            <PhrasesProvider>
                <PhraseList />
            </PhrasesProvider>
        )

        mockPhrases.forEach(phrase => {
            expect(screen.getByText(phrase)).toBeInTheDocument()
        })
    })

    it('handles phrase deletion', () => {
        const deletePhrase = vi.fn()
        vi.mocked(usePhrases).mockReturnValue({
            filteredPhrases: ['Phrase 1'],
            deletePhrase,
            phrases: ['Phrase 1'],
            searchTerm: '',
            setSearchTerm: vi.fn(),
            addPhrase: vi.fn()
        })

        render(
            <PhrasesProvider>
                <PhraseList />
            </PhrasesProvider>
        )

        const deleteButton = screen.getByRole('button')
        fireEvent.click(deleteButton)

        expect(deletePhrase).toHaveBeenCalledWith(0)
    })
})