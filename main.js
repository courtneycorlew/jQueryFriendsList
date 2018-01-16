$(document).ready(function() {
  $("#friend-form").submit( (e) => {
    e.preventDefault();
    let newFriend = $('#input').val();
    let newElement = createFriend(newFriend);
    $('#friend-list').append(newElement);
    $('#input').val("");
    console.log(e.currentTarget[0].value);
  })

  function createFriend(name) {
    return $(`<li> ${name}</li>`).addClass('list-group-item list-group-item-action list-group-item-dark');
  }
});


