TrelloClone.Collections.Lists = Backbone.Collection.extend({
<<<<<<< HEAD
  comparator: 'ord',
  model: TrelloClone.Models.List,
  url: 'api/lists',

  initialize: function (models, options) {
    this.board = options.board;
  }
});
=======
	model: TrelloClone.Models.List,
	url: "api/lists",
	
	comparator: function (model) {
		return (model.ord);
	}
});
>>>>>>> skeleton
