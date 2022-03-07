class CreateButtons < ActiveRecord::Migration[6.1]
  def change
    create_table :buttons do |t|
      t.integer :if_block_id
      t.integer :amount

      t.timestamps
    end
  end
end
