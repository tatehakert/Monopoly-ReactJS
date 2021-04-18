function SideView(props) {
    return (
      <div className="side-view-container w-100">
        {props.waitingToRoll ? 
            <>
                <h3><i className={props.players[props.currentPlayer]["iconClass"]} style={{color: props.players[props.currentPlayer]["iconColor"]}}></i> Player #{props.currentPlayer}'s turn!</h3>
                <button onClick={() => props.rollDice() }className="btn btn-primary btn-block">Roll!</button>
            </>
        : null}

        {props.newRoll ? 
            <>
                <h4>{props.lastRoll[0]} + {props.lastRoll[1]} = {props.lastRoll[0] + props.lastRoll[1]}</h4>
            </>
        : null}

        

        {Object.keys(props.players).map((key, index) => {
            return(
                <>
                <hr></hr>
                <div>
                    <h2><i className={props.players[key]["iconClass"]} style={{color: props.players[key]["iconColor"]}}></i> Player #{key}:</h2>
                    <h5>    Position: {props.players[key]["position"]}</h5>
                    <h5>    Balance: ${props.players[key]["balance"]}</h5>
                    {Object.keys(props.players[key]["properties"]).map((property, index) => {
                        return(
                            <div className="d-flex flex-row" key={`${key}-${property}`}>
                                <div>{property}:</div> 
                                {props.players[key]["properties"][property].map(item => {
                                    return(<div className="mx-1" key={`${key}-${property}-${item}`}>{item}</div>)
                                })}
                            </div>
                        )
                    })}
                </div>
                </>
            )
        })}
      </div>
    );
}
  
export default SideView;