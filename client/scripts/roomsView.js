var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  renderRoom: function(roomName) {
    var $room = $('<div class="roomName"></div>');

    $room.appendTo(RoomsView.$select);
  },

  render: function() {
  }

};
