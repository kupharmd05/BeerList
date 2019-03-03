$(function () {

    $(".submit").on("submit", function (event) {
        event.preventDefault();

        var newBeer = {
            name: $("#beer").val().trim(),
            devoured: false
        };

        $.ajax("/api/beers", { type: "POST", data: newBeer })
            .then(function () {
                console.log("New Beer Created");
                location.reload();
            });

    });

    $(".drinkIt").on("click", function (event) {
        var id = $(this).data("id");
        var drank = { devoured: true };

        $.ajax("/api/beers" + id, {
            type: "PUT",
            data: drank
        }).then(
            function () {
                console.log("Drank this beer " + id)
                location.reload();
            }
        );
    });



});