import React, {Component} from 'react'

export const defaultData = {
  intro: "",
  name: "",
  onTime: false
}

export default class MyForm extends Component {
  state = { data: defaultData }

  handleChange = (e) => {
    let {name, value} = e.target
    if (e.target.type === 'checkbox') {
      value = e.target.checked
    }

    this.setState({
      data: {
        ...this.state.data,
        [name]: value
      }
    })
  }

  submitForm = (e) => {
    this.props.onSave(this.state.data)
    e.preventDefault()
  }

  render() {
    let {intro, name, onTime} = this.state.data
    return  (
      <div>
        <h1>Attendance Lyrics</h1>
      <form onSubmit={this.submitForm}>
        <div>
          <label htmlFor='name' style={{display: 'block'}} >Name</label>
          <input type='text' name='name' value={name} onChange={this.handleChange}/>
        </div>
        <div>
          <label htmlFor='intro' style={{display: 'block'}} >Intro</label>
          <textarea name='intro' onChange={this.handleChange} value={intro} />
        </div>
        <div>
          <label htmlFor='onTime'>On Time</label>
          <input type='checkbox' name="onTime" checked={onTime} onChange={this.handleChange}/>
        </div>
        <input type='submit' value='save' />
      </form>
      </div>
    )
  }
}
