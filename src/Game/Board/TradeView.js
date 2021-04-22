import React from 'react';


class TradeView extends React.Component {
    constructor(props){
        super(props);
    
        this.state = {
          creatingTrade: false,
          tradePartner: this.props.currentPlayer == 1 ? 2 : 1,
          propertyGive: null,
          giveValue: 0,
          propertyTake: null,
          takeValue: 0,

        }
    }
  

    changeTradePartner(pid){
        //let otherPropertyList = this.getUndevelopedPropertyList(pid)
        this.setState({
            tradePartner: pid,
        })
    }
    getUndevelopedPropertyList(pid){
        let list = []
        if(this.props.players[pid]){
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
        }
        

        console.log("undevelopedPropertyList: ", list)
        return list
    }

    executeAndMarkAsComplete(index){
        let pendingTrades = this.state.pendingTrades
        pendingTrades[index].tradeStatus = true
        this.props.executeTrade(pendingTrades[index])
        this.setState({pendingTrades: pendingTrades})
    }


    onClickSubmit(){
        let pendingTrades = this.state.pendingTrades || []

        let newTrade = {
            senderPID: this.props.currentPlayer,
            offeredProperty: this.state.propertyGive || null,
            offeredMoney: this.state.giveValue || 0,
            recipientPID: this.state.tradePartner,
            returnProperty: this.state.propertyTake,
            returnMoney: this.state.takeValue || 0,
            tradeStatus: "pending"
        }
        //pendingTrades.push(newTrade)

        if(this.props.players[this.state.tradePartner]["isABot"]){
            newTrade.tradeStatus = this.props.shouldAcceptTrade(newTrade)
            if(newTrade.tradeStatus === true){
                this.props.executeTrade(newTrade)
            }
        }

        pendingTrades.push(newTrade)

        this.setState({pendingTrades: pendingTrades, creatingTrade: false})
    }
    

    render() {
      return (
        <div>
            {this.state.creatingTrade ? 
            <div className="border p-2 rounded">
                <div className="d-flex justify-content-center mb-3">
                    <div>
                        Trade with:
                        <select value={this.state.tradePartner} 
                                onChange={(event) => this.setState({tradePartner: parseInt(event.target.value, 10)})}
                                className="ml-1">
                            {Object.keys(this.props.players).map((pid) => {
                                if(pid != this.props.currentPlayer){
                                    return( <option value={pid} key={`trade-partner-${pid}`}>{this.props.players[pid]["name"]}</option>)
                                }else{
                                    return(null)
                                }
                            })}
                        </select>
                        <hr/>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="col col-2 my-auto">Give:</div>
                    <div className="col col-6 my-auto">
                        <select value={this.state.propertyGive} 
                                onChange={(event) => this.setState({propertyGive: parseInt(event.target.value, 10)})}>
                            <option value={null} key={`undeveloped-properties-null`}>none</option>
                            {this.getUndevelopedPropertyList(this.props.currentPlayer).map((pos) => {
                                return(
                                    <option value={pos} key={`undeveloped-properties-${pos}`}>
                                        {this.props.boardPositions[pos]["name"]}
                                    </option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="col col-1 my-auto">+</div>
                    <div className="col col-3 my-auto">
                        <input type="number" 
                               value={this.state.giveValue} 
                               onChange={(event) => this.setState({giveValue: parseInt(event.target.value, 10)})}
                               style={{width: "70px"}}></input>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-2 my-auto">Take:</div>
                    <div className="col col-6 my-auto">
                        <select value={this.state.propertyTake} 
                                onChange={(event) => this.setState({propertyTake: parseInt(event.target.value, 10)})}
                                className="">
                                    <option value={null} key={`undeveloped-properties-take-null`}>none</option>
                            {this.getUndevelopedPropertyList(this.state.tradePartner).map((pos) => {
                                return(
                                    <option value={pos} key={`undeveloped-properties-take-${pos}`}>
                                        {this.props.boardPositions[pos]["name"]}
                                    </option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="col col-1 my-auto">+</div>
                    <div className="col col-3 my-auto">
                        <input type="number" 
                               value={this.state.takeValue} 
                               onChange={(event) => this.setState({takeValue: parseInt(event.target.value, 10)})}
                               style={{width: "70px"}}></input>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                  {!this.state.tradeSubmitted ? 
                    <button className="mt-2 btn btn-block btn-outline-success"
                            onClick={() => this.onClickSubmit()}>Submit trade</button>
                  : null}
                </div>
            </div>
             :
                <button className="btn btn-primary" onClick={() => this.setState({creatingTrade: true})}>New Trade</button>
            }

            {this.state.pendingTrades && this.state.pendingTrades.length > 0 ?
            <div>
                <hr/>
                {this.state.pendingTrades.map((trade, index) => {
                    return(
                        <div className="border rounded p-2" key={`trade-${index}`}>
                            <div className="d-flex justify-content-center">
                                <h5>  Trade with {this.props.players[trade.recipientPID]["name"]}: </h5>
                                
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col">
                                    <h6 className="font-weight-bold">Give:</h6>
                                    {trade.offeredProperty ? this.props.boardPositions[trade.offeredProperty]["name"] : "none"}
                                    {trade.offeredMoney ? ` + $${trade.offeredMoney}` : null}
                                </div>
                                <div className="col">
                                    <h6 className="font-weight-bold">Take:</h6>
                                    {trade.returnProperty ? this.props.boardPositions[trade.returnProperty]["name"] : "none"}
                                    {trade.returnMoney ? ` + $${trade.returnMoney}` : null}
                                </div>
                                <div className="col">
                                    <h6 className="font-weight-bold">Status:</h6>
                                    {trade.tradeStatus == "pending" ? 
                                        <button className="btn btn-success"
                                                onClick={() => this.executeAndMarkAsComplete(index)}>{`P${trade.recipientPID} click to accept`}</button>
                                    : trade.tradeStatus === true ? 
                                        <p>Accepted!</p>
                                    :   <p>Rejected</p>}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            : null}
        </div>
                    )
    }


    componentDidMount(){

    }
  }
  
  export default TradeView;