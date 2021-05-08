var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  userFriends: [],

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();
    Friends.initialize();
    Rooms.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    MessageView.initialize();

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      Messages.message = data;

      for (var element of Messages.message) {
        if (element.roomname) {
          $('#rooms select').append($('<option>', {
            value: 'room',
            text: element.roomname
          }));
        }

      }

      for (var i = 0; i < 10; i++) {
        var $rMessage = MessageView.render(Messages.message[Math.floor(Math.random() * 100)]);
        MessagesView.$chats.append($rMessage);
      }

      console.log(data);

      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
