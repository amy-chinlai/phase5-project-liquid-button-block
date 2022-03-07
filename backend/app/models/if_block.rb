class IfBlock < ApplicationRecord
    belongs_to :block
    has_many :buttons
    accepts_nested_attributes_for :block
end
