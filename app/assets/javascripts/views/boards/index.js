TrelloClone.Views.BoardIndex = Backbone.View.extend({
	template: JST["boards/index"],
	
	initialize: function () {
		this.listenTo(this.collection, "sync add", this.render)
	},


	render: function () {

		var renderedContent = this.template({
			boards: this.collection
		})
		
		this.$el.html(renderedContent);
		
		var newBoardView = new TrelloClone.Views.BoardNew();
		this.$el.append(newBoardView.render().$el);
		
		return this;
	}
})