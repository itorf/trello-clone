TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({
	template: JST["boards/show"],
	
	initialize: function (){
		this.listenTo(this.model, "sync add", this.render)
		this.listenTo(this.model.lists(), "add", this.addList)
		this.listenTo(this.model.lists(), "remove", this.removeList)
		
		var newListView = new TrelloClone.Views.ListNew({
			model: this.model
		});
		
		this.addSubview(".new_list", newListView);
		
		this.model.lists().each(this.addList.bind(this));
	},
	
	events: {
		"click button#delete_board": "deleteBoard",
	},
	
	addList: function (list){
		var listView = new TrelloClone.Views.ListShow({
			model: list
		})
		this.addSubview(".lists", listView);
	},
	
	removeList: function (list){
		var subview = _.find(this.subviews('.lists'), function (subview) {
			return subview.model === list;
			}
		);
		
		this.removeSubview('.lists', subview);
	},
	
	render: function (){

		var renderedContent = this.template({
			board: this.model
		});
		this.$el.html(renderedContent);
		this.attachSubviews();
		
		return this;
	},
	
	deleteBoard: function () {
		this.model.destroy();
		Backbone.history.navigate('', { trigger: true });
	}
	
});