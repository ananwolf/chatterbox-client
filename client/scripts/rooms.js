var Rooms = {
  list: new Set(),

  initialize: function() {
    $(':button').on('click', function(event) {
      Rooms.add();
    });
    Rooms.updateRooms();
  },

  updateRooms: function() {
    $('#rooms select').on('change', function(event) {
      $('#chats').html('');
      console.log($(event.target.innerText.slice(1)));
      var currentRoom;
      for (var element of Messages.message) {
        if (element.roomname === $(this).val()) {
          currentRoom = MessageView.render(element);
          $('#chats').prepend(currentRoom);
        }
      }
    });
    // console.log(this.list);
    // $('#rooms').val('value').change(function() {
    //   $('#chats').html('');
    //   console.log($(this).val());
    //   var currentRoom;
    //   for (var element of Messages.message) {
    //     if (element.roomname === $(this).val()) {
    //       currentRoom = MessageView.render(element);
    //       $('#chats').prepend(currentRoom);
    //     }
    //   }
    // })
  },

  add: function(roomName) {

    // Rooms.list.add(roomName);

    // var $room = $('<div class="room"></div>');
    // Rooms.updateRooms();

  }
};