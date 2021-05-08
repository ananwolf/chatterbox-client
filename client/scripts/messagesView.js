var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  renderMessage: function(message) {
    var $message = $('<div class="message"></div>');
    var $userName = $('<div class="username"></div>');
    $message.text(message.text);
    $userName.text(message.username);

    $userName.appendTo(MessagesView.$chats);
    $message.appendTo($userName);

  },

  render: function() {
  }

};