class Item < ApplicationRecord
	# extend FriendlyId

	has_many :purchases
	# friendly_id :name, :use => [:finders]

	def serialized_hash
		{
			id: id,
			name: name,
			description: description,
			price: price,
			created_at: created_at,
			updated_at: updated_at
		}
	end
end
