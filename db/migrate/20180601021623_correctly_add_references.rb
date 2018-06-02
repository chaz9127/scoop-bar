class CorrectlyAddReferences < ActiveRecord::Migration[5.1]
  def change
  	remove_reference(:purchases, :users, index: true)
  	remove_reference(:purchases, :items, index: true)
  end
end
