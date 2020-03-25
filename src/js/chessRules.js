const chessRules = {
    "w-king": {
        movement: [["+1", "+1"], ["-1", "-1"], ["+1", "-1"], ["-1", "+1"], ["+1", "+0"], ["-1", "+0"], ["+0", "+1"], ["+0", "-1"]],
        firstMovement: [],
        killMovement: "same",
    },
    "w-queen": {
        movement: [["+x", "+x"], ["-x", "-x"], ["+x", "-x"], ["-x", "+x"], ["+x", "+0"], ["-x", "+0"], ["+0", "+x"], ["+0", "-x"]],
        firstMovement: [],
        killMovement: "same",
    },
    "w-rook": {
        movement: [["+x", "+0"], ["-x", "+0"], ["+0", "+x"], ["+0", "-x"]],
        firstMovement: [],
        killMovement: "same",
    },
    "w-bishop": {
        movement: [["+x", "+x"], ["-x", "-x"], ["+x", "-x"], ["-x", "+x"]],
        firstMovement: [],
        killMovement: "same",
    },
    "w-knight": {
        movement: [["+2", "+1"], ["+2", "-1"], ["-2", "+1"], ["-2", "-1"], ["+1", "+2"], ["+1", "-2"], ["-1", "+2"], ["-1", "-2"]],
        firstMovement: [],
        killMovement: "same",
    },
    "w-pawn": {
        movement: [["-1", "+0"]],
        firstMovement: [["-2", "+0"]],
        killMovement: [["-1", "+1"], ["-1", "-1"]],
    },
    "b-king": {
        movement: [["+1", "+1"], ["-1", "-1"], ["+1", "-1"], ["-1", "+1"], ["+1", "+0"], ["-1", "+0"], ["+0", "+1"], ["+0", "-1"]],
        firstMovement: [],
        killMovement: "same",
    },
    "b-queen": {
        movement: [["+x", "+x"], ["-x", "-x"], ["+x", "-x"], ["-x", "+x"], ["+x", "+0"], ["-x", "+0"], ["+0", "+x"], ["+0", "-x"]],
        firstMovement: [],
        killMovement: "same",
    },
    "b-rook": {
        movement: [["+x", "+0"], ["-x", "+0"], ["+0", "+x"], ["+0", "-x"]],
        firstMovement: [],
        killMovement: "same",
    },
    "b-bishop": {
        movement: [["+x", "+x"], ["-x", "-x"], ["+x", "-x"], ["-x", "+x"]],
        firstMovement: [],
        killMovement: "same",
    },
    "b-knight": {
        movement: [["+2", "+1"], ["+2", "-1"], ["-2", "+1"], ["-2", "-1"], ["+1", "+2"], ["+1", "-2"], ["-1", "+2"], ["-1", "-2"]],
        firstMovement: [],
        killMovement: "same",
    },
    "b-pawn": {
        movement: [["+1", "+0"]],
        firstMovement: [["+2", "+0"]],
        killMovement: [["+1", "+1"], ["+1", "-1"]],
    },
    "": {
        movement: [],
        firstMovement: [],
        killMovement: [],
    },
};

export default chessRules;