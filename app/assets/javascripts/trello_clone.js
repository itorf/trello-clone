window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Utils: {},
  initialize: function() {

		TrelloClone.Collections.boards = new TrelloClone.Collections.Boards() 
		
		new TrelloClone.Routers.TrelloRouter({
			"$rootEl": $("div#main")
		});
		Backbone.history.start();
	}
};

