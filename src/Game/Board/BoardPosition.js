import Houses from './Houses';

function BoardPosition(props) {
    return (
      <div className={`board-position m-0 p-0 h-100 d-flex ${props.data["pos"] < 10 ? " flex-column bottomPos" 
                                             : props.data["pos"] < 20 ? " flex-row-reverse leftPos" 
                                             : props.data["pos"] < 30 ? " flex-column-reverse topPos" 
                                             : "flex-row rightPos"}`}>
          {props.data["role"] === "property" ? (
              <div className={`d-flex justify-content-center ${ (props.data["pos"] > 10 && props.data["pos"] < 20) || (props.data["pos"] > 30 && props.data["pos"] < 40) ? " flex-column " : " flex-row "} property-set ${props.data["propertySet"]}`}>
                  <Houses propertyData={props.data}/>
              </div>
          ) : null}
          

          <div className="text-center w-100">
            <p className="mx-1">{props.data.name}</p>
            <div className="text-center">
                {Object.keys(props.players).map((key, index) => {
                    if(props.players[key]["position"] === props.data["pos"]){
                        return(<i className={`mx-1 ${props.players[key]["iconClass"]}`} 
                                  style={{color: props.players[key]["iconColor"], fontSize: 25}}
                                  key={`player-${key}`}></i>);
                    }else{
                        return(null);
                    }
                })}
            </div>
          </div>

          
          
      </div>
    );
  }
  
  export default BoardPosition;