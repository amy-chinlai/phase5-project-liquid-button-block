import React, { Component } from "react";
import { createBlock } from "../redux/actions/blockActions"
import {connect} from "react-redux"
import Block from "./Block"

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
        <div className="col text-start form-group">
            <h2>Create a Button Block</h2>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    Name: <input className="form-control" type="text" value={this.state.name} onChange={this.handleChange} name="name"/>
                    <br></br>
                    Select One:<br></br>
                    Highest Previous Contribution: <input  className="form-check-input" type="radio" id="hpc" name="donation_type" value="HighestPreviousContribution" checked={this.state.donation_type === "HighestPreviousContribution"} onChange={this.handleChange} /><br></br>
                    Latest Donation Amount: <input  className="form-check-input" type="radio" id="lda" name="donation_type" value="LatestDonationAmount" checked={this.state.donation_type === "LatestDonationAmount"} onChange={this.handleChange} />
                    <br></br>
                    <br></br>
                    Default: <input  className="form-control" type="number" value={this.state.default} onChange={this.handleChange} name="default" />
                    Multiplier: <input  className="form-control" type="number" value={this.state.multiplier} onChange={this.handleChange} name="multiplier" />
                    <br>
                    </br>
                    <input className="btn btn-primary"type="submit" value="Create Block & Reset" />
                </div>
            </form>
            <div className="your-block">
                <h3>Your Block:</h3>
                <Block block={this.state} />
            </div>
        </div>
        )
    }
}

export default connect(null, { createBlock })(BlockForm)