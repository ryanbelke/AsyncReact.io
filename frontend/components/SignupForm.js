import React, { Component } from "react";
import { Input, Icon, Button, Spin, Form } from "antd";
import axios from "axios";

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formLoading: false,
      email: "",
      error: true
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });

    this.props.form.validateFields((error, values) => {
      if (error) {
        this.setState({ error: true });
      } else {
        this.setState({ error: false });
      }
    });
  };

  submit = e => {
    e.preventDefault();
    const { email, formLoading } = this.state;
    const url =
      process.env.NODE_ENV == "production"
        ? `https://asyncreact.herokuapp.com/mail`
        : `https://localhost:3000/mail`;

    this.setState({ formLoading: true });

    this.props.form.validateFields((error, values) => {
      if (!error) {
        setTimeout(() => {
          axios
            .post(url, { email })
            .then(res =>
              this.setState({
                email: "",
                message: res.message,
                formLoading: false
              })
            )
            .catch(err => this.setState({ message: err.message }));
        }, 1500);
      } else {
        this.setState({ error });
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Form layout="inline" onSubmit={this.submit}>
          <style jsx>
            {`
              .ant-form-explain {
                color: red;
              }
            `}
          </style>
          <Form.Item
            required={true}
            validateStatus="validating"
            hasFeedback={this.state.formLoading}
          >
            {getFieldDecorator("testEmail", {
              rules: [
                {
                  required: true,
                  pattern: new RegExp(
                    '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'
                  ),
                  message: "Not valid email!"
                }
              ]
            })(
              <Input
                onChange={this.onChange}
                setfieldsvalue={this.state.email}
                name="email"
                style={{ width: 300 }}
                prefix={
                  <Icon type="user-add" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                size="large"
                placeholder="enter your email"
              />
            )}
          </Form.Item>
          <Form.Item>
            <Button
              onClick={this.submit}
              htmlType="submit"
              style={{ width: 200 }}
              type="primary"
              size="large"
              disabled={this.state.error}
            >
              to stay updated
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Form.create({ name: "validate" })(SignupForm);
