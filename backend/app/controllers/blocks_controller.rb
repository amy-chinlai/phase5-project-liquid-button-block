class BlocksController < ApplicationController

    def index
        blocks = Block.all
        render json: blocks.to_json(only: [:name, :donation_type, :multiplier, :default])
    end


end
