$(function () {

    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        console.log("I hear this")
        var newBeer = {
            name: $("#beer").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };

        $.ajax("/api/beers", {
            type: "POST",
            data: newBeer
        }).then(function () {
            console.log("New Beer Created");
            location.reload();
        });


    });

    $(".change-devoured").on("click", function (event) {
        var id = $(this).data("id");
        var devour = $(this).data("devoured");
        
        var newDevourState = { devoured: devour };

        $.ajax("/api/beers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function () {
                console.log("Drank this beer " + devour)
                location.reload();
            }
        );
    });

    $(".delete-devoured").on("click", function(event){
        var id = $(this).data("id");

        $.ajax("/api/beers/" + id,{
            type: "DELETE",
            
        }).then(function(){
            console.log("Deleted this beer", id);
            location.reload();
        });
    });



});