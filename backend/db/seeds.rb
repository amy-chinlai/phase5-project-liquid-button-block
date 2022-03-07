# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

blocks_list = {
    "block A" => {
      :donation_type => "HighestPreviousContribution"
    },
    "block B" => {
      :donation_type => "LatestDonationAmount"
    }
  }

blocks_list.each do |name, blocks_hash|
  p = Block.new
  p.name = name
  p.donation_type = blocks_hash[:donation_type]
  p.save
end

if_blocks_list = {
    1 => {
        :min => 0,
        :max => 20,
        :block_id => 1
    },
    2 => {
        :min => 21,
        :max => 50,
        :block_id => 1
    },
    3 => {
        :min => 51,
        :max => 100,
        :block_id => 1
    },
    4 => {
        :min => 0,
        :max => 10,
        :block_id => 2
    },
    5 => {
        :min => 11,
        :max => 50,
        :block_id => 2
    }
}

if_blocks_list.each do |count, if_hash|
    p = IfBlock.new
    p.block_id = if_hash[:block_id]
    p.minimum = if_hash[:min]
    p.maximum = if_hash[:max]
    p.save
  end

buttons_list = {
    1 => {
      :amount => 5,
      :if_block_id => 1
    },
    2 => {
        :amount => 10,
        :if_block_id => 1
    },
    3 => {
        :amount => 15,
        :if_block_id => 1
    },
    4 => {
        :amount => 25,
        :if_block_id => 2
    },
    5 => {
        :amount => 30,
        :if_block_id => 2
    },
    6 => {
        :amount => 50,
        :if_block_id => 2
    },
    7 => {
        :amount => 75,
        :if_block_id => 3
    },
    8 => {
        :amount => 100,
        :if_block_id => 3
    },
    9 => {
        :amount => 150,
        :if_block_id => 3
    }, 
    10 => {
        :amount => 5,
        :if_block_id => 4
    },
    11 => {
        :amount => 10,
        :if_block_id => 4
    },
    12 => {
        :amount => 25,
        :if_block_id => 5
    },
    13 => {
        :amount => 50,
        :if_block_id => 5
    }
  }

buttons_list.each do |if_block_id, buttons_hash|
  p = Button.new
  p.if_block_id = buttons_hash[:if_block_id]
  p.amount = buttons_hash[:amount]
  p.save
end