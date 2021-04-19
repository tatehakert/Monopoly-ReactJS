import React from 'react';


class PropertyUpgrades extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            fullSets: []
        }
    }
  

    componentDidUpdate(prevProps){
        if(prevProps !== this.props){
            let players = this.props.players
            let ownedProperties = players[this.props.currentPlayer]["properties"]
            let boardPositions = this.props.boardPositions
            let fullSets = []

            for(let propertySet in ownedProperties){
                if(!(propertySet === "utilities" || propertySet === "railroads") && ownedProperties[propertySet].length > 0){
                    let fullSet = boardPositions[ownedProperties[propertySet][0]]["propertiesInSet"]
                    if(ownedProperties[propertySet].length === fullSet.length){ //owns all properties in set
                        fullSets.push(fullSet)
                    }
                }
            }
            this.setState({fullSets: fullSets})
            console.log(fullSets)
        }
    }

 
    

    render() {
      return (
        <div>
            {this.state.fullSets.length > 0 ? 
            <div>
                Property Upgrades:
                {this.state.fullSets.map(set => {
                    return(
                        <div className="">
                            {this.props.boardPositions[set[0]]["propertySet"]}:
                            {set.map(property => {
                                return(
                                    <div className="ml-3">
                                        {this.props.boardPositions[property]["name"]} ({this.props.boardPositions[property]["numHouses"]})
                                        <button className="btn btn-success p-1 m-1"
                                                onClick={() => this.props.buyHouse(property)}
                                                disabled={this.props.players[this.props.currentPlayer]["balance"] < this.props.boardPositions[property]["houseCost"] || this.props.boardPositions[property]["numHouses"] > 4}>
                                            {this.props.boardPositions[property]["numHouses"] < 4 ? 
                                                <div>
                                                    Buy House for ${this.props.boardPositions[property]["houseCost"]}
                                                </div>
                                            : this.props.boardPositions[property]["numHouses"] === 4 ?
                                                <div>
                                                    Buy Hotel for ${this.props.boardPositions[property]["houseCost"]}
                                                </div>
                                            : "fully upgraded"
                                            }
                                        </button>
                                    </div>
                                )   
                            })}
                        </div>)
                })}
            </div>
            
            : null}
        </div>
        )
    }


    componentDidMount(){
        let players = this.props.players
        let ownedProperties = players[this.props.currentPlayer]["properties"]
        let boardPositions = this.props.boardPositions
        let fullSets = []

        for(let propertySet in ownedProperties){
            if(!(propertySet === "utilities" || propertySet === "railroads") && ownedProperties[propertySet].length > 0){
                let fullSet = boardPositions[ownedProperties[propertySet][0]]["propertiesInSet"]
                if(ownedProperties[propertySet].length === fullSet.length){ //owns all properties in set
                    fullSets.push(fullSet)
                }
            }
        }
        this.setState({fullSets: fullSets})
        console.log(fullSets)
    }
  }
  
  export default PropertyUpgrades;