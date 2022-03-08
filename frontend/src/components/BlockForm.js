import React, { Component } from "react";

export default class BlockForm extends Component {
    
    state = {
        name: "",
        donation_type: ""
    }

    handleSubmit = event => {
        event.preventDefault()
        console.log("create block")
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
                Select One:
                Highest Previous Contribution: <input type="radio" id="hpc" name="donation_type" value="HighestPreviousContribution" checked={this.state.donation_type === "HighestPreviousContribution"} onChange={this.handleChange} />
                Latest Donation Amount: <input type="radio" id="lda" name="donation_type" value="LatestDonationAmount" checked={this.state.donation_type === "LatestDonationAmount"} onChange={this.handleChange} />
                <input type="submit" value="Create Block" />
            </form>
        </div>
        )
    }
}