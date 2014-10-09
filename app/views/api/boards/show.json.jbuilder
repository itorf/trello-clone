# write some jbuilder to return some json about a board
# it should include the board
#  - its lists
#    - the cards for each list

json.(@board, :id, :title)


<<<<<<< HEAD
json.lists @board.lists do |list|
  json.extract! list, :id, :title, :ord, :created_at, :updated_at

  json.cards list.cards do |card|
    json.extract! card, :id, :title, :ord, :created_at, :updated_at
  end
=======

json.lists @board.lists do |list|
	json.id list.id
	json.board_id list.board_id
	json.title list.title
	json.ord list.ord
	json.cards list.cards do |card|
		json.id card.id
		json.title card.title
		json.description card.description
		json.ord card.ord
		json.list_id card.list_id
	end
>>>>>>> skeleton
end
		
		


