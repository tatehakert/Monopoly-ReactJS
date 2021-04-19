import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import PropertyUpgrades from './ProperyUpgrades';

class PositionModal extends React.Component {
    constructor(props){
        super(props);
        let rent = this.props.getRent()
        let pos = this.props.players[this.props.currentPlayer]["position"]
        let owner = this.props.boardPositions[pos]["ownedBy"]
        let isMine = owner === this.props.currentPlayer 
        let price = this.props.boardPositions[pos]["purchasePrice"] || null
        this.state = {
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
                rentOwed: isMine ? 0 : rent,
                canPurchase: this.props.boardPositions[pos]["canPurchase"],
                purchasePrice: price,
                insufficientFunds: rent > 0 ? (rent > this.props.players[this.props.currentPlayer]["balance"]) : (price > this.props.players[this.props.currentPlayer]["balance"]) 
            })
        }
    }

    payAndContinue(){
        this.props.payRent()
        this.setState({paymentSubmitted: true})
    }
 
    

    render() {
      return (
        
        <Modal centered show={this.props.showModal} animation={false}>
            <Modal.Header>
                <Modal.Title>
                    <i className={`mr-1 ${this.props.players[this.props.currentPlayer]["iconClass"]}`} style={{color: this.props.players[this.props.currentPlayer]["iconColor"]}}></i>
                Player #{this.props.currentPlayer} landed at: 
                <br/>
                {this.props.boardPositions[this.props.players[this.props.currentPlayer]["position"]]["name"]}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Property Details: <br/>
                Owned by: 
                { this.props.boardPositions[this.props.players[this.props.currentPlayer]["position"]]["ownedBy"] ? 
                <>
                    <i className={`mx-2 ${this.getPlayerIconClass(this.props.boardPositions[this.props.players[this.props.currentPlayer]["position"]]["ownedBy"])}`} 
                       style={{color: this.getPlayerIconColor(this.props.boardPositions[this.props.players[this.props.currentPlayer]["position"]]["ownedBy"])}}></i>
                </>
                : this.props.boardPositions[this.props.players[this.props.currentPlayer]["position"]]["canPurchase"] ?
                    " Bank - For Sale!"
                :   " Bank - Not for sale"}

                <hr/>
                <PropertyUpgrades currentPlayer={this.props.currentPlayer} 
                                  players={this.props.players} 
                                  boardPositions={this.props.boardPositions}
                                  buyHouse={(pos) => this.props.buyHouse(pos)}/>
            </Modal.Body>
            <Modal.Footer>
                {!this.state.paymentSubmitted && this.state.rentOwed > 0 ? 
                    <>
                    {this.state.insufficientFunds ?
                            <p style={{color: "red"}}>* insufficient funds</p>
                    : null}
                    <div>
                        <Button variant="danger" 
                                disabled={this.state.insufficientFunds} 
                                onClick={() => this.payAndContinue()}>
                            Pay ${this.state.rentOwed} in rent
                        </Button>
                    </div>
                    


                    {this.state.insufficientFunds ? 
                    <Button variant="danger" 
                            onClick={() => this.props.endGame()}>
                    End game
                    </Button>
                    : null}
                    </>
                : this.state.canPurchase ? 
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
            </Modal.Footer>
            
        </Modal>
        )
    }


    componentDidMount(){

    }
  }
  
  export default PositionModal;