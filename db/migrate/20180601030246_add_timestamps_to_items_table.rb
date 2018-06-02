class AddTimestampsToItemsTable < ActiveRecord::Migration[5.1]
  def change
  	add_timestamps :items, null: false
  end
end
