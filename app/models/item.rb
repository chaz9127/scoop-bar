class Item < ApplicationRecord
	# extend FriendlyId

	has_many :purchases
	# friendly_id :name, :use => [:finders]
end
