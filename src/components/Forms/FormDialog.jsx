import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputText from './InputText'

export default class FormDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      discription:""
    }
    this.inputName = this.inputName.bind(this)
    this.inputEmail = this.inputEmail.bind(this)
    this.inputDiscription = this.inputDiscription.bind(this)
  }

  inputName = (event) => {
    this.setState({name: event.target.value})
  }
  inputEmail = (event) => {
    this.setState({email: event.target.value})
  }
  inputDiscription = (event) => {
    this.setState({discription: event.target.value})
  }

  
  submitForm = () => {
    const name = this.state.name
    const email = this.state.email
    const discription = this.state.discription

    //バリデーションを入れるべき。
  }


  render() {
    return(
      <Dialog
        open={this.props.open}
        onClose={this.props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"お問い合わせフォーム"}</DialogTitle>
        <DialogContent>
          <InputText 
            label={"お名前{必須}"}
            multiline={false}
            rows={1}
            value={this.state.name}
            type={"text"}
            onChange={this.inputName}
          />
          <InputText 
            label={"メールアドレス{必須}"}
            multiline={false}
            rows={1}
            value={this.state.email}
            type={"email"}
            onChange={this.inputEmail}
          />
          <InputText 
            label={"お問い合わせ内容{必須}"}
            multiline={true}
            rows={5}
            value={this.state.description}
            type={"text"}
            onChange={this.inputDescription}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.handleClose} color="primary">
            キャンセル
          </Button>
          <Button onClick={this.submitForm} color="primary" autoFocus>
            送信する
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}