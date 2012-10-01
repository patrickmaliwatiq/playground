var slideshowHTML = 
'<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width="940" height="300" id="slideshow" align="middle">' + 
'<param name="allowScriptAccess" value="sameDomain" />' + 
'<param name="movie" value="slideshow.swf" /><param name="quality" value="high" /><param name="bgcolor" value="#FFFFFF" /><embed src="slideshow.swf" quality="high" bgcolor="#ffffff" width="940" height="300" name="slideshow" align="middle" allowScriptAccess="sameDomain" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />' + 
'</object>';

var SlideshowView = Backbone.View.extend({
		el: '#slideshow',
		_counter: 0,
		_slideCount: 4,
		_timer: 4000,
		render: function(page) {
			if ($.inArray(page, window.PAGES) < 0) {
				var self = this;
				this.$el.html('<div class="show ' + this.slides[this._counter] + '"></div>');
				this._counter++;
				if (this._counter > this._slideCount) {
					this._counter = 0;
				} 

				if (this._counter == 1) {
					this._timer = 10000;
				} else {
					this._timer = 4000;
				}
				setTimeout(function() {self.render(page);}, this._timer);
			} else {
				var randImgIdx = Math.floor((Math.random()*4)+1) - 1;
				this.$el.html('<div class="image ' + this.images[randImgIdx] + '"></div>');
			}
		},
		slides: { 0: 'main', 1: 'discover-god', 2: 'grow-in-christ', 3: 'live-in-hope', 4: 'serve-in-love' },
		images: { 0: 'discover', 1: 'grow', 2: 'hope', 3: 'serve' }
});
