TrelloClone.Views.BoardShow = Backbone.View.extend({
	template: JST["boards/show"],
	
	initialize: function (){
		this.listenTo(this.model, "sync add", this.render)
		this.listenTo(this.model.lists(), "add", this.render)
	},
	
	events: {
		"click button#delete_board": "deleteBoard"
	}
	
	render: function (){

		var renderedContent = this.template({
			board: this.model
		});
		this.$el.html(renderedContent);
		
		var that = this;
		this.model.lists().each(function (list){
			var listView = new TrelloClone.Views.ListShow({
				model: list
			})

			that.$el.append(listView.render().$el);
		})
		
		var newListView = new TrelloClone.Views.ListNew({
			model: this.model
		});
		this.$el.append(newListView.render().$el);
	
		return this;

	}
	
	deleteBoard: function () {
		
		
	}
	
});