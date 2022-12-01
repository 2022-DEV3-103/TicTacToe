import React from "react";
import "./TicTacToe.css";

const TicTacToe: React.FC = (): React.ReactElement => {


    return (
        <>
            <h4 className="d-flex justify-content-center mt-4" data-testid="title-h4">
                Welcome BNP Paribas Fortis! Here is a TDD TicTacToe
            </h4>
        </>
    );
}

export default TicTacToe;
