class BlockSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :donation_type
  has_many :if_blocks
end
