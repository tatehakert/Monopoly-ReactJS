import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';
import PropertyUpgrades from './ProperyUpgrades';
import TradeView from './TradeView';
//import * from './../Cards';

class PositionModal extends React.Component {
    constructor(props){
        super(props);
        let rent = this.props.getRent()
        let pos = this.props.players[this.props.currentPlayer]["position"]
        let owner = this.props.boardPositions[pos]["ownedBy"]
        let isMine = owner === this.props.currentPlayer 
        let price = this.props.boardPositions[pos]["purchasePrice"] || null
        this.state = {
            cardWasExecuted: false,
            isABot: this.props.players[this.props.currentPlayer]["isABot"],
            position: pos,
            rentOwed: isMine ? 0 : rent,
            canPurchase: this.props.boardPositions[pos]["canPurchase"],
            purchasePrice: price,
            insufficientFunds: rent > 0 ? (rent > this.props.players[this.props.currentPlayer]["balance"]) : (price > this.props.players[this.props.currentPlayer]["balance"]),
            paymentSubmitted: false
        }
    }
    getPlayerIconClass(pid){
        return this.props.players[pid]["iconClass"];
    }
    getPlayerIconColor(pid){
        return this.props.players[pid]["iconColor"];
    }

    componentDidUpdate(prevProps){
        if(prevProps !== this.props){
            let rent = this.props.getRent()
            let pos = this.props.players[this.props.currentPlayer]["position"]
            let owner = this.props.boardPositions[pos]["ownedBy"]
            let isMine = owner === this.props.currentPlayer 
            let price = this.props.boardPositions[pos]["purchasePrice"] || null
            this.setState({
                position: pos,
                isABot: this.props.players[this.props.currentPlayer]["isABot"],
                rentOwed: isMine ? 0 : rent,
                canPurchase: this.props.boardPositions[pos]["canPurchase"],
                purchasePrice: price,
                insufficientFunds: rent > 0 ? (rent > this.props.players[this.props.currentPlayer]["balance"]) : (price > this.props.players[this.props.currentPlayer]["balance"]) 
            })
        }
        //this.getUndevelopedPropertyList(this.props.currentPlayer)
    }

    payAndContinue(){
        this.props.payRent()
        this.setState({paymentSubmitted: true})
    }
 
    
    processCard(){
        if(this.props.boardPositions[this.props.players[this.props.currentPlayer]["position"]]["role"] === "chance"){
            this.props.executeChanceCard(this.props.currentPlayer, this.props.recentChanceCard)
            this.setState({cardWasExecuted: true})
        }else{
            this.props.executeCommunityChestCard(this.props.currentPlayer, this.props.recentCommunityChestCard)
            this.setState({cardWasExecuted: true})
        }
    }

    getUndevelopedPropertyList(pid){
        let list = []
        for(let propertySet in this.props.players[pid]["properties"]){
            let workingList = []
            let startedDevelopmentOnSet = false
            for(let setIndex in this.props.players[pid]["properties"][propertySet]){
                workingList.push(this.props.players[pid]["properties"][propertySet][setIndex])
                if(this.props.boardPositions[this.props.players[pid]["properties"][propertySet][setIndex]]["numHouses"] &&
                   this.props.boardPositions[this.props.players[pid]["properties"][propertySet][setIndex]]["numHouses"] > 0){
                       startedDevelopmentOnSet = true
                   }
            }

            if(!startedDevelopmentOnSet){
                for(let index in workingList){
                    list.push(workingList[index])
                }
            }
        }

        console.log("undevelopedPropertyList: ", list)
        
    }

    render() {
      return (
        
        <Modal centered show={this.props.showModal} animation={false}>
            <Modal.Header>
                <Modal.Title>
                    <i className={`mr-1 ${this.props.players[this.props.currentPlayer]["iconClass"]}`} style={{color: this.props.players[this.props.currentPlayer]["iconColor"]}}></i>
                Player #{this.props.currentPlayer} landed at: 
                <br/>
                {this.props.boardPositions[this.props.players[this.props.currentPlayer]["position"]]["name"] ? 
                    this.props.boardPositions[this.props.players[this.props.currentPlayer]["position"]]["name"]
                : null}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                
                {/*Show chance card instruction*/}
                {this.props.boardPositions[this.props.players[this.props.currentPlayer]["position"]]["role"] === "chance" ?
                    <>
                    <h4>Chance Card:</h4>
                    <div className="chance-card p-2">
                        <div className="row mx-2">
                            <div className="col text-center pt-2 px-0 my-auto">
                                <h5>{this.props.recentChanceCard["instruction"]}</h5>
                            </div>
                            <div className="col px-0">
                                <img className="cardImg ml-1" height={180} src={`/Cards/${this.props.recentChanceCard['fileName']}`}></img>
                            </div>
                        </div>
                    </div>
                    {!this.state.cardWasExecuted ?
                    <div className="d-flex mt-2 justify-content-center">
                        <button className="btn btn-primary" 
                                onClick={() => this.processCard(this.props.currentPlayer, this.props.recentChanceCard)}>
                                    {["recieve", "recieveeveryplayer"].includes(this.props.recentChanceCard["action"]) ?
                                        "Collect"
                                    : ["pay", "repairs", "chairman"].includes(this.props.recentChanceCard["action"]) ?
                                        "Pay"
                                    : ["move", "movenearest", "go_back"].includes(this.props.recentChanceCard["action"]) ?
                                        "Move"
                                    : this.props.recentChanceCard["action"] === "jail" ?
                                      this.props.recentChanceCard["subaction"] === "go-to" ?
                                        "Go to Jail!"
                                      : "Collect card"
                                    : null}
                        </button>
                    </div>
                    : null}
                    </>
                :   (null)}
            
                
                
                {/*Show community chest card instruction*/}
                {this.props.boardPositions[this.props.players[this.props.currentPlayer]["position"]]["role"] === "community chest" ?
                    <>
                    <h4>Community Chest Card:</h4>
                    <div className="community-chest-card p-2">
                        <div className="row mx-2">
                            <div className="col text-center pt-2 px-0 my-auto">
                                <h5 className="">{this.props.recentCommunityChestCard["instruction"]}</h5>
                            </div>
                            <div className="col px-0 text-center">
                                <img className="cardImg ml-1" height={180} src={`/Cards/${this.props.recentCommunityChestCard['fileName']}`}></img>
                            </div>
                        </div>
                    </div>
                    {!this.state.cardWasExecuted ?
                    <div className="d-flex mt-2 justify-content-center">
                        <button className="btn btn-primary" 
                                onClick={() => this.processCard()}>
                                    {["recieve", "recieveeveryplayer"].includes(this.props.recentCommunityChestCard["action"]) ?
                                        "Collect"
                                    : ["pay", "repairs"].includes(this.props.recentCommunityChestCard["action"]) ?
                                        "Pay"
                                    : this.props.recentCommunityChestCard["action"] === "move" ?
                                        "Move"
                                    : this.props.recentCommunityChestCard["action"] === "jail" ?
                                      this.props.recentCommunityChestCard["subaction"] === "go-to" ?
                                        "Go to Jail!"
                                      : "Collect card"
                                    : null}
                        </button>
                    </div>
                    : null}
                    </>
                :   (null)}

                {/*If property, railroad, or utility: Show property details and owner*/}
                { ["property", "railroad", "utility"].includes(this.props.boardPositions[this.props.players[this.props.currentPlayer]["position"]]["role"]) ?
                    <>
                    <h4>Property Details:</h4>
                    <h5>Owned by: </h5>
                    { this.props.boardPositions[this.props.players[this.props.currentPlayer]["position"]]["ownedBy"] ? 
                        <i className={`mx-2 ${this.getPlayerIconClass(this.props.boardPositions[this.props.players[this.props.currentPlayer]["position"]]["ownedBy"])}`} 
                        style={{color: this.getPlayerIconColor(this.props.boardPositions[this.props.players[this.props.currentPlayer]["position"]]["ownedBy"])}}></i>
                    : this.props.boardPositions[this.props.players[this.props.currentPlayer]["position"]]["canPurchase"] ?
                        " Bank - For Sale!"
                    :   " Bank - Not for sale"}
                    </>
                :   (null)}
                
                
                <hr/>
                {!this.state.isABot ?
                    <>
                    <PropertyUpgrades currentPlayer={this.props.currentPlayer} 
                                      players={this.props.players} 
                                      boardPositions={this.props.boardPositions}
                                      buyHouse={(pos) => this.props.buyHouse(pos)}/>
                    <TradeView        currentPlayer={this.props.currentPlayer} 
                                      players={this.props.players} 
                                      boardPositions={this.props.boardPositions}
                                      shouldAcceptTrade={(trade) => this.props.shouldAcceptTrade(trade)}
                                      executeTrade={(trade) => this.props.executeTrade(trade)}/>
                    </>
                :
                    <div>
                        <ul>
                            {this.props.players[this.props.currentPlayer]["EVENTS"].map((event, index) => {
                                return(
                                    <li key={`event-${index}`} className="event-item">
                                        <p>
                                            {this.props.players[this.props.currentPlayer]["name"]}
                                            {event.type === "purchase" ? (
                                                event.subtype === "house" ? (
                                                    ` purchased a house for ${this.props.boardPositions[event.position]["name"]}`
                                                ) : event.subtype === "property" ? (
                                                    ` purchased ${this.props.boardPositions[event.position]["name"]} for $${this.props.boardPositions[event.position]["purchasePrice"]}`
                                                ) : ("error")
                                            ) : (
                                                event.type === "passOnPurchase" ? (
                                                    " passed on making a purchase"
                                                ) : (null)
                                            )}
                                        </p>
                                        

                                        
                                        

                                    </li>
                                )
                            })}
                        </ul>
                    </div>}
            </Modal.Body>
            <Modal.Footer>
                {["chance", "community chest"].includes(this.props.boardPositions[this.props.players[this.props.currentPlayer]["position"]]["role"]) 
                 && !this.state.cardWasExecuted ?
                 null
                 : 
                 <>
                 {!this.state.paymentSubmitted && this.state.rentOwed > 0 ? 
                    <>
                    {this.state.insufficientFunds ?
                            <p style={{color: "red"}}>* insufficient funds</p>
                    : null}
                    {this.props.players[this.props.currentPlayer]["isABot"] ?
                        <p style={{color: "red"}}>* Bot paid ${this.state.rentOwed} in rent</p>
                    : null}
                    <div>
                        {!this.props.players[this.props.currentPlayer]["isABot"] ?
                            <Button variant="danger" 
                                    disabled={this.state.insufficientFunds} 
                                    onClick={() => this.payAndContinue()}>
                                Pay ${this.state.rentOwed} in rent
                            </Button>
                        :
                            <Button variant="secondary" 
                                    disabled={this.state.insufficientFunds} 
                                    onClick={() => this.props.endTurn()}>
                                Next
                            </Button>
                        }
                    </div>
                    


                    {this.state.insufficientFunds ? 
                    <Button variant="danger" 
                            onClick={() => this.props.endGame()}>
                    End game
                    </Button>
                    : null}
                    </>
                : this.state.canPurchase && !this.state.isABot? 
                    <>
                    {this.state.insufficientFunds ?
                            <p style={{color: "red"}}>* insufficient funds</p>
                    : null}
                    <div>
                        <Button variant="success" 
                                disabled={this.state.insufficientFunds} 
                                onClick={() => this.props.purchaseProperty()}>
                            Purchase for ${this.state.purchasePrice}
                        </Button>
                    </div>
                    
                    <Button variant="primary" onClick={() => this.props.endTurn()}>
                        Next
                    </Button>
                    </>
                :
                    <Button variant="primary" onClick={() => this.props.endTurn()}>
                        Next
                    </Button>
                }
                 </>
                }
                
            </Modal.Footer>
            
        </Modal>
        )
    }


    componentDidMount(){

    }
  }
  
  export default PositionModal;