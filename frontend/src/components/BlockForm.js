import React, { Component } from "react";
import { useForm, useFieldArray } from "react-hook-form";

export default class BlockForm extends Component {


    state = {
        name: "",
        donation_type: "",
        if_blocks: [
            {
                minimum: '',
                maximum: '',
                buttons: [
                    {
                        amount: ''
                    }
                ]
            }
        ]
    }

    handleSubmit = event => {
        event.preventDefault()
        console.log("create block")
    }

    handleNameChange = event => {
        console.log("changed")
        const {value, name} = event.target
        this.setState({
            [name]: value
        })
    }

    handleMinimumChange = event => {
        console.log("changed")
        this.setState({
            //  if_blocks: [...this.state.if_blocks, {
            //      minimum: event.target.value
            //  }]
             if_blocks: [...this.state.if_blocks].push({
                 minimum: event.target.value
             })
        })
    }
    


    render() {
        return(
        <div>
            <h2>Create a Button Block</h2>
            <form onSubmit={this.handleSubmit}>
                Name: <input type="text" value={this.state.name} onChange={this.handleNameChange} name="name"/>
                Select One:
                Highest Previous Contribution: <input type="radio" id="hpc" name="donation_type" value="HighestPreviousContribution" checked={this.state.donation_type === "HighestPreviousContribution"} onChange={this.handleChange} />
                Latest Donation Amount: <input type="radio" id="lda" name="donation_type" value="LatestDonationAmount" checked={this.state.donation_type === "LatestDonationAmount"} onChange={this.handleChange} />
                
                
                <br>
                </br>
                
                If Block: 
                Minimum Amount: <input type="number" onChange={this.handleMinimumChange} />
                

                <br>
                </br>
                <input type="submit" value="Create Block" />
            </form>
        </div>
        )
    }
}