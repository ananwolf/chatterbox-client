var Friends = {

  initialize: function() {
    $(document).on('click', '.username', function(event) {

      var userName = event.target.innerText.slice(1).replace('"', '');
      App.userFriends.push(userName);
      Friends.toggleStatus(userName);

      console.log(userName);

    });
  },

  toggleStatus: function(friend) {
    console.log('I am not you friend yet!');
    $('#chats').html('');
    var currentMessage;
    for (var element of Messages.message) {
      if (App.userFriends.includes(element.username)) {
        currentMessage = MessageView.render(element);
        $('#chats').prepend(currentMessage);
      }
    }
  }
};