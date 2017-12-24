import React from "react";
import BotCard from "../components/BotCard";

const YourBotArmy = props => {
  console.log("YOUR BOT ARMY", props)
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {props.enlistedBots.map(bot => <BotCard bot={bot.bot}/>)}
        </div>
      </div>
    </div>
  );
};

export default YourBotArmy;
