import React from 'react';
import './assets/styles/style.css';
import defaultDataset from "./dataset"

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
  }
  render() {
    return (
      <div>
        <section className="c-section">
          <div className="c-box">

          </div>
        </section>
      </div>
    );
  }
  
}
