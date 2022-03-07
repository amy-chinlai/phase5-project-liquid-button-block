class BlocksController < ApplicationController

    def index
        blocks = Block.all
        render json: blocks.to_json(only: [:name, :donation_type], include: [if_blocks: {only: [:minimum, :maximum], include: [buttons: {only: [:amount]}]}])
    end


end
