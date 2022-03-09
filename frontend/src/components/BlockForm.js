import React, { Component } from "react";
import { createBlock } from "../redux/actions/blockActions"
import {connect} from "react-redux"

class BlockForm extends Component {


    state = {
        name: "",
        donation_type: "",
        multiplier: "",
        default: ""
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.createBlock(this.state)
        console.log("create block")
        this.setState({
            name: "",
            donation_type: "",
            multiplier: "",
            default: ""
        })
    }

    handleChange = event => {
        console.log("changed")
        const {value, name} = event.target
        this.setState({
            [name]: value
        })
    }


    render() {
        return(
        <div>
            <h2>Create a Button Block</h2>
            <form onSubmit={this.handleSubmit}>
                Name: <input type="text" value={this.state.name} onChange={this.handleChange} name="name"/>
                <br></br>
                Select One:
                Highest Previous Contribution: <input type="radio" id="hpc" name="donation_type" value="HighestPreviousContribution" checked={this.state.donation_type === "HighestPreviousContribution"} onChange={this.handleChange} />
                Latest Donation Amount: <input type="radio" id="lda" name="donation_type" value="LatestDonationAmount" checked={this.state.donation_type === "LatestDonationAmount"} onChange={this.handleChange} />
                <br></br>
                Default: <input type="number" value={this.state.default} onChange={this.handleChange} name="default" />
                Multiplier: <input type="number" value={this.state.multiplier} onChange={this.handleChange} name="multiplier" />
                
                <br>
                </br>
                <input type="submit" value="Create Block" />
            </form>
        </div>
        )
    }
}

export default connect(null, { createBlock })(BlockForm)