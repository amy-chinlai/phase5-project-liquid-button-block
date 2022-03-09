class AddMultiplierToBlocks < ActiveRecord::Migration[6.1]
  def change
    add_column :blocks, :multiplier, :integer
  end
end
