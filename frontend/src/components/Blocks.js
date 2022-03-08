import React from "react"
import { connect } from "react-redux"
import { getBlocks } from "../redux/actions/blockActions"
import Block from "./Block"

class Blocks extends React.Component {
    
    componentDidMount() {
        console.log("did mount")
        this.props.getBlocks()
        console.log("after getBlocks()")
        console.log(this.props.blocks)
    }
    
    render() {
        return(
            <div>
                <h2>All Blocks</h2>
                {this.props.blocks.map(block => <Block block={block} />)}
            </div>
        )
    }
}

const mapStateToProps = ({ blocks }) => {
    return {
        blocks: blocks.all
    }
}

export default connect(mapStateToProps, { getBlocks })(Blocks)


