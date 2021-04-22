
import React from 'react';

function TitleDeed(props) {
    if (props.propertyData["role"] == "property") {
        return (
            <div>
                &emsp;&emsp;TITLE DEED
                <br/>
                &emsp;{props.propertyData["name"]}
                <br/>
                &emsp;&emsp;&emsp;Rent ${props.propertyData["baseRent"]}
                <br/>
                With 1 House &emsp;&ensp;${Math.round(props.propertyData["baseRent"] * props.propertyData["rentMultiplier"][1])}
                <br/>
                With 2 Houses &emsp;${Math.round(props.propertyData["baseRent"] * props.propertyData["rentMultiplier"][2])}
                <br/>
                With 3 Houses &emsp;${Math.round(props.propertyData["baseRent"] * props.propertyData["rentMultiplier"][3])}
                <br/>
                With 4 Houses &emsp;${Math.round(props.propertyData["baseRent"] * props.propertyData["rentMultiplier"][4])}
                <br/>
                With Hotel &emsp;&emsp;&emsp;${Math.round(props.propertyData["baseRent"] * props.propertyData["rentMultiplier"][5])}
                <br/>
                Mortgage value &ensp;${props.propertyData["purchasePrice"] / 2}
                <br/>
                Houses cost ${props.propertyData["houseCost"]} each
                <br/>
                Hotels, ${props.propertyData["houseCost"]} plus 4 houses
                <br/>
                If a player owns ALL the Lots of any Color-Group, the rent is Doubled on Unimproved Lots in that group.
            </div>
        )
    }
        
    else if (props.propertyData["role"] == "railroad") {
        return (
            <div>
                {props.propertyData["name"]}
                <br/>
                Rent                    ${Math.round(props.propertyData["baseRent"] * props.propertyData["rentMultiplier"][1])}
                <br/>
                If 2 R.R.'s are owned &ensp;${Math.round(props.propertyData["baseRent"] * props.propertyData["rentMultiplier"][2])}
                <br/>
                If 3 "&emsp;&emsp;&emsp;"&emsp;&emsp;"&emsp;&emsp;${Math.round(props.propertyData["baseRent"] * props.propertyData["rentMultiplier"][3])}
                <br/>
                If 4 "&emsp;&emsp;&emsp;"&emsp;&emsp;"&emsp;&emsp;${Math.round(props.propertyData["baseRent"] * props.propertyData["rentMultiplier"][4])}
                <br/>
                Mortgage Value ${props.propertyData["purchasePrice"] / 2}
            </div>
        )
    }
    else if (props.propertyData["role"] == "chance") {
        return (
            <div>
                ?
                <br/>
                {props.propertyData["name"]}
            </div>
        )
    }
    else if (props.propertyData["role"] == "community chest") {
        return (
            <div>
                $
                <br/>
                {props.propertyData["name"]}
            </div>
        )
    }
    else if (props.propertyData["role"] == "utility") {
        return (
            <div>
                {props.propertyData["name"]}
                If one Utility is owned, rent is 4 times the amount shown on dice.
                <br/>
                <br/>
                If both Utilities are owned, rent is 10 times the amount shown on dice.
            </div>
        )
    }
    else if (props.propertyData["name"] == "Income Tax") {
        return (
            <div>
                {props.propertyData["name"]}
                <br/>
                •
                <br/>
                Pay 10% OR $200
            </div>
        )
    }
    else if (props.propertyData["name"] == "Luxury Tax") {
        return (
            <div>
                {props.propertyData["name"]}
                <br/>
                Pay $75
            </div>
        )
    }
    else
        return (
            <div>
                {props.propertyData["name"]}
            </div>
        )
      
  }

  
  export default TitleDeed;
