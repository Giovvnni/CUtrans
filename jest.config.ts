import nextJest from 'next/jest'

const createJestConfig = nextJest({
  dir: './'
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/pages/(.*)$': '<rootDir>/pages/$1' // Si usas alias para páginas
  },
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.d.ts']
}

export default createJestConfig(customJestConfig)
