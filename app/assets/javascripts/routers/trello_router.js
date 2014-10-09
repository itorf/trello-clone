TrelloClone.Routers.TrelloRouter = Backbone.Router.extend({
	routes: {
		'': 'boardsIndex',
		'boards/new': 'boardsNew',
		'boards/:id': 'boardShow'
		
	},
	
	initialize: function (options){
		this.$rootEl = options.$rootEl;
		
	},
	
	boardsIndex: function () {
		
		TrelloClone.Collections.boards.fetch();
		
		var indexView = new TrelloClone.Views.BoardIndex({
			collection: TrelloClone.Collections.boards
		});
		
		this._swapView(indexView);
	},
	
	boardsNew: function () {
		
		var newView = new TrelloClone.Views.BoardNew();
		this._swapView(newView);
	},
	
	boardShow: function (id) {
		var board = TrelloClone.Collections.boards.getOrFetch(id);
		
		var showView = new TrelloClone.Views.BoardShow({
			model: board
		});
		
		this._swapView(showView);
	},
	
	
	_swapView: function (newView){

		this._currentView && this._currentView.remove();
		this._currentView = newView;
		this.$rootEl.append(this._currentView.render().$el);
	}
	
});