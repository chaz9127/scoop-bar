class CreatePurchases < ActiveRecord::Migration[5.1]
  def change
    create_table :purchases do |t|
      t.references :users, index: true, foreign_key: true
      t.references :items, index: true, foreign_key: true
      t.integer :net_cost
      
      t.timestamps
    end
  end
end
