/**
 * Created by Lamberto on 24/10/2016.
 */
// In a real project you want to use a module loader like Webpack or Broweserify,
// only export a class with the logic but without having to know the name of the module
// app (scmTest in this case). This would make it more reusable. For the purpose of this
// test no module loader has been used to focus more on the code itself.
angular.module('scmTest')

.component('scmFilters', {
	templateUrl: 'components/scm-filters/scm-filters.component.html',
	bindings: {
		defaultValues: '<',
		onChange: '&'
	},
	controller() {
		this.maxResultsOptions = [10, 25, 50].map(opt => ({
			descr: `Max ${opt} results`,
			value: opt
		}));
		this.filters = Object.assign({
			maxResults: 10,
			userLikes: false
		}, this.defaultValues);

		this.handleOnChange = () => {
			this.onChange({ filters: this.filters });
		};
	}
});