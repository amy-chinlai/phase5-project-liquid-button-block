class BlocksController < ApplicationController

    def index
        blocks = Block.all
        render json: blocks.to_json(only: [:name, :donation_type, :multiplier, :default])
    end

    def create
        # binding.pry
        block = Block.new(block_params)
        if block.save 
            render json: block
        end
    end

    private

    def block_params
        params.require(:block).permit(:name, :donation_type, :multiplier, :default)
    end


end
