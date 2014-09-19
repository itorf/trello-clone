TrelloClone.Views.BoardNew = Backbone.View.extend({
	template: JST["boards/new"],
	
	events: {
		"submit form#new_board": "handleSubmit"
	},
	
	render: function () {
		var renderedContent = this.template({
			board: this.model
		})
		
		this.$el.html(renderedContent);
		return this;
	},
	
	handleSubmit: function (event){
		event.preventDefault();
		var that = this;
		
		var params = $(event.currentTarget).serializeJSON();
		
		var newBoard = new TrelloClone.Models.Board(params);
		
		newBoard.save({}, {
			success: function () {
				TrelloClone.Collections.boards.add(newBoard);
				Backbone.history.navigate("boards/" + newBoard.id);
			}
		})
	}
	
})