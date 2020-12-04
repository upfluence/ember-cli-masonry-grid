/* eslint-env node */
'use strict';

module.exports = {
	name: 'ember-cli-masonry-grid',

	isDevelopingAddon: function() {
		return true;
	},

	included: function(app) {
		this._super.included.apply(this, arguments);

    app.import('node_modules/masonry-layout/dist/masonry.pkgd.min.js');
    app.import('node_modules/imagesloaded/imagesloaded.pkgd.min.js');
	}
};
