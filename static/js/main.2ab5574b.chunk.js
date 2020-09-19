(this.webpackJsonponline_chess=this.webpackJsonponline_chess||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),c=n(6),r=n.n(c),s=(n(12),n(13),n(1)),l=(n(14),n(4)),i={"w-king":"\u2654","w-queen":"\u2655","w-rook":"\u2656","w-bishop":"\u2657","w-knight":"\u2658","w-pawn":"\u2659","b-king":"\u265a","b-queen":"\u265b","b-rook":"\u265c","b-bishop":"\u265d","b-knight":"\u265e","b-pawn":"\u265f","":""},u={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return u.Android()||u.BlackBerry()||u.iOS()||u.Opera()||u.Windows()}},m=u;function v(e){var t=e.chessCell,n=e.rowIndex,o=e.columnIndex,c=e.selectAndMoveChessCell,r=(n+o)%2?"chess-cell-light_background":"chess-cell-dark_background",l=Object(s.a)(t,2),u=l[0],v=l[1],f="s"===v?"chess-cell-selected":"";f="m"===v?"chess-cell-move-selected":f,f="h"===v?"chess-cell-hit-selected":f;var d="chess-cell ".concat(r," ").concat(f);return a.a.createElement("div",{className:d,onClick:function(e){e.preventDefault(),null===m.any()&&c(n,o)},onTouchStart:function(e){e.preventDefault(),m.any()&&c(n,o)}},i[u])}function f(e){var t=e.chessRow,n=e.rowIndex,o=e.selectAndMoveChessCell,c=t.map((function(e,t){return a.a.createElement(v,{key:t,chessCell:e,rowIndex:n,columnIndex:t,selectAndMoveChessCell:o})}));return a.a.createElement("div",{className:"chess-row"},c)}console.log("isMobile: ",m.any());var d={"w-king":{movement:[["+1","+1"],["-1","-1"],["+1","-1"],["-1","+1"],["+1","+0"],["-1","+0"],["+0","+1"],["+0","-1"]],firstMovement:[],killMovement:"same"},"w-queen":{movement:[["+x","+x"],["-x","-x"],["+x","-x"],["-x","+x"],["+x","+0"],["-x","+0"],["+0","+x"],["+0","-x"]],firstMovement:[],killMovement:"same"},"w-rook":{movement:[["+x","+0"],["-x","+0"],["+0","+x"],["+0","-x"]],firstMovement:[],killMovement:"same"},"w-bishop":{movement:[["+x","+x"],["-x","-x"],["+x","-x"],["-x","+x"]],firstMovement:[],killMovement:"same"},"w-knight":{movement:[["+2","+1"],["+2","-1"],["-2","+1"],["-2","-1"],["+1","+2"],["+1","-2"],["-1","+2"],["-1","-2"]],firstMovement:[],killMovement:"same"},"w-pawn":{movement:[["-1","+0"]],firstMovement:[["-2","+0"]],killMovement:[["-1","+1"],["-1","-1"]]},"b-king":{movement:[["+1","+1"],["-1","-1"],["+1","-1"],["-1","+1"],["+1","+0"],["-1","+0"],["+0","+1"],["+0","-1"]],firstMovement:[],killMovement:"same"},"b-queen":{movement:[["+x","+x"],["-x","-x"],["+x","-x"],["-x","+x"],["+x","+0"],["-x","+0"],["+0","+x"],["+0","-x"]],firstMovement:[],killMovement:"same"},"b-rook":{movement:[["+x","+0"],["-x","+0"],["+0","+x"],["+0","-x"]],firstMovement:[],killMovement:"same"},"b-bishop":{movement:[["+x","+x"],["-x","-x"],["+x","-x"],["-x","+x"]],firstMovement:[],killMovement:"same"},"b-knight":{movement:[["+2","+1"],["+2","-1"],["-2","+1"],["-2","-1"],["+1","+2"],["+1","-2"],["-1","+2"],["-1","-2"]],firstMovement:[],killMovement:"same"},"b-pawn":{movement:[["+1","+0"]],firstMovement:[["+2","+0"]],killMovement:[["+1","+1"],["+1","-1"]]},"":{movement:[],firstMovement:[],killMovement:[]}},b=new WebSocket("wss://online-chess-server.herokuapp.com/");b.sendObject=function(e){b.send(JSON.stringify(e))},b.addEventListener("open",(function(e){console.log("[open] Connection established")})),b.addEventListener("message",(function(e){console.log("[message] Data received from server: ".concat(e.data))})),b.addEventListener("close",(function(e){e.wasClean?console.log("[close] Connection closed cleanly, code=".concat(e.code," reason=").concat(e.reason)):console.log("[close] Connection died")})),b.addEventListener("error",(function(e){console.log("[error] ".concat(e.message)),b=new WebSocket("ws://localhost:1337")}));var h=b,g={from:null,to:null};function p(e,t){for(var n=Object(s.a)(e,2),o=n[0],a=n[1],c=Object(s.a)(t,2),r=c[0],l=c[1],i=r,u=l,m=[],v=function(e){i=i.replace("x",e.toString()),u=u.replace("x",e.toString());var t=function(e,t){var n=Object(s.a)(e,2),o=n[0],a=n[1],c=Object(s.a)(t,2),r=c[0],l=c[1],i=r.split(""),u=Object(s.a)(i,2),m=u[0],v=u[1],f=l.split(""),d=Object(s.a)(f,2),b=d[0],h=d[1],g=o,p=a;return g="+"===m?o+parseInt(v):o-parseInt(v),p="+"===b?a+parseInt(h):a-parseInt(h),g>7||p>7||g<0||p<0?null:[g,p]}([o,a],[i,u]);if(null===t)return"break";(m=m.filter((function(e){return!(e[0]===t[0]&&e[1]===t[1])}))).push(t),i=r,u=l},f=0;f<8;f++){if("break"===v(f))break}return m}var x=function(e){return e.map((function(e){return e.map((function(e){return[e[0],"",e[2]]}))}))},w=function(e){var t=[-1,-1];return t[0]=e.findIndex((function(e){var n=e.findIndex((function(e){return"s"===e[1]}));return-1!==n&&(t[1]=n,!0)})),t},O=function(e,t,n,o,a,c,r){var i=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null,u=x(n),m=w(n),v=Object(s.a)(m,2),f=v[0],b=v[1],O=e===f&&t===b,k=-1!==b&&-1!==f,E=u[e][t][0].match(/^\s*$/);if(O)console.log("chess cell deselected");else if(k)"h"!==n[e][t][1]&&"m"!==n[e][t][1]||(console.log("move the selected chess piece if it can"),g.to={row:e,column:t},null===i&&(console.log("Happened"),h.sendObject({type:"chess_move",move:g,game:r})),u[e][t][0]=u[f][b][0],u[f][b][0]="",!0===n[f][b][2]&&(u[f][b][2]=!1),c("w"===a?"b":"w"));else if(E)console.log("empty chess cell non selectable");else if(console.log("non empty chess cell selected"),a===u[e][t][0].split("-")[0]){u[e][t][1]="s",g.from={row:e,column:t};var j=d[u[e][t][0]],M=j.movement,C=j.firstMovement,y=j.killMovement;console.log(e,t);var S=Object(l.a)(M);u[e][t][2]&&S.push.apply(S,Object(l.a)(C)),S.forEach((function(n){var o=p([e,t],n),a=!1;o.forEach((function(n){var o=Object(s.a)(n,2),c=o[0],r=o[1];if("s"!==u[c][r][1])return""===u[c][r][0]||a?void(a||(u[c][r][1]="m")):(u[c][r][0].split("-")[0]!==u[e][t][0].split("-")[0]&&"same"===y&&(u[c][r][1]="h"),void(a=!0))}))})),"same"!==y&&y.forEach((function(n){var o=p([e,t],n),a=!1;o.forEach((function(n){var o=Object(s.a)(n,2),c=o[0],r=o[1];"s"!==u[c][r][1]&&(""===u[c][r][0]||a||(u[c][r][0].split("-")[0]!==u[e][t][0].split("-")[0]&&(u[c][r][1]="h"),a=!0))}))}))}o(u)},k=[];function E(e){var t=e.chessBoard,n=e.setChessBoard,c=e.turn,r=e.setTurn,l=e.gameID,i=e.team,u=e.gameOver,m=function(e,o){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;u||(null!==a||i===c)&&O(e,o,t,n,c,r,l,a)};Object(o.useEffect)((function(){function e(e){var t=e.data;if(t=JSON.parse(t),console.log(t),"chess_move"===t.type){var n=t.move;m(n.from.row,n.from.column,"from_server"),k.push([n.to.row,n.to.column])}}return h.addEventListener("message",e),function(){h.removeEventListener("message",e)}})),Object(o.useEffect)((function(){if(k.length>0){var e=k.shift(),t=Object(s.a)(e,2),n=t[0],o=t[1];m(n,o,"from_server")}}),[t]);var v=t.map((function(e,t){return a.a.createElement(f,{key:t,chessRow:e,rowIndex:t,selectAndMoveChessCell:m})}));return a.a.createElement("div",{className:"chess-board"},v)}function j(e){var t=e.gameID,n=e.defaultChessBoard,c=e.defaultTurn,r=e.team,l=e.gameOver,i=e.setGameOver,u=e.setWinner,m=Object(o.useState)(n),v=Object(s.a)(m,2),f=v[0],d=v[1],b=Object(o.useState)(c),h=Object(s.a)(b,2),g=h[0],p=h[1];console.log(f),Object(o.useEffect)((function(){var e=!1,t=!1;f.forEach((function(n){n.forEach((function(n){"b-king"===n[0]?t=!0:"w-king"===n[0]&&(e=!0)}))})),e&&t||(e?(i(!0),u("w")):t&&(i(!0),u("b")))}),[f]);return a.a.createElement("div",{className:"chess"},a.a.createElement(E,{turn:g,setTurn:p,chessBoard:f,setChessBoard:d,gameID:t,team:r,gameOver:l}),a.a.createElement("div",{className:"dead-pieces"}),a.a.createElement("div",{className:"chess-turn"},"w"===g?"white ":"black ",g===r&&"Your Turn",l&&"Game Over"),a.a.createElement("div",{className:"reset-chess"},a.a.createElement("button",{onClick:function(){return d(n),void p("w")}},"Reset")))}function M(e){var t=e.createRoom,n=e.joinRoom,c=Object(o.useState)(""),r=Object(s.a)(c,2),l=r[0],i=r[1],u=Object(o.useState)("w"),m=Object(s.a)(u,2),v=m[0],f=m[1];return a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){t(v)}},"Create Room"),a.a.createElement("input",{type:"text",value:l,onChange:function(e){var t=e.target.value;return i(t)}}),a.a.createElement("button",{onClick:function(){n(parseInt(l),v)}},"Join Room"),a.a.createElement("div",null,"Team:"),a.a.createElement("div",null,a.a.createElement("select",{onChange:function(e){var t=e.target.value;return f(t)},value:v},a.a.createElement("option",{value:"w"},"White"),a.a.createElement("option",{value:"b"},"Black"))))}function C(){var e=Object(o.useState)(null),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(o.useState)(null),l=Object(s.a)(r,2),i=l[0],u=l[1],m=Object(o.useState)(null),v=Object(s.a)(m,2),f=v[0],d=v[1],b=Object(o.useState)(null),g=Object(s.a)(b,2),p=g[0],x=g[1],w=Object(o.useState)(null),O=Object(s.a)(w,2),k=O[0],E=O[1],C=Object(o.useState)(!1),y=Object(s.a)(C,2),S=y[0],I=y[1],N=Object(o.useState)(null),B=Object(s.a)(N,2),A=B[0],_=B[1];console.log(f,p),Object(o.useEffect)((function(){null===i&&h.addEventListener("open",(function(){h.sendObject({type:"connection"})}))}),[i]),Object(o.useEffect)((function(){function e(e){var t=e.data;t=JSON.parse(t),console.log(t),"connection"===t.type?u(t.id):"game_room"===t.type&&(c(t.id),d(t.board),x(t.turn),E(t.team),console.log(t.team))}return null===n&&h.addEventListener("message",e),function(){h.removeEventListener("message",e)}}),[n]);return a.a.createElement("div",{className:"rows game ".concat(S?"game-end":"")},a.a.createElement("div",{className:"row no-flex test test-blue status"},S&&("w"===A?"white is winner":"black is winner")),a.a.createElement("div",{className:"row no-flex test test-blue status"},null!==i&&"current user id: ".concat(i)),a.a.createElement("div",{className:"row no-flex test test-blue"},null!==n&&null!==p&&null!==f&&null!==k&&a.a.createElement(a.a.Fragment,null,"GameID: ".concat(n),a.a.createElement(j,{gameID:n,defaultTurn:p,defaultChessBoard:f,team:k,gameOver:S,setGameOver:I,winner:A,setWinner:_}))),a.a.createElement("div",{className:"row no-flex column-center test test-blue"},null===n&&a.a.createElement(M,{createRoom:function(e){null!==i&&h.sendObject({type:"create_room",team:e})},joinRoom:function(e,t){null!==i&&h.sendObject({type:"join_room",game_id:e,team:t})}})))}var y=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(C,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.2ab5574b.chunk.js.map