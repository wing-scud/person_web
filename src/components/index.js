import Vue from 'vue'
// https://webpack.js.org/guides/dependency-management/#require-context
const requireComponent = require.context(
  // Look for files in the current directory
  '.',
  //查询子目录
  true,
  // Only include 大写字母开头的.vue files
  /[A-Z]\w+\.(vue)$/
)
// For each matching file name...
requireComponent.keys().forEach((fileName) => {
  // Get the component config
  const componentConfig = requireComponent(fileName)
  // Get the PascalCase version of the component name
  const componentName = fileName//./SliderBar/SliderBar.vue
    // Remove the "./"到下一个/之间所有的英文/ =>SliderBar.vue
    .replace(/^\.\/[A-Za-z]+\//, '')
    // Remove .vue
    .replace(/\.(vue)/, '')//=>SliderBar
    // Split up kebabs
    // .split('-')
    // // Upper case
    // .map((kebab) => kebab.charAt(0).toUpperCase() + kebab.slice(1))
    // // Concatenated
    // .join('')

  // 全局注册 component
  Vue.component(componentName, componentConfig.default || componentConfig)
})