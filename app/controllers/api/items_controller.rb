module Api
  class ItemsController < ApiController
    def create
      @items = Item.new(items_params)

      if @items.save
        render json: @items
      else
        render json: @items.errors.full_messages, status: :unprocessable_entity
      end
    end

    private

    def item_params
      params.require(:item).permit(:done, :title, :card_id)
    end
  end
end
