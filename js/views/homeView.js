var HomeView = Backbone.View.extend({
    el: $('#content'),
    initialize: function() {
    },

    loadPage: function() {
        $('#content').load('pages/home.html');
    },

    buttonClick: function() {
        console.log(this.el);
    },
    
    events: {
        'click #btnButton' : 'buttonClick'
    }
});
