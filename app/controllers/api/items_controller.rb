module Api
  class ItemsController < Api::BaseController
    def show
      item = Item.find(params[:id])
      render json: { item: item.serialized_hash }, status: :ok
    end
  end
end