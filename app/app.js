'use strict';

// Declare app level module which depends on views, and components
angular.module('scmTest', [])

.controller('TestCtrl', function TestController(Config, Videos) {
	let lastSearch;
	this.defaultFilters = {
		maxResults: Config.defaultMaxResults
	};

	this.search = (filters, take = null) => {
		lastSearch = filters;
		Videos.get(Object.assign({}, filters, {
			take
		})).then(result => {
			this.data = result.data;
			this.hasMore = result.hasMore;
		});
	};

	this.more = () => {
		this.search(lastSearch, this.data.length);
	};

	this.$onInit = () => {
		this.search(this.defaultFilters);
	}
});