define([
    "./config"
], function(config) {

    require(["views/list"], function(ListView) {

        list = new ListView();
        $("#content").append(list.$el);

        list.collection.add([{
            name: "Clean the house"
        }]);

        list.collection.add([{
            name: "Oil hair"
        }]);

        list.collection.add([{
            name: "Print certificate"
        }]);

        $(".add").on("click",function(){
           var  val = $("input").val();
            if (val){
               list.collection.add([{
                   name : val
               }]);
            }
        });

        $(".save").on("click", function(e) {
            var val = $(".update input").val();
            if (val) {
                var model = $(".update input").data().model;
                model.set({name: val});
                $(".update input").val("");
                $(".update").hide();
                $(".create").show();
           }
       });


        $(".clear").on("click", function() {
           list.collection.reset();
        });

        $(".cancel").on("click", function() {
           $(".update").hide();
           $(".create").show();
        });

     });

});