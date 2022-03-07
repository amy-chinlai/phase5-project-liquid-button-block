class BlocksController < ApplicationController

    def index
        # options = {}
        # options[:include] = [:if_blocks]
        blocks = Block.all
        # render json: BlockSerializer.new(blocks)
        render json: blocks.to_json(only: [:name, :donation_type], include: [if_blocks: {only: [:minimum, :maximum], include: [buttons: {only: [:amount]}]}])
    end

    # def show
    #     block = Block.find(params[:id])
    #     render json: BlockSerializer.new(block)
    # end

end
