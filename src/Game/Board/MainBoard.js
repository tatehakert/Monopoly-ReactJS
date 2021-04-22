import BoardPosition from './BoardPosition'


function MainBoard(props) {
    return (
      <div className="board-container w-100 text-center">
          <div className="row top-row m-0 p-0">
            <div className="col col-2 m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[20]}/></div>
            <div className="col col-8 m-0 p-0">
                <div className="d-flex flex-row">
                    <div className="bp xbp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[21]}/></div>
                    <div className="bp xbp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[22]}/></div>
                    <div className="bp xbp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[23]}/></div>
                    <div className="bp xbp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[24]}/></div>
                    <div className="bp xbp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[25]}/></div>
                    <div className="bp xbp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[26]}/></div>
                    <div className="bp xbp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[27]}/></div>
                    <div className="bp xbp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[28]}/></div>
                    <div className="bp xbp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[29]}/></div>
                </div>
            </div>
            <div className="col col-2 m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[30]}/></div>
          </div>
          <div className="row middle-rows m-0 p-0">
            <div className="col col-2 m-0 p-0">
                <div className="d-flex flex-column">
                    <div className="bp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[19]}/></div>
                    <div className="bp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[18]}/></div>
                    <div className="bp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[17]}/></div>
                    <div className="bp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[16]}/></div>
                    <div className="bp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[15]}/></div>
                    <div className="bp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[14]}/></div>
                    <div className="bp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[13]}/></div>
                    <div className="bp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[12]}/></div>
                    <div className="bp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[11]}/></div>
                </div>
            </div>
            <div className="col col-8 m-0 p-0">
                {/* Empty space */}
            </div>
            <div className="col col-2 m-0 p-0">
                <div className="d-flex flex-column">
                    <div className="bp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[31]}/></div>
                    <div className="bp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[32]}/></div>
                    <div className="bp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[33]}/></div>
                    <div className="bp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[34]}/></div>
                    <div className="bp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[35]}/></div>
                    <div className="bp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[36]}/></div>
                    <div className="bp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[37]}/></div>
                    <div className="bp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[38]}/></div>
                    <div className="bp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[39]}/></div>
                </div>
            </div>
          </div>
          
          <div className="row bottom-row m-0 p-0">
            <div className="col col-2 m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[10]}/></div>
            <div className="col col-8 m-0 p-0">
                <div className="d-flex flex-row">
                    <div className="bp xbp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[9]}/></div>
                    <div className="bp xbp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[8]}/></div>
                    <div className="bp xbp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[7]}/></div>
                    <div className="bp xbp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[6]}/></div>
                    <div className="bp xbp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[5]}/></div>
                    <div className="bp xbp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[4]}/></div>
                    <div className="bp xbp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[3]}/></div>
                    <div className="bp xbp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[2]}/></div>
                    <div className="bp xbp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[1]}/></div>
                </div>
            </div>
            <div className="col col-2 m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[0]}/></div>
          </div>

          {/* <div className="row top-row m-0 p-0">
            <div className="col col-2 bp cp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[20]}/></div>
            <div className="col col-8 m-0 p-0">
                <div className="row m-0 p-0 h-100">
                    <div className="col bp xbp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[21]}/></div>
                    <div className="col bp xbp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[22]}/></div>
                    <div className="col bp xbp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[23]}/></div>
                    <div className="col bp xbp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[24]}/></div>
                    <div className="col bp xbp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[25]}/></div>
                    <div className="col bp xbp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[26]}/></div>
                    <div className="col bp xbp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[27]}/></div>
                    <div className="col bp xbp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[28]}/></div>
                    <div className="col bp xbp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[29]}/></div>
                </div>
            </div>
            <div className="col col-2 bp cp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[30]}/></div>
          </div>
          <div className="row middle-row m-0 p-0">
              <div className="col col-2 bp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[19]}/></div>
              <div className="col col-8 m-0 p-0"></div>
              <div className="col col-2 bp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[31]}/></div>
          </div>
          <div className="row middle-row m-0 p-0">
              <div className="col col-2 bp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[18]}/></div>
              <div className="col col-8 m-0 p-0"></div>
              <div className="col col-2 bp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[32]}/></div>
          </div>
          <div className="row middle-row m-0 p-0">
              <div className="col col-2 bp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[17]}/></div>
              <div className="col col-8 m-0 p-0"></div>
              <div className="col col-2 bp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[33]}/></div>
          </div>
          <div className="row middle-row m-0 p-0">
              <div className="col col-2 bp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[16]}/></div>
              <div className="col col-8 m-0 p-0"></div>
              <div className="col col-2 bp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[34]}/></div>
          </div>
          <div className="row middle-row m-0 p-0">
              <div className="col col-2 bp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[15]}/></div>
              <div className="col col-8 m-0 p-0"></div>
              <div className="col col-2 bp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[35]}/></div>
          </div>
          <div className="row middle-row m-0 p-0">
              <div className="col col-2 bp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[14]}/></div>
              <div className="col col-8 m-0 p-0"></div>
              <div className="col col-2 bp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[36]}/></div>
          </div>
          <div className="row middle-row m-0 p-0">
              <div className="col col-2 bp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[13]}/></div>
              <div className="col col-8 m-0 p-0"></div>
              <div className="col col-2 bp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[37]}/></div>
          </div>
          <div className="row middle-row m-0 p-0">
              <div className="col col-2 bp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[12]}/></div>
              <div className="col col-8 m-0 p-0"></div>
              <div className="col col-2 bp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[38]}/></div>
          </div>
          <div className="row middle-row m-0 p-0">
              <div className="col col-2 bp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[11]}/></div>
              <div className="col col-8 m-0 p-0"></div>
              <div className="col col-2 bp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[39]}/></div>
          </div>
          <div className="row bottom-row m-0 p-0">
            <div className="col col-2 bp cp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[10]}/></div>
            <div className="col col-8 m-0 p-0">
                <div className="row m-0 p-0 h-100">
                    <div className="col bp xbp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[9]}/></div>
                    <div className="col bp xbp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[8]}/></div>
                    <div className="col bp xbp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[7]}/></div>
                    <div className="col bp xbp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[6]}/></div>
                    <div className="col bp xbp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[5]}/></div>
                    <div className="col bp xbp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[4]}/></div>
                    <div className="col bp xbp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[3]}/></div>
                    <div className="col bp xbp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[2]}/></div>
                    <div className="col bp xbp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[1]}/></div>
                </div>
            </div>
            <div className="col col-2 bp cp m-0 p-0"><BoardPosition players={props.players} data={props.boardPositions[0]}/></div>
          </div> */}
      </div>
    );
  }
  
  export default MainBoard;