class Block < ApplicationRecord
    # has_many :if_blocks
    # has_many :buttons, through: :if_blocks

    validates :name, presence: true
    validates :donation_type, presence: true
    validates :default, presence: true
    validates :multiplier, presence: true

end
