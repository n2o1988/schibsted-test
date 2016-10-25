/**
 * Created by Lamberto on 24/10/2016.
 */
angular.module('scmTest')

.service('Videos', function VideosService(Config, $http) {
	const filterByLikes = res => res.user.metadata.connections.likes.total > 10;
	const filterByDescr = regexp => res => regexp.test(res.name) || regexp.test(res.description);

	const filterResults = params => {
		return (data) => {
			let filteredData = data.data.data;
			if (params.userLikes) {
				filteredData = filteredData.filter(filterByLikes);
			}
			if (params.text) {
				filteredData = filteredData.filter(filterByDescr(new RegExp(params.text, 'gi')));
			}

			// length of the filtered data before applying the "slice"
			const filteredDataLength = filteredData.length;

			filteredData = filteredData.slice(0, (params.take || 0) + params.maxResults);
			return {
				data: filteredData,
				hasMore: filteredData.length < filteredDataLength
			};
		}
	};

	return {
		get(params = {}) {
			return $http.get(Config.videosAPI)
				.then(filterResults(params));
		}
	}
});