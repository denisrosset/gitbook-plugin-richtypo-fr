"use strict";

var richtypo = require('richtypo')
var rules = require('richtypo-rules-fr')

module.exports = {
    hooks: {
	page: function(page) {
	    page.content = richtypo.default(rules.default, page.content);
	    return page;
	}
    }
};
