import MainBoard from './Board/MainBoard';
import React from 'react';
import SideView from './SideView/SideView';
import {Modal, Button} from 'react-bootstrap';
import PositionModal from './Board/PositionModal';

class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            numPlayers: 2,
            currentPlayer: 1,
            waitingToRoll: true,
            lastRoll: [1,1],
            consecutiveTurns: 0,
            newRoll: false,
            showModal: false,
            awaitingPurchaseDecision: false,
            players: {
                1: {
                    "position": 0,
                    "balance": 1200,
                    "in-jail": false,
                    "hasGetOutOfJailCard": false,
                    "properties": {
                        "utilities": [],
                        "railroads": [],
                        "purple": [],
                        "sky": [],
                        "pink": [],
                        "orange": [],
                        "red": [],
                        "yellow": [],
                        "green": [],
                        "blue": []
                    },
                    "iconClass": "fas fa-horse",
                    "iconColor": "red"
                },
                2: {
                    "position": 0,
                    "balance": 1200,
                    "in-jail": false,
                    "hasGetOutOfJailCard": false,
                    "properties": {
                        "utilities": [],
                        "railroads": [],
                        "purple": [],
                        "sky": [],
                        "pink": [],
                        "orange": [],
                        "red": [],
                        "yellow": [],
                        "green": [],
                        "blue": []
                    },
                    "iconClass": "fas fa-coffee",
                    "iconColor": "blue"
                }
            },
            boardPositions: {
                0: {
                    "pos": 0,
                    "name": "Start",
                    "role": null,
                    "propertySet": null,
                    "canPurchase": false,
                    "purchasePrice": null,
                    "hitCount": 0,
                },
                1: {
                    "pos": 1,
                    "name": "Mediter. Avenue",
                    "role": "property",
                    "propertySet": "purple",
                    "canPurchase": true,
                    "purchasePrice": 60,
                    "houseCost": 50,
                    "numHouses": 0,
                    "hitCount": 0,
                    "ownedBy": null,
                    "baseRent": 2,
                    "propertiesInSet": [1, 3],
                    "rentMultiplier": [1, 5, 15, 45, 80, 125],
                },
                2: {
                    "pos": 2,
                    "name": "Community Chest",
                    "role": "community chest",
                    "propertySet": null,
                    "canPurchase": false,
                    "purchasePrice": null,
                    "hitCount": 0,
                },
                3: {
                    "pos": 3,
                    "name": "Baltic Avenue",
                    "role": "property",
                    "propertySet": "purple",
                    "canPurchase": true,
                    "purchasePrice": 60,
                    "houseCost": 50,
                    "numHouses": 0,
                    "hitCount": 0,
                    "ownedBy": null,
                    "baseRent": 4,
                    "propertiesInSet": [1, 3],
                    "rentMultiplier": [1, 5, 15, 45, 80, 125]
                },
                4: {
                    "pos": 4,
                    "name": "Income Tax",
                    "role": "tax",
                    "propertySet": null,
                    "canPurchase": false,
                    "purchasePrice": null,
                    "hitCount": 0,
                    "ownedBy": null,
                },
                5: {
                    "pos": 5,
                    "name": "Reading Railroad",
                    "role": "railroad",
                    "propertySet": "railroads",
                    "canPurchase": true,
                    "purchasePrice": 200,
                    "hitCount": 0,
                    "ownedBy": null,
                    "baseRent": 25,
                    "propertiesInSet": [5, 15, 25, 35],
                    "rentMultiplier": [0, 1, 2, 4, 8]
                },
                6: {
                    "pos": 6,
                    "name": "Oriental Avenue",
                    "role": "property",
                    "propertySet": 'sky',
                    "canPurchase": true,
                    "purchasePrice": 100,
                    "houseCost": 50,
                    "numHouses": 0,
                    "hitCount": 0,
                    "ownedBy": null,
                    "baseRent": 6,
                    "propertiesInSet": [6, 8, 9],
                    "rentMultiplier": [1, 5, 15, 45, 66.66666667, 91.66666667]
                },
                7: {
                    "pos": 7,
                    "name": "Chance",
                    "role": "chance",
                    "propertySet": null,
                    "canPurchase": false,
                    "purchasePrice": null,
                    "hitCount": 0,
                    "ownedBy": null,
                },
                8: {
                    "pos": 8,
                    "name": "Vermont Avenue",
                    "role": "property",
                    "propertySet": 'sky',
                    "canPurchase": true,
                    "purchasePrice": 100,
                    "houseCost": 50,
                    "numHouses": 0,
                    "hitCount": 0,
                    "ownedBy": null,
                    "baseRent": 6,
                    "propertiesInSet": [6, 8, 9],
                    "rentMultiplier": [1, 5, 15, 45, 66.66666667, 91.66666667]
                },
                9: {
                    "pos": 9,
                    "name": "Connecticut Avenue",
                    "role": "property",
                    "propertySet": 'sky',
                    "canPurchase": true,
                    "purchasePrice": 120,
                    "houseCost": 50,
                    "numHouses": 0,
                    "hitCount": 0,
                    "ownedBy": null,
                    "baseRent": 8,
                    "propertiesInSet": [6, 8, 9],
                    "rentMultiplier": [1, 5, 12.5, 37.5, 56.25, 75]
                },
                10: {
                    "pos": 10,
                    "name": "Jail/Just Visiting",
                    "role": "jail",
                    "propertySet": null,
                    "canPurchase": false,
                    "purchasePrice": null,
                    "hitCount": 0,
                    "ownedBy": null,
                },
                11: {
                    "pos": 11,
                    "name": "St. Charles Place",
                    "role": "property",
                    "propertySet": "pink",
                    "canPurchase": true,
                    "purchasePrice": 140,
                    "houseCost": 100,
                    "numHouses": 0,
                    "hitCount": 0,
                    "ownedBy": null,
                    "baseRent": 10,
                    "propertiesInSet": [11, 13, 14],
                    "rentMultiplier": [1,5,15,45,62.5,75]
                },
                12: {
                    "pos": 12,
                    "name": "Electric Company",
                    "role": "utility",
                    "propertySet": "utilities",
                    "canPurchase": false,
                    "purchasePrice": 150,
                    "hitCount": 0,
                    "ownedBy": null,
                    "propertiesInSet": [12, 28],
                    "rentMultiplier": [0, 4, 10]
                },
                13: {
                    "pos": 13,
                    "name": "States Avenue",
                    "role": "property",
                    "propertySet": "pink",
                    "canPurchase": true,
                    "purchasePrice": 140,
                    "houseCost": 100,
                    "numHouses": 0,
                    "hitCount": 0,
                    "ownedBy": null,
                    "baseRent": 10,
                    "propertiesInSet": [11, 13, 14],
                    "rentMultiplier": [1,5,15,45,62.5,75]
                },
                14: {
                    "pos": 14,
                    "name": "Virginia Avenue",
                    "role": "property",
                    "propertySet": "pink",
                    "canPurchase": true,
                    "purchasePrice": 160,
                    "houseCost": 100,
                    "numHouses": 0,
                    "hitCount": 0,
                    "ownedBy": null,
                    "baseRent": 12,
                    "propertiesInSet": [11, 13, 14],
                    "rentMultiplier": [1,5,15,41.66666667,58.33333333,75]
                },
                15: {
                    "pos": 15,
                    "name": "Pennsylvania Railroad",
                    "role": "railroad",
                    "propertySet": "railroads",
                    "canPurchase": true,
                    "purchasePrice": 200,
                    "hitCount": 0,
                    "ownedBy": null,
                    "baseRent": 25,
                    "propertiesInSet": [5, 15, 25, 35],
                    "rentMultiplier": [0, 1, 2, 4, 8]
                },
                16: {
                    "pos": 16,
                    "name": "St. James Place",
                    "role": "property",
                    "propertySet": "orange",
                    "canPurchase": true,
                    "purchasePrice": 180,
                    "houseCost": 100,
                    "numHouses": 0,
                    "hitCount": 0,
                    "ownedBy": null,
                    "baseRent": 14,
                    "propertiesInSet": [16, 18, 19],
                    "rentMultiplier": [1, 5, 14.28571429, 39.28571429, 53.57142857, 67.85714286]
                },
                17: {
                    "pos": 17,
                    "name": "Community Chest",
                    "role": "community chest",
                    "propertySet": null,
                    "canPurchase": false,
                    "purchasePrice": null,
                    "hitCount": 0,
                    "ownedBy": null,
                },
                18: {
                    "pos": 18,
                    "name": "Tennessee Avenue",
                    "role": "property",
                    "propertySet": "orange",
                    "canPurchase": true,
                    "purchasePrice": 180,
                    "houseCost": 100,
                    "numHouses": 0,
                    "hitCount": 0,
                    "ownedBy": null,
                    "baseRent": 14,
                    "propertiesInSet": [16, 18, 19],
                    "rentMultiplier": [1, 5, 14.28571429, 39.28571429, 53.57142857, 67.85714286]
                },
                19: {
                    "pos": 19,
                    "name": "New York Avenue",
                    "role": "property",
                    "propertySet": "orange",
                    "canPurchase": true,
                    "purchasePrice": 200,
                    "houseCost": 100,
                    "numHouses": 0,
                    "hitCount": 0,
                    "ownedBy": null,
                    "baseRent": 16,
                    "propertiesInSet": [16, 18, 19],
                    "rentMultiplier": [1, 5, 13.75, 37.5, 50, 62.5]
                },
                20: {
                    "pos": 20,
                    "name": "Free Parking",
                    "role": null,
                    "propertySet": null,
                    "canPurchase": false,
                    "purchasePrice": null,
                    "hitCount": 0,
                    "ownedBy": null,
                },
                21: {
                    "pos": 21,
                    "name": "Kentucky Avenue",
                    "role": "property",
                    "propertySet": "red",
                    "canPurchase": true,
                    "purchasePrice": 220,
                    "houseCost": 150,
                    "numHouses": 0,
                    "hitCount": 0,
                    "ownedBy": null,
                    "baseRent": 18,
                    "propertiesInSet": [21, 23, 24],
                    "rentMultiplier": [1, 5, 13.88888889, 38.88888889, 48.61111111, 58.33333333]
                },
                22: {
                    "pos": 22,
                    "name": "Chance",
                    "role": "chance",
                    "propertySet": null,
                    "canPurchase": false,
                    "purchasePrice": null,
                    "hitCount": 0,
                    "ownedBy": null,
                },
                23: {
                    "pos": 23,
                    "name": "Indiana Avenue",
                    "role": "property",
                    "propertySet": "red",
                    "canPurchase": true,
                    "purchasePrice": 220,
                    "houseCost": 150,
                    "numHouses": 0,
                    "hitCount": 0,
                    "ownedBy": null,
                    "baseRent": 18,
                    "propertiesInSet": [21, 23, 24],
                    "rentMultiplier": [1, 5, 13.88888889, 38.88888889, 48.61111111, 58.33333333]
                },
                24: {
                    "pos": 24,
                    "name": "Illinois Avenue",
                    "role": "property",
                    "propertySet": "red",
                    "canPurchase": true,
                    "purchasePrice": 240,
                    "houseCost": 150,
                    "numHouses": 0,
                    "hitCount": 0,
                    "ownedBy": null,
                    "baseRent": 20,
                    "propertiesInSet": [21, 23, 24],
                    "rentMultiplier": [1, 5	, 15, 37.5, 46.25, 55]
                },
                25: {
                    "pos": 25,
                    "name": "B & O Railroad",
                    "role": "railroad",
                    "propertySet": "railroads",
                    "canPurchase": true,
                    "purchasePrice": 200,
                    "hitCount": 0,
                    "ownedBy": null,
                    "baseRent": 25,
                    "propertiesInSet": [5, 15, 25, 35],
                    "rentMultiplier": [0, 1, 2, 4, 8]
                },
                26: {
                    "pos": 26,
                    "name": "Atlantic Avenue",
                    "role": "property",
                    "propertySet": "yellow",
                    "canPurchase": true,
                    "purchasePrice": 260,
                    "houseCost": 150,
                    "numHouses": 0,
                    "hitCount": 0,
                    "ownedBy": null,
                    "baseRent": 22,
                    "propertiesInSet": [26, 27, 29],
                    "rentMultiplier": [1, 5, 15, 36.36363636, 44.31818182, 52.27272727]
                },
                27: {
                    "pos": 27,
                    "name": "Ventnor Avenue",
                    "role": "property",
                    "propertySet": "yellow",
                    "canPurchase": true,
                    "purchasePrice": 260,
                    "houseCost": 150,
                    "numHouses": 0,
                    "hitCount": 0,
                    "ownedBy": null,
                    "baseRent": 22,
                    "propertiesInSet": [26, 27, 29],
                    "rentMultiplier": [1, 5, 15, 36.36363636, 44.31818182, 52.27272727]
                },
                28: {
                    "pos": 28,
                    "name": "Water Works",
                    "role": "utility",
                    "propertySet": "utilities",
                    "canPurchase": true,
                    "purchasePrice": 150,
                    "hitCount": 0,
                    "ownedBy": null,
                    "propertiesInSet": [12, 28],
                    "rentMultiplier": [0, 4, 10]
                },
                29: {
                    "pos": 29,
                    "name": "Marvin Gardens",
                    "role": "property",
                    "propertySet": "yellow",
                    "canPurchase": true,
                    "purchasePrice": 280,
                    "houseCost": 150,
                    "numHouses": 0,
                    "hitCount": 0,
                    "ownedBy": null,
                    "baseRent": 24,
                    "propertiesInSet": [26, 27, 29],
                    "rentMultiplier": [1, 5, 15, 35.41666667, 42.70833333, 50]
                },
                30: {
                    "pos": 30,
                    "name": "Go To Jail!",
                    "role": "send to jail",
                    "propertySet": null,
                    "canPurchase": false,
                    "purchasePrice": null,
                    "hitCount": 0,
                    "ownedBy": null,
                },
                31: {
                    "pos": 31,
                    "name": "Pacific Avenue",
                    "role": "property",
                    "propertySet": "green",
                    "canPurchase": true,
                    "purchasePrice": 300,
                    "houseCost": 200,
                    "numHouses": 0,
                    "hitCount": 0,
                    "ownedBy": null,
                    "baseRent": 26,
                    "propertiesInSet": [31, 32, 34],
                    "rentMultiplier": [1, 5, 15, 34.61538462, 42.30769231, 49.03846154]
                },
                32: {
                    "pos": 32,
                    "name": "North Carolina Avenue",
                    "role": "property",
                    "propertySet": "green",
                    "canPurchase": true,
                    "purchasePrice": 300,
                    "houseCost": 200,
                    "numHouses": 0,
                    "hitCount": 0,
                    "ownedBy": null,
                    "baseRent": 26,
                    "propertiesInSet": [31, 32, 34],
                    "rentMultiplier": [1, 5, 15, 34.61538462, 42.30769231, 49.03846154]
                },
                33: {
                    "pos": 33,
                    "name": "Community Chest",
                    "role": null,
                    "propertySet": null,
                    "canPurchase": false,
                    "purchasePrice": null,
                    "hitCount": 0,
                    "ownedBy": null,
                },
                34: {
                    "pos": 34,
                    "name": "Penisylvania Avenue",
                    "role": "property",
                    "propertySet": "green",
                    "canPurchase": true,
                    "purchasePrice": 320,
                    "houseCost": 200,
                    "numHouses": 0,
                    "hitCount": 0,
                    "ownedBy": null,
                    "baseRent": 28,
                    "propertiesInSet": [31, 32, 34],
                    "rentMultiplier": [1, 5.357142857, 16.07142857, 35.71428571, 42.85714286, 50]
                },
                35: {
                    "pos": 35,
                    "name": "Short Line",
                    "role": "railroad",
                    "propertySet": "railroads",
                    "canPurchase": true,
                    "purchasePrice": 200,
                    "hitCount": 0,
                    "ownedBy": null,
                    "baseRent": 25,
                    "propertiesInSet": [5, 15, 25, 35],
                    "rentMultiplier": [0, 1, 2, 4, 8]
                },
                36: {
                    "pos": 36,
                    "name": "Chance",
                    "role": "chance",
                    "propertySet": null,
                    "canPurchase": false,
                    "purchasePrice": null,
                    "hitCount": 0,
                    "ownedBy": null,
                },
                37: {
                    "pos": 37,
                    "name": "Park Place",
                    "role": "property",
                    "propertySet": "blue",
                    "canPurchase": true,
                    "purchasePrice": 350,
                    "houseCost": 200,
                    "numHouses": 0,
                    "hitCount": 0,
                    "ownedBy": null,
                    "baseRent": 35,
                    "propertiesInSet": [37, 39],
                    "rentMultiplier": [1, 5, 14.28571429, 31.42857143, 37.14285714, 42.85714286]
                },
                38: {
                    "pos": 38,
                    "name": "Luxury Tax",
                    "role": "tax",
                    "propertySet": null,
                    "canPurchase": false,
                    "purchasePrice": null,
                    "hitCount": 0,
                    "ownedBy": null,
                },
                39: {
                    "pos": 39,
                    "name": "Boardwalk",
                    "role": "property",
                    "propertySet": "blue",
                    "canPurchase": true,
                    "purchasePrice": 400,
                    "houseCost": 200,
                    "numHouses": 0,
                    "hitCount": 0,
                    "ownedBy": null,
                    "baseRent": 50,
                    "propertiesInSet": [37, 39],
                    "rentMultiplier": [1, 3.5, 10, 22, 26, 30]
                }
            }
        }
    }

    toggleModal(){
        this.setState({showModal: !this.state.showModal})
    }

    rollDice(){
        let d1 = Math.floor(Math.random() * 6) + 1
        let d2 = Math.floor(Math.random() * 6) + 1
        let dicePair = [d1, d2]
        let players = this.state.players
        let consecutiveTurns = this.state.consecutiveTurns
        consecutiveTurns+= 1
        this.setState({ newRoll: true, lastRoll: dicePair, consecutiveTurns: consecutiveTurns, waitingToRoll: false})
        if(! players[this.state.currentPlayer]["in-jail"]){
            this.movePlayer(dicePair)
        }else{
            if(d1 === d2){
                players[this.state.currentPlayer]["in-jail"] = false
                this.setState({
                    players: players,
                    rollMessage: "rolled doubles and is released from jail!"
                })
            }else{
                this.setState({
                    rollMessage: "Sorry! You must roll doubles to be released from jail!"
                })
            }
        }
        this.setState({showModal: true})
        
    }

    endTurn(){
        if(this.state.lastRoll[0] === this.state.lastRoll[1] && this.state.consecutiveTurns < 3){
            console.log("Player gets to roll again")
            this.setState({
                waitingToRoll: true,
                newRoll: false,
                awaitingPurchaseDecision: false,
                consecutiveTurns: 0,
                lastRoll: [0,0],
                showModal: false
            })
        }else{
            console.log("ending turn")
            let currentPlayer = this.state.currentPlayer
            let nextPlayer = currentPlayer + 1
            if(nextPlayer > this.state.numPlayers){
                nextPlayer = 1
            }
            this.setState({
                currentPlayer: nextPlayer,
                waitingToRoll: true,
                newRoll: false,
                awaitingPurchaseDecision: false,
                consecutiveTurns: 0,
                lastRoll: [0,0],
                showModal: false
            })
        }
        
    }

    getRentPrice(position, diceTotal){
        let owner = this.state.boardPositions[position]["ownedBy"]
        let propertiesInSet = this.state.boardPositions[position]["propertiesInSet"]
        let numOwned = 0
        let rentOwed = 0
        if(owner){
            //console.log("propertiesInSet.length: ", propertiesInSet.length)
            for(let index in propertiesInSet){
                //console.log(index)
                if(this.state.boardPositions[propertiesInSet[index]]["ownedBy"] === owner){
                    numOwned = numOwned + 1
                }   
            }
    
            if(position === 12 || position === 28){ //utilities
                //console.log("owner: ", owner)
                //console.log("diceTotal: ", diceTotal)
                //console.log("numOwned: ", numOwned)
                rentOwed = diceTotal * this.state.boardPositions[position]["rentMultiplier"][numOwned]
                //console.log("rentOwed: ", rentOwed)
            }else if(position === 5 || position === 15 || position === 25 || position === 35){  //#railroads
                rentOwed = this.state.boardPositions[position]["baseRent"] * this.state.boardPositions[position]["rentMultiplier"][numOwned]
            }else if(numOwned === propertiesInSet.length){ //# if all properties in the set are owned
                if(this.state.boardPositions[position]["numHouses"] > 0){
                    rentOwed = this.state.boardPositions[position]["baseRent"] * this.state.boardPositions[position]["rentMultiplier"][numOwned]
                }else{
                    rentOwed = this.state.boardPositions[position]["baseRent"] * 2
                }
            }else{
                rentOwed = this.state.boardPositions[position]["baseRent"] 
            }
        }
        //console.log("rent owed: ", rentOwed)
        
        return Math.round(rentOwed)
    }

    makePropertyPurchaseDecision(){
        let currentPlayer = this.state.currentPlayer
        let position = this.state.players[currentPlayer]["position"]
        let players = this.state.players
        let boardPositions = this.state.boardPositions

        if(boardPositions[position]["canPurchase"]){
            if(players[currentPlayer]["balance"] > 4*boardPositions[position]["purchasePrice"]){
                console.log("Player #", currentPlayer, " is purchasing ", boardPositions[position]["name"]," --> pay ", boardPositions[position]["purchasePrice"])
                players[currentPlayer]["balance"] -= boardPositions[position]["purchasePrice"]
                boardPositions[position]["canPurchase"] = false
                boardPositions[position]["ownedBy"] = currentPlayer
                players[currentPlayer]["properties"][boardPositions[position]["propertySet"]].push(position)
            }
        }
    }

    buyHouse(pos){
        console.log("buying house for pos: ", pos)
        let boardPositions = this.state.boardPositions
        let players = this.state.players

        boardPositions[pos]["numHouses"] = boardPositions[pos]["numHouses"] + 1
        players[this.state.currentPlayer]["balance"] = players[this.state.currentPlayer]["balance"] - boardPositions[pos]["houseCost"]

        this.setState({boardPositions: boardPositions, players: players})
    }

    makeHomePurchaseDecision(){
        //check which properties are currently owned and decide to purchase houses:
        let ownedProperties = this.state.players[this.state.currentPlayer]["properties"]
        let fullSets = []
        let boardPositions = this.state.boardPositions
        let players = this.state.players

        for(let propertySet in ownedProperties){
            if(!(propertySet === "utilities" || propertySet === "railroads") && ownedProperties[propertySet].length > 0){
                let fullSet = boardPositions[ownedProperties[propertySet][0]]["propertiesInSet"]
                if(ownedProperties[propertySet].length === fullSet.length){ //owns all properties in set
                    fullSets.push(fullSet)
                }
            }
        }

        for(let s in fullSets){
            for(let pos in s){
                if(boardPositions[pos]["numHouses"] < 5 && players[this.state.currentPlayer]["balance"] > (2.5 * boardPositions[pos]["houseCost"])){ //buy a house
                    console.log("Player #", this.state.currentPlayer, " bought a house for: ", boardPositions[pos]["name"])
                    players[this.state.currentPlayer]["balance"] -= boardPositions[pos]["houseCost"]
                    boardPositions[pos]["numHouses"] += 1
                    this.setState({boardPositions: boardPositions, players: players})
                }
            }
        }
    }

    //make a pay rent function: no params, current user pays RENT to the owner of on their current position
    //make a pay tax function: no params, current user pays $100 in tax


    payRentIfOwed(dicePair){
        //console.log("paying rent if owed")
        let players = this.state.players
        let boardPositions = this.state.boardPositions
        let position = players[this.state.currentPlayer]["position"]
        let rentPrice = 0
    
        if(boardPositions[position]["role"] === "utility" || boardPositions[position]["role"] === "railroad" || boardPositions[position]["role"] === "property"){
     
            let propertyOwner = boardPositions[position]["ownedBy"]
            if(boardPositions[position]["ownedBy"] && boardPositions[position]["ownedBy"] !== this.state.currentPlayer){  //if there is an owner and it is not the player
                //print("Player #", pid, " owes rent -->")
                console.log("player owes rent!")
                rentPrice = this.getRentPrice(players[this.state.currentPlayer]["position"], dicePair[0]+dicePair[1])
                if(rentPrice > 0){
                    console.log("Player #", this.state.currentPlayer, " pays $", rentPrice," in rent at ", boardPositions[position]["name"])
                    players[this.state.currentPlayer]["balance"] = players[this.state.currentPlayer]["balance"] - rentPrice
                    players[boardPositions[position]["ownedBy"]]["balance"] = players[boardPositions[position]["ownedBy"]]["balance"] + rentPrice
                }
            }
        }else if(boardPositions[position]["role"] === "tax"){
            console.log("Player #", this.state.currentPlayer, " owes taxes --> pay $100")
            players[this.state.currentPlayer]["balance"] -= 100
        }
        
        if(players[this.state.currentPlayer]["balance"] < 0){
            console.log("out of money!")
        }

        this.setState({players: players})
        //this.makePropertyPurchaseDecision()
        //this.makeHomePurchaseDecision()
        if(dicePair[0] !== dicePair[1] || players[this.state.currentPlayer]["in-jail"] || this.state.consecutiveTurns >= 3){
            this.endTurn()
        }
        

    }

    makePropertyPurchase(){
        let pid = this.state.currentPlayer
        let position = this.state.players[pid]["position"]
        let boardPositions = this.state.boardPositions
        let players = this.state.players
        players[pid]["balance"] -= boardPositions[position]["purchasePrice"]
        boardPositions[position]["canPurchase"] = false
        boardPositions[position]["ownedBy"] = pid
        players[pid]["properties"][boardPositions[position]["propertySet"]].push(position)
        this.setState({boardPositions: boardPositions, players: players})
    }

    movePlayer(dicePair){
        let players = this.state.players
        let boardPositions = this.state.boardPositions
        let oldPosition = players[this.state.currentPlayer]["position"]
        let currPosition = oldPosition
        let destination = (currPosition + dicePair[0] + dicePair[1]) % 40

        while(currPosition !== destination){
            currPosition = (currPosition + 1)%40
            players[this.state.currentPlayer]["position"] = currPosition
            this.setState({players: players})
        }
        boardPositions[destination]["hitCount"] += 1
        
        if(destination === 30){           // player lands on "go to jail"
            console.log("Player #", this.state.currentPlayer, " landed on go to jail!! --> send to JAIL")
            players[this.state.currentPlayer]["position"] = 10
            players[this.state.currentPlayer]["in-jail"] = true
            boardPositions[10]["hitCount"] += 1
        }else if(destination < oldPosition){    //player passed go (collect $200)
            console.log("Player #", this.state.currentPlayer, " passed start --> collect $200")
            players[this.state.currentPlayer]["balance"] += 200
        }
        
        this.setState({
            boardPositions: boardPositions,
            players: players
        })

        //this.payRentIfOwed(dicePair)
    
        
    }

    endGame(){
        console.log("GAME OVER!")
    }

    render() {
      return (
        <div className="game-container w-100">
            {this.state.showModal ?
            <PositionModal showModal={this.state.showModal}
                           boardPositions={this.state.boardPositions}
                           players={this.state.players}
                           currentPlayer={this.state.currentPlayer}
                           toggleModal={() => this.toggleModal()}
                           getRent={() => this.getRentPrice(this.state.players[this.state.currentPlayer]["position"], this.state.lastRoll[0] + this.state.lastRoll[1])}
                           payRent={() => this.payRentIfOwed(this.state.lastRoll)}
                           purchaseProperty={() => this.makePropertyPurchase()}
                           endGame={() => this.endGame()}
                           endTurn={() => this.endTurn()}
                           buyHouse={(pos) => this.buyHouse(pos)}/>
            : null}
          

            <div className="row m-0 p-0">
                <div className="col-10 h-100">
                    <MainBoard boardPositions={this.state.boardPositions} players={this.state.players}></MainBoard>
                </div>
                <div className="col-2">
                    <SideView players={this.state.players}
                              numPlayers={this.state.numPlayers}
                              currentPlayer={this.state.currentPlayer}
                              boardPositions={this.state.boardPositions}
                              waitingToRoll={this.state.waitingToRoll}
                              lastRoll={this.state.lastRoll}
                              newRoll={this.state.newRoll}
                              rollDice={() => this.rollDice()}/>
                </div>
            </div>
        </div>
        )
    }
  }
  
  export default Game;