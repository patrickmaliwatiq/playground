var AppRouter = Backbone.Router.extend({
    navigateTo: function(page) {
        if (!page || $.inArray(page, window.PAGES) < 0) { page = 'home'; }
        this.masterView.loadPage(page);
    },
    initialize: function() {
        this.route(/^(.*?)$/, "navigateTo");
        this.masterView = new MasterView();
        Backbone.history.start();
    }
});

window.PAGES = ['timesanddirections', 'visitorinformation', 'ourvalues', 'ministries', 'calendarandevents', 'resources', 'contact'];
