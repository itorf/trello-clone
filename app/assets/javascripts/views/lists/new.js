TrelloClone.Views.ListNew = Backbone.View.extend({
	template: JST["lists/new"],
	
	events: {
		"submit form.new_list": "handleSubmit",
	},
	
	render: function (){
		var renderedContent = this.template({
			list: this.model
		})
		this.$el.html(renderedContent);
		return this;
	},

	handleSubmit: function (event){
		event.preventDefault();
		var that = this;

		var params = $(event.currentTarget).serializeJSON();
		params.list.board_id = this.model.id;
		params.list.ord = this.assignOrd();
		
		var newList = new TrelloClone.Models.List(params);
		
		debugger
		
		newList.save({}, {
			success: function () {
				that.model.lists().add(newList);
			}
		})
	},
	
	assignOrd: function () {
		if (this.model.lists().length === 0){
			return 1;
		} else {
			return this.model.lists().last().attributes.ord + 1;
		}
	}

})