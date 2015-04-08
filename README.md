# vue-i18n-mixin

Simple internationalisation mixin for Vue.js

## Installation

`npm install --save vue-i18n-mixin`

## Usage

### In the Vue Model

```js
var root = new Vue({
	mixins: [
		require('vue-i18n-mixin')
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

		// You can use the shorthand
		title = this.t('header.title')
	}
});
```

### In a view

```html
<h1 v-text="translate('header.title')"></h1>

<h1 v-text="t('header.title')"></h1>

<h1 v-text="t('header.title', 'fr')"></h1>

<h1>{{ t('header.title') }}</h1>
```