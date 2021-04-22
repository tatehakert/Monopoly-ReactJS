//import logo from './logo.svg';
import './App.css';
import Game from './Game';
import {Modal, Button} from 'react-bootstrap';
import React from 'react';

class App extends React.Component {
    constructor(props){
        super(props);
        let startingBalance = 1200
        this.state = {
            quitState: undefined,
            gameStarted: false,
            numPlayers: 2,
            startingBalance: startingBalance,
            iconChoices: ["fas fa-horse", 
                          "fab fa-accessible-icon", 
                          "fas fa-anchor",
                          "fas fa-baseball-ball",
                          "fas fa-basketball-ball",
                          "fas fa-beer",
                          "fab fa-bitcoin"],
            colorChoices: ["aqua", "black", "blue", "pink", "gray","grey", "green", 'lime', "maroon", "navy", 
                           'olive', "purple", "red", "silver", "teal", "white", "yellow"],
            players: {
              1: {
                  "isABot": false,
                  "EVENTS": [],
                  "name": "Player 1",
                  "position": 0,
                  "balance": startingBalance,
                  "in-jail": false,
                  "hasGetOutOfJailCard": false,
                  "properties": {
                      "utilities": [],
                      "railroads": [],
                      "purple": [],
                      "sky": [],
                      "pink": [],
                      "orange": [],
                      "red": [],
                      "yellow": [],
                      "green": [],
                      "blue": []
                  },
                  "iconClass": "fas fa-horse",
                  "iconColor": "red"
              },
              2:{
                "isABot": true,
                "EVENTS": [],
                "name": "Player 2",
                "position": 0,
                "balance": startingBalance,
                "in-jail": false,
                "hasGetOutOfJailCard": false,
                "properties": {
                    "utilities": [],
                    "railroads": [],
                    "purple": [],
                    "sky": [],
                    "pink": [],
                    "orange": [],
                    "red": [],
                    "yellow": [],
                    "green": [],
                    "blue": []
                },
                "iconClass": "fas fa-anchor",
                "iconColor": "blue"
              }
            }
        }
    }
    getPlayerIconClass(pid){
        return this.props.players[pid]["iconClass"];
    }
    getPlayerIconColor(pid){
        return this.props.players[pid]["iconColor"];
    }
    getQuitState(){
      return this.quitState
    }
    startGame(){
      this.setState({quitState: this.state})
      console.log(this.quitState)
      this.setState({gameStarted: true})
    }



    updateStartingBalance(newVal){
      let players = this.state.players

      for(let i = 1; i <= this.state.numPlayers; i++){
        players[i]["balance"] =  newVal
      }
      this.setState({players: players})
    }

    updateNumPlayers(newVal){
      let oldList = this.state.players
      let newList = {}
      //console.log("newVal", newVal)
      if(newVal > this.state.numPlayers){
        newList = oldList
        for(let i = this.state.numPlayers; i < newVal; i++){
          newList[i+1] = {
            "isABot": false,
            "EVENTS": [],
            "name": `Player ${i+1}`,
            "position": 0,
            "balance": this.state.startingBalance,
            "in-jail": false,
            "hasGetOutOfJailCard": false,
            "properties": {
                "utilities": [],
                "railroads": [],
                "purple": [],
                "sky": [],
                "pink": [],
                "orange": [],
                "red": [],
                "yellow": [],
                "green": [],
                "blue": []
            },
            "iconClass": "fas fa-horse",
            "iconColor": "red"
          }
        }
      }else if(newVal < this.state.numPlayers){
        for(let i = 1; i <= newVal; i++){
          newList[i] = oldList[i]
        }
      }

      this.setState({players: newList, stateUpdated: true, numPlayers: newVal, playerSelectingIcon: 1})
    }

    updatePlayerName(pid, newName){
      let players = this.state.players
      players[pid]["name"] = newName
      this.setState({players: players})
    }

    updatePlayerIcon(pid, newIcon){
      let players = this.state.players
      players[pid]["iconClass"] = newIcon
      this.setState({players: players})
    }

    updatePlayerIconColor(pid, newIconColor){
      let players = this.state.players
      players[pid]["iconColor"] = newIconColor
      this.setState({players: players})
    }
    
    openIconModal(pid){
      this.setState({
        playerSelectingIcon: pid,
        showIconModal: true,
      })
    }
    
    startingBalanceChanged(newVal){
      this.setState({startingBalance: newVal})
      this.updateStartingBalance(newVal)
    }

    toggleIsABot(pid){
      let players = this.state.players
      players[pid]["isABot"] = !players[pid]["isABot"]
      this.setState({players: players})
    }

    render() {
      return (
        <div className="app-container">
          <Modal centered show={this.state.showIconModal} animation={false}>
            <Modal.Header>
                <Modal.Title>
                    Select an icon:
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="row mx-4">
                  {this.state.iconChoices.map((icon,index) => 
                      <div key={`iconOption-${icon}`}
                           className={`col-2 p-3 text-center ${this.state.playerSelectingIcon && this.state.players[this.state.playerSelectingIcon]["iconClass"] === icon ? " border rounded" : ""}`}>
                          <i className={icon} 
                             style={{fontSize: 30,color: this.state.playerSelectingIcon ? this.state.players[this.state.playerSelectingIcon]["iconColor"] : "black"}}
                           onClick={() => this.updatePlayerIcon(this.state.playerSelectingIcon, icon)}></i>
                      </div>
                    
                  )}
                </div>

                <div className="row  justify-content-center">
                  {this.state.colorChoices.map((c,index) => 
                      <div className={`col-2 m-1 text-center rounded`} 
                           style={{backgroundColor: c, fontWeight: 800,color: c === "white" || c === "yellow" ? "black" : "white"}} 
                           onClick={() => this.updatePlayerIconColor(this.state.playerSelectingIcon, c)}
                           key={`color-choice-${c}`}>
                      {c}
                      </div>
                    
                  )}
                </div>
                
             
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={() => this.setState({showIconModal: false})}>
                  Close
              </Button>
            </Modal.Footer>
            
        </Modal>
            {this.state.gameStarted ?
              <Game players={this.state.players}></Game>
            :  
              <div className="d-flex justify-content-center mt-3">
                  <div className="single-flex-itemm mt-4 border p-3 rounded">
                    <div className="">
                      <div className="">
                        <label>
                          Number of Players:
                          <select className="mx-2" value={this.state.numPlayers} onChange={(event) => this.updateNumPlayers(event.target.value)}>
                            <option value={2} key={"numPlayers-2"}>2</option>
                            <option value={3} key={"numPlayers-3"}>3</option>
                            <option value={4} key={"numPlayers-4"}>4</option>
                          </select>
                        </label>
                      </div>

                      <div className="">  
                        <div className="input-group mb-3">
                          Starting balance:
                          <div className="input-group-prepend ml-4"><span className="input-group-text">$</span></div>
                          <input type="number" className="form-control" aria-label="Amount (to the nearest dollar)" value={this.state.startingBalance} onChange={(event) => this.startingBalanceChanged(event.target.value)}></input>
                        </div>
                      </div>
                        
                    </div>
                    
                    <div>
                      {Object.keys(this.state.players).map((key, index) => 
                        <div key={`player-${key}`}>
                          <hr/>
                          <div className="d-flex flex-row my-2">
                            
                            <div className="mx-2">
                              <label>
                                P{key} - Name:
                                <input value={this.state.players[key]["name"]} 
                                      onChange={(event) => this.updatePlayerName(key, event.target.value)}
                                      className="ml-2"></input>
                              </label>
                            </div>
                            <div className="mx-2">
                              <label>
                                Icon: <i className={this.state.players[key]["iconClass"]} style={{fontSize: 25, color: this.state.players[key]["iconColor"]}}></i>
                                <button className="btn btn-primary py-1 mx-2" onClick={() => this.openIconModal(key)}>edit</button>
                              </label>
                            </div>

                            <div className="form-check form-switch">
                              <input className="form-check-input" 
                                    type="checkbox" 
                                    id="flexSwitchCheckDefault" 
                                    onChange={() => this.toggleIsABot(key)} 
                                    checked={this.state.players[key]["isABot"]}></input>
                                    {/*disabled={key <= 1 ? true : false}></input> */}
                              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">is a bot</label>
                            </div>
                            
                            
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="text-center mt-3">
                      <button className="btn btn-primary " onClick={()  => this.setState({gameStarted: true})}>Start game</button>
                    </div>
                  </div>
      
                  
      
                
              </div>
            }
            <button onClick={() => {window.close();}} className="quitButton">X</button>

          </div>
          
        )
    }


    componentDidMount(){

    }
  }

  
  export default App;
