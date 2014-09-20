TrelloClone.Views.ListShow = Backbone.CompositeView.extend({
	template: JST["lists/show"],
	
	initialize: function (){
		this.listenTo(this.model, "sync add", this.render);
		this.listenTo(this.model.cards(), "add", this.addCard);
		this.listenTo(this.model.cards(), "remove", this.removeCard);
		
		var newCardView = new TrelloClone.Views.CardNew({
			model: this.model
		})

		this.model.cards().each(this.addCard.bind(this));

		this.addSubview(".new_card", newCardView);
				
	},
	
	events: {
		"click button#delete_list": "deleteList"
	},
	
	addCard: function (card){
		var cardview = new TrelloClone.Views.CardShow({
			model: card
		})
		
		this.addSubview('.cards', cardview);
	},
	
	removeCard: function (card) {
		var subview = _.find(this.subviews('.cards'), function (subview){
				return subview.model === card;
			}
		);
		
		this.removeSubview('.cards', subview);
	},
	
	
	render: function (){
		var renderedContent = this.template({
			list: this.model
		})
		
		this.$el.html(renderedContent);
		this.attachSubviews();
		
		return this;
	},
	
	deleteList: function (event) {
		this.model.destroy();
	}
	
});