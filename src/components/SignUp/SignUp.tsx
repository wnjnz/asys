import * as React from "react"
import { View, Text, TextInput } from "react-native"

export interface ISignupProps {}

export interface ISignupState {
  readonly firstName: string,
  readonly lastName: string,
  readonly email: string,
  readonly phone: string,
  readonly zipCode: string,
  readonly password: string,
  readonly passwordConf: string,
}

export default class SignUp extends React.Component<ISignupProps, ISignupState> {
  constructor(props: ISignupProps) {
    super(props)

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      zipCode: "",
      password: "",
      passwordConf: "",
    }
  }

  rendwer() {
    return (
      <View>
        <TextInput value={this.state.firstName} placeholder="Joe" />
        <TextInput value={this.state.lastName} placeholder="Smith" />
      </View>
    )
  }
}
