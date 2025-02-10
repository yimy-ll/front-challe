import { renderHook, act } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { useSearchWithSimilarity } from '../useSearchWithSimilarity'

describe('useSearchWithSimilarity', () => {
    it('should return all items when search term is empty', () => {
        const items = ['apple', 'banana', 'orange']
        const { result } = renderHook(() => useSearchWithSimilarity(items))

        expect(result.current.filteredItems).toEqual(items)
    })

    it('should filter items based on exact match', async () => {
        const items = ['apple', 'banana', 'orange']
        const { result } = renderHook(() => useSearchWithSimilarity(items))

        act(() => {
            result.current.setSearchTerm('apple')
        })

        await new Promise(resolve => setTimeout(resolve, 1000))

        expect(result.current.filteredItems).toEqual(['apple'])
    })

    it('should filter items based on partial match', async () => {
        const items = ['apple', 'pineapple', 'orange']
        const { result } = renderHook(() => useSearchWithSimilarity(items))

        act(() => {
            result.current.setSearchTerm('apple')
        })

        await new Promise(resolve => setTimeout(resolve, 600))

        expect(result.current.filteredItems).toContain('apple')
        expect(result.current.filteredItems).toContain('pineapple')
    })

    it('should handle case insensitive search', async () => {
        const items = ['Apple', 'BANANA', 'orange']
        const { result } = renderHook(() => useSearchWithSimilarity(items))

        act(() => {
            result.current.setSearchTerm('apple')
        })

        // Wait for debounce
        await new Promise(resolve => setTimeout(resolve, 600))

        expect(result.current.filteredItems).toContain('Apple')
    })
})