
function Houses(props) {
    let list = []
    for(let i = 1; i <= props.propertyData["numHouses"]; i++){
      list.push("home")
    }
    if(props.propertyData["numHouses"] === 5){
      list = ["hotel"]
    }
    console.log(list)
    console.log(props.propertyData["numHouses"])
    return(
      <>
        {list.map((item, index) => {
            return(
          <i className={`m-1 ${item === "home" ? "fas fa-home" : "fas fa-building"}`} 
             key={`${props.propertyData["name"]}-${index}`}
             style={{fontSize: item === "home" ? 18 : 35}} ></i>
            )
        })}
      </>
    )
}
    
export default Houses;