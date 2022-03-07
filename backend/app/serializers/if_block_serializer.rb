class IfBlockSerializer
  include FastJsonapi::ObjectSerializer
  attributes :minimum, :maximum
  belongs_to :block
  accepts_nested_attributes_for :buttons
  accepts_nested_attributes_for :block
  # has_many :buttons
end
