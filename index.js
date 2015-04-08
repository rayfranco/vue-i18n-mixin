'use strict';

module.exports = {

	ready: function() {
		// Make sure root locale exists
		if (!this.$root.locale)
			this.$root.$set('locale', 'en');
	},

	methods: {
		translate: function(namespace, locale) {

			locale = locale || this.locale || this.$root.locale;

			// Fetch lang data
			var data = this.$options.translations || this.$root.$options.translations;

			try {
				var translation = namespace.split('.').reduce(function(a, b, index) {
					return typeof a === 'object' ? a[b] : data[a][b];
				})[locale];
			} catch(e) {
				console.warn('No translation found for namespace %s using locale %s (%s)', namespace, locale, e);
			}
			return translation;
		}
	}
}
