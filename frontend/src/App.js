import { Component } from "react";
import "./App.css";
import { connect, sendMsg } from "./api";
import Header from "./components/Header";
import ChatHistory from "./components/ChatHistory";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ChatHistory: []
    }
  }

  componentDidMount() {
    connect((msg) => {
      console.log("New Message");
      this.setState(prevState => ({
        ChatHistory: [...this.state.ChatHistory, msg]
      }))
      console.log(this.state);
    })
  }

  send() {
    console.log("yoyo");
    sendMsg("yoyo");
  }

  render() {
    return (
      <div className="App">
        <Header />
        <ChatHistory ChatHistory={this.state.ChatHistory} />
        <button onClick={this.send}>Hit</button>
      </div>
    );
  }
}

export default App;