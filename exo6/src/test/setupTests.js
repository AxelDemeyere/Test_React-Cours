import '@testing-library/jest-dom'
import { afterAll, afterEach, beforeAll } from 'vitest'
import { server } from '../../test/msw/server.js'

// demarrer MSW avant les tests
beforeAll(() => server.listen())

// Reinitialer les handlers entre les tests
afterEach(() => server.resetHandlers())

// stop le serveur apres les tests
afterAll(() => server.close())