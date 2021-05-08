var Friends = {

  initialize: function() {
    $('.username').on('click', function(event) {
      console.log('I am not you friend yet!');
      Friends.toggleStatus();
    });
  },

  toggleStatus: function(friend) {
    console.log('I am not you friend yet!');

  }
};