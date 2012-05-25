var AboutView = Backbone.View.extend({
    initialize: function() {
    },

    loadPage: function() {
        $('#content').load('pages/about.html');
    }
});
