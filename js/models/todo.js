define([
    "../views/listitem",
    "backbone"
], function(ListItemView) {
    return Backbone.Model.extend({

        initialize: function(){
            this.view = new ListItemView({
                model: this
            });
        }

    });
});