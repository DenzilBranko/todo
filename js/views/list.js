define([
    "../collections/todo"
], function(TodoCollection) {
    
    return Backbone.View.extend({

      tagName: "ul",

      className: "todo-items",

      events: {


      },

      initialize: function() {
        this.collection = new TodoCollection();
        this.collection.on("add", this.addToList, this);
        this.collection.on("reset",this.emptyList,this);
        this.collection.on("save",this.editList,this);

      },

      addToList: function(model) {
       this.$el.append(model.view.$el);
      },

      emptyList: function(model) {
       this.$el.empty();
      },

      editList: function(model){
          this.$el.set(model.view.$el);
      },

      render: function() {
     }

   });

});