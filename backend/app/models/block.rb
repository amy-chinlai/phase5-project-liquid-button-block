class Block < ApplicationRecord
    has_many :if_blocks
    has_many :buttons, through: if_blocks
end
