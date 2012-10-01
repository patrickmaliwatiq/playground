var MasterView = Backbone.View.extend({
		el: '#content',
    initialize: function(page) {
			this.slideshowView = new SlideshowView();
      _.bindAll(this, 'loadPage', 'showLoader', 'hideLoader');
    },
    loadPage: function(page) {
        this.showLoader();
        this.$el.load('pages/' + page + '.html', null, this.hideLoader);
        this.slideshowView.render(page);
    },
    showLoader: function() {
        this.$el.addClass('loader');
    },
    hideLoader: function() {
      this.$el.removeClass('loader');
    }
});
