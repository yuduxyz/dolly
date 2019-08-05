import React from 'react'
import './component.less'

class nullComponent extends React.Component {
  constructor() {
    super()
    this.state = {}
  }


  componentDidMount() {}

  componentWillMount() {}

  componentWillReceiveProps() {}

  render () {
    return (
      <div>
        模板组件
      </div>
  )}
}

export default nullComponent
