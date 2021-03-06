import MainBoard from './Board/MainBoard';
import React from 'react';
import SideView from './SideView/SideView';
import {Modal, Button} from 'react-bootstrap';
import PositionModal from './Board/PositionModal';

class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            numPlayers: Object.keys(this.props.players).length,
            currentPlayer: 1,
            waitingToRoll: true,
            lastRoll: [1,1],
            consecutiveTurns: 0,
            newRoll: false,
            showModal: false,
            players: this.props.players,
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
                    "canPurchase": true,
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
                    "role": "community chest",
                    "propertySet": null,
                    "canPurchase": false,
                    "purchasePrice": null,
                    "hitCount": 0,
                    "ownedBy": null,
                },
                34: {
                    "pos": 34,
                    "name": "Pennsylvania Avenue",
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
            },
            chanceCards: {
                0: {
                    "instruction": "Advance to Go (Collect $200) ",
                    "action": "move",
                    "destination": 0,
                    "subaction": "receive",
                    "amount": 200,
                    "fileName": "Chance - Advance To Go.png"
                },
                1: {
                    "instruction": "Advance to Illinois Ave ??? If you pass Go, collect $200 ",
                    "action": "move",
                    "destination": 24,
                    "subaction": "recieve",
                    "amount": 200,
                    "fileName": "Chance - Advance To Illinois Ave.png"
                },
                2: {
                    "instruction": "Advance to St. Charles Place ??? If you pass Go, collect $200 ",
                    "action": "move",
                    "destination": 11, 
                    "subaction": "recieve",
                    "amount": 200,
                    "fileName": "Chance - Advance To St. Charles Place.png"
                
                },
                3: {
                    "instruction": "Advance token to nearest Utility. If unowned, you may buy it from the Bank. If owned, throw dice and pay owner a total ten times the amount thrown ",
                    "action": "movenearest",
                    "role": "utility",
                    "destination": [12, 28],
                    "fileName": "Chance - Advance To Nearest Utility.png"
                    //do something
                },
                4: {
                    "instruction": "Advance token to the nearest Railroad and pay owner twice the rental to which he/she {he} is otherwise entitled. If Railroad is unowned, you may buy it from the Bank. ",
                    "action": "movenearest",
                    "role": "railroad",
                    "destination": [5, 15, 25, 35],
                    "fileName": "Chance - Advance To Nearest Railroad.png"
                },
                5:{
                    "instruction": "Bank pays you dividend of $50 ",
                    "action": "recieve",
                    "amount": 50,
                    "fileName": "Chance - Bank Pays You Dividend.png"
                },
                6:{
                    "instruction": "Get Out of Jail Free ",
                    "action": "jail",
                    "subaction": "get-out",
                    "fileName": "Chance - Get Out of Jail Free.png"
                    //improve this?    
                },
                7:{
                    "instruction": "Go Back 3 Spaces ",
                    "action": "go_back",
                    "places": 3,
                    "fileName": "Chance - Go Back 3 Spaces.png"  
                },
                8: {
                    "instruction": "Go to Jail???Go directly to Jail ??? Do not pass Go, do not collect $200 ",
                    "action": "jail",
                    "subaction": "go-to",
                    "destination": 10,
                    "fileName": "Chance - Go Directly To Jail.png"   
                },
                9: {
                    "instruction": "Make general repairs on all your property ??? For each house pay $25???For each hotel $100 ",
                    "action": "repairs",
                    "house": 25,
                    "hotel": 100,                  
                    "fileName": "Chance - Make General Repairs.png"
                },
                10: {
                    "instruction": "Pay poor tax of $15 ",
                    "action": "pay",
                    "amount": 15,
                    "fileName": "Chance - Pay Poor Tax.png"
                },
                11: {
                    "instruction": "Take a trip to Reading Railroad ??? If you pass Go, collect $200 ",
                    "action": "move",
                    "destination": 5,
                    "subaction": "recieve",
                    "amount": 200,
                    "fileName": "Chance - Take A Ride On The Reading.png" 
                },
                12: {
                    "instruction": "Take a walk on the Boardwalk ??? Advance token to Boardwalk ",
                    "action": "move",
                    "destination": 39,
                    "fileName": "Chance - Take A Walk On The Boardwalk.png"
                },
                13: {
                    "instruction": "You have been elected Chairman of the Board ??? Pay each player $50 ",
                    "action": "chairman",
                    "amount": 50,
                    "fileName": "Chance - You Have Been Elected.png"
                },
                14: {
                    "instruction": "Your building and loan matures ??? Collect $150 ",
                    "action": "recieve",
                    "amount": 150,
                    "fileName": "Chance - Your Building And Loan Matures.png"
                },
                15: {
                    "instruction": "You have won a crossword competition ??? Collect $100 ",
                    "action": "recieve",
                    "amount": 100,
                    "fileName": "Community Chest - You Have Won Second Prize In A Beauty Contest.png"
                }
            },
            communityChestCards: {
                0: {
                    "instruction": "Advance to Go (Collect $200) ",
                    "action": "move",
                    "destination": 0,
                    "fileName": "Community Chest - Advance To Go.png"
                },
                1: {
                    "instruction": "Bank error in your favor???Collect $200 ",
                    "action": "recieve",
                    "amount": 200,
                    "fileName": "Community Chest - Bank Error In Your Favor.png"
                },
                2: {
                    "instruction": "Doctor's fee???Pay $50 ",
                    "action": "pay",
                    "amount": 50, 
                    "fileName": "Community Chest - Doctor's Fee.png"
                },
                3: {
                    "instruction": "From sale of stock you get $50 ",
                    "action": "recieve",
                    "amount": 50,
                    "fileName": "Community Chest - From Sale of Stock.png"
                },
                4: {
                    "instruction": "Get Out of Jail Free ",
                    "action": "jail",
                    "subaction": "get-out",
                    "fileName": "Community Chest - Get Out of Jail Free.png"
                },
                5:{
                    "instruction": "Go to Jail???Go directly to jail???Do not pass Go???Do not collect $200 ",
                    "action": "jail",
                    "subaction": "go-to",
                    "destination": 10,
                    "fileName": "Community Chest - Go To Jail.png"
                },
                6:{
                    "instruction": "Grand Opera Night???Collect $50 from every player for opening night seats ",
                    "action": "recieveeveryplayer",
                    "amount": 50,  
                    "fileName": "Community Chest - Grand Opera Opening.png"                
                },
                7:{
                    "instruction": "Holiday Fund matures???Receive $100 ",
                    "action": "recieve",
                    "amount": 100,
                    "fileName": "Community Chest - Xmas Fund Matures.png"
                },
                8: {
                    "instruction": "Income tax refund???Collect $20 ",
                    "action": "recieve",
                    "amount": 20,  
                    "fileName": "Community Chest - Income Tax Refund.png"  
                },
                9: {
                    "instruction": "It is your birthday???Collect $10 ",
                    "action": "recieve",
                    "amount": 10,  
                    "fileName": "Community Chest - You Inherit $100.png"               
                },
                10: {
                    "instruction": "Life insurance matures???Collect $100 ",
                    "action": "recieve",
                    "amount": 100,
                    "fileName": "Community Chest - Life Insurance Matures.png"               
                },
                11: {
                    "instruction": "Pay hospital fees of $100 ",
                    "action": "pay",
                    "amount": 100,
                    "fileName": "Community Chest - Pay Hospital.png" 
                },
                12: {
                    "instruction": "Pay school fees of $150 ",
                    "action": "pay",
                    "amount": 150,
                    "fileName": "Community Chest - Pay School Tax.png"
                },
                13: {
                    "instruction": "Receive $25 consultancy fee ",
                    "action": "recieve",
                    "amount": 25,
                    "fileName": "Community Chest - Receive For Services.png"
                },
                14: {
                    "instruction": "You are assessed for street repairs???$40 per house???$115 per hotel ",
                    "action": "repairs",
                    "house": 40,
                    "hotel": 115,
                    "fileName": "Community Chest - You Are Assessed For Street Repairs.png"
                },
                15: {
                    "instruction": "You have won second prize in a beauty contest???Collect $10 ",
                    "action": "recieve",
                    "amount": 10,
                    "fileName": "Community Chest - You Have Won Second Prize In A Beauty Contest.png"
                },
                16: {
                    "instruction": "You inherit 100 ",
                    "action": "recieve",
                    "amount": 100,
                    "fileName": "Community Chest - You Inherit $100.png"
                }   
            },
            pendingTrades: [
                {
                    senderPID: 1,
                    offeredProperty: 1,
                    offeredMoney: 100,
                    recipientPID: 2,
                    returnProperty: 39,
                    returnMoney: 0,
                    tradeStatus: "pending"
                }
            ]
        }
    }

    toggleModal(){
        this.setState({showModal: !this.state.showModal})
    }


    payBail(pid){
        let players = this.state.players
        if(players[pid]["in-jail"]){
            if(players[pid]["balance"] >= 50){
                players[pid]["balance"] = players[pid]["balance"] - 50
                players[pid]["in-jail"] = false
                this.setState({players: players})
                console.log("player", pid, " paid $50 in bail to be released from jail")
            }else{
                console.log("error: player", pid, " called payBail() but didn't have the funds")
            }         
            
        }else{
            console.log("error: payBail(", pid,") called when player is not in jail")
        }
    }

    useGetOutOfJailCard(pid){
        let players = this.state.players
        if(players[pid]["GOOJFC"] > 0){
            players[pid]["GOOJFC"] = players[pid]["GOOJFC"] - 1
            players[pid]["in-jail"] = false
            this.setState({players: players})
            console.log("player", pid, " called useGetOutJailFreeCard()")
        }else{
            console.log("error: useGetOutJailFreeCard(", pid,") called without a card")
        }
    }

    simulateTurn(pid){
        console.log("simulating turn for Player #", pid)
        let dicePair = this.rollDice(pid)
        console.log("dicePair simulated: ", dicePair)
        this.payRentIfOwed(pid, dicePair)
        this.makePropertyPurchaseDecision(pid)
        this.makeHomePurchaseDecision(pid)
    }

    shouldAcceptTrade(trade){
        let rand = Math.random()
        if(rand > .5){
            return true
        }else{
            return false
        }
    }

    executeTrade(trade){
        let players = this.state.players
        let boardPositions = this.state.boardPositions

        // let newTrade = {
        //     senderPID: this.props.currentPlayer,
        //     offeredProperty: this.state.propertyGive || null,
        //     offeredMoney: this.state.giveValue || 0,
        //     recipientPID: this.state.tradePartner,
        //     returnProperty: this.state.propertyTake,
        //     returnMoney: this.state.takeValue || 0,
        //     tradeStatus: "pending"
        // }
        if(trade.offeredMoney && trade.offeredMoney > 0){
            players[trade.recipientPID]["balance"] = players[trade.recipientPID]["balance"] + trade.offeredMoney
            players[trade.senderPID]["balance"] = players[trade.senderPID]["balance"] - trade.offeredMoney
        }

        if(trade.returnMoney && trade.returnMoney > 0){
            players[trade.senderPID]["balance"] = players[trade.senderPID]["balance"] + trade.returnMoney
            players[trade.recipientPID]["balance"] = players[trade.recipientPID]["balance"] - trade.returnMoney
        }

        if(trade.offeredProperty && trade.offeredProperty > 0){
            
            players[trade.recipientPID]["properties"][boardPositions[trade.offeredProperty]["propertySet"]].push(trade.offeredProperty)
            boardPositions[trade.offeredProperty]["ownedBy"] = trade.recipientPID

            let propertiesInSet = players[trade.senderPID]["properties"][boardPositions[trade.offeredProperty]["propertySet"]]
            let newSet = []
            for(let index in propertiesInSet){
                if(propertiesInSet[index] != trade.offeredProperty){
                    newSet.push(propertiesInSet[index])
                }
            }
            players[trade.senderPID]["properties"][boardPositions[trade.offeredProperty]["propertySet"]] = newSet
        }

        if(trade.returnProperty && trade.returnProperty > 0){
            let returnPropertySet = boardPositions[trade.returnProperty]["propertySet"]

            players[trade.senderPID]["properties"][returnPropertySet].push(trade.returnProperty)
            boardPositions[trade.returnProperty]["ownedBy"] = trade.senderPID

            let propertiesInSet = players[trade.recipientPID]["properties"][returnPropertySet]
            let newSet = []
            for(let index in propertiesInSet){
                if(propertiesInSet[index] != trade.returnProperty){
                    newSet.push(propertiesInSet[index])
                }
            }
            players[trade.recipientPID]["properties"][returnPropertySet] = newSet
        }

        this.setState({players: players, boardPositions: boardPositions})

    }

    rollDice(pid){
        console.log("pid: ", pid)
        let d1 = Math.floor(Math.random() * 6) + 1
        let d2 = Math.floor(Math.random() * 6) + 1
        let dicePair = [d1, d2]
        let players = this.state.players
        let consecutiveTurns = this.state.consecutiveTurns
        consecutiveTurns+= 1
        // let inJail = players[pid]["in-jail"]
        // if(players[pid]["isABot"]){
            
        // }
        this.setState({ newRoll: true, lastRoll: dicePair, consecutiveTurns: consecutiveTurns, waitingToRoll: false})
        if(! players[pid]["in-jail"]){
            this.movePlayer(pid, dicePair)
        }else{
            if(d1 === d2){
                players[pid]["in-jail"] = false
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

        return dicePair
        
    }

    movePlayer(pid, dicePair){
        let players = this.state.players
        let boardPositions = this.state.boardPositions
        let oldPosition = players[pid]["position"]
        let currPosition = oldPosition
        let destination = (currPosition + dicePair[0] + dicePair[1]) % 40

        players[pid]["position"] = destination
        boardPositions[destination]["hitCount"] += 1
        
        
        if(destination === 30){           // player lands on "go to jail"
            console.log("Player #", pid, " landed on go to jail!! --> send to JAIL")
            players[pid]["position"] = 10
            players[pid]["in-jail"] = true
            boardPositions[10]["hitCount"] += 1
        }else if(destination === 7 || destination === 22 || destination === 36){ //chance
            console.log("landed at chance")
            this.drawChanceCard()
        }else if(destination === 2 || destination === 17 || destination === 33){ //community chest
            console.log("landed at community chest")
            this.drawCommunityChestCard()
        }
        
        if(destination < oldPosition){    //player passed go (collect $200)
            console.log("Player #", pid, " passed start --> collect $200")
            players[pid]["balance"] = players[pid]["balance"] + 200
        }
        
        this.setState({
            boardPositions: boardPositions,
            players: players
        })
    
    }

    // movePlayer(dicePair){
    //     let players = this.state.players
    //     let boardPositions = this.state.boardPositions
    //     let oldPosition = players[this.state.currentPlayer]["position"]
    //     let currPosition = oldPosition
    //     let destination = (currPosition + dicePair[0] + dicePair[1]) % 40

    //     while(currPosition !== destination){
    //         currPosition = (currPosition + 1)%40
    //         players[this.state.currentPlayer]["position"] = currPosition
    //         this.setState({players: players})
    //     }
    //     players[pid]["position"] = destination
    //     boardPositions[destination]["hitCount"] += 1

    //     var chances = [7, 22, 36]
    //     var communityChests = [33, 17, 2]
    //     var communityChest = false
    //     var chance = false
    //     for (var i = 0; i < chances.length; i++) {
    //         if (destination === chances[i]) {
    //             chance = true;
    //         }
    //     }
    //     for (var i = 0; i < communityChests.length; i++) {
    //         if (destination === communityChests[i]) {
    //             communityChest = true;
    //         }
    //     }
    //     if(destination === 30){           // player lands on "go to jail"
    //         console.log("Player #", this.state.currentPlayer, " landed on go to jail!! --> send to JAIL")
    //         players[this.state.currentPlayer]["position"] = 10
    //         players[this.state.currentPlayer]["in-jail"] = true
    //         boardPositions[10]["hitCount"] += 1
    //     }else if(destination < oldPosition){    //player passed go (collect $200)
    //         console.log("Player #", this.state.currentPlayer, " passed start --> collect $200")
    //         players[this.state.currentPlayer]["balance"] += 200
    //     }
    //     else if (boardPositions[destination]["role"] === "chance") {

    //         this.chanceFunc()
    //     }
    //     else if (boardPositions[destination]["role"] === "community chest") {

    //         this.communityChestFunc()
    //     }
        
    //     this.setState({
    //         boardPositions: boardPositions,
    //         players: players
    //     })

    //     //this.payRentIfOwed(dicePair)
    
        
    // }

    endTurn(){
        let players = this.state.players

        if(this.state.lastRoll[0] === this.state.lastRoll[1] && this.state.consecutiveTurns < 3){
            console.log("Player gets to roll again")
            players[this.state.currentPlayer]["EVENTS"] = []
            this.setState({
                pendingTrades: [],
                players: players,
                waitingToRoll: true,
                newRoll: false,
                consecutiveTurns: 0,
                lastRoll: [0,0],
                showModal: false
            })
            if(this.state.players[this.state.currentPlayer]["isABot"]){
                this.simulateTurn(this.state.currentPlayer)
            }
        }else{
            
            let currentPlayer = this.state.currentPlayer
            let nextPlayer = currentPlayer + 1
            if(nextPlayer > this.state.numPlayers){
                nextPlayer = 1
            }
            console.log("ending turn: currentPlayer: ",currentPlayer, "nextPlayer: ", nextPlayer)
            players[this.state.currentPlayer]["EVENTS"] = []
            this.setState({
                pendingTrades: [],
                players: players,
                currentPlayer: nextPlayer,
                waitingToRoll: true,
                newRoll: false,
                consecutiveTurns: 0,
                lastRoll: [0,0],
                showModal: false
            })
            if(this.state.players[nextPlayer]["isABot"]){
                this.simulateTurn(nextPlayer)
            }
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

    
    makePropertyPurchaseDecision(pid){
        let currentPlayer = pid
        let players = this.state.players
        let position = players[currentPlayer]["position"]
        let boardPositions = this.state.boardPositions

        if(boardPositions[position]["canPurchase"]){
            if(players[currentPlayer]["balance"] > 4*boardPositions[position]["purchasePrice"]){
                console.log("Player #", currentPlayer, " is purchasing ", boardPositions[position]["name"]," --> pay ", boardPositions[position]["purchasePrice"])
                players[currentPlayer]["balance"] -= boardPositions[position]["purchasePrice"]
                boardPositions[position]["canPurchase"] = false
                boardPositions[position]["ownedBy"] = currentPlayer
                players[currentPlayer]["properties"][boardPositions[position]["propertySet"]].push(position)
                
                let newEvent = {
                    type: "purchase",
                    subtype: "property",
                    position: position
                }

                players[currentPlayer]["EVENTS"].push(newEvent)
                this.setState({players: players, boardPositions: boardPositions})
            }else{
                let newEvent = {
                    type: "passOnPurchase",
                    subtype: "property",
                    position: position
                }

                players[currentPlayer]["EVENTS"].push(newEvent)
                this.setState({players: players})
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

    makeHomePurchaseDecision(pid){
        //check which properties are currently owned and decide to purchase houses:
        let currentPlayer = pid
        let ownedProperties = this.state.players[currentPlayer]["properties"]
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
        console.log(fullSets)
        // fullSets = [
        //     [6,8,9]
        // ]
        for(let setIndex in fullSets){
            console.log("setIndex: ", setIndex)
            for(let indexInSet in fullSets[setIndex]){
                console.log("indexInSet: ", indexInSet)
                if(boardPositions[ fullSets[setIndex][indexInSet] ]["numHouses"] < 5 && players[currentPlayer]["balance"] > (2.5 * boardPositions[ fullSets[setIndex][indexInSet] ]["houseCost"])){ //buy a house
                    console.log("Player #", currentPlayer, " bought a house for: ", boardPositions[ fullSets[setIndex][indexInSet] ]["name"])
                    players[currentPlayer]["balance"] -= boardPositions[ fullSets[setIndex][indexInSet] ]["houseCost"]
                    boardPositions[ fullSets[setIndex][indexInSet] ]["numHouses"] += 1
                    this.setState({boardPositions: boardPositions, players: players})
                }else{
                    console.log("Player #", currentPlayer, " cant afford a house for: ", boardPositions[ fullSets[setIndex][indexInSet] ]["name"])
                }
            }
        }
    }




    payRentIfOwed(pid, dicePair){

        let currentPlayer = pid
        let players = this.state.players
        let boardPositions = this.state.boardPositions
        let position = players[currentPlayer]["position"]
        let rentPrice = 0
    
        if(boardPositions[position]["role"] === "utility" || boardPositions[position]["role"] === "railroad" || boardPositions[position]["role"] === "property"){
     
            let propertyOwner = boardPositions[position]["ownedBy"]
            if(boardPositions[position]["ownedBy"] && boardPositions[position]["ownedBy"] !== currentPlayer){  //if there is an owner and it is not the player
                //print("Player #", pid, " owes rent -->")
                console.log("player owes rent!")
                rentPrice = this.getRentPrice(players[currentPlayer]["position"], dicePair[0]+dicePair[1])
                if(rentPrice > 0){
                    console.log("Player #", currentPlayer, " pays $", rentPrice," in rent at ", boardPositions[position]["name"])
                    players[currentPlayer]["balance"] = players[currentPlayer]["balance"] - rentPrice
                    players[boardPositions[position]["ownedBy"]]["balance"] = players[boardPositions[position]["ownedBy"]]["balance"] + rentPrice
                }
            }
        }else if(boardPositions[position]["role"] === "tax"){
            console.log("Player #", currentPlayer, " owes taxes --> pay $100")
            players[currentPlayer]["balance"] -= 100
        }
        
        if(players[currentPlayer]["balance"] < 0){
            console.log("out of money!")
        }

        this.setState({players: players})
    }

    communityChestFunc() {
        let players = this.state.players
        let boardPositions = this.state.boardPositions
        //this.state.communityChestCards.shuffleCards()
        var randNum = Math.floor(Math.random() * 16)
        this.setState({recentCommunityChestCard: this.state.communityChestCards[randNum]})
        console.log("player got community chest card: ", this.state.communityChestCards[randNum]["instruction"])
        if (this.state.communityChestCards[randNum]["action"] === "move") {
            let oldPos = players[this.state.currentPlayer]["position"]
            let newPos = this.state.communityChestCards[randNum]["destination"]
            if (newPos != this.state.boardPositions[10]) {
                if (newPos  < oldPos) {
                    players[this.state.currentPlayer]["balance"] = players[this.state.currentPlayer]["balance"] + 200
                }
            }
            players[this.state.currentPlayer]["position"] = this.state.communityChestCards[randNum]["destination"]
        }
        else if (this.state.communityChestCards[randNum]["action"] === "recieve") {
            players[this.state.currentPlayer]["balace"] = players[this.state.currentPlayer]["balance"] + this.state.communityChestCards[randNum]["amount"]
        }
    
        else if (this.state.communityChestCards[randNum]["actions"] === "pay") {
            players[this.state.currentPlayer]["balance"] = players[this.state.currentPlayer]["balance"] - this.state.communityChestCards[randNum]["amount"]
        }
        else if (this.state.communityChestCards[randNum]["action"] === "chairman") {
            //do something
            //pay each player $50
        }
        else if (this.state.communityChestCards[randNum]["action"] === "jail") {
          //  players[this.state.currentPlayer]["GetOutOfJailFreeCards"] = players[this.state.currentPlayer]["GetOutOfJailFreeCards"] + 1
            //do soemthing
            //move player to jail
        }
        else if (this.state.communityChestCards[randNum]["action"] === "go_back") {
            let oldPos = players[this.state.currentPlayer]["position"]
            let newPos = players[this.state.currentPlayer]["position"] - 3
            players[this.state.currentPlayer]["position"] = newPos

        }
        else if (this.state.communityChestCards[randNum]["action"] === "repairs") {
            //do soemthing
            //count each house multiply by "house"
            //count each hotel multiply by "hotel"
            //add products together and subtract from player total
        }
        else if (this.state.communityChestCards[randNum]["action"] === "movenearestrailroad") {
        let oldPos = players[this.state.currentPlayer]["position"]
        let playerPos = players[this.state.currentPlayer]["position"]
        var railroadLocs = [5, 15, 25, 35]
        var isRailroad = false
            while (isRailroad === false) {
                playerPos = playerPos + 1
                for (var i = 0; i < 3; i++) {
                    if (playerPos === railroadLocs[i]) {
                        isRailroad = true
                    }
                }
            }
            if (playerPos < oldPos) {
                players[this.state.currentPlayer]["balance"] = players[this.state.currentPlayer]["balance"] + 200
            }
            players[this.state.currentPlayer]["position"] = playerPos
        }
        else if (this.state.communityChestCards[randNum]["action"] === "movenearestutility") { //ask about this
            let oldPos = players[this.state.currentPlayer]["position"]
            let playerPos = players[this.state.currentPlayer]["position"]
            while (players[this.state.currentPlayer]["position"] != this.state.boardPositions[12] || players[this.state.currentPlayer]["position"] != this.state.boardPositions[28]) {
                playerPos = playerPos + 1
            }
            if (playerPos < oldPos) {
                players[this.state.currentPlayer]["balance"] = players[this.state.currentPlayer]["balance"] + 200
            }
            players[this.state.currentPlayer]["position"] = playerPos

        }
        else if (this.state.communityChestCards[randNum]["action"] === "recieveeveryplayer") {
            //players[this.state.currentPlayer]["balance"] = players[this.state.currentPlayer]["balance"] + 
        }

        this.setState({players:players})
    }

    drawChanceCard(){
        var randNum = Math.floor(Math.random() * 16)
        this.setState({recentChanceCard: this.state.chanceCards[randNum]})
    }

    drawCommunityChestCard(){
        var randNum = Math.floor(Math.random() * 17)
        this.setState({recentCommunityChestCard: this.state.communityChestCards[randNum]})
    }

    executeChanceCard(pid, chanceCard){
        console.log("executing chance card")
        let players = this.state.players
        let currPosition = players[pid]["position"]

        if(chanceCard["action"] === "move"){
            console.log("moving player to position: ", chanceCard["destination"])
            players[pid]["position"] = chanceCard["destination"]
        }else if(chanceCard["action"] === "movenearest"){
            players[pid]["position"] = (players[pid]["position"] + 1)%40
            while(this.state.boardPositions[players[pid]["position"]]["role"] !== chanceCard["role"]){
                players[pid]["position"] = (players[pid]["position"] + 1)%40
            }
        }else if(chanceCard["action"] === "jail"){
            if(chanceCard["subaction"] === "go-to"){
                players[pid]["position"] = 10
                players[pid]["in-jail"] = true
            }else if(chanceCard["subaction"] === "get-out"){
                let numCards = players[pid]["numCards"] || 0
                numCards = numCards + 1
                players[pid]["numCards"] = numCards
            }
        }else if(chanceCard["action"] === "go_back"){
            let oldPos = players[pid]["position"]
            let newPos = players[pid]["position"] - 3
            if(newPos < 0){
                newPos = newPos + 40 //if player moves from 2 --> -1, update -1 to be position 39
            }
            players[pid]["position"] = newPos
        }else if(chanceCard["action"] === "recieve"){
            //credit the card amount
            players[pid]["balance"] = players[pid]["balance"] + chanceCard["amount"]
        }else if(chanceCard["action"] === "pay"){
            //deduct the card amount
            players[pid]["balance"] = players[pid]["balance"] - chanceCard["amount"]
        }else if(chanceCard["action"] === "chairman"){
            for(let player = 1; player <= this.state.numPlayers; player++){
                if(player !== pid){
                    //increment other player's balance
                    players[player]["balance"] = players[player]["balance"] + 50
                    //decrement the current players balance
                    players[pid]["balance"] = players[pid]["balance"] - 50
                }
            }
        }else if(chanceCard["action"] === "repairs"){
            let boardPositions = this.state.boardPositions
            let numHouses = 0
            let numHotels = 0
    
            for(let pos in boardPositions){
                if(boardPositions[pos]["role"] === "property" && boardPositions[pos]["ownedBy"] === pid){
                    if(boardPositions[pos]["numHouses"] === 5){
                        numHotels = numHotels + 1
                    }else{
                        numHouses = numHouses + boardPositions[pos]["numHouses"]
                    }
                }
            }
            let totalCost = (numHouses*chanceCard["house"]) + (numHotels*chanceCard["hotel"])
            players[pid]["balance"] = players[pid]["balance"] - totalCost
        }

        if(players[pid]["position"] < currPosition && chanceCard["action"] !== "jail"){
            //player passed go --> collect $200
            players[pid]["balance"] = players[pid]["balance"] + 200
        }
        

        this.setState({players: players})
        //BOT only!!
        if(players[pid]["isABot"]){
            this.payRentIfOwed(pid,this.state.lastRoll)
        }
        
    }

    executeCommunityChestCard(pid, communityChestCard){
        console.log("executing community chest card")
        let players = this.state.players
        let currPosition = players[pid]["position"]

        if(communityChestCard["action"] === "move"){
            players[pid]["position"] = communityChestCard["destination"]
        }else if(communityChestCard["action"] === "jail"){
            if(communityChestCard["subaction"] === "go-to"){
                players[pid]["position"] = 10
                players[pid]["in-jail"] = true
            }else if(communityChestCard["subaction"] === "get-out"){
                let numCards = players[pid]["numCards"] || 0
                numCards = numCards + 1
                players[pid]["numCards"] = numCards
            }
        }else if(communityChestCard["action"] === "recieve"){
            //credit the card amount
            players[pid]["balance"] = players[pid]["balance"] + communityChestCard["amount"]
        }else if(communityChestCard["action"] === "recieveeveryplayer"){
            //credit the card amount
            for(let player = 1; player <= this.state.numPlayers; player++){
                if(player !== pid){
                    //decrement other player's balance
                    players[player]["balance"] = players[player]["balance"] - communityChestCard["amount"]
                    //increment 
                    players[pid]["balance"] = players[pid]["balance"] + communityChestCard["amount"]
                }
            }
        }else if(communityChestCard["action"] === "pay"){
            //deduct the card amount
            players[pid]["balance"] = players[pid]["balance"] - communityChestCard["amount"]
        }else if(communityChestCard["action"] === "repairs"){
            let boardPositions = this.state.boardPositions
            let numHouses = 0
            let numHotels = 0
    
            for(let pos in boardPositions){
                if(boardPositions[pos]["role"] === "property" && boardPositions[pos]["ownedBy"] === pid){
                    if(boardPositions[pos]["numHouses"] === 5){
                        numHotels = numHotels + 1
                    }else{
                        numHouses = numHouses + boardPositions[pos]["numHouses"]
                    }
                }
            }
            let totalCost = (numHouses*communityChestCard["house"]) + (numHotels*communityChestCard["hotel"])
            players[pid]["balance"] = players[pid]["balance"] - totalCost
        }

        if(players[pid]["position"] < currPosition && communityChestCard["action"] !== "jail"){
            //player passed go --> collect $200
            players[pid]["balance"] = players[pid]["balance"] + 200
        }

        this.setState({players: players})
    }

    chanceFunc() {
        let players = this.state.players
        let boardPositions = this.state.boardPositions
        //this.state.chanceCards.shuffleCards()
        var randNum = Math.floor(Math.random() * 16)
        this.setState({recentChance: this.state.chanceCards[randNum]})
        console.log("player got chance card: ", this.state.chanceCards[randNum]["instruction"])
        
        if (this.state.chanceCards[randNum]["action"] === "move") {
            let oldPos = players[this.state.currentPlayer]["position"]
            let newPos = this.state.chanceCards[randNum]["destination"]
            if (newPos != this.state.boardPositions[10]) {
                if (newPos  < oldPos) {
                    players[this.state.currentPlayer]["balance"] = players[this.state.currentPlayer]["balance"] + 200
                }
            }
            players[this.state.currentPlayer]["position"] = this.state.chanceCards[randNum]["destination"]
        }
        else if (this.state.chanceCards[randNum]["action"] === "recieve") {
            players[this.state.currentPlayer]["balace"] = players[this.state.currentPlayer]["balance"] + this.state.chanceCards[randNum]["amount"]
        }
    
        else if (this.state.chanceCards[randNum]["actions"] === "pay") {
            players[this.state.currentPlayer]["balance"] = players[this.state.currentPlayer]["balance"] - this.state.chanceCards[randNum]["amount"]
        }
        else if (this.state.chanceCards[randNum]["action"] === "chairman") {
            //do soemthing
            //pay each player $50
        }
        else if (this.state.chanceCards[randNum]["action"] === "jail") {
          //  players[this.state.currentPlayer]["GetOutOfJailFreeCards"] = players[this.state.currentPlayer]["GetOutOfJailFreeCards"] + 1
            //do soemthing
            //move player to jail
        }
        else if (this.state.chanceCards[randNum]["action"] === "go_back") {
            let oldPos = players[this.state.currentPlayer]["position"]
            let newPos = players[this.state.currentPlayer]["position"] - 3
            if(newPos < 0){
                newPos = newPos + 40 //if player moves from 2 --> -1, update -1 to be position 39
            }
            players[this.state.currentPlayer]["position"] = newPos

        }
        else if (this.state.chanceCards[randNum]["action"] === "repairs") {
            //do soemthing
            //count each house multiply by "house"
            //count each hotel multiply by "hotel"
            //add products together and subtract from player total
        }
        else if (this.state.chanceCards[randNum]["action"] === "movenearestrailroad") {
        let oldPos = players[this.state.currentPlayer]["position"]
        let playerPos = players[this.state.currentPlayer]["position"]
        var railroadLocs = [5, 15, 25, 35]
        var isRailroad = false
            while (isRailroad === false) {
                playerPos = playerPos + 1
                for (var i = 0; i < 3; i++) {
                    if (playerPos === railroadLocs[i]) {
                        isRailroad = true
                    }
                }
            }
            if (playerPos < oldPos) {
                players[this.state.currentPlayer]["balance"] = players[this.state.currentPlayer]["balance"] + 200
            }
            players[this.state.currentPlayer]["position"] = playerPos
        }
        else if (this.state.chanceCards[randNum]["action"] === "movenearestutility") { //ask about this
            let oldPos = players[this.state.currentPlayer]["position"]
            let playerPos = players[this.state.currentPlayer]["position"]
            while (players[this.state.currentPlayer]["position"] != this.state.boardPositions[12] || players[this.state.currentPlayer]["position"] != this.state.boardPositions[28]) {
                playerPos = playerPos + 1
            }
            if (playerPos < oldPos) {
                players[this.state.currentPlayer]["balance"] = players[this.state.currentPlayer]["balance"] + 200
            }
            players[this.state.currentPlayer]["position"] = playerPos

        }

        this.setState({players:players})
    }

    makePropertyPurchase(){
        let pid = this.state.currentPlayer
        let position = this.state.players[pid]["position"]
        let boardPositions = this.state.boardPositions
        let players = this.state.players

        //deduct the funds
        players[pid]["balance"] -= boardPositions[position]["purchasePrice"]

        //update "canPurchase" and "ownedBy"
        boardPositions[position]["canPurchase"] = false
        boardPositions[position]["ownedBy"] = pid

        //add the property to the player's propertySets
        players[pid]["properties"][boardPositions[position]["propertySet"]].push(position)

        this.setState({boardPositions: boardPositions, players: players})
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
                           //chanceFunc = {() => this.chanceFunc}
                           //communityChestCards = {() => this.communityChestFunc}
                           recentChanceCard = {this.state.recentChanceCard}
                           recentCommunityChestCard = {this.state.recentCommunityChestCard}
                           toggleModal={() => this.toggleModal()}
                           getRent={() => this.getRentPrice(this.state.players[this.state.currentPlayer]["position"], this.state.lastRoll[0] + this.state.lastRoll[1])}
                           payRent={() => this.payRentIfOwed(this.state.currentPlayer, this.state.lastRoll)}
                           purchaseProperty={() => this.makePropertyPurchase()}
                           endGame={() => this.endGame()}
                           endTurn={() => this.endTurn()}
                           buyHouse={(pos) => this.buyHouse(pos)}
                           executeChanceCard={(pid, card) => this.executeChanceCard(pid, card)}
                           executeCommunityChestCard={(pid, card) => this.executeCommunityChestCard(pid, card)}
                           shouldAcceptTrade={(trade) => this.shouldAcceptTrade(trade)}
                           executeTrade={(trade) => this.executeTrade(trade)}/>
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
                              rollDice={(pid) => this.rollDice(pid)}
                              payBail={(pid) => this.payBail(pid)}/>
                </div>
            </div>
        </div>
        )
    }
  }
  
  export default Game;