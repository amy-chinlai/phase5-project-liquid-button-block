class BlockSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :donation_type
end
