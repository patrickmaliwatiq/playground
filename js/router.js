var AppRouter = Backbone.Router.extend({
    routes: {
        'about' : 'about',
        'contact': 'contact',
        '*actions': 'defaultAction'
    },

    about: function() {
         var aboutView = new AboutView();
         aboutView.loadPage();
    },

    contact: function() {
         var contactView = new ContactView();
         contactView.loadPage();
    },

    defaultAction: function() {
        var homeView = new HomeView();
        homeView.loadPage();
    },
    
    initialize: function() {
        Backbone.history.start();
    }
});
