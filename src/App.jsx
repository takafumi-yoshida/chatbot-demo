import React from 'react';
import './assets/styles/style.css';
import defaultDataset from "./dataset";
import {AnswersList, Chats} from "./components/index"

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      answers: [],            //回答コンポーネントに表示するデータ
      chats: [],              //チャットコンポーネントに表示するデータ
      currentId: "init",      // 現在の質問ID
      dataset: defaultDataset,            //質問と回答のデータセット
      open: false             //お問い合わせフォーム用のモーダルの開閉を管理
    }
    this.selectedAnswer = this.selectAnswer.bind(this)
  }

  displayNextQuestion = (nextQuestionId) => {
    const chats = this.state.chats
    chats.push({
      text: this.state.dataset[nextQuestionId].question,
      type: 'question'
    })

    this.setState({
      answers: this.state.dataset[nextQuestionId].answers,
      chats: chats,
      currentId: nextQuestionId
    })
  }

  selectAnswer = (selectedAnswer,nextQuestionId) => {
    switch(true) {
      case (nextQuestionId === 'init'):
        this.displayNextQuestion(nextQuestionId)
        break;
      default:
        const chat = {
          text: selectedAnswer,
          type: 'answer'
        }
        const chats = this.state.chats
        chats.push(chat)
        this.setState({answers: chats});

        this.displayNextQuestion(nextQuestionId)
        break;
    }
  }

  componentDidMount() {
   const initAnswer = "";
   this.selectAnswer(initAnswer,this.state.currentId);
  }

  render() {
    return (
      <div>
        <section className="c-section">
          <div className="c-box">
            <Chats chats={this.state.chats}/>
            <AnswersList answers={this.state.answers} select={this.selectAnswer}/>
          </div>
        </section>
      </div>
    );
  } 
}
