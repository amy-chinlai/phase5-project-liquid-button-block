class Block < ApplicationRecord
    has_many :if_blocks
    has_many :buttons, through: :if_blocks
    accepts_nested_attributes_for :if_blocks
end
