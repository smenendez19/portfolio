module.exports = {
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    'plugin:vue/vue3-recommended',
  ],
  rules: {
    "vue/v-on-event-hyphenation": "off",
    "indent": [2, 2, { "SwitchCase": 1}]
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
  }
}