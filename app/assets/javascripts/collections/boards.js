TrelloClone.Collections.Boards = Backbone.Collection.extend({
	model: TrelloClone.Models.Board,
	url: "api/boards",
	
	getOrFetch: function (id) {

		var board;
		var that = this;
		
		if (board = this.get(id)){

			board.fetch();
		} else {
			board = new TrelloClone.Models.Board({id: id});
			board.fetch({
				success: function () {
					that.add(board);
				}
			});
		}
		

<<<<<<< HEAD
    return board;
  }
});

TrelloClone.Collections.boards = new TrelloClone.Collections.Boards
=======
		return board;
	}
});
>>>>>>> skeleton
