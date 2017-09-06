import * as React from "react"
import { NavigationScreenProp } from "react-navigation"
import { View, Text, TextInput } from "react-native"

export interface ISignUpScreenProps {
  readonly navigation: NavigationScreenProp<number, string>
}

export interface ISignUpScreenState {
  readonly firstName: string
  readonly lastName: string
  readonly email: string
  readonly phone: string
  readonly zipCode: string
  readonly password: string
  readonly passwordConf: string
}

export class SignUpScreen extends React.Component<ISignUpScreenProps, ISignUpScreenState> {
  static navigationOptions = {
    title: "Signup",
  }

  constructor(props: ISignUpScreenProps) {
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

  public render() {
    return (
      <View>
        <TextInput value={this.state.firstName} placeholder="Joe" />
        <TextInput value={this.state.lastName} placeholder="Smith" />
      </View>
    )
  }
}
