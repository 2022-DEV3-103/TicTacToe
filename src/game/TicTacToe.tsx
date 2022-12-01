import React, {useState} from "react";
import "./TicTacToe.css";
import {Player} from "./enums/Player.enum";
import {BoxProps} from "./types/BoxProps";

const TicTacToe: React.FC = (): React.ReactElement => {
    const [player, setPlayer] = useState(Player.PLAYER_X);
    const [boxes, setBoxes] = useState(Array(9).fill(''));
    const [winner, setWinner] = useState('');
    const [tableFilled, setTableFilled] = useState(false);

    const waysToWin = [
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    const gameFinished = tableFilled || winner.length > 0;
    const draw = tableFilled && winner.length === 0;



    const handleClick = (cellId: number) => {
        if (boxes[cellId] !== '') {
            //already click on this box - unit test this
            return;
        }

        let gameState = [...boxes];

        if (player === Player.PLAYER_X) {
            gameState[cellId] = Player.PLAYER_X;
            setPlayer(Player.PLAYER_O)
        } else {
            gameState[cellId] = Player.PLAYER_O;
            setPlayer(Player.PLAYER_X);
        }
        //checkTableFilled(gameState); if draw
        //checkWinner(gameState); if winner
        setBoxes(gameState);
    }



    const TicTacBox = ({cellId}: BoxProps) => {
        const enableTable = winner.length === 0 && !tableFilled;
        return (
            <td
                data-testid={`box-${cellId}-td`}
                className={boxes[cellId] === '' && enableTable ? "available-box" : ''}
                onClick={() => enableTable ? handleClick(cellId) : null}>{boxes[cellId]}
            </td>
        )
    }

    return (
        <>
            <h4 className="d-flex justify-content-center mt-4" data-testid="title-h4">
                Welcome BNP Paribas Fortis! Here is a TDD TicTacToe
            </h4>

            <div className="d-flex justify-content-center mt-4" data-testid="turn-info-div">
                Turn of player {player}
            </div>

            <div className="d-flex justify-content-center mt-2" data-testid="table-container-div">
                <table>
                    <tbody>

                    <tr>
                        <TicTacBox cellId={0}/>
                        <TicTacBox cellId={1}/>
                        <TicTacBox cellId={2}/>
                    </tr>

                    <tr>
                        <TicTacBox cellId={3}/>
                        <TicTacBox cellId={4}/>
                        <TicTacBox cellId={5}/>
                    </tr>

                    <tr>
                        <TicTacBox cellId={6}/>
                        <TicTacBox cellId={7}/>
                        <TicTacBox cellId={8}/>
                    </tr>

                    </tbody>
                </table>
            </div>
        </>
    );
}

export default TicTacToe;
