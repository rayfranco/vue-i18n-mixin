# vue-translate-mixin

Simple translation mixin for Vue.js

## Installation

	npm install --save vue-translate-mixin

## Usage

### In the Vue Model

	var root = new Vue({
		mixins: [
			require('vue-translate-mixin')
		],

		data: {
			locale: 'en'
		},

		translations: {
			header: {
				title: {
					en: 'Hello',
					fr: 'Bonjour'
				}
			}
		},

		created: function() {
			// If you need to dynamically create the translations
			this.$options.translations = {
				// ...
			};
		},

		ready: function() {
			var title;

			// You can translate in the VM
			title = this.translate('header.title'); // Will return 'Hello'

			// You can force a locale
			title = this.translate('header.title', 'fr'); // Will return 'Bonjour'
		}
	});

### In a view

	<h1 v-text="translate('header.title')"></h1>

	<h1 v-text="translate('header.title', 'fr')"></h1>

	<h1>{{ translate('header.title') }}</h1>