function SideView(props) {
    return (
      <div className="side-view-container w-100">
        {props.waitingToRoll ? 
            <>
                <h3><i className={props.players[props.currentPlayer]["iconClass"]} style={{color: props.players[props.currentPlayer]["iconColor"]}}></i> 
                Player #{props.currentPlayer}'s turn!</h3>
            </>
        : null}

        {props.newRoll ? 
            <>
                <h4>Rolled: {props.lastRoll[0]} + {props.lastRoll[1]} = {props.lastRoll[0] + props.lastRoll[1]}</h4>
            </>
        : null}

        

        {Object.keys(props.players).map((key, index) => {
            return(
                <div key={`player-${key}`}>
                <hr></hr>
                <div>
                    <div className={`text-center p-1 rounded ${props.players[key]["in-jail"] ? "jail-outline": ""}`}>
                        <h2>
                            <i className={`mr-2 ${props.players[key]["iconClass"]}`} style={{color: props.players[key]["iconColor"]}}></i>
                            Player #{key}:
                        </h2>
                        {props.waitingToRoll && props.currentPlayer === index+1 ?
                            <button onClick={() => props.rollDice(index+1) }className="btn btn-primary btn-block">Roll!</button>
                        : null}
                    </div>
                    {props.players[key]["in-jail"] ?
                        <div className="text-center">
                            <p style={{color: "red"}}>in-jail</p>
                            {props.waitingToRoll && props.currentPlayer === index+1 ?
                                <div className="d-flex">
                                    <button className="btn btn-success"
                                            disabled={props.players[key]["balance"] < 50}
                                            onClick={() => props.payBail(key)}>Pay fine</button>
                                    <button className="btn btn-primary mx-1" 
                                            disabled={!props.players[key]["hasGetOutOfJailCard"]}>Use get-out-jail card</button>
                                </div>
                            : null}
                        </div>
                    : null}
                    <h5>    Position: {props.players[key]["position"]}</h5>
                    <h5>    Balance: ${props.players[key]["balance"]}</h5>
                    {Object.keys(props.players[key]["properties"]).map((propertySet, index) => {
                        return(
                            <div className="">
                                {props.players[key]["properties"][propertySet].map(item => {
                                    return(
                                        <div className="row" 
                                             key={`${key}-${propertySet}-${item}`}>
                                        
                                          <div className={`col col-1 ${propertySet}`} ></div>
                                          <div className={`col `}>
                                            {props.boardPositions[item]["name"]}
                                          </div>
                                        </div>
                                    )
                                })}
                                
                            </div>
                        )
                        // return(
                        //     <div key={`player-${key}-propertySet-${propertySet}`}>
                        //         { props.players[key]["properties"][propertySet].length > 0 ? //if they own properties in that property set --> print them
                                    
                        //             <div className="d-flex flex-column" key={`${key}-${propertySet}`}>
                        //                 <div>{propertySet}:</div> 
                        //                 {props.players[key]["properties"][propertySet].map(item => {
                        //                     return(<div className="mx-1" key={`${key}-${propertySet}-${item}`}>{props.boardPositions[item]["name"]}</div>)
                        //                 })}
                        //             </div>
                                    
                        //         :  null}
                        //     </div>
                        // )
                        
                    })}
                </div>
                </div>
            )
        })}
      </div>
    );
}
  
export default SideView;