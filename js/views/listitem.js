define([
    "backbone"
], function() {
    
    return Backbone.View.extend({

      tagName: "li",

      className: "todo-items",
     

      events: {
          "click .remove": "remove",
          "click .edit": "edit",
          "click #edits": "edits"
      },

  
      initialize: function() {
        this.render();
        this.model.on("change:name", this.render, this);
      },

      edits:function(e) {
         $("#edits").click(function(){
            $(".update").show();
        }); 
     },
       
      edit:function(e) {
            $(".update").show();
            $(".create").hide();
            $(".update input").val(this.model.attributes.name).data({"model": this.model});
      },

      render: function() {
        this.$el.html(this.model.get("name"));
        this.$el.append(" <span class='glyphicon glyphicon-pencil edit' id='edits' style='cursor: pointer'> </span>");
        this.$el.append(" <span class='remove' style='cursor: pointer'>[X]</span>");
       }
    });
});

