var ContactView = Backbone.View.extend({
    initialize: function() {
    },

    loadPage: function() {
        $('#content').load('pages/contact.html');
    }
});
