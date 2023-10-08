module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  globals: {
    'vue-jest': {
      compilerOptions: {
        isCustomElement: (tag) => tag.startsWith('v-'),
      },
    },
  },
  
}
