import React, {useState} from "react";


export default function GameRoomMaker({createRoom, joinRoom}) {
    const [gameID, setGameID] = useState("");
    const [team, setTeam] = useState("w");

    const createGame = () => {
        createRoom(team);
    };

    const joinGame = () => {
        joinRoom(parseInt(gameID), team);
    };

    return (
        <div>

            <button onClick={createGame}>
                Create Room
            </button>


            <input type="text" value={gameID} onChange={({target: {value}}) => setGameID(value)}/>

            <button onClick={joinGame}>
                Join Room
            </button>


            <div>Team:</div>
            <div>
                <select onChange={({target: {value}}) => setTeam(value)} value={team}>
                    <option value="w">
                        White
                    </option>
                    <option value="b">
                        Black
                    </option>
                </select>
            </div>
        </div>
    );
}