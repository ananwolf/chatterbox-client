var Rooms = {
  initialize: function() {
    $(':button').on('click', function(event) {
      Rooms.add();
    });
  },

  add: function(roomName) {
    var $room = $('<div class="room"></div>');
  }
};