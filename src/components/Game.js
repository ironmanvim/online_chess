import React, {useEffect, useState} from "react";
import Chess from "./Chess";
import websocket from "../js/websocket";
import GameRoomMaker from "./GameRoomMaker";


export default function Game() {
    const [game, setGame] = useState(null);
    const [user, setUser] = useState(null);
    const [defaultChessBoard, setDefaultChessBoard] = useState(null);
    const [defaultTurn, setDefaultTurn] = useState(null);
    const [team, setTeam] = useState(null);


    console.log(defaultChessBoard, defaultTurn);

    useEffect(() => {
        if (user === null) {
            websocket.addEventListener("open", () => {
                websocket.sendObject({
                    type: "connection"
                });
            });
        }
    }, [user]);

    useEffect(() => {
        function connection(event) {
            let {data} = event;
            data = JSON.parse(data);
            console.log(data);

            if (data.type === "connection") {
                setUser(data["id"]);
            } else if (data.type === "game_room") {
                setGame(data["id"]);
                setDefaultChessBoard(data["board"]);
                setDefaultTurn(data["turn"]);
                setTeam(data["team"]);
                console.log(data["team"]);
            }
        }

        if (game === null) {
            websocket.addEventListener("message", connection);
        }

        return () => {
            websocket.removeEventListener("message", connection);
        };
    }, [game]);

    const createRoom = (team) => {
        if (user !== null) {
            websocket.sendObject({
                type: "create_room",
                team,
            });
        }
    };

    const joinRoom = (roomID, team) => {
        if (user !== null) {
            websocket.sendObject({
                type: "join_room",
                game_id: roomID,
                team,
            });
        }
    };

    return (
        <div className="rows game">
            <div className="row no-flex test test-blue status">
                {
                    user !== null &&
                    `current user id: ${user}`
                }
            </div>
            <div className="row no-flex test test-blue">
                {
                    (game !== null && defaultTurn !== null && defaultChessBoard !== null && team !== null) &&
                    <>
                        {`GameID: ${game}`}
                        <Chess gameID={game} defaultTurn={defaultTurn} defaultChessBoard={defaultChessBoard}
                               team={team}/>
                    </>
                }
            </div>
            <div className="row no-flex column-center test test-blue">
                {
                    game === null && (
                        <GameRoomMaker createRoom={createRoom} joinRoom={joinRoom}/>
                    )
                }
            </div>
        </div>
    )
}