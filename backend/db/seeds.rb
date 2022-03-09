# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

blocks_list = {
    "block A" => {
      :donation_type => "HighestPreviousContribution",
      :multiplier => 1,
      :default => 10
    },
    "block B" => {
      :donation_type => "LatestDonationAmount",
      :multiplier => 2,
      :default => 25
    }
  }

blocks_list.each do |name, blocks_hash|
  p = Block.new
  p.name = name
  p.donation_type = blocks_hash[:donation_type]
  p.multiplier = blocks_hash[:multiplier]
  p.default = blocks_hash[:default]
  p.save
end
