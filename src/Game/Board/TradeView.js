import React from 'react';


class TradeView extends React.Component {
    constructor(props){
        super(props);
    
        this.state = {
          creatingTrade: false
        }
    }
  

    componentDidUpdate(prevProps){
        if(prevProps !== this.props){
           
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
        <div>
            {this.state.creatingTrade ? 
                <div className="d-flex">
                    <div className="mx-1">
                        Trade with:
                        <select>
                            {Object.keys(this.props.players).map((pid) => {
                                if(pid != this.props.currentPlayer){
                                    return(
                                        <option value={pid}>{this.props.players[pid]["name"]}</option>
                                    )
                                }else{
                                    return(null)
                                }
                            })}
                        </select>
                    </div>
                    <div className="mx-1">
                        Give:
                        <select>
                            <option value={1}></option>
                        </select>
                    </div>
                    <div className="mx-1">
                        Take:
                        <select>
                            <option value={1}></option>
                        </select>
                    </div>
                </div>
             :
                <button className="btn btn-primary" onClick={() => this.setState({creatingTrade: true})}>New Trade</button>
            }
        </div>
        )
    }


    componentDidMount(){

    }
  }
  
  export default TradeView;