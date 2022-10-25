function makeModuleNameMapper(srcPath, tsconfigPath) {
  // Get paths from tsconfig
  // eslint-disable-next-line import/no-dynamic-require
  const { compilerOptions } = require(tsconfigPath)
  const { paths } = compilerOptions
  const aliases = {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(png)$': '<rootDir>/mocks/fileMock.js',
  }
  // Iterate over paths and convert them into moduleNameMapper format
  Object.keys(paths).forEach((item) => {
    const key = item.replace('/*', '/(.*)')
    aliases[key] = paths[item].map((p) => p.replace('/*', '/$1'))
      .map((p) => `${srcPath}/${p}`)
  })
  return aliases
}

module.exports = {
  collectCoverage: true,
  coverageDirectory: './coverage/e2e',
  testEnvironment: './e2e/environment',
  testRunner: 'jest-circus/runner',
  testTimeout: 120000,
  preset: 'ts-jest',
  testRegex: '\\.e2e\\.ts$',
  reporters: ['detox/runners/jest/streamlineReporter'],
  verbose: true,
  moduleNameMapper: makeModuleNameMapper('<rootDir>', './tsconfig.json'),
  roots: ['<rootDir>', '<rootDir>'],
}
