TrelloClone.Collections.Cards = Backbone.Collection.extend({
	model: TrelloClone.Models.Card,
	url: 'api/cards',
	
	comparator: function (model){
		return (model.ord);
	}
});