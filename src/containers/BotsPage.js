import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import BotSpecs from "../components/BotSpecs";

class BotsPage extends React.Component {
	constructor(){
		super()
		this.state = {
			bots: [],
			enlistedBots: []
		}
	}

	 componentDidMount = () => {
	 	fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
	  	.then(res => res.json())
	  	.then(json => this.setState({
	  		bots: json
	  	}))
	 }

	 handleClick = (props) => {
	 	this.setState({
	 		enlistedBots: [...this.state.enlistedBots, props]
	 	})
	 }

  render() {
    return (
      <div>
        <YourBotArmy enlistedBots={this.state.enlistedBots}/>
        <BotCollection bots={this.state.bots} handleClick={this.handleClick}/>
      </div>
    );
  }
}

export default BotsPage;
