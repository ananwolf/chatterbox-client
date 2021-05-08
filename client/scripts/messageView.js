var MessageView = {
  initialize: function() {

  },

  render: _.template(`
      <div class="chat">
        <div class="username">
          "<%= username %>"
          <p class="text">
          "<%= text %>"
          </p>
        </div>
        <div></div>
      </div>
    `)
};

