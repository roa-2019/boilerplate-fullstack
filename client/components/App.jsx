import React from 'react'

import MyForm, {defaultData} from './MyForm'
import AttendanceLyric from './AttendanceLyric'

class App extends React.Component {
  state = { data: defaultData }
  updateData = (data) => {
    let {name, intro, onTime} = data
    this.setState({data: {name, intro, onTime}})
  }
  render () {
    return (
      <div className='app'>
        <MyForm onSave={this.updateData} />  
        <AttendanceLyric {...this.state.data} />
      </div>
    )
  }
}

export default App
