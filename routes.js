'use strict';
var path = require('path');

module.exports = function (periodic) {
	// var themeController = require(path.join(__dirname, '../../../app/controller/theme'))(periodic),
	var itemController = require(path.join(__dirname, '../../../app/controller/item'))(periodic),
		themeRouter = periodic.express.Router();

	require('./scripts/setup')(periodic);

	// create new route to document items to post
	themeRouter.get('periodical/:id', itemController.loadFullItem, itemController.show);

	periodic.app.use(themeRouter);
};