module.exports = {
  transform: { '^.+\\.vue$': 'vue-jest' },
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: ['**/(*.)spec.js'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    'tests/**/*.{js,vue}',
    '!**/node_modules/**',
    '!src/main.js',
    '!src/app.vue',
    '!src/router/index.js',
    '!src/store/index.js',
    '!src/mock/**',
    '!src/plugins/**',
    '!src/config/**',
    '!src/constants/**',
  ],
}
