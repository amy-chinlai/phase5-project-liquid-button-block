class BlocksController < ApplicationController

    def index
        blocks = Block.all
        render json: BlockSerializer.new(blocks)
    end

    # def show
    #     block = Block.find(params[:id])
    #     render json: BlockSerializer.new(block)
    # end

end
