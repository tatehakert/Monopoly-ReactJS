import BoardPosition from './BoardPosition'


function MainBoard(props) {
    return (
      <div className="board-container w-100 text-center">
          {/* Main board here */}
          <div className="row top-row m-0 p-0">
            <div className="bp20"><BoardPosition players={props.players} data={props.boardPositions[20]}/></div>
            <div className="col col-8 m-0 p-0">
                <div className="d-flex flex-row">
                    <div className="bp21"><BoardPosition players={props.players} data={props.boardPositions[21]}/></div>
                    <div className="bp22"><BoardPosition players={props.players} data={props.boardPositions[22]}/></div>
                    <div className="bp23"><BoardPosition players={props.players} data={props.boardPositions[23]}/></div>
                    <div className="bp24"><BoardPosition players={props.players} data={props.boardPositions[24]}/></div>
                    <div className="bp25"><BoardPosition players={props.players} data={props.boardPositions[25]}/></div>
                    <div className="bp26"><BoardPosition players={props.players} data={props.boardPositions[26]}/></div>
                    <div className="bp27"><BoardPosition players={props.players} data={props.boardPositions[27]}/></div>
                    <div className="bp28"><BoardPosition players={props.players} data={props.boardPositions[28]}/></div>
                    <div className="bp29"><BoardPosition players={props.players} data={props.boardPositions[29]}/></div>
                </div>
            </div>
            <div className="bp30"><BoardPosition players={props.players} data={props.boardPositions[30]}/></div>
          </div>
          <div className="row middle-rows m-0 p-0">
            <div className="col col-2 m-0 p-0">
                <div className="d-flex flex-column">
                    <div className="bp19"><BoardPosition players={props.players} data={props.boardPositions[19]}/></div>
                    <div className="bp18"><BoardPosition players={props.players} data={props.boardPositions[18]}/></div>
                    <div className="bp17"><BoardPosition players={props.players} data={props.boardPositions[17]}/></div>
                    <div className="bp16"><BoardPosition players={props.players} data={props.boardPositions[16]}/></div>
                    <div className="bp15"><BoardPosition players={props.players} data={props.boardPositions[15]}/></div>
                    <div className="bp14"><BoardPosition players={props.players} data={props.boardPositions[14]}/></div>
                    <div className="bp13"><BoardPosition players={props.players} data={props.boardPositions[13]}/></div>
                    <div className="bp12"><BoardPosition players={props.players} data={props.boardPositions[12]}/></div>
                    <div className="bp11"><BoardPosition players={props.players} data={props.boardPositions[11]}/></div>
                </div>
            </div>
            <div className="centerOfBoard">
                {/* Empty space */}
            </div>
            <div className="col col-2 m-0 p-0">
                <div className="d-flex flex-column">
                    <div className="bp31"><BoardPosition players={props.players} data={props.boardPositions[31]}/></div>
                    <div className="bp32"><BoardPosition players={props.players} data={props.boardPositions[32]}/></div>
                    <div className="bp33"><BoardPosition players={props.players} data={props.boardPositions[33]}/></div>
                    <div className="bp34"><BoardPosition players={props.players} data={props.boardPositions[34]}/></div>
                    <div className="bp35"><BoardPosition players={props.players} data={props.boardPositions[35]}/></div>
                    <div className="bp36"><BoardPosition players={props.players} data={props.boardPositions[36]}/></div>
                    <div className="bp37"><BoardPosition players={props.players} data={props.boardPositions[37]}/></div>
                    <div className="bp38"><BoardPosition players={props.players} data={props.boardPositions[38]}/></div>
                    <div className="bp39"><BoardPosition players={props.players} data={props.boardPositions[39]}/></div>
                </div>
            </div>
          </div>
          
          <div className="row bottom-row m-0 p-0">
            <div className="bp10"><BoardPosition players={props.players} data={props.boardPositions[10]}/></div>
            <div className="col col-8 m-0 p-0">
                <div className="d-flex flex-row">
                    <div className="bp9"><BoardPosition players={props.players} data={props.boardPositions[9]}/></div>
                    <div className="bp8"><BoardPosition players={props.players} data={props.boardPositions[8]}/></div>
                    <div className="bp7"><BoardPosition players={props.players} data={props.boardPositions[7]}/></div>
                    <div className="bp6"><BoardPosition players={props.players} data={props.boardPositions[6]}/></div>
                    <div className="bp5"><BoardPosition players={props.players} data={props.boardPositions[5]}/></div>
                    <div className="bp4"><BoardPosition players={props.players} data={props.boardPositions[4]}/></div>
                    <div className="bp3"><BoardPosition players={props.players} data={props.boardPositions[3]}/></div>
                    <div className="bp2"><BoardPosition players={props.players} data={props.boardPositions[2]}/></div>
                    <div className="bp1"><BoardPosition players={props.players} data={props.boardPositions[1]}/></div>
                </div>
            </div>
            <div className="bp0"><BoardPosition players={props.players} data={props.boardPositions[0]}/></div>
          </div>
          <div>Created by: Jack Storey, Tate Hakert, Jack Babcock, Jack Schipper, Corey Clemons</div>
          

      </div>
    );
  }
  
  export default MainBoard;