// vitest.config.js
import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        environment: 'jsdom',  // Asegúrate de que el entorno sea jsdom
    },
})