import React, { Component } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { Field, FieldArray, reduxForm } from 'redux-form'

const renderField = ({ input, label, type }) => (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} type={type} placeholder={label} />
      </div>
    </div>
  )

  // renderHobbies
  const renderButtons = ({ fields  }) => (
    <ul>
      <li>
        <button type="button" onClick={() => fields.push()}>
          Add Button
        </button>
      </li>
      {fields.map((button, index) => (
        <li key={index}>
          <button
            type="button"
            title="Remove Button"
            onClick={() => fields.remove(index)}
          />
          <Field
            name={button}
            type="text"
            component={renderField}
            label={`Button #${index + 1}`}
          />
        </li>
      ))}
    </ul>
  )

  // render Members
  const renderIfBlocks = ({ fields  }) => (
    <ul>
      <li>
        <button type="button" onClick={() => fields.push({})}>
          Add If Block
        </button>
      </li>
      {fields.map((ifBlock, index) => (
        <li key={index}>
          <button
            type="button"
            title="Remove If Block"
            onClick={() => fields.remove(index)}
          />
          <h4>If Block #{index + 1}</h4>
          <Field
            name={`${ifBlock}.minimum`}
            type="integer"
            component={renderField}
            label="Minimum"
          />
          <Field
            name={`${ifBlock}.maximum`}
            type="text"
            component={renderField}
            label="Maximum"
          />
          <FieldArray name={`${ifBlock}.buttons`} component={renderButtons} />
        </li>
      ))}
    </ul>
  )

  // state



  //field arrays form

  const BlockForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props
    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="name"
          type="text"
          component={renderField}
          label="Name"
        />
                Highest Previous Contribution: <input type="radio" id="hpc" name="donation_type" value="HighestPreviousContribution"  />
                Latest Donation Amount: <input type="radio" id="lda" name="donation_type" value="LatestDonationAmount" />
        <FieldArray name="ifBlocks" component={renderIfBlocks} />
        <div>
          <button type="submit" disabled={submitting}>
            Submit
          </button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>
            Clear Values
          </button>
        </div>
      </form>
    )
  }

  export default reduxForm({
    form: 'fieldArrays', // a unique identifier for this form
  })(BlockForm)
  

// export default class BlockForm extends Component {


//     state = {
//         name: "",
//         donation_type: "",
//         if_blocks: [
//             {
//                 minimum: '',
//                 maximum: '',
//                 buttons: [
//                     {
//                         amount: ''
//                     }
//                 ]
//             }
//         ]
//     }

//     handleSubmit = event => {
//         event.preventDefault()
//         console.log("create block")
//     }

//     handleNameChange = event => {
//         console.log("changed")
//         const {value, name} = event.target
//         this.setState({
//             [name]: value
//         })
//     }

//     handleMinimumChange = event => {
//         console.log("changed")
//         this.setState({
//             //  if_blocks: [...this.state.if_blocks, {
//             //      minimum: event.target.value
//             //  }]
//              if_blocks: [...this.state.if_blocks].push({
//                  minimum: event.target.value
//              })
//         })
//     }
    


//     render() {
//         return(
//         <div>
//             <h2>Create a Button Block</h2>
//             <form onSubmit={this.handleSubmit}>
//                 Name: <input type="text" value={this.state.name} onChange={this.handleNameChange} name="name"/>
//                 Select One:
//                 Highest Previous Contribution: <input type="radio" id="hpc" name="donation_type" value="HighestPreviousContribution" checked={this.state.donation_type === "HighestPreviousContribution"} onChange={this.handleChange} />
//                 Latest Donation Amount: <input type="radio" id="lda" name="donation_type" value="LatestDonationAmount" checked={this.state.donation_type === "LatestDonationAmount"} onChange={this.handleChange} />
                
                
//                 <br>
//                 </br>
                
//                 If Block: 
//                 Minimum Amount: <input type="number" onChange={this.handleMinimumChange} />
                

//                 <br>
//                 </br>
//                 <input type="submit" value="Create Block" />
//             </form>
//         </div>
//         )
//     }
// }