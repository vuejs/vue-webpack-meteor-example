Meteor.methods({
  addTodo: function (text) {
    Todos.insert({ text: text })
  },
  removeTodo: function (id) {
    Todos.remove(id)
  }
})
