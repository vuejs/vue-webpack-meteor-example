Todos = new Mongo.Collection('todos')

if (Meteor.isServer) {
  Meteor.publish('todos', function () {
    return Todos.find()
  })
}
