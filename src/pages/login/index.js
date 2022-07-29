import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { LoginWrapper, LoginBox, Input, Button } from "./style";
import { actionCreators } from "./store/index";
import { Redirect } from "react-router-dom";

class Login extends PureComponent {
  render() {
    const { login } = this.props;
    if (!login) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input
              placeholder="账号或者邮箱"
              innerref={(c) => {
                this.account = c;
              }}
            ></Input>
            <Input
              placeholder="密码"
              type="password"
              innerref={(c) => {
                this.password = c;
              }}
            ></Input>
            <Button
              onClick={() => {
                this.props.handleLogin(this.account, this.password);
              }}
            >
              登录
            </Button>
          </LoginBox>
        </LoginWrapper>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}

const mapState = (state) => ({
  login: state.getIn(["login", "login"]),
});
const mapDispatch = (dispatch) => ({
  handleLogin: (account, password) => {
    dispatch(actionCreators.loginAction(account, password));
  },
});

export default connect(mapState, mapDispatch)(Login);
