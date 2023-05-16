import React, { PureComponent } from 'react'

interface IProps {
  name: string
  age?: number
}
interface IState {
  counter: number
}
class ClassDemo extends PureComponent<IProps, IState> {
  state = { counter: 9 }
  // constructor(props: IProps) {
  //   super(props)
  //   this.state = {
  //     counter: 9
  //   }
  // }
  render(): React.ReactNode {
    return (
      <div>
        class-demo
        {this.props.name}
        {this.state.counter}
      </div>
    )
  }
}

export default ClassDemo
