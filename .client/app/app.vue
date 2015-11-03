<template>
  <div class="todo-app">
    <img id="logo" src="./logo.png">
    <form @submit.prevent="addTodo">
      <input v-model="newTodo">
      <button type="submit">Add Todo</button>
    </form>
    <ul>
      <li v-for="todo in todos" track-by="_id">
        <span>{{todo.text}}</span>
        <a @click="removeTodo(todo._id)">[x]</a>
      </li>
    </ul>
  </div>
</template>

<script>
module.exports = {

  data: function () {
    return {
      todos: [],
      newTodo: ''
    }
  },

  methods: {
    addTodo: function () {
      if (this.newTodo.trim()) {
        Meteor.call('addTodo', this.newTodo)
        this.newTodo = ''
      }
    },
    removeTodo: function (id) {
      Meteor.call('removeTodo', id)
    }
  },

  created: function () {
    // here we are manually managing the subscription
    // and reactive updates. but it is very easy
    // to extend Vue to make this cleaner.
    this.subscription = Meteor.subscribe('todos')
    Tracker.autorun(function () {
      this.todos = Todos.find().fetch()
    }.bind(this))
  },

  destroyed: function () {
    this.subscription.stop()
  }
}
</script>

<style>
#logo {
  width: 100px;
}
</style>
