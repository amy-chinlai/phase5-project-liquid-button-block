class AddDefualtToBlocks < ActiveRecord::Migration[6.1]
  def change
    add_column :blocks, :default, :integer
  end
end
