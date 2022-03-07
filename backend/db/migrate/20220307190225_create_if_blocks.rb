class CreateIfBlocks < ActiveRecord::Migration[6.1]
  def change
    create_table :if_blocks do |t|
      t.integer :block_id
      t.integer :minimum
      t.integer :maximum

      t.timestamps
    end
  end
end
