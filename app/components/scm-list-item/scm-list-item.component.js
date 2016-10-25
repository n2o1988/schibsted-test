/**
 * Created by Lamberto on 24/10/2016.
 */
angular.module('scmTest')

.component('scmListItem', {
	templateUrl: 'components/scm-list-item/scm-list-item.component.html',
	bindings: {
		item: '<'
	},
	controller($sce) {
		const MAX_DESCR_PREVIEW_SIZE = 280;

		const getPlaceholderImage = (width, height) => `http://placehold.it/${width}x${height}`;
		const getImgBySize = (pictures, heightSize) => {
			let picturesArray = ((pictures || {}).sizes || []);
			const img = picturesArray.find(pic => pic.height === heightSize);
			return img || picturesArray[0] || {};
		};
		this.$onInit = () => {
			// User pics
			this.userPicSmall = getImgBySize(this.item.user.pictures, 30).link || getPlaceholderImage(30, 30);
			this.userPicMedium = getImgBySize(this.item.user.pictures, 75).link || getPlaceholderImage(75, 75);
			this.userPicLarge = getImgBySize(this.item.user.pictures, 100).link || getPlaceholderImage(100, 100);

			// Description
			this.shortDescr = (this.item.description || { length: 0 }).length > MAX_DESCR_PREVIEW_SIZE ?
				`${this.item.description.slice(0, MAX_DESCR_PREVIEW_SIZE)}...` : null;
			this.descrCollapsed = !!this.shortDescr;
			
			// Video preview pics
			this.videoPicSmall = getImgBySize(this.item.pictures, 75).link_with_play_button;
			this.videoPicLarge = getImgBySize(this.item.pictures, 150).link_with_play_button;
			
		};

		this.getEmbedHtml = () => $sce.trustAsHtml(this.item.embed.html);
	}
});