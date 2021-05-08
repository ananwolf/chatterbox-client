var Rooms = {
  list: new Set(),

  initialize: function() {
    $(':button').on('click', function(event) {
      Rooms.add();
    });
    // Rooms.displayRooms();
  },

  displayRooms: function() {
    // $('#rooms select').empty();
    // this.list.forEach((room) => {
    //   $('#rooms select').prepend(`<option value="${room}">${room}</option>`);
    // });
  //   var roomName = Messages.message[0].roomname;
  //   // $('#rooms select').prepend(`<option value="${room}">${room}</option>`);
  //   $('#rooms select').append($('<option>', {
  //     value: "room",
  //     text: 'roomName'
  // }));
  },

  add: function(roomName) {
    // Rooms.list.add(roomName);

    // var $room = $('<div class="room"></div>');
    // Rooms.add(roomName);

  }
};