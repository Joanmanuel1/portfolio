module.exports = {
  lintOnSave: false, // Habilitar ESLint en tiempo de construcción
  configureWebpack: {
    stats: {
      children: true,
    },
  },
};