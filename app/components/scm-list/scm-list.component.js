/**
 * Created by Lamberto on 24/10/2016.
 */
angular.module('scmTest')

.component('scmList', {
	templateUrl: 'components/scm-list/scm-list.component.html',
	bindings: {
		data: '<'
	}
});