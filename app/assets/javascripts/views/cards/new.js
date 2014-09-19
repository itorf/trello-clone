TrelloClone.Views.CardNew = Backbone.View.extend({
	template: JST["cards/new"],
	
	events: {
		"submit form.new_card": "handleSubmit",
	},
	
	handleSubmit: function (event) {
		event.preventDefault();
		var that = this;

		var params = $(event.currentTarget).serializeJSON().card;
		params.list_id = this.model.id;
		params.ord = this.assignOrd();
		
		debugger
		
		var newCard = new TrelloClone.Models.Card(params);
		
		newCard.save({}, {
			success: function () {
				that.model.cards().add(newCard);
			}
		})
	},
	
	assignOrd: function () {
		if (this.model.cards().length === 0){
			return 1;
		} else {
			return this.model.cards().last().attributes.ord + 1;
		}
	},

	render: function (){
		var renderedContent = this.template({
			card: this.model
		})
		
		this.$el.html(renderedContent);
		return this;
	}
})