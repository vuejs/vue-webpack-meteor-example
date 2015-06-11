var Vue = require('vue')
var App = Vue.extend(require('./app/app.vue'))

Template.body.onRendered(function () {
  new App({ el: '#app' })
})
