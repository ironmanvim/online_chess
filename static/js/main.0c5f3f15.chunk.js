(this.webpackJsonponline_chess=this.webpackJsonponline_chess||[]).push([[0],[,,,,,function(e,n,t){e.exports=t(13)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),c=t(4),r=t.n(c),l=(t(10),t(11),t(1)),s=(t(12),t(2)),i={"w-king":"\u2654","w-queen":"\u2655","w-rook":"\u2656","w-bishop":"\u2657","w-knight":"\u2658","w-pawn":"\u2659","b-king":"\u265a","b-queen":"\u265b","b-rook":"\u265c","b-bishop":"\u265d","b-knight":"\u265e","b-pawn":"\u265f","":""},u={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return u.Android()||u.BlackBerry()||u.iOS()||u.Opera()||u.Windows()}},m=u;function v(e){var n=e.chessCell,t=e.rowIndex,o=e.columnIndex,c=e.selectAndMoveChessCell,r=(t+o)%2?"chess-cell-light_background":"chess-cell-dark_background",s=Object(l.a)(n,2),u=s[0],v=s[1],f="s"===v?"chess-cell-selected":"";f="m"===v?"chess-cell-move-selected":f,f="h"===v?"chess-cell-hit-selected":f;var d="chess-cell ".concat(r," ").concat(f);return a.a.createElement("div",{className:d,onClick:function(e){e.preventDefault(),null===m.any()&&c(t,o)},onTouchStart:function(e){e.preventDefault(),m.any()&&c(t,o)}},i[u])}function f(e){var n=e.chessRow,t=e.rowIndex,o=e.selectAndMoveChessCell,c=n.map((function(e,n){return a.a.createElement(v,{key:n,chessCell:e,rowIndex:t,columnIndex:n,selectAndMoveChessCell:o})}));return a.a.createElement("div",{className:"chess-row"},c)}console.log("isMobile: ",m.any());var d={"w-king":{movement:[["+1","+1"],["-1","-1"],["+1","-1"],["-1","+1"],["+1","+0"],["-1","+0"],["+0","+1"],["+0","-1"]],firstMovement:[],killMovement:"same"},"w-queen":{movement:[["+x","+x"],["-x","-x"],["+x","-x"],["-x","+x"],["+x","+0"],["-x","+0"],["+0","+x"],["+0","-x"]],firstMovement:[],killMovement:"same"},"w-rook":{movement:[["+x","+0"],["-x","+0"],["+0","+x"],["+0","-x"]],firstMovement:[],killMovement:"same"},"w-bishop":{movement:[["+x","+x"],["-x","-x"],["+x","-x"],["-x","+x"]],firstMovement:[],killMovement:"same"},"w-knight":{movement:[["+2","+1"],["+2","-1"],["-2","+1"],["-2","-1"],["+1","+2"],["+1","-2"],["-1","+2"],["-1","-2"]],firstMovement:[],killMovement:"same"},"w-pawn":{movement:[["-1","+0"]],firstMovement:[["-2","+0"]],killMovement:[["-1","+1"],["-1","-1"]]},"b-king":{movement:[["+1","+1"],["-1","-1"],["+1","-1"],["-1","+1"],["+1","+0"],["-1","+0"],["+0","+1"],["+0","-1"]],firstMovement:[],killMovement:"same"},"b-queen":{movement:[["+x","+x"],["-x","-x"],["+x","-x"],["-x","+x"],["+x","+0"],["-x","+0"],["+0","+x"],["+0","-x"]],firstMovement:[],killMovement:"same"},"b-rook":{movement:[["+x","+0"],["-x","+0"],["+0","+x"],["+0","-x"]],firstMovement:[],killMovement:"same"},"b-bishop":{movement:[["+x","+x"],["-x","-x"],["+x","-x"],["-x","+x"]],firstMovement:[],killMovement:"same"},"b-knight":{movement:[["+2","+1"],["+2","-1"],["-2","+1"],["-2","-1"],["+1","+2"],["+1","-2"],["-1","+2"],["-1","-2"]],firstMovement:[],killMovement:"same"},"b-pawn":{movement:[["+1","+0"]],firstMovement:[["+2","+0"]],killMovement:[["+1","+1"],["+1","-1"]]},"":{movement:[],firstMovement:[],killMovement:[]}},h=new WebSocket("ws://online-chess-server.herokuapp.com/");h.sendObject=function(e){h.send(JSON.stringify(e))},h.addEventListener("open",(function(e){console.log("[open] Connection established")})),h.addEventListener("message",(function(e){console.log("[message] Data received from server: ".concat(e.data))})),h.addEventListener("close",(function(e){e.wasClean?console.log("[close] Connection closed cleanly, code=".concat(e.code," reason=").concat(e.reason)):console.log("[close] Connection died")})),h.addEventListener("error",(function(e){console.log("[error] ".concat(e.message)),h=new WebSocket("ws://localhost:1337")}));var b=h,g={from:null,to:null};function p(e,n){for(var t=Object(l.a)(e,2),o=t[0],a=t[1],c=Object(l.a)(n,2),r=c[0],s=c[1],i=r,u=s,m=[],v=function(e){i=i.replace("x",e.toString()),u=u.replace("x",e.toString());var n=function(e,n){var t=Object(l.a)(e,2),o=t[0],a=t[1],c=Object(l.a)(n,2),r=c[0],s=c[1],i=r.split(""),u=Object(l.a)(i,2),m=u[0],v=u[1],f=s.split(""),d=Object(l.a)(f,2),h=d[0],b=d[1],g=o,p=a;return g="+"===m?o+parseInt(v):o-parseInt(v),p="+"===h?a+parseInt(b):a-parseInt(b),g>7||p>7||g<0||p<0?null:[g,p]}([o,a],[i,u]);if(null===n)return"break";(m=m.filter((function(e){return!(e[0]===n[0]&&e[1]===n[1])}))).push(n),i=r,u=s},f=0;f<8;f++){if("break"===v(f))break}return m}var x=function(e){return e.map((function(e){return e.map((function(e){return[e[0],"",e[2]]}))}))},w=function(e){var n=[-1,-1];return n[0]=e.findIndex((function(e){var t=e.findIndex((function(e){return"s"===e[1]}));return-1!==t&&(n[1]=t,!0)})),n},k=function(e,n,t,o,a,c,r){var i=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null,u=x(t),m=w(t),v=Object(l.a)(m,2),f=v[0],h=v[1],k=e===f&&n===h,E=-1!==h&&-1!==f,O=u[e][n][0].match(/^\s*$/);if(k)console.log("chess cell deselected");else if(E)"h"!==t[e][n][1]&&"m"!==t[e][n][1]||(console.log("move the selected chess piece if it can"),g.to={row:e,column:n},null===i&&(console.log("Happened"),b.sendObject({type:"chess_move",move:g,game:r})),u[e][n][0]=u[f][h][0],u[f][h][0]="",!0===t[f][h][2]&&(u[f][h][2]=!1),c("w"===a?"b":"w"));else if(O)console.log("empty chess cell non selectable");else if(console.log("non empty chess cell selected"),a===u[e][n][0].split("-")[0]){u[e][n][1]="s",g.from={row:e,column:n};var j=d[u[e][n][0]],M=j.movement,C=j.firstMovement,y=j.killMovement;console.log(e,n);var I=Object(s.a)(M);u[e][n][2]&&I.push.apply(I,Object(s.a)(C)),I.forEach((function(t){var o=p([e,n],t),a=!1;o.forEach((function(t){var o=Object(l.a)(t,2),c=o[0],r=o[1];if("s"!==u[c][r][1])return""===u[c][r][0]||a?void(a||(u[c][r][1]="m")):(u[c][r][0].split("-")[0]!==u[e][n][0].split("-")[0]&&"same"===y&&(u[c][r][1]="h"),void(a=!0))}))})),"same"!==y&&y.forEach((function(t){var o=p([e,n],t),a=!1;o.forEach((function(t){var o=Object(l.a)(t,2),c=o[0],r=o[1];"s"!==u[c][r][1]&&(""===u[c][r][0]||a||(u[c][r][0].split("-")[0]!==u[e][n][0].split("-")[0]&&(u[c][r][1]="h"),a=!0))}))}))}o(u)},E=[];function O(e){var n=e.chessBoard,t=e.setChessBoard,c=e.turn,r=e.setTurn,s=e.gameID,i=e.team,u=function(e,o){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;(null!==a||i===c)&&k(e,o,n,t,c,r,s,a)};Object(o.useEffect)((function(){function e(e){var n=e.data;if(n=JSON.parse(n),console.log(n),"chess_move"===n.type){var t=n.move;u(t.from.row,t.from.column,"from_server"),E.push([t.to.row,t.to.column])}}return b.addEventListener("message",e),function(){b.removeEventListener("message",e)}})),Object(o.useEffect)((function(){if(E.length>0){var e=E.shift(),n=Object(l.a)(e,2),t=n[0],o=n[1];u(t,o,"from_server")}}),[n]);var m=n.map((function(e,n){return a.a.createElement(f,{key:n,chessRow:e,rowIndex:n,selectAndMoveChessCell:u})}));return a.a.createElement("div",{className:"chess-board"},m)}function j(e){var n=e.gameID,t=e.defaultChessBoard,c=e.defaultTurn,r=e.team,s=Object(o.useState)(t),i=Object(l.a)(s,2),u=i[0],m=i[1],v=Object(o.useState)(c),f=Object(l.a)(v,2),d=f[0],h=f[1];console.log(u);return a.a.createElement("div",{className:"chess"},a.a.createElement(O,{turn:d,setTurn:h,chessBoard:u,setChessBoard:m,gameID:n,team:r}),a.a.createElement("div",{className:"dead-pieces"}),a.a.createElement("div",{className:"chess-turn"},"w"===d?"white":"black",d===r&&"Your Turn"),a.a.createElement("div",{className:"reset-chess"},a.a.createElement("button",{onClick:function(){return m(t),void h("w")}},"Reset")))}function M(e){var n=e.createRoom,t=e.joinRoom,c=Object(o.useState)(""),r=Object(l.a)(c,2),s=r[0],i=r[1],u=Object(o.useState)("w"),m=Object(l.a)(u,2),v=m[0],f=m[1];return a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){n(v)}},"Create Room"),a.a.createElement("input",{type:"text",value:s,onChange:function(e){var n=e.target.value;return i(n)}}),a.a.createElement("button",{onClick:function(){t(parseInt(s),v)}},"Join Room"),a.a.createElement("div",null,"Team:"),a.a.createElement("div",null,a.a.createElement("select",{onChange:function(e){var n=e.target.value;return f(n)},value:v},a.a.createElement("option",{value:"w"},"White"),a.a.createElement("option",{value:"b"},"Black"))))}function C(){var e=Object(o.useState)(null),n=Object(l.a)(e,2),t=n[0],c=n[1],r=Object(o.useState)(null),s=Object(l.a)(r,2),i=s[0],u=s[1],m=Object(o.useState)(null),v=Object(l.a)(m,2),f=v[0],d=v[1],h=Object(o.useState)(null),g=Object(l.a)(h,2),p=g[0],x=g[1],w=Object(o.useState)(null),k=Object(l.a)(w,2),E=k[0],O=k[1];console.log(f,p),Object(o.useEffect)((function(){null===i&&b.addEventListener("open",(function(){b.sendObject({type:"connection"})}))}),[i]),Object(o.useEffect)((function(){function e(e){var n=e.data;n=JSON.parse(n),console.log(n),"connection"===n.type?u(n.id):"game_room"===n.type&&(c(n.id),d(n.board),x(n.turn),O(n.team),console.log(n.team))}return null===t&&b.addEventListener("message",e),function(){b.removeEventListener("message",e)}}),[t]);return a.a.createElement("div",{className:"rows game"},a.a.createElement("div",{className:"row no-flex test test-blue status"},null!==i&&"current user id: ".concat(i)),a.a.createElement("div",{className:"row no-flex test test-blue"},null!==t&&null!==p&&null!==f&&null!==E&&a.a.createElement(a.a.Fragment,null,"GameID: ".concat(t),a.a.createElement(j,{gameID:t,defaultTurn:p,defaultChessBoard:f,team:E}))),a.a.createElement("div",{className:"row no-flex column-center test test-blue"},null===t&&a.a.createElement(M,{createRoom:function(e){null!==i&&b.sendObject({type:"create_room",team:e})},joinRoom:function(e,n){null!==i&&b.sendObject({type:"join_room",game_id:e,team:n})}})))}var y=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(C,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.0c5f3f15.chunk.js.map