$(() => {
  // $.ajax({
  //   method: "GET",
  //   url: "/api/users"
  // }).done((users) => {
  //   for(user of users) {
  //     $("<div>").text(user.name).appendTo($("body"));
  //   }
  // });;

  $('.favorite-button').on('click', (e) => {
    alert('favorite!')
    e.preventDefault();
    // $.ajax({
    //     method: "GET",
    //     url: "/api/users"
    //   }).done((users) => {
    //     for(user of users) {
    //       $("<div>").text(user.name).appendTo($("body"));
    //     }
    //   });;
  });

});
