module.exports = (api, options, rootOptions) => {
  // 复制并用 ejs 渲染 `./template` 内所有的文件
  api.render('../template')
  // 修改 `package.json` 里的字段
  api.extendPackage({
    dependencies: {
      'axios': '^0.18.0',
      'vue-router': '^3.0.3',
      'vuex': '^3.1.0',
      'normalize.css': '^8.0.1'  //替代传统的CSS重置
    }
  })
  // if (options['ui-framework'] === 'element-ui') {
  //   api.extendPackage({
  //     dependencies: {
  //       'element-ui': '^2.4.5'
  //     }
  //   })
  // }
}