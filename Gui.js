(async () => {
_blsbu = "https://www.googleapis.com";
var wfcall = window.fetch.call;
window.fetch.call = function() {
if (!arguments[1].includes("s.blooket.com/rc"))
return wfcall.apply(this, arguments);
}
if (console.log("%c Zip´s Blooket Hacks / Cheats %c\nModified by Zip-On on GitHub", "color: #0bc2cf; font-size: 3rem", "color: #8000ff; font-size: 1rem"), console.log("%c	gui.js", "color: #0bc2cf; font-size: 1rem"), console.log("%c	Star the github repo!%c  https://github.com/Zip-On/Blooket-Cheat-GUI-aka-Swaggers-GUI", "color: #ffd000; font-size: 1rem", ""), document.querySelector("script[src*='bfs/index.js']") && !window.clearId) {Modified by Zip-On on GitHub", "color: #0bc2cf; font-size: 3rem", "color: #8000ff; font-size: 1rem"), console.log("%c	gui.js", "color: #0bc2cf; font-size: 1rem"), console.log("%c	Star the github repo!%c  https://github.com/Zip-On/Blooket-Cheat-GUI-aka-Swaggers-GUI", "color: #ffd000; font-size: 1rem", ""), document.querySelector("script[src*='bfs/index.js']") && !window.clearId) {
for (var e, t, a, o, r, i, n, s, e = document.createElement("iframe"), t = (document.body.appendChild(e), window.clearId = window.setInterval(() => {}, 0)); t--;)
e.contentWindow.clearInterval.call(window, t);
e.remove()
}
(() => {
const link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('type', 'text/css');
link.setAttribute('href', 'https://fonts.googleapis.com/css?family=Nunito:400,700|Titan+One|Creepster|Satisfy|Eczar:700');
document.head.appendChild(link);
})()
function l(e, t = {}, ...a) {
var o = document.createElement(e);
if ("object" == typeof t.style) {
let r = "";
for (let i in t.style)
r += `${i.replace(/[A-Z]/g, e => "-" + e.toLowerCase())}: ${t.style[i]}; `;
t.style = r
}
for (let n in t)
o[n] = t[n];
for (let s of a)
o.append(s);
return o
}
let c = {
data: null,
setItem(e, t) {
return e.split(".").reduce((e, a, o, r) => (e[a] = (e[a] ? e[a] : {}), ++o == r.length && (e[a] = t), e[a]), this.data),
localStorage.setItem("ZIPGUISettings", JSON.stringify(this.data)),
this.data
},
deleteItem(e) {
return e.split(".").reduce((e, t, a, o) => (++a == o.length && delete e[t], e[t]), this.data),
localStorage.setItem("ZIPGUISettings", JSON.stringify(this.data)),
this.data
},
setData(e) {
this.data = e,
localStorage.setItem("ZIPGUISettings", JSON.stringify(this.data))
}
};
try {
for (let d of (c.data = JSON.parse(localStorage.getItem("ZIPGUISettings") || "{}"), ["backgroundColor", "cheatList", "contentBackground", "defaultButton", "disabledButton", "enabledButton", "infoColor", "inputColor", "textColor"]))
c.data[d] && (c.setItem("theme." + d, c.data[d]), c.deleteItem(d))
} catch {
c.setData({})
}
let p,
u,
h,
m,
$,
g,
y,
b,
v,
_ = l("div", {
id: "ZIPGUI",
style: {
top: Math.max(10, window.innerHeight - 600) / 2 + "px",
left: Math.max(10, window.innerWidth - 1e3) / 2 + "px",
transform: `scale(${c.data.scale})`,
position: "fixed",
height: "80%",
width: "80%",
maxHeight: "600px",
maxWidth: "1000px",
zIndex: "999",
display: "block"
}
}, p = l("style", {
id: "variables",
innerHTML: `:root {--backgroundColor: ${c.data?.theme?.backgroundColor || "rgb(11, 194, 207)"};--infoColor: ${c.data?.theme?.infoColor || "#9a49aa"};--cheatList: ${c.data?.theme?.cheatList || "#9a49aa"};--defaultButton: ${c.data?.theme?.defaultButton || "#9a49aa"};--disabledButton: ${c.data?.theme?.disabledButton || "#A02626"};--enabledButton: ${c.data?.theme?.enabledButton || "#47A547"};--textColor: ${c.data?.theme?.textColor || "white"};--inputColor: ${c.data?.theme?.inputColor || "#7a039d"};--contentBackground: ${c.data?.theme?.contentBackground || "rgb(64, 17, 95)"};}`
}), l("style", {
innerHTML: '.alertList::-webkit-scrollbar{display:none;}.alertList{-ms-overflow-style: none;scrollbar-width: none;}.contentWrapper::-webkit-scrollbar{display:none;}.contentWrapper{-ms-overflow-style: none;scrollbar-width: none;}.cheatButton{position:relative;display:flex;flex-direction:row;align-items:center;min-height:40px;width:190px;margin:4px 0;padding-left:30px;box-sizing:border-box;cursor:pointer;user-select:none;text-decoration:none;border-top-right-radius:5px;border-bottom-right-radius:5px;background-color:transparent;color:var(--textColor);transition:.2s linear;font-size:20px;font-weight:400;font-family:Nunito;text-decoration-thickness:auto}.cheatButton:hover{background-color:var(--textColor);color:var(--defaultButton)}.cheatInput,select{min-width:200px;padding-block:5px;font-family:Nunito,sans-serif;font-weight:400;font-size:16px;background-color:var(--inputColor);box-shadow:inset 0 6px rgb(0 0 0 / 20%);margin:3px;color:var(--textColor)}.bigButton:hover{filter:brightness(110%);transform:translateY(-2px)}.bigButton:active{transform:translateY(2px)}.cheatList::-webkit-scrollbar{width:10px}.cheatList::-webkit-scrollbar-track{background:var(--cheatList)}.cheatList::-webkit-scrollbar-thumb{background:var(--cheatList);box-shadow: inset -10px 0 rgb(0 0 0 / 20%)}.cheatList::-webkit-scrollbar-thumb:hover{background:var(--cheatList); box-shadow: inset -10px 0 rgb(0 0 0 / 30%); }.scriptButton:hover{filter:brightness(120%)}.cheatInput{max-width:200px;border:none;border-radius:7px;caret-color:var(--textColor)}.cheatInput::placeholder{color:var(--textColor)}.cheatInput:focus,select:focus{outline:0}.cheatInput::-webkit-inner-spin-button,.cheatInput::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.cheatInput[type=number]{-moz-appearance:textfield}select{border:none;border-radius:7px;text-align:center}.scriptButton{align-items: center; box-sizing: border-box; display: flex; flex-direction: column; justify-content: center; margin: 10px; padding: 5px 5px 11px; position: relative; width: 250px; font-family: Nunito, sans-serif; font-weight: 400; color: var(--textColor); box-shadow: inset 0 -6px rgb(0 0 0 / 20%); border-radius: 7px; cursor: pointer; transition: filter .25s;}.tooltip::after {content: "";position: absolute;width: 10px;height: 10px;background-color: inherit;top: -5px;left: 50%;margin-left: -6px;transform: rotate(135deg)}'
}), u = l("div", {
style: {
width: "100%",
height: "100%",
position: "relative",
outline: "3px solid #3a3a3a",
borderRadius: "15px",
overflow: "hidden"
}
}, l("div", {
id: "background",
style: {
display: "block",
top: "0",
left: "0",
height: "100%",
overflowY: "hidden",
overflowX: "hidden",
position: "absolute",
width: "100%",
background: "var(--backgroundColor)",
visibility: "visible"
}
}, l("div", {
id: "backgroundImage",
style: {
backgroundImage: "url(https://ac.blooket.com/dashboard/65a43218fd1cabe52bdf1cda34613e9e.png)",
display: "block",
height: "200%",
position: "absolute",
width: "200%",
top: "50%",
left: "50%",
backgroundPositionX: "-100px",
backgroundPositionY: "-100px",
backgroundSize: "550px",
visibility: "visible",
transform: "translate(-50%,-50%) rotate(15deg)",
appearance: "none",
opacity: "0.175"
}
})), m = l("div", {
id: "controls",
style: {
display: "flex",
alignItems: "center",
justifyContent: "center",
paddingBottom: "8px",
paddingInline: "15px",
position: "absolute",
left: "220px",
top: "0",
visibility: "visible",
zIndex: "5",
height: "52px",
width: "max-content",
background: "var(--infoColor)",
boxShadow: "inset 0 -8px rgb(0 0 0 / 20%), 0 0 4px rgb(0 0 0 / 15%)",
borderBottomRightRadius: "10px",
color: "var(--textColor)",
fontFamily: "Nunito, sans-serif",
fontWeight: "700",
userSelect: "text"
},
innerText: ([{
ctrl: e,
shift: t,
alt: a,
key: o
}, {
ctrl: r,
shift: i,
alt: n,
key: s
}] = [c.data.hide || {
ctrl: !0,
key: "e"
}, c.data.close || {
ctrl: !0,
key: "x"
}], `${[e && "Ctrl", t && "Shift", a && "Alt", o && o.toUpperCase()].filter(Boolean).join(" + ")} to hide | ${[r && "Ctrl", i && "Shift", n && "Alt", s && s.toUpperCase()].filter(Boolean).join(" + ")} for quick disable Click and drag here`),
update: ({
ctrl: e,
shift: t,
alt: a,
key: o
} = {
ctrl: !0,
key: "e"
}, {
ctrl: r,
shift: i,
alt: n,
key: s
} = {
ctrl: !0,
key: "x"
}) => m.innerText = `${[e && "Ctrl", t && "Shift", a && "Alt", o && o.toUpperCase()].filter(Boolean).join(" + ")} to hide | ${[r && "Ctrl", i && "Shift", n && "Alt", s && s.toUpperCase()].filter(Boolean).join(" + ")} for quick disable Click and drag here`
}), l("div", {
}), $ = l("div", {
id: "controlButtons",
style: {
display: "flex",
alignItems: "center",
justifyContent: "center",
position: "absolute",
right: "0",
bottom: "0",
visibility: "visible",
zIndex: "5",
height: "55px",
width: "165px",
background: "#none",
borderLeft: "3px solid black",
borderTop: "3px solid black",
borderTopLeftRadius: "10px",
color: "white",
fontFamily: "Nunito, sans-serif",
fontWeight: "700",
userSelect: "text",
overflow: "hidden",
pointerEvents: "all"
}
}, g = l("button", {
style: {
height: "55px",
width: "55px",
fontFamily: "Nunito",
color: "white",
backgroundColor: "#00a0ff",
border: "none",
fontSize: "2rem",
cursor: "move"
},
innerHTML: "✥"
}), l("button", {
style: {
height: "55px",
width: "55px",
fontFamily: "Nunito",
color: "white",
backgroundColor: "grey",
border: "none",
fontSize: "2rem",
fontWeight: "bolder",
cursor: "pointer"
},
innerHTML: "-",
onclick: function() {
let e = !1;
return () => {
for (var t of [...u.children])
t != $ && (e ? t.style.display = t.style._display : (t.style._display = t.style.display, t.style.display = "none"));
u.style.height = e ? "100%" : "55px",
u.style.width = e ? "100%" : "165px",
_.style.top = parseInt(_.style.top) + (_.offsetHeight - 55) * (e ? -1 : 1) + "px",
_.style.left = parseInt(_.style.left) + (_.offsetWidth - 165) * (e ? -1 : 1) + "px",
_.style.pointerEvents = e ? "unset" : "none",
e = !e
}
}
()
}), l("button", {
style: {
height: "55px",
width: "55px",
fontFamily: "Nunito",
color: "white",
backgroundColor: "red",
border: "none",
fontSize: "2rem",
fontWeight: "bolder",
cursor: "pointer"
},
innerHTML: "X",
onclick: D
})), h = l("div", {
className: "cheatList",
style: {
overflowY: "scroll",
background: "var(--cheatList)",
boxShadow: "inset -10px 0 rgb(0 0 0 / 20%)",
zIndex: "5",
width: "220px",
position: "absolute",
top: "0",
left: "0",
height: "100%",
fontFamily: "Titan One",
color: "var(--textColor)",
fontSize: "40px",
textAlign: "center",
paddingTop: "20px",
userSelect: "none",
padding: "20px 10px 20px 0",
boxSizing: "border-box",
display: "flex",
flexDirection: "column"
},
innerHTML: '<span style="text-shadow: 1px 1px rgb(0 0 0 / 40%); font-size: 0.8em;">Zip´s Cheats<sup>v2.1</sup></span>'
}, l("a", {
className: "bigButton",
style: {
cursor: "pointer",
display: "block",
fontFamily: "Titan One",
margin: "20px auto 10px",
position: "relative",
transition: ".25s",
textDecoration: "none",
userSelect: "none",
visibility: "visible"
},
target: "_blank",
href: "#",
innerHTML: '<div style="background: rgba(0,0,0,.25); border-radius: 5px; display: block; width: 100%; height: 100%; left: 0; top: 0; position: absolute; transform: translateY(2px); width: 100%; transition: transform .6s cubic-bezier(.3,.7,.4,1)"></div> <div style="background-color: rgb(11, 194, 207); filter: brightness(.7); position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 5px;"></div> <div style="font-weight: 400; background-color: rgb(11, 194, 207); color: white; display: flex; flex-direction: row; align-items: center; justify-content: center; text-align: center; padding: 5px; border-radius: 5px; transform: translateY(-4px); transition: transform .6s cubic-bezier(.3,.7,.4,1)"> <div style="font-family: Titan One, sans-serif; color: white; font-size: 16px; text-shadow: 2px 2px rgb(0 0 0 / 20%); height: 40px; padding: 0 15px; display: flex; flex-direction: row; align-items: center; justify-content: center"> <img style="filter: drop-shadow(2px 2px 0 rgb(0 0 0 / 20%)); margin-right: 10px;" src="https://pbs.twimg.com/media/GrUoURrXQAAW6hV?format=png&name=240x240" width="35" height="35">  COMING SOON </div> </div>'
})), l("div", {
className: "contentWrapper",
style: {
position: "absolute",
left: "220px",
top: "70px",
overflowY: "scroll",
width: "calc(100% - 220px)",
height: "calc(100% - 70px)",
borderRadius: "7px"
}
}, l("div", {
id: "content",
style: {
position: "absolute",
inset: "27px 50px 50px 50px"
}
}, y = l("div", {
className: "tooltip",
style: {
position: "absolute",
top: "0",
left: "0",
backgroundColor: "black",
height: "fit-content",
maxWidth: "300px",
zIndex: "5",
borderRadius: "7.5px",
color: "white",
display: "flex",
justifyContent: "center",
alignItems: "center",
padding: "5px",
paddingInline: "15px",
pointerEvents: "none",
opacity: "0",
textAlign: "center"
},
innerText: "description"
}), b = l("div", {
style: {
alignItems: "center",
boxSizing: "border-box",
display: "flex",
flexDirection: "row",
flexWrap: "wrap",
justifyContent: "space-evenly",
padding: "20px 5px 20px",
position: "relative",
width: "100%",
fontFamily: "Nunito, sans-serif",
fontWeight: "400",
color: "var(--textColor)",
background: "var(--contentBackground)",
boxShadow: "inset 0 -6px rgb(0 0 0 / 20%)",
borderRadius: "7px"
}
}, v = l("div", {
className: "headerText",
style: {
boxSizing: "border-box",
display: "block",
height: "45px",
left: "-10px",
padding: "4px 4px 8px",
position: "absolute",
top: "-28px",
backgroundColor: "#ef7426",
boxShadow: "0 4px rgb(0 0 0 / 20%), inset 0 -4px rgb(0 0 0 / 20%)",
borderRadius: "7px"
}
}, l("div", {
style: {
alignItems: "center",
boxSizing: "border-box",
display: "flex",
height: "100%",
justifyContent: "center",
padding: "0 15px",
width: "100%",
fontFamily: "Titan One, sans-serif",
fontSize: "26px",
fontWeight: "400",
textShadow: "-1px -1px 0 #646464, 1px -1px 0 #646464, -1px 1px 0 #646464, 2px 2px 0 #646464",
color: "white",
background: "linear-gradient(#fcd843,#fcd843 50%,#feb31a 50.01%,#feb31a)",
borderRadius: "5px"
}
})))))));
for (let f of document.querySelectorAll("#ZIPGUI"))
f.remove();
function w(e, t, a, o) {
let r = l("div", {
className: "cheatButton",
innerHTML: ("string" == typeof t ? `<img style="height: 30px; margin-right: 5px" src="${t}">` : t || "") + e,
onclick: () => k(r.innerText, a, o)
});
return h.appendChild(r),
r.onclick
}
function insertElemBefore(name, imgSrc, a, o, elem) {
let r = l("div", {
className: "cheatButton",
innerHTML: ("string" == typeof imgSrc ? `<img style="height: 30px; margin-right: 5px" src="${imgSrc}">` : imgSrc || "") + name,
onclick: () => k(r.innerText, a, o)
});
return h.insertBefore(r, elem),
r.onclick
}
async function k(e, t, a) {
b.innerHTML = "",
v.firstChild.innerText = e + (a ? "" : " Cheats"),
b.append(v);
for (let o = 0; o < t.length; o++) {
let {
name: r,
description: i,
type: n,
inputs: s,
enabled: c,
run: d,
element: p
} = t[o];
if (!p) {
let u = l("div", {
className: "scriptButton",
style: {
background: "toggle" == n ? c ? "var(--enabledButton)" : "var(--disabledButton)" : "var(--defaultButton)"
}
}, l("div", {
className: "cheatName",
innerHTML: r
}));
if (u.dataset.description = i, u.onclick = (function({
target: e,
key: t
}) {
(e == u || e.classList.contains("cheatName") || "Enter" == t && e.classList.contains("cheatInput")) && (t = [...u.children].slice(1), d.apply(this, t.map(e => "number" == e.type ? parseInt("0" + e.value) : "SELECT" == e.nodeName ? JSON.parse(e.value) : e.data || e.value)), "toggle" == n && (u.style.background = this.enabled ? "var(--enabledButton)" : "var(--disabledButton)"), C.alerts?.[0].addLog(`${"toggle" == n ? this.enabled ? "Enabled" : "Disabled" : "Ran"} <strong>${this.name}</strong>` + (s?.length ? ` with inputs: (${t.map(e => "SELECT" == e.nodeName ? e.selectedOptions[0].innerText : e.value).join(", ")})` : ""), "toggle" == n ? this.enabled ? "var(--enabledButton)" : "var(--disabledButton)" : null))
}).bind(t[o]), s?.length)
for (let h = 0; h < s.length; h++) {
var {
name: m,
type: $,
options: g,
min: y,
max: _,
value: f
} = s[h];
let w;
try {
w = await ("function" == typeof g ? g?.() : g)
} catch {
w = []
}
if ("options" == $ && w?.length) {
let k = document.createElement("select");
w.forEach(e => {
var t = document.createElement("option");
t.value = JSON.stringify(e?.value || e),
t.innerHTML = e?.name || e,
k.appendChild(t)
}),
u.appendChild(k)
} else if ("function" == $) {
let S = document.createElement("input");
S.classList.add("cheatInput"),
S.placeholder = m,
S.style.textAlign = "center";
let x = (S.readOnly = !0, !1);
S.onclick = async () => {
x || (S.value = "Waiting for input...", x = !0, S.data = await s[h].function(e => S.value = e + "..."), x = !1, S.value = S.value.slice(0, -3))
},
u.appendChild(S)
} else(g = document.createElement("input")).classList.add("cheatInput"), "number" == $ && (g.type = "number", g.min = y, g.max = _, g.value = f || (null != y ? y : 0)), g.placeholder = m, g.style.textAlign = "center", g.onkeyup = u.onclick, u.appendChild(g)
}
t[o].element = u
}
b.appendChild(t[o].element)
}
}
document.body.appendChild(_);
let C = {
global: [{
name: "Auto Answer",
description: "Toggles auto answer on",
type: "toggle",
enabled: !1,
 null,
run: function() {
this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
var {
state: {
question: e,
stage: t,
feedback: a
},
props: {
client: {
question: o
}
}
} = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
let r = e || o;
try {
"typing" != r.qType ? ("feedback" === t || a ? document.querySelector('[class*="feedback"]')?.firstChild : [...document.querySelectorAll('[class*="answerContainer"]')][r.answers.map((e, t) => r.correctAnswers.includes(e) ? t : null).filter(e => null != e)[0]])?.click?.() : Object.values(document.querySelector("[class*='typingAnswerWrapper']"))[1].children._owner.stateNode.sendAnswer(r.answers[0])
} catch {}
}, 50))
}
}, {
name: "Player Swapper",
description: "Swaps all data between two players",
inputs: [{ name: "Player 1", type: "options", options() { return getPlayerOpts(); } }, { name: "Player 2", type: "options", options() { return getPlayerOpts(); } }],
run: function(p1, p2) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c", (data) => {
if(data[p1] && data[p2]) {
let temp = JSON.parse(JSON.stringify(data[p1]));
sn.props.liveGameController.setVal({ path: `c/${p1}`, val: data[p2] });
sn.props.liveGameController.setVal({ path: `c/${p2}`, val: temp });
}
});
}
}, {
name: "Leaderboard Scrambler",
description: "Randomizes scores for all players",
run: function() {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c", (data) => {
for(let p in data) {
let keys = Object.keys(data[p]);
keys.forEach(k => {
if(typeof data[p][k] === 'number' && k !== 'g' && k !== 'cr' && k !== 'd' && k !== 'f' && k !== 'w' && k !== 'xp' && k !== 'ca' && k !== 'coins' && k !== 'tokens') {
data[p][k] = Math.floor(Math.random() * 99999);
}
});
sn.props.liveGameController.setVal({ path: `c/${p}`, val: data[p] });
}
});
}
}, {
name: "Change Game Mode",
description: "Changes the host game mode",
inputs: [{ name: "Mode", type: "options", options: ["Racing", "Classic", "Factory", "Cafe", "Defense2", "Defense", "Royale", "Gold", "Brawl", "Hack", "Pirate", "Fish", "Dino", "Toy", "Rush"] }],
run: function(mode) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.setState({ settings: { type: mode } });
}
}, {
name: "Set Host Screen Text",
description: "Makes host screen filled with text",
inputs: [{ name: "Text", type: "text" }],
run: function(txt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/cr`, val: txt.repeat(500) });
}
}, {
name: "Flood Alert Box",
description: "Makes alert box filled with text",
inputs: [{ name: "Text", type: "text" }],
run: function(txt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c/", (data) => {
if(data) {
let p = Object.keys(data)[0];
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: `${p}:1,723,583,989,363${txt.repeat(100)}` });
}
});
}
}, {
name: "Send Ad Text",
description: "Sends text to override player blook",
inputs: [{ name: "Player", type: "options", options() { return getPlayerOpts(); } }, { name: "Text", type: "text" }],
run: function(p, txt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: `${p}:196` });
sn.client.blook = `Dog:${txt.repeat(200)}`;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/b`, val: `Dog:${txt.repeat(200)}` });
}
}, {
name: "Steal Player's Currency",
description: "Takes all currency from a player",
inputs: [{ name: "Player", type: "options", options() { return getPlayerOpts(); } }],
run: function(p) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c", (data) => {
if(data[p]) {
let amt = data[p].g || data[p].cr || data[p].d || data[p].f || data[p].xp || data[p].ca || data[p].t || 0;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: `${p}:swap:${amt}` });
}
});
}
}, {
name: "Set Currency",
description: "Sets your currency amount",
inputs: [{ name: "Amount", type: "number" }],
run: function(amt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}`, val: { ...sn.props.liveGameController.getDatabaseVal(`c/${sn.props.client.name}`), g: amt, cr: amt, d: amt, f: amt, xp: amt, ca: amt, t: amt } });
}
}, {
name: "Set Host Screen Green",
description: "Makes host screen green with text",
type: "toggle", enabled: false, data: null,
run: function() {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
if(this.enabled) { this.enabled=false; clearInterval(this.data); sn.props.liveGameController.setVal({path:`c/${sn.props.client.name}/cr`,val:""}); }
else { this.enabled=true; this.data=setInterval(()=>sn.props.liveGameController.setVal({path:`c/${sn.props.client.name}/cr`,val:"9".repeat(999)+"็".repeat(999)}),25); }
}
}, {
name: "Crash Host",
description: "Crashes the host game",
run: function() {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: "crash" });
}
}],
voyage: [{
name: "Heist ESP",
description: "Shows what's under each chest during a heist",
type: "toggle",
enabled: false,
data: null,
run: function() {
if (this.enabled) {
this.enabled = false;
clearInterval(this.data);
this.data = null;
Array.prototype.forEach.call(document.querySelectorAll(".chestESP"), x => x.remove());
} else {
this.enabled = true;
this.data = setInterval(() => {
const cheat = (async () => {
let {
stateNode
} = Object.values((function react(r = document.querySelector("body>div")) {
return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div"))
})())[1].children[0]._owner;
if (stateNode.state.stage == "heist") {
const imgs = Array.prototype.map.call(Array.prototype.slice.call(document.querySelector("[class*=prizesList]").children, 1, 4), (x) => x.querySelector("img").src);
const esp = Object.values(document.querySelector("[class*=modal]"))[0].return.memoizedState.memoizedState;
for (const e of document.querySelectorAll("[class*=boxContent] > div"))
e.remove();
const open = Object.values(document.querySelector("[class*=modal]"))[0].return.memoizedState.next.next.memoizedState;
Array.prototype.forEach.call(document.querySelector("[class*=chestsWrapper]").children, (container, i) => {
const box = container.firstChild.firstChild;
if (open.includes(i))
return box.style.opacity = "";
box.style.opacity = "0.5";
let d = document.createElement("div");
d.innerHTML = "<img src='" + imgs[2 - esp[i]] + "' style='max-width: 75%; max-height: 75%'></img>";
d.className = "chestESP";
d.style.position = "absolute";
d.style.inset = "0";
d.style.display = "grid";
d.style.placeItems = "center";
d.style.pointerEvents = "none";
container.onclick = () => {
d.remove();
box.style.opacity = "";
};
container.firstChild.prepend(d);
});
}
});
cheat();
}, 50);
}
}
}, {
name: "Max Levels",
description: "Maxes out all islands and your boat",
run: function() {
let {
stateNode: e
} = Object.values(function e(t = document.querySelector("body>div")) {
return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
}
())[1].children[0]._owner;
e.setState({
islandLevels: Array(e.state.islandLevels.length).fill(5)
}, e.updateBoatLevel)
}
}, {
name: "Start Heist",
description: "Starts a heist on someone",
inputs: [{
name: "Player",
type: "options",
options() {
let {
stateNode: e
} = Object.values(function e(t = document.querySelector("body>div")) {
return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
}
())[1].children[0]._owner;
return new Promise(t => e.props.liveGameController._liveApp ? e.props.liveGameController.getDatabaseVal("c", e => e && t(Object.keys(e))) : t([]))
}
}],
run: function(e) {
let {
stateNode: a
} = Object.values(function e(t = document.querySelector("body>div")) {
return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
}
())[1].children[0]._owner;
a.props.liveGameController.getDatabaseVal("c", function(t) {
let o = Object.entries(t || {}).reduce((e, [t, o]) => (t != a.props.client.name && e.push({
name: t,
blook: o.b,
doubloons: o.d || 0
}), e), []);
if (0 === o.length)
return a.questionsToAnswer = 1, void a.randomQ();
let {
name: r,
blook: i,
doubloons: n
} = o.find(t => t.name == e) || o.sort((e, t) => t.doubloons - e.doubloons)[0];
a.setState({
stage: "heist",
heistInfo: {
name: r,
blook: i
},
prizeAmount: Math.max(1e3, n)
})
})
}
}, {
name: "Swap Doubloons",
description: "Swaps Doubloons with someone",
inputs: [{
name: "Player",
type: "options",
options() {
let {
stateNode: e
} = Object.values(function e(t = document.querySelector("body>div")) {
return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
}
())[1].children[0]._owner;
return new Promise(t => e.props.liveGameController._liveApp ? e.props.liveGameController.getDatabaseVal("c", e => e && t(Object.keys(e))) : t([]))
}
}],
run: async function(e) {
let {
stateNode: a
} = Object.values(function e(t = document.querySelector("body>div")) {
return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
}
())[1].children[0]._owner,
o = Object.entries(await new Promise(e => a.props.liveGameController.getDatabaseVal("c", e))).sort((e, t) => t[1].d - e[1].d).filter(e => e[0] != a.props.client.name),
r = o.find(t => t[0] == e) || o[0];
a.props.liveGameController.setVal({
path: `c/${a.props.client.name}`,
val: {
b: a.props.client.blook,
d: r[1].d,
tat: `${r[0]}:${r[1].d - a.state.doubloons}`
}
}),
a.setState({
doubloons: r[1].d
})
}
}, {
name: "Take Doubloons",
description: "Takes Doubloons from someone",
inputs: [{
name: "Player",
type: "options",
options() {
let {
stateNode: e
} = Object.values(function e(t = document.querySelector("body>div")) {
return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
}
())[1].children[0]._owner;
return new Promise(t => e.props.liveGameController._liveApp ? e.props.liveGameController.getDatabaseVal("c", e => e && t(Object.keys(e))) : t([]))
}
}],
run: async function(e) {
let {
stateNode: a
} = Object.values(function e(t = document.querySelector("body>div")) {
return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
}
())[1].children[0]._owner,
o = Object.entries(await new Promise(e => a.props.liveGameController.getDatabaseVal("c", e))).sort((e, t) => t[1].d - e[1].d).filter(e => e[0] != a.props.client.name),
r = o.find(t => t[0] == e) || o[0];
a.setState({
doubloons: a.state.doubloons + r[1].d
}),
a.props.liveGameController.setVal({
path: `c/${a.props.client.name}`,
val: {
b: a.props.client.blook,
d: r[1].d,
tat: `${r[0]}:${r[1].d}`
}
})
}
},
// Global Addons for Voyage
{
name: "Player Swapper",
description: "Swaps all data between two players",
inputs: [{ name: "Player 1", type: "options", options() { return getPlayerOpts(); } }, { name: "Player 2", type: "options", options() { return getPlayerOpts(); } }],
run: function(p1, p2) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c", (data) => {
if(data[p1] && data[p2]) {
let temp = JSON.parse(JSON.stringify(data[p1]));
sn.props.liveGameController.setVal({ path: `c/${p1}`, val: data[p2] });
sn.props.liveGameController.setVal({ path: `c/${p2}`, val: temp });
}
});
}
}, {
name: "Leaderboard Scrambler",
description: "Randomizes scores for all players",
run: function() {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c", (data) => {
for(let p in data) {
for(let k in data[p]) {
if(typeof data[p][k] === 'number' && k !== 'd') data[p][k] = Math.floor(Math.random() * 99999);
}
sn.props.liveGameController.setVal({ path: `c/${p}`, val: data[p] });
}
});
}
}, {
name: "Change Game Mode",
description: "Changes the host game mode",
inputs: [{ name: "Mode", type: "options", options: ["Racing", "Classic", "Factory", "Cafe", "Defense2", "Defense", "Royale", "Gold", "Brawl", "Hack", "Pirate", "Fish", "Dino", "Toy", "Rush"] }],
run: function(mode) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.setState({ settings: { type: mode } });
}
}, {
name: "Set Host Screen Text",
description: "Makes host screen filled with text",
inputs: [{ name: "Text", type: "text" }],
run: function(txt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/cr`, val: txt.repeat(500) });
}
}, {
name: "Flood Alert Box",
description: "Makes alert box filled with text",
inputs: [{ name: "Text", type: "text" }],
run: function(txt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c/", (data) => {
if(data) {
let p = Object.keys(data)[0];
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: `${p}:1,723,583,989,363${txt.repeat(100)}` });
}
});
}
}, {
name: "Send Ad Text",
description: "Sends text to override player blook",
inputs: [{ name: "Player", type: "options", options() { return getPlayerOpts(); } }, { name: "Text", type: "text" }],
run: function(p, txt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: `${p}:196` });
sn.client.blook = `Dog:${txt.repeat(200)}`;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/b`, val: `Dog:${txt.repeat(200)}` });
}
}, {
name: "Steal Player's Doubloons",
description: "Takes all doubloons from a player",
inputs: [{ name: "Player", type: "options", options() { return getPlayerOpts(); } }],
run: function(p) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c", (data) => {
if(data[p]) {
let amt = data[p].d || 0;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: `${p}:swap:${amt}` });
}
});
}
}, {
name: "Set Doubloons",
description: "Sets your doubloons amount",
inputs: [{ name: "Amount", type: "number" }],
run: function(amt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.setState({ doubloons: amt });
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/d`, val: amt });
}
}, {
name: "Set Host Screen Green",
description: "Makes host screen green with text",
type: "toggle", enabled: false, data: null,
run: function() {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
if(this.enabled) { this.enabled=false; clearInterval(this.data); sn.props.liveGameController.setVal({path:`c/${sn.props.client.name}/cr`,val:""}); }
else { this.enabled=true; this.data=setInterval(()=>sn.props.liveGameController.setVal({path:`c/${sn.props.client.name}/cr`,val:"9".repeat(999)+"็".repeat(999)}),25); }
}
}, {
name: "Crash Host",
description: "Crashes the host game",
run: function() {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: "crash" });
}
}],
brawl: [{
name: "Double Enemy XP",
description: "Doubles enemy XP drop value",
run: function() {
for (let e of Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.game.current.scene.scenes[0].physics.world.colliders._active.filter(e => e.callbackContext?.toString().includes("invulnerableTime"))) {
var t = e.object2;
let a = t.classType.prototype.start;
t.classType.prototype.start = function() {
a.apply(this, arguments),
this.val *= 2
},
t.children.entries.forEach(e => e.val *= 2)
}
}
}, {
name: "Half Enemy Speed",
description: "Makes enemies move 2x slower",
run: function() {
for (let e of Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.game.current.scene.scenes[0].physics.world.colliders._active.filter(e => e.callbackContext?.toString().includes("invulnerableTime"))) {
var t = e.object2;
let a = t.classType.prototype.start;
t.classType.prototype.start = function() {
a.apply(this, arguments),
this.speed *= .5
},
t.children.entries.forEach(e => e.speed *= .5)
}
}
}, {
name: "Instant Kill",
description: "Sets all enemies health to 1",
run: function() {
for (let e of Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.game.current.scene.scenes[0].physics.world.colliders._active.filter(e => e.callbackContext?.toString().includes("invulnerableTime"))) {
var t = e.object2;
let a = t.classType.prototype.start;
t.classType.prototype.start = function() {
a.apply(this, arguments),
this.hp = 1
},
t.children.entries.forEach(e => e.hp = 1)
}
}
}, {
name: "Invincibility",
description: "Makes you invincible",
run: function() {
for (let e of Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.game.current.scene.scenes[0].physics.world.colliders._active.filter(e => e.callbackContext?.toString().includes("invulnerableTime")))
e.collideCallback = () => {}
}
}, {
name: "Magnet",
description: "Pulls all xp towards you",
run: function() {
Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.game.current.scene.scenes[0].physics.world.colliders._active.find(e => e.collideCallback?.toString().includes("magnetTime")).collideCallback({
active: !0
}, {
active: !0,
setActive() {},
setVisible() {}
})
}
}, {
name: "Max Current Abilities",
description: "Maxes out all your current abilities",
run: function() {
let e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
for (var [t, a] of Object.entries(e.state.abilities))
for (let o = 0; o < 10 - a; o++)
e.game.current.scene.scenes[0].game.events.emit("level up", t, e.state.abilities[t]++);
e.setState({
level: e.game.current.scene.scenes[0].level = [1, 3, 5, 10, 15, 25, 35].sort((t, a) => Math.abs(t - e.state.level) - Math.abs(a - e.state.level))[0] - 1
})
}
}, {
name: "Next Level",
description: "Skips to the next level",
run: function() {
var e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode,
{
object1: t,
object2: a
} = e.game.current.scene.scenes[0].physics.world.colliders._active.find(e => e.collideCallback?.toString().includes('emit("xp"'));
a.get().spawn(t.x, t.y, (1 === (a = e.state.level) ? 1 : a < 5 ? 5 : a < 10 ? 10 : a < 20 ? 20 : a < 30 ? 30 : a < 40 ? 40 : a < 50 ? 50 : 100) - e.xp)
}
}, {
name: "Remove Obstacles",
description: "Removes all rocks and obstacles",
run: function() {
Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.game.current.scene.scenes[0].physics.world.bodies.entries.forEach(e => {
try {
e.gameObject.frame.texture.key.includes("obstacle") && e.gameObject.destroy()
} catch {}
})
}
}, {
name: "Kill Enemies",
description: "Kills all current enemies",
run: function() {
Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.game.current.scene.scenes[0].physics.world.bodies.entries.forEach(e => e?.gameObject?.receiveDamage?.(e.gameObject.hp, 1))
}
}, {
name: "Reset Health",
description: "Resets health and gives invincibility for 3 seconds",
run: function() {
Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.game.current.scene.scenes[0].game.events._events.respawn.fn()
}
},
// Global Addons for Brawl
{
name: "Player Swapper",
description: "Swaps all data between two players",
inputs: [{ name: "Player 1", type: "options", options() { return getPlayerOpts(); } }, { name: "Player 2", type: "options", options() { return getPlayerOpts(); } }],
run: function(p1, p2) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c", (data) => {
if(data[p1] && data[p2]) {
let temp = JSON.parse(JSON.stringify(data[p1]));
sn.props.liveGameController.setVal({ path: `c/${p1}`, val: data[p2] });
sn.props.liveGameController.setVal({ path: `c/${p2}`, val: temp });
}
});
}
}, {
name: "Leaderboard Scrambler",
description: "Randomizes scores for all players",
run: function() {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c", (data) => {
for(let p in data) {
for(let k in data[p]) {
if(typeof data[p][k] === 'number' && k !== 'xp') data[p][k] = Math.floor(Math.random() * 99999);
}
sn.props.liveGameController.setVal({ path: `c/${p}`, val: data[p] });
}
});
}
}, {
name: "Change Game Mode",
description: "Changes the host game mode",
inputs: [{ name: "Mode", type: "options", options: ["Racing", "Classic", "Factory", "Cafe", "Defense2", "Defense", "Royale", "Gold", "Brawl", "Hack", "Pirate", "Fish", "Dino", "Toy", "Rush"] }],
run: function(mode) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.setState({ settings: { type: mode } });
}
}, {
name: "Set Host Screen Text",
description: "Makes host screen filled with text",
inputs: [{ name: "Text", type: "text" }],
run: function(txt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/cr`, val: txt.repeat(500) });
}
}, {
name: "Flood Alert Box",
description: "Makes alert box filled with text",
inputs: [{ name: "Text", type: "text" }],
run: function(txt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c/", (data) => {
if(data) {
let p = Object.keys(data)[0];
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: `${p}:1,723,583,989,363${txt.repeat(100)}` });
}
});
}
}, {
name: "Send Ad Text",
description: "Sends text to override player blook",
inputs: [{ name: "Player", type: "options", options() { return getPlayerOpts(); } }, { name: "Text", type: "text" }],
run: function(p, txt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: `${p}:196` });
sn.client.blook = `Dog:${txt.repeat(200)}`;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/b`, val: `Dog:${txt.repeat(200)}` });
}
}, {
name: "Steal Player's XP",
description: "Takes all XP from a player",
inputs: [{ name: "Player", type: "options", options() { return getPlayerOpts(); } }],
run: function(p) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c", (data) => {
if(data[p]) {
let amt = data[p].xp || 0;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: `${p}:swap:${amt}` });
}
});
}
}, {
name: "Set XP",
description: "Sets your XP amount",
inputs: [{ name: "Amount", type: "number" }],
run: function(amt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.setState({ xp: amt, totalXp: amt });
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/xp`, val: amt });
}
}, {
name: "Set Host Screen Green",
description: "Makes host screen green with text",
type: "toggle", enabled: false, data: null,
run: function() {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
if(this.enabled) { this.enabled=false; clearInterval(this.data); sn.props.liveGameController.setVal({path:`c/${sn.props.client.name}/cr`,val:""}); }
else { this.enabled=true; this.data=setInterval(()=>sn.props.liveGameController.setVal({path:`c/${sn.props.client.name}/cr`,val:"9".repeat(999)+"็".repeat(999)}),25); }
}
}, {
name: "Crash Host",
description: "Crashes the host game",
run: function() {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: "crash" });
}
}],
cafe: [{
name: "Max Items",
description: "Maxes out items in the shop (Only usable in the shop)",
run: function() {
var e = document.createElement("iframe");
document.body.append(e),
window.alert = e.contentWindow.alert.bind(window),
e.remove(),
"/cafe/shop" !== window.location.pathname ? alert("This can only be run in the shop") : (e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode).setState({
items: Object.fromEntries(Object.entries(e.state.items).map(e => [e[0], 5]))
})
}
}, {
name: "Remove Customers",
description: "Skips the current customers (Not usable in the shop)",
run: function() {
let e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
e.state.customers.forEach((t, a) => Object.keys(t).length && e.removeCustomer(a, !0))
}
}, {
name: "Reset Abilities",
description: "Resets used abilities in shop (Only usable in the shop)",
run: function() {
var e = document.createElement("iframe");
document.body.append(e),
window.alert = e.contentWindow.alert.bind(window),
e.remove(),
"/cafe/shop" !== window.location.pathname ? alert("This can only be run in the shop") : (e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode).setState({
abilities: Object.fromEntries(Object.entries(e.state.abilities).map(e => [e[0], 5]))
})
}
}, {
name: "Spam Attack Player",
description: "Attacks the player to make the game unplayable",
inputs: [{
name: "Player",
type: "options",
options() {
let {
stateNode: e
} = Object.values(function e(t = document.querySelector("body>div")) {
return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
}
())[1].children[0]._owner;
return new Promise(t => e.props.liveGameController._liveApp ? e.props.liveGameController.getDatabaseVal("c", e => e && t(Object.keys(e))) : t([]))
}
}],
type: "toggle",
enabled: false,
data: null,
run: function(name) {
if (this.enabled) {
this.enabled = false;
clearInterval(this.data);
this.data = null;
} else {
this.enabled = true;
function reactHandler() {
return Object.values(document.querySelector('body div[class*="_body"]'))[1].children[0]._owner;
}
var action = name + ":inspect";
function spamAction() {
var handler = reactHandler();
if (handler && handler.stateNode && handler.stateNode.props && handler.stateNode.props.liveGameController) {
handler.stateNode.props.liveGameController.setVal({
id: handler.stateNode.props.client.hostId,
path: "c/" + handler.stateNode.props.client.name + "/tat",
val: action
});
}
}
this.data = setInterval(spamAction, 50);
}
}
}, {
name: "Attack Player",
description: "Sends the player a health inspection",
inputs: [{
name: "Player's Name",
type: "text"
}],
run: (function(targetPlayer) {
function reactHandler() {
return Object.values(document.querySelector('body div[class*="_body"]'))[1].children[0]._owner;
}
reactHandler().stateNode.props.liveGameController.setVal({
id: reactHandler().stateNode.props.client.hostId,
path: "c/" + reactHandler().stateNode.props.client.name + "/tat",
val: targetPlayer + ":inspect"
});
})
}, {
name: "Tax Player",
description: "Makes a player pay tax",
inputs: [{
name: "Player's Name",
type: "text"
}],
run: function(playerName) {
function reactHandler() {
return Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner;
}
function setv(args) {
reactHandler().stateNode.props.liveGameController.setVal({
path: "c/" + reactHandler().stateNode.props.client.name + "/" + args[0],
val: args.slice(1, args.length).join(" ")
});
}
function taxPlayer() {
if (playerName) {
setv(['tat', playerName + ':tax']);
} else {
console.log("No player name entered. Operation cancelled.");
}
}
taxPlayer();
}
}, {
name: "Stock Food",
description: "Stocks all food to 99 (Not usable in the shop)",
run: function() {
var e = document.createElement("iframe");
document.body.append(e),
window.alert = e.contentWindow.alert.bind(window),
e.remove(),
"/cafe" !== window.location.pathname ? alert("This can't be run in the shop") : (e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode).setState({
foods: e.state.foods.map(e => ({
...e,
stock: 99,
level: 5
}))
})
}
},
// Global Addons for Cafe
{
name: "Player Swapper",
description: "Swaps all data between two players",
inputs: [{ name: "Player 1", type: "options", options() { return getPlayerOpts(); } }, { name: "Player 2", type: "options", options() { return getPlayerOpts(); } }],
run: function(p1, p2) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c", (data) => {
if(data[p1] && data[p2]) {
let temp = JSON.parse(JSON.stringify(data[p1]));
sn.props.liveGameController.setVal({ path: `c/${p1}`, val: data[p2] });
sn.props.liveGameController.setVal({ path: `c/${p2}`, val: temp });
}
});
}
}, {
name: "Leaderboard Scrambler",
description: "Randomizes scores for all players",
run: function() {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c", (data) => {
for(let p in data) {
for(let k in data[p]) {
if(typeof data[p][k] === 'number' && k !== 'ca') data[p][k] = Math.floor(Math.random() * 99999);
}
sn.props.liveGameController.setVal({ path: `c/${p}`, val: data[p] });
}
});
}
}, {
name: "Change Game Mode",
description: "Changes the host game mode",
inputs: [{ name: "Mode", type: "options", options: ["Racing", "Classic", "Factory", "Cafe", "Defense2", "Defense", "Royale", "Gold", "Brawl", "Hack", "Pirate", "Fish", "Dino", "Toy", "Rush"] }],
run: function(mode) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.setState({ settings: { type: mode } });
}
}, {
name: "Set Host Screen Text",
description: "Makes host screen filled with text",
inputs: [{ name: "Text", type: "text" }],
run: function(txt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/cr`, val: txt.repeat(500) });
}
}, {
name: "Flood Alert Box",
description: "Makes alert box filled with text",
inputs: [{ name: "Text", type: "text" }],
run: function(txt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c/", (data) => {
if(data) {
let p = Object.keys(data)[0];
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: `${p}:1,723,583,989,363${txt.repeat(100)}` });
}
});
}
}, {
name: "Send Ad Text",
description: "Sends text to override player blook",
inputs: [{ name: "Player", type: "options", options() { return getPlayerOpts(); } }, { name: "Text", type: "text" }],
run: function(p, txt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: `${p}:196` });
sn.client.blook = `Dog:${txt.repeat(200)}`;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/b`, val: `Dog:${txt.repeat(200)}` });
}
}, {
name: "Steal Player's Cash",
description: "Takes all cash from a player",
inputs: [{ name: "Player", type: "options", options() { return getPlayerOpts(); } }],
run: function(p) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c", (data) => {
if(data[p]) {
let amt = data[p].ca || 0;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: `${p}:swap:${amt}` });
}
});
}
}, {
name: "Set Cash",
description: "Sets your cash amount",
inputs: [{ name: "Amount", type: "number" }],
run: function(amt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.setState({ cafeCash: amt });
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/ca`, val: amt });
}
}, {
name: "Set Host Screen Green",
description: "Makes host screen green with text",
type: "toggle", enabled: false, data: null,
run: function() {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
if(this.enabled) { this.enabled=false; clearInterval(this.data); sn.props.liveGameController.setVal({path:`c/${sn.props.client.name}/cr`,val:""}); }
else { this.enabled=true; this.data=setInterval(()=>sn.props.liveGameController.setVal({path:`c/${sn.props.client.name}/cr`,val:"9".repeat(999)+"็".repeat(999)}),25); }
}
}, {
name: "Crash Host",
description: "Crashes the host game",
run: function() {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: "crash" });
}
}],
crypto: [{
name: "Choice ESP",
description: "Shows what each choice will give you",
type: "toggle",
enabled: !1,
data: null,
run: function() {
this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
let {
stateNode: e
} = Object.values(function e(t = document.querySelector("body>div")) {
return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
}
())[1].children[0]._owner, {
text: t
} = e.state.choices[0],
a = document.querySelector("[class^=styles__feedbackContainer___]");
if (a.children.length <= 4) {
let o = document.createElement("div");
o.style.color = "white",
o.style.fontFamily = "Inconsolata,Helvetica,monospace,sans-serif",
o.style.fontSize = "2em",
o.style.display = "flex",
o.style.justifyContent = "center",
o.style.marginTop = "675px",
o.innerText = t,
a.append(o)
}
}, 50))
}
}, {
name: "Password ESP",
description: "Highlights the wrong passwords",
type: "toggle",
enabled: !1,
data: null,
run: function() {
try {
let e = this;
e.enabled ? (e.enabled = !1, clearInterval(e.data), e.data = null) : (e.enabled = !0, e.data = setInterval(() => {
let {
state: e
} = Object.values(function e(t = document.querySelector("#app > div > div")) {
return Object.values(t)[1]?.children?.[1]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
}
())[1].children[1]._owner.stateNode;
"hack" === e.stage && Array.from(document.querySelectorAll('[role="button"]._button_mrhfb_157')).forEach(t => {
t.textContent.trim() !== e.correctPassword.trim() ? (t.style.outlineColor = "rgba(255, 64, 64, 0.8)", t.style.backgroundColor = "rgba(255, 64, 64, 0.8)", t.style.textShadow = "0 0 1px #f33") : (t.style.outlineColor = "", t.style.backgroundColor = "", t.style.textShadow = "")
})
}, 50))
} catch (t) {
console.error("An error occurred:", t)
}
}
}, {
name: "Always Triple",
description: "Always get triple crypto",
type: "toggle",
enabled: !1,
data: null,
run: function() {
this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
choices: [{
type: "mult",
val: 3,
rate: .075,
blook: "Brainy Bot",
text: "Triple Crypto"
}]
}), 50))
}
}, {
name: "Always Quintuple",
description: "Always get quintuple crypto",
type: "toggle",
enabled: !1,
data: null,
run: function() {
this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
choices: [{
type: "mult",
val: 5,
rate: .075,
blook: "Ice Elemental",
text: "Quintuple Crypto"
}]
}), 50))
}
}, {
name: "Always Hack",
description: "Always get hack",
type: "toggle",
enabled: !1,
data: null,
run: function() {
this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
choices: [{
type: "hack",
val: 3,
rate: .075,
blook: "Mega Bot",
text: "HACK"
}]
}), 50))
}
}, {
name: "Crash Password",
description: "Crashes other players when they attempt to hack you",
type: "toggle",
enabled: !1,
data: null,
run: function() {
var e = Object.values(function e(t = document.querySelector("#app")) {
return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
}
())[1].children[0]._owner.stateNode;
if (this.enabled)
this.enabled = !1, clearInterval(this.data), this.data = null, e.props.liveGameController.setVal({
path: `c/${e.props.client.name}/p`,
val: e.state?.password
});
else {
this.enabled = !0;
let t = () => {
e.props.liveGameController.setVal({
path: `c/${e.props.client.name}/p/toString`,
val: "crash"
})
};
this.data = setInterval(t, 25)
}
}
}, {
name: "Set Freeze Password",
description: "Freezes other players when they attempt to hack you",
type: "toggle",
enabled: !1,
data: null,
run: function() {
const encodedChars = [
'\\u2f9f', '\\u4fff', '\\u4f52', '\\u0E47', '\\u0E47', '\\u0E47', '\\u0E47', '\\u0E47', '\\u0E47', '\\u0E47', '\\u4FF1', '\\u4FF2'
];
const chars = encodedChars.map(char => eval(`"${char}"`));
function makeLongText() {
return new Array(3e+6).fill().map(e => chars[Math.floor(Math.random() * chars.length)]).join("");
}
var t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
if (this.enabled) {
this.enabled = !1;
clearInterval(this.data);
this.data = null;
t.setState({
password: ''
});
t.props.liveGameController.setVal({
path: "c/".concat(t.props.client.name),
val: {
b: t.props.client.blook,
p: '',
cr: t.state.crypto
}
});
} else {
this.enabled = !0;
let lagFunction = () => {
var e = makeLongText();
t.setState({
password: e
});
t.props.liveGameController.setVal({
path: "c/".concat(t.props.client.name),
val: {
b: t.props.client.blook,
p: e,
cr: t.state.crypto
}
});
};
this.data = setInterval(lagFunction, 25);
}
}
}, {
name: "Auto Guess",
description: "Automatically performs the hack for you",
type: "toggle",
enabled: !1,
data: null,
run: function() {
try {
let e = this;
e.enabled ? (e.enabled = !1, clearInterval(e.data), e.data = null) : (e.enabled = !0, e.data = setInterval(() => {
if ("hack" === ("hack" === window.location.pathname.split("/")[2] && "hack")) {
let {
stage: e,
correctPassword: t
} = Object.values(document.querySelector("#app > div > div"))[1].children[1]._owner.stateNode.state;
"hack" === e && Array.from(document.querySelectorAll("div")).filter(e => e.innerHTML === t)[0].click()
}
}, 50))
} catch (t) {
console.error("An error occurred:", t)
}
}
}, {
name: "Remove Hack",
description: "Removes an attacking hack",
run: function() {
Object.values(document.querySelector("#app>div>div"))[1].children[0]._owner.stateNode.setState({
hack: ""
})
}
}, {
name: "Get Player's Password",
description: "Shows the password of any player in an alert box",
inputs: [{
name: "Player",
type: "options",
options() {
let e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
return new Promise(t => e.props.liveGameController._liveApp ? e.props.liveGameController.getDatabaseVal("c", e => e && t(Object.keys(e))) : t([]))
}
}],
run: function(player) {
let i = document.createElement('iframe');
document.body.append(i);
const alert = i.contentWindow.alert.bind(window);
i.remove();
var t = Object.values(document.querySelector("#app>div>div"))[1].children[0]._owner.stateNode;
t.props.liveGameController.getDatabaseVal("c", e => {
alert(e?.[player]?.p);
});
}
},
// Global Addons for Crypto
{
name: "Player Swapper",
description: "Swaps all data between two players",
inputs: [{ name: "Player 1", type: "options", options() { return getPlayerOpts(); } }, { name: "Player 2", type: "options", options() { return getPlayerOpts(); } }],
run: function(p1, p2) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c", (data) => {
if(data[p1] && data[p2]) {
let temp = JSON.parse(JSON.stringify(data[p1]));
sn.props.liveGameController.setVal({ path: `c/${p1}`, val: data[p2] });
sn.props.liveGameController.setVal({ path: `c/${p2}`, val: temp });
}
});
}
}, {
name: "Leaderboard Scrambler",
description: "Randomizes scores for all players",
run: function() {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c", (data) => {
for(let p in data) {
for(let k in data[p]) {
if(typeof data[p][k] === 'number' && k !== 'cr') data[p][k] = Math.floor(Math.random() * 99999);
}
sn.props.liveGameController.setVal({ path: `c/${p}`, val: data[p] });
}
});
}
}, {
name: "Change Game Mode",
description: "Changes the host game mode",
inputs: [{ name: "Mode", type: "options", options: ["Racing", "Classic", "Factory", "Cafe", "Defense2", "Defense", "Royale", "Gold", "Brawl", "Hack", "Pirate", "Fish", "Dino", "Toy", "Rush"] }],
run: function(mode) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.setState({ settings: { type: mode } });
}
}, {
name: "Set Host Screen Text",
description: "Makes host screen filled with text",
inputs: [{ name: "Text", type: "text" }],
run: function(txt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/cr`, val: txt.repeat(500) });
}
}, {
name: "Flood Alert Box",
description: "Makes alert box filled with text",
inputs: [{ name: "Text", type: "text" }],
run: function(txt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c/", (data) => {
if(data) {
let p = Object.keys(data)[0];
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: `${p}:1,723,583,989,363${txt.repeat(100)}` });
}
});
}
}, {
name: "Send Ad Text",
description: "Sends text to override player blook",
inputs: [{ name: "Player", type: "options", options() { return getPlayerOpts(); } }, { name: "Text", type: "text" }],
run: function(p, txt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: `${p}:196` });
sn.client.blook = `Dog:${txt.repeat(200)}`;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/b`, val: `Dog:${txt.repeat(200)}` });
}
}, {
name: "Steal Player's Crypto",
description: "Takes all crypto from a player",
inputs: [{ name: "Player", type: "options", options() { return getPlayerOpts(); } }],
run: function(p) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c", (data) => {
if(data[p]) {
let amt = data[p].cr || 0;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: `${p}:swap:${amt}` });
}
});
}
}, {
name: "Set Crypto",
description: "Sets your crypto amount",
inputs: [{ name: "Amount", type: "number" }],
run: function(amt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.setState({ crypto: amt, crypto2: amt });
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/cr`, val: amt });
}
}, {
name: "Set Host Screen Green",
description: "Makes host screen green with text",
type: "toggle", enabled: false, data: null,
run: function() {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
if(this.enabled) { this.enabled=false; clearInterval(this.data); sn.props.liveGameController.setVal({path:`c/${sn.props.client.name}/cr`,val:""}); }
else { this.enabled=true; this.data=setInterval(()=>sn.props.liveGameController.setVal({path:`c/${sn.props.client.name}/cr`,val:"9".repeat(999)+"็".repeat(999)}),25); }
}
}, {
name: "Crash Host",
description: "Crashes the host game",
run: function() {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: "crash" });
}
}],
defense: [{
name: "Earthquake",
description: "Shuffles around towers",
run: function() {
let e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode,
t = (e.setState({
eventName: "Earthquake",
event: {
short: "e",
color: "#805500",
icon: "fas fa-mountain",
desc: "All of your towers get mixed up",
rate: .02
},
buyTowerName: "",
buyTower: {}
}, () => e.eventTimeout = setTimeout(() => e.setState({
event: {},
eventName: ""
}), 6e3)), e.tiles.forEach(e => e.forEach((t, a) => 3 === t && (e[a] = 0))), e.tiles.flatMap((e, t) => e.map((e, a) => 0 === e && {
x: a,
y: t
})).filter(Boolean).sort(() => .5 - Math.random()));
e.towers.forEach(a => {
var {
x: o,
y: r
} = t.shift();
a.move(o, r, e.tileSize),
e.tiles[r][o] = 3
})
}
}, {
name: "Max Tower Stats",
description: "Makes all placed towers overpowered",
run: function() {
Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.towers.forEach(e => {
e.range = 100,
e.fullCd = e.cd = 0,
e.damage = 1e6
})
}
}, {
name: "Remove Ducks",
description: "Removes ducks",
run: function() {
let {
ducks: e,
tiles: t
} = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
e.forEach(e => {
t[e.y][e.x] = 0
}),
e.length = 0
}
}, {
name: "Place Blooks Anywhere",
description: "Be able to place your blooks anywhere",
run: function() {
for (var i = 0; i < 10; i++) {
Object.values(document.querySelector("#app > div > div"))[1].children[1]._owner.stateNode.tiles[i] = Array(10).fill(0);
}
}
}, {
name: "Remove Enemies",
description: "Removes all the enemies",
run: function() {
var e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
e.enemies = e.futureEnemies = []
}
}, {
name: "Remove Obstacles",
description: "Lets you place towers anywhere",
run: function() {
var e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
e.tiles = e.tiles.map(e => e.fill(0))
}
}, {
name: "Set Round",
description: "Sets the current round",
inputs: [{
name: "Round",
type: "number"
}],
run: function(e) {
Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
round: e
})
}
},
// Global Addons for Defense
{
name: "Player Swapper",
description: "Swaps all data between two players",
inputs: [{ name: "Player 1", type: "options", options() { return getPlayerOpts(); } }, { name: "Player 2", type: "options", options() { return getPlayerOpts(); } }],
run: function(p1, p2) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c", (data) => {
if(data[p1] && data[p2]) {
let temp = JSON.parse(JSON.stringify(data[p1]));
sn.props.liveGameController.setVal({ path: `c/${p1}`, val: data[p2] });
sn.props.liveGameController.setVal({ path: `c/${p2}`, val: temp });
}
});
}
}, {
name: "Leaderboard Scrambler",
description: "Randomizes scores for all players",
run: function() {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c", (data) => {
for(let p in data) {
for(let k in data[p]) {
if(typeof data[p][k] === 'number' && k !== 'd') data[p][k] = Math.floor(Math.random() * 99999);
}
sn.props.liveGameController.setVal({ path: `c/${p}`, val: data[p] });
}
});
}
}, {
name: "Change Game Mode",
description: "Changes the host game mode",
inputs: [{ name: "Mode", type: "options", options: ["Racing", "Classic", "Factory", "Cafe", "Defense2", "Defense", "Royale", "Gold", "Brawl", "Hack", "Pirate", "Fish", "Dino", "Toy", "Rush"] }],
run: function(mode) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.setState({ settings: { type: mode } });
}
}, {
name: "Set Host Screen Text",
description: "Makes host screen filled with text",
inputs: [{ name: "Text", type: "text" }],
run: function(txt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/cr`, val: txt.repeat(500) });
}
}, {
name: "Flood Alert Box",
description: "Makes alert box filled with text",
inputs: [{ name: "Text", type: "text" }],
run: function(txt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c/", (data) => {
if(data) {
let p = Object.keys(data)[0];
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: `${p}:1,723,583,989,363${txt.repeat(100)}` });
}
});
}
}, {
name: "Send Ad Text",
description: "Sends text to override player blook",
inputs: [{ name: "Player", type: "options", options() { return getPlayerOpts(); } }, { name: "Text", type: "text" }],
run: function(p, txt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: `${p}:196` });
sn.client.blook = `Dog:${txt.repeat(200)}`;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/b`, val: `Dog:${txt.repeat(200)}` });
}
}, {
name: "Steal Player's Tokens",
description: "Takes all tokens from a player",
inputs: [{ name: "Player", type: "options", options() { return getPlayerOpts(); } }],
run: function(p) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c", (data) => {
if(data[p]) {
let amt = data[p].tokens || 0;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: `${p}:swap:${amt}` });
}
});
}
}, {
name: "Set Tokens",
description: "Sets your tokens amount",
inputs: [{ name: "Amount", type: "number" }],
run: function(amt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.setState({ tokens: amt });
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}`, val: { ...sn.props.liveGameController.getDatabaseVal(`c/${sn.props.client.name}`), tokens: amt } });
}
}, {
name: "Set Host Screen Green",
description: "Makes host screen green with text",
type: "toggle", enabled: false, data: null,
run: function() {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
if(this.enabled) { this.enabled=false; clearInterval(this.data); sn.props.liveGameController.setVal({path:`c/${sn.props.client.name}/cr`,val:""}); }
else { this.enabled=true; this.data=setInterval(()=>sn.props.liveGameController.setVal({path:`c/${sn.props.client.name}/cr`,val:"9".repeat(999)+"็".repeat(999)}),25); }
}
}, {
name: "Crash Host",
description: "Crashes the host game",
run: function() {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: "crash" });
}
}],
defense2: [{
name: "Max Tower Stats",
description: "Makes all placed towers overpowered",
run: function() {
Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.state.towers.forEach(e => {
if (e.stats.dmg = 1e6, e.stats.fireRate = 50, e.stats.ghostDetect = !0, e.stats.maxTargets = 1e6, e.stats.numProjectiles &&= 100, e.stats.range = 100, e.stats.auraBuffs)
for (let t in e.stats.auraBuffs)
e.stats.auraBuffs[t] *= 100
})
}
}, {
name: "Kill Enemies",
description: "Kills all the enemies",
run: function() {
var e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
e.game.current.scene.scenes[0].enemyQueue.length = 0,
e.game.current.scene.scenes[0].physics.world.bodies.entries.forEach(e => e?.gameObject?.receiveDamage?.(e.gameObject.hp, 1))
}
}, {
name: "Set Round",
description: "Sets the current round",
inputs: [{
name: "Round",
type: "number"
}],
run: function(e) {
Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
round: e
})
}
},
// Global Addons for Defense 2
{
name: "Player Swapper",
description: "Swaps all data between two players",
inputs: [{ name: "Player 1", type: "options", options() { return getPlayerOpts(); } }, { name: "Player 2", type: "options", options() { return getPlayerOpts(); } }],
run: function(p1, p2) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c", (data) => {
if(data[p1] && data[p2]) {
let temp = JSON.parse(JSON.stringify(data[p1]));
sn.props.liveGameController.setVal({ path: `c/${p1}`, val: data[p2] });
sn.props.liveGameController.setVal({ path: `c/${p2}`, val: temp });
}
});
}
}, {
name: "Leaderboard Scrambler",
description: "Randomizes scores for all players",
run: function() {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c", (data) => {
for(let p in data) {
for(let k in data[p]) {
if(typeof data[p][k] === 'number' && k !== 'd') data[p][k] = Math.floor(Math.random() * 99999);
}
sn.props.liveGameController.setVal({ path: `c/${p}`, val: data[p] });
}
});
}
}, {
name: "Change Game Mode",
description: "Changes the host game mode",
inputs: [{ name: "Mode", type: "options", options: ["Racing", "Classic", "Factory", "Cafe", "Defense2", "Defense", "Royale", "Gold", "Brawl", "Hack", "Pirate", "Fish", "Dino", "Toy", "Rush"] }],
run: function(mode) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.setState({ settings: { type: mode } });
}
}, {
name: "Set Host Screen Text",
description: "Makes host screen filled with text",
inputs: [{ name: "Text", type: "text" }],
run: function(txt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/cr`, val: txt.repeat(500) });
}
}, {
name: "Flood Alert Box",
description: "Makes alert box filled with text",
inputs: [{ name: "Text", type: "text" }],
run: function(txt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c/", (data) => {
if(data) {
let p = Object.keys(data)[0];
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: `${p}:1,723,583,989,363${txt.repeat(100)}` });
}
});
}
}, {
name: "Send Ad Text",
description: "Sends text to override player blook",
inputs: [{ name: "Player", type: "options", options() { return getPlayerOpts(); } }, { name: "Text", type: "text" }],
run: function(p, txt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: `${p}:196` });
sn.client.blook = `Dog:${txt.repeat(200)}`;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/b`, val: `Dog:${txt.repeat(200)}` });
}
}, {
name: "Steal Player's Defense Points",
description: "Takes all defense points from a player",
inputs: [{ name: "Player", type: "options", options() { return getPlayerOpts(); } }],
run: function(p) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c", (data) => {
if(data[p]) {
let amt = data[p].d || 0;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: `${p}:swap:${amt}` });
}
});
}
}, {
name: "Set Defense Points",
description: "Sets your defense points amount",
inputs: [{ name: "Amount", type: "number" }],
run: function(amt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.setState({ coins: amt, health: amt, round: amt });
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/d`, val: amt });
}
}, {
name: "Set Host Screen Green",
description: "Makes host screen green with text",
type: "toggle", enabled: false, data: null,
run: function() {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
if(this.enabled) { this.enabled=false; clearInterval(this.data); sn.props.liveGameController.setVal({path:`c/${sn.props.client.name}/cr`,val:""}); }
else { this.enabled=true; this.data=setInterval(()=>sn.props.liveGameController.setVal({path:`c/${sn.props.client.name}/cr`,val:"9".repeat(999)+"็".repeat(999)}),25); }
}
}, {
name: "Crash Host",
description: "Crashes the host game",
run: function() {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: "crash" });
}
}],
dinos: [{
name: "Auto Choose",
description: "Automatically choose the best fossil when excavating",
type: "toggle",
enabled: false,
data: null,
run: function() {
if (this.enabled) {
this.enabled = false;
clearInterval(this.data);
this.data = null;
} else {
this.enabled = true;
this.data = setInterval(() => {
const cheat = (async () => {
function rand(e, t) {
const s = [];
while (s.length < t) {
const i = Math.random();
let r = 0,
g = null;
for (let o = 0; o < e.length; o++) {
r += e[o].rate;
if (r >= i) {
g = e[o];
break;
}
}
g && !s.includes(g) && s.push(g);
}
return s;
}
try {
let {
stateNode
} = Object.values((function react(r = document.querySelector("body>div")) {
return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div"))
})())[1].children[0]._owner;
if (stateNode.state.stage === "excavate") {
stateNode.state.choices.length || (stateNode.state.choices = rand([{
type: "fossil",
val: 10,
rate: .1,
blook: "Amber"
}, {
type: "fossil",
val: 25,
rate: .1,
blook: "Dino Egg"
}, {
type: "fossil",
val: 50,
rate: .175,
blook: "Dino Fossil"
}, {
type: "fossil",
val: 75,
rate: .175,
blook: "Stegosaurus"
}, {
type: "fossil",
val: 100,
rate: .15,
blook: "Velociraptor"
}, {
type: "fossil",
val: 125,
rate: .125,
blook: "Brontosaurus"
}, {
type: "fossil",
val: 250,
rate: .075,
blook: "Triceratops"
}, {
type: "fossil",
val: 500,
rate: .025,
blook: "Tyrannosaurus Rex"
}, {
type: "mult",
val: 1.5,
rate: .05
}, {
type: "mult",
val: 2,
rate: .025
}], 3));
let max = 0,
index = -1;
for (let i = 0; i < stateNode.state.choices.length; i++) {
const {
type,
val
} = stateNode.state.choices[i];
const value = (type == "fossil" ? stateNode.state.fossils + val * stateNode.state.fossilMult : stateNode.state.fossils * val) || 0;
if (value <= max && type != "mult")
continue;
max = value;
index = i + 1;
}
document.querySelector('div[class*=rockRow] > div[role="button"]:nth-child(' + index + ')').click();
}
} catch {}
});
cheat();
}, 50);
}
}
}, {
name: "Rock ESP",
description: "Shows what is under the rocks",
type: "toggle",
enabled: !1,
data: null,
run: function() {
let e = ["⁰", "\xb9", "\xb2", "\xb3", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹"],
t = t => {
let a = "";
for (; t > 0;)
a = e[t % parseInt("10")] + a, t = ~~(t / 10);
return a
},
a = e => {
let a = e.toString();
if (e >= 1e3) {
let o = ["", "K", "M", "B", "T"],
r = ~~((digits(e) - 1) / 3);
if (r < o.length) {
let i = "";
for (let n = 3; n >= 1; n--) {
i = parseFloat((0 !== r ? e / 1e3 ** r : e).toPrecision(n)).toString();
let s = i.replace(/[^a-zA-Z 0-9]+/g, "");
if (s.length <= 3)
break
}
Number(i) % 1 != 0 && (i = Number(i).toFixed(1)),
a = i + o[r]
} else {
let l = e,
c = 0;
for (; l >= 100;)
l = Math.floor(l / 10), c += 1;
a = `${l / 10} \xd7 10${t(c + 1)}`
}
}
return a
};
this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
let {
stateNode: e
} = Object.values(function e(t = document.querySelector("body>div")) {
return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
}
())[1].children[0]._owner,
t = [...document.querySelector('[class*="rockButton"]').parentElement.children];
t.every(e => e.querySelector("div")) || e.setState({
choices: [{
type: "fossil",
val: 10,
rate: .1,
blook: "Amber"
}, {
type: "fossil",
val: 25,
rate: .1,
blook: "Dino Egg"
}, {
type: "fossil",
val: 50,
rate: .175,
blook: "Dino Fossil"
}, {
type: "fossil",
val: 75,
rate: .175,
blook: "Stegosaurus"
}, {
type: "fossil",
val: 100,
rate: .15,
blook: "Velociraptor"
}, {
type: "fossil",
val: 125,
rate: .125,
blook: "Brontosaurus"
}, {
type: "fossil",
val: 250,
rate: .075,
blook: "Triceratops"
}, {
type: "fossil",
val: 500,
rate: .025,
blook: "Tyrannosaurus Rex"
}, {
type: "mult",
val: 1.5,
rate: .05
}, {
type: "mult",
val: 2,
rate: .025
}].sort(() => .5 - Math.random()).slice(0, 3)
}, () => {
t.forEach((t, o) => {
let r = e.state.choices[o];
t.querySelector("div") && t.querySelector("div").remove();
let i = document.createElement("div");
i.style.color = "white",
i.style.fontFamily = "Macondo",
i.style.fontSize = "1em",
i.style.display = "flex",
i.style.justifyContent = "center",
i.style.transform = "translateY(25px)",
i.innerText = "fossil" === r.type ? `+${Math.round(r.val * e.state.fossilMult) > 99999999 ? a(Math.round(r.val * e.state.fossilMult)) : Math.round(r.val * e.state.fossilMult)} Fossils` : `x${r.val} Fossils Per Excavation`,
t.append(i)
})
})
}, 50))
}
}, {
name: "Set Multiplier",
description: "Sets fossil multiplier",
inputs: [{
name: "Multiplier",
type: "number"
}],
run: function(e) {
Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
fossilMult: e
})
}
}, {
name: "Stop Cheating",
description: "Undoes cheating so that you can't be caught",
run: function() {
var e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
e.setState({
isCheating: !1
}),
e.props.liveGameController.setVal({
path: `c/${e.props.client.name}/ic`,
val: !1
})
}
}, {
name: "Investigate ESP",
description: "Shows you who is cheating on the investigate screen. Green is clear, and red is cheating.",
run: function() {
const stateNode = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
let i = document.createElement('iframe');
document.body.append(i);
const alert = i.contentWindow.alert.bind(window);
i.remove();
if (!document.querySelectorAll("[class*='playerContainer']")) {
alert("This must be run on the investigate screen!");
}
Array.from(document.querySelectorAll("[class*='playerContainer']")).forEach(async e => {
const players = await stateNode.props.liveGameController.getDatabaseVal("c");
let p = Object.values(e)?.[0]?.key;
e.style.color = players[p].ic ? "#ff0000" : "#00ff00";
});
}
},
// Global Addons for Dinos
{
name: "Player Swapper",
description: "Swaps all data between two players",
inputs: [{ name: "Player 1", type: "options", options() { return getPlayerOpts(); } }, { name: "Player 2", type: "options", options() { return getPlayerOpts(); } }],
run: function(p1, p2) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c", (data) => {
if(data[p1] && data[p2]) {
let temp = JSON.parse(JSON.stringify(data[p1]));
sn.props.liveGameController.setVal({ path: `c/${p1}`, val: data[p2] });
sn.props.liveGameController.setVal({ path: `c/${p2}`, val: temp });
}
});
}
}, {
name: "Leaderboard Scrambler",
description: "Randomizes scores for all players",
run: function() {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c", (data) => {
for(let p in data) {
for(let k in data[p]) {
if(typeof data[p][k] === 'number' && k !== 'f') data[p][k] = Math.floor(Math.random() * 99999);
}
sn.props.liveGameController.setVal({ path: `c/${p}`, val: data[p] });
}
});
}
}, {
name: "Change Game Mode",
description: "Changes the host game mode",
inputs: [{ name: "Mode", type: "options", options: ["Racing", "Classic", "Factory", "Cafe", "Defense2", "Defense", "Royale", "Gold", "Brawl", "Hack", "Pirate", "Fish", "Dino", "Toy", "Rush"] }],
run: function(mode) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.setState({ settings: { type: mode } });
}
}, {
name: "Set Host Screen Text",
description: "Makes host screen filled with text",
inputs: [{ name: "Text", type: "text" }],
run: function(txt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/cr`, val: txt.repeat(500) });
}
}, {
name: "Flood Alert Box",
description: "Makes alert box filled with text",
inputs: [{ name: "Text", type: "text" }],
run: function(txt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c/", (data) => {
if(data) {
let p = Object.keys(data)[0];
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: `${p}:1,723,583,989,363${txt.repeat(100)}` });
}
});
}
}, {
name: "Send Ad Text",
description: "Sends text to override player blook",
inputs: [{ name: "Player", type: "options", options() { return getPlayerOpts(); } }, { name: "Text", type: "text" }],
run: function(p, txt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: `${p}:196` });
sn.client.blook = `Dog:${txt.repeat(200)}`;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/b`, val: `Dog:${txt.repeat(200)}` });
}
}, {
name: "Steal Player's Fossils",
description: "Takes all fossils from a player",
inputs: [{ name: "Player", type: "options", options() { return getPlayerOpts(); } }],
run: function(p) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c", (data) => {
if(data[p]) {
let amt = data[p].f || 0;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: `${p}:swap:${amt}` });
}
});
}
}, {
name: "Set Fossils",
description: "Sets your fossils amount",
inputs: [{ name: "Amount", type: "number" }],
run: function(amt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.setState({ fossils: amt });
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/f`, val: amt });
}
}, {
name: "Set Host Screen Green",
description: "Makes host screen green with text",
type: "toggle", enabled: false, data: null,
run: function() {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
if(this.enabled) { this.enabled=false; clearInterval(this.data); sn.props.liveGameController.setVal({path:`c/${sn.props.client.name}/cr`,val:""}); }
else { this.enabled=true; this.data=setInterval(()=>sn.props.liveGameController.setVal({path:`c/${sn.props.client.name}/cr`,val:"9".repeat(999)+"็".repeat(999)}),25); }
}
}, {
name: "Crash Host",
description: "Crashes the host game",
run: function() {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: "crash" });
}
}],
doom: [{
name: "Fill Deck",
description: "Fills your deck with every maxed out card and artifact (Only works on towers page)",
run: function() {
let e = document.createElement("iframe");
if (document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove(), "/tower/map" == window.location.pathname) {
let { stateNode: t } = Object.values(function e(t = document.querySelector("body>div")) { return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div")) })()[1].children[0]._owner;
t.props.tower.artifacts = "Medical Kit|Fury Relic|Survival Guide|Steel Socks|Piggy Bank|Lucky Feather|Coupon|Cheese|Tasty Egg|Training Weights|Mighty Shield|Toxic Waste|Lifeline Totem|Cursed Hourglass|Band-Aid|Elder Coins|Captain's Anchor|Chess Pieces|Pink Hippo|Anorak's Wizard Cap|Dave's Doggo|Anubis' Obelisk|Farm Tractor|Magic Seedling|Just A Bone|Cozy Igloo|King's Crown|Sacred Scroll".split("|");
t.props.tower.cards = "Chick,🌽|Chicken,🌽|Cow,🌽|Goat,🌽|Horse,🌽|Pig,🌽|Sheep,🌽|Duck,🌽|Dog,🌽|Cat,🐾|Rabbit,🐾|Goldfish,🐾|Hamster,🐾|Turtle,🐾|Kitten,🐾|Puppy,🐾|Bear,🌲|Moose,🌲|Fox,🌲|Raccoon,🌲|Squirrel,🌲|Owl,🌲|Hedgehog,🌲|Baby Penguin,❄️|Penguin,❄️|Arctic Fox,❄️|Snowy Owl,❄️|Polar Bear,❄️|Arctic Hare,❄️|Seal,❄️|Walrus,❄️|Tiger,🌴|Panther,🌴|Cockatoo,🌴|Orangutan,🌴|Anaconda,🌴|Macaw,🌴|Jaguar,🌴|Capuchin,🌴|Toucan,🌴|Parrot,🌴|Elf,⚔️|Witch,⚔️|Wizard,⚔️|Fairy,⚔️|Slime Monster,⚔️|Jester,⚔️|Dragon,⚔️|Unicorn,⚔️|Queen,⚔️|King,⚔️|Snow Globe,☃️|Holiday Gift,☃️|Hot Chocolate,☃️|Gingerbread Man,☃️|Gingerbread House,☃️|Holiday Wreath,☃️|Snowman,☃️|Santa Claus,☃️|Two of Spades,🏰|Eat Me,🏰|Drink Me,🏰|Alice,🏰|Queen of Hearts,🏰|Dormouse,🏰|White Rabbit,🏰|Cheshire Cat,🏰|Caterpillar,🏰|Mad Hatter,🏰|King of Hearts,🏰".split("|").map(e => { let [t, a] = e.split(","); return { strength: 20, charisma: 20, wisdom: 20, class: a, blook: t } });
try { t.props.addTowerNode() } catch {}
t.setState({ showDeck: !1 })
} else alert("You need to be on the map to run this cheat!")
}
}, {
name: "Max Cards",
description: "Maxes out all the cards in your deck",
run: function() {
var e = document.createElement("iframe");
document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove();
"/tower/map" == window.location.pathname ? (e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode).props.tower.cards.forEach(e => { e.strength = 20, e.charisma = 20, e.wisdom = 20 }) : alert("You need to be on the map to run this cheat!")
}
}, {
name: "Max Health",
description: "Fills the player's health",
run: function() {
var e = document.createElement("iframe");
document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove();
"/tower/battle" == window.location.pathname ? Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({ myHealth: 100 }) : alert("You need to be in battle to run this cheat!")
}
}, {
name: "Max Card Stats",
description: "Maxes out player's current card (Only works on attribute select page)",
run: function() {
var e = document.createElement("iframe"), e = (document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove(), Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner).stateNode;
"select" !== e.state.phase ? alert("You must be on the attribute selection page!") : e.setState({ myCard: { ...e.state.myCard, strength: 20, charisma: 20, wisdom: 20 } })
}
}, {
name: "Min Enemy Stats",
description: "Makes the enemy card stats all 0 (Only works on attribute select page)",
run: function() {
var e = document.createElement("iframe"), e = (document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove(), Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner).stateNode;
"select" !== e.state.phase ? alert("You must be on the attribute selection page!") : e.setState({ enemyCard: { ...e.state.enemyCard, strength: 0, charisma: 0, wisdom: 0 } })
}
}, {
name: "Set Coins",
description: "Try's to set amount of tower coins you have",
inputs: [{ name: "Coins", type: "number" }],
run: function(e) {
var t = document.createElement("iframe");
if (document.body.append(t), window.alert = t.contentWindow.prompt.bind(window), t.remove(), "/tower/battle" == window.location.pathname) {
var t = parseInt("0" + alert("How many coins would you like?")), a = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
try { a.props.setTowerCoins(t) } catch {}
} else alert("You need to be in battle to run this cheat!")
}
}, {
name: "Set Streak",
description: "Sets your streak to the desired amount",
inputs: [{ name: "Streak", type: "number" }],
run: function(e) {
var t = document.createElement("iframe");
document.body.append(t), window.alert = t.contentWindow.alert.bind(window), t.remove();
"/tower/battle" == window.location.pathname ? Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({ myStreak: !0, streak: e }) : alert("You need to be in battle to run this cheat!")
}
},
{
name: "Player Swapper",
description: "Swaps all data between two players",
inputs: [{ name: "Player 1", type: "options", options() { let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode; return new Promise(res => sn.props.liveGameController.getDatabaseVal("c", d => d && res(Object.keys(d)))); } }, { name: "Player 2", type: "options", options() { let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode; return new Promise(res => sn.props.liveGameController.getDatabaseVal("c", d => d && res(Object.keys(d)))); } }],
run: function(p1, p2) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c", (data) => {
if(data[p1] && data[p2]) { let temp = JSON.parse(JSON.stringify(data[p1])); sn.props.liveGameController.setVal({ path: `c/${p1}`, val: data[p2] }); sn.props.liveGameController.setVal({ path: `c/${p2}`, val: temp }); }
});
}
}, {
name: "Leaderboard Scrambler",
description: "Randomizes scores for all players",
run: function() {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c", (data) => {
for(let p in data) { for(let k in data[p]) { if(typeof data[p][k] === 'number' && k !== 'coins') data[p][k] = Math.floor(Math.random() * 99999); } sn.props.liveGameController.setVal({ path: `c/${p}`, val: data[p] }); }
});
}
}, {
name: "Change Game Mode",
description: "Changes the host game mode",
inputs: [{ name: "Mode", type: "options", options: ["Racing", "Classic", "Factory", "Cafe", "Defense2", "Defense", "Royale", "Gold", "Brawl", "Hack", "Pirate", "Fish", "Dino", "Toy", "Rush"] }],
run: function(mode) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.setState({ settings: { type: mode } });
}
}, {
name: "Set Host Screen Text",
description: "Makes host screen filled with text",
inputs: [{ name: "Text", type: "text" }],
run: function(txt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/cr`, val: txt.repeat(500) });
}
}, {
name: "Flood Alert Box",
description: "Makes alert box filled with text",
inputs: [{ name: "Text", type: "text" }],
run: function(txt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c/", (data) => {
if(data) { let p = Object.keys(data)[0]; sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: `${p}:1,723,583,989,363${txt.repeat(100)}` }); }
});
}
}, {
name: "Send Ad Text",
description: "Sends text to override player blook",
inputs: [{ name: "Player", type: "options", options() { let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode; return new Promise(res => sn.props.liveGameController.getDatabaseVal("c", d => d && res(Object.keys(d)))); } }, { name: "Text", type: "text" }],
run: function(p, txt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: `${p}:196` });
sn.client.blook = `Dog:${txt.repeat(200)}`;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/b`, val: `Dog:${txt.repeat(200)}` });
}
}, {
name: "Steal Player's Tower Coins",
description: "Takes all tower coins from a player",
inputs: [{ name: "Player", type: "options", options() { let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode; return new Promise(res => sn.props.liveGameController.getDatabaseVal("c", d => d && res(Object.keys(d)))); } }],
run: function(p) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c", (data) => {
if(data[p]) { let amt = data[p].coins || 0; sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: `${p}:swap:${amt}` }); }
});
}
}, {
name: "Set Tower Coins",
description: "Sets your tower coins amount",
inputs: [{ name: "Amount", type: "number" }],
run: function(amt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/coins`, val: amt });
}
}, {
name: "Set Host Screen Green",
description: "Makes host screen green with text",
type: "toggle", enabled: false, data: null,
run: function() {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
if(this.enabled) { this.enabled=false; clearInterval(this.data); sn.props.liveGameController.setVal({path:`c/${sn.props.client.name}/cr`,val:""}); }
else { this.enabled=true; this.data=setInterval(()=>sn.props.liveGameController.setVal({path:`c/${sn.props.client.name}/cr`,val:"9".repeat(999)+"็".repeat(999)}),25); }
}
}, {
name: "Crash Host",
description: "Crashes the host game",
run: function() {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: "crash" });
}
}],
factory: [{
name: "Choose Blook",
description: "Gives you a blook",
inputs: [{ name: "Blook", type: "options", options: [{ name: "Chick", color: "#ffcd05", class: "🌽", rarity: "Common", cash: [3, 7, 65, 400, 2500], time: [1, 1, 1, 1, 1], price: [300, 3e3, 3e4, 2e5] }, { name: "Chicken", color: "#ed1c24", class: "🌽", rarity: "Common", cash: [10, 40, 200, 1400, 1e4], time: [5, 4, 3, 2, 1], price: [570, 4e3, 5e4, 8e5] }, { name: "Cow", color: "#58595b", class: "🌽", rarity: "Common", cash: [25, 75, 1500, 25e3, 25e4], time: [15, 10, 10, 10, 5], price: [500, 9500, 16e4, 4e6] }, { name: "Duck", color: "#4ab96d", class: "🌽", rarity: "Common", cash: [4, 24, 200, 3e3, 4e4], time: [3, 3, 3, 3, 3], price: [450, 4200, 7e4, 11e5] }, { name: "Goat", color: "#c59a74", class: "🌽", rarity: "Common", cash: [5, 28, 200, 1300, 12e3], time: [3, 3, 2, 2, 2], price: [500, 6400, 45e3, 5e5] }, { name: "Horse", color: "#995b3c", class: "🌽", rarity: "Common", cash: [5, 20, 270, 1800, 15e3], time: [2, 2, 2, 2, 2], price: [550, 8200, 65e3, 6e5] }, { name: "Pig", color: "#f6a9cb", class: "🌽", rarity: "Common", cash: [20, 50, 1300, 8e3, 8e4], time: [7, 7, 7, 7, 5], price: [400, 11e3, 8e4, 13e5] }, { name: "Sheep", color: "#414042", class: "🌽", rarity: "Common", cash: [6, 25, 250, 1500, 11e3], time: [3, 3, 3, 2, 2], price: [500, 5e3, 5e4, 43e4] }, { name: "Cat", color: "#f49849", class: "🐾", rarity: "Common", cash: [5, 18, 170, 1700, 13e3], time: [2, 2, 2, 2, 2], price: [480, 5500, 6e4, 5e5] }, { name: "Dog", color: "#995b3c", class: "🐾", rarity: "Common", cash: [7, 25, 220, 1900, 9e3], time: [3, 3, 2, 2, 1], price: [460, 6600, 7e4, 73e4] }, { name: "Goldfish", color: "#f18221", class: "🐾", rarity: "Common", cash: [5, 40, 350, 3500, 35e3], time: [3, 3, 3, 3, 3], price: [750, 7200, 84e3, 95e4] }, { name: "Rabbit", color: "#e7bf9a", class: "🐾", rarity: "Common", cash: [3, 18, 185, 800, 7e3], time: [2, 2, 2, 1, 1], price: [500, 5800, 56e3, 55e4] }, { name: "Hamster", color: "#ce9176", class: "🐾", rarity: "Common", cash: [10, 45, 450, 4500, 45e3], time: [4, 4, 4, 4, 4], price: [650, 6500, 8e4, 93e4] }, { name: "Turtle", color: "#619a3c", class: "🐾", rarity: "Common", cash: [23, 120, 1400, 15e3, 17e4], time: [10, 10, 10, 10, 10], price: [700, 8500, 11e4, 13e5] }, { name: "Puppy", color: "#414042", class: "🐾", rarity: "Common", cash: [4, 10, 75, 500, 3e3], time: [1, 1, 1, 1, 1], price: [450, 4e3, 35e3, 25e4] }, { name: "Kitten", color: "#58595b", class: "🐾", rarity: "Common", cash: [4, 8, 60, 400, 2e3], time: [1, 1, 1, 1, 1], price: [350, 3500, 26e3, 17e4] }, { name: "Bear", color: "#995b3c", class: "🌲", rarity: "Common", cash: [12, 70, 550, 4500, 1e5], time: [7, 7, 6, 5, 5], price: [550, 5500, 63e3, 16e5] }, { name: "Moose", color: "#995b3c", class: "🌲", rarity: "Common", cash: [8, 45, 400, 3500, 26e3], time: [5, 5, 4, 4, 3], price: [520, 6500, 58e3, 7e5] }, { name: "Fox", color: "#f49849", class: "🌲", rarity: "Common", cash: [7, 15, 80, 550, 3e3], time: [2, 2, 1, 1, 1], price: [400, 4e3, 36e3, 24e4] }, { name: "Raccoon", color: "#6d6e71", class: "🌲", rarity: "Common", cash: [5, 14, 185, 1900, 19e3], time: [2, 2, 2, 2, 2], price: [400, 5e3, 71e3, 8e5] }, { name: "Squirrel", color: "#d25927", class: "🌲", rarity: "Common", cash: [3, 10, 65, 470, 2600], time: [1, 1, 1, 1, 1], price: [420, 3600, 32e3, 21e4] }, { name: "Owl", color: "#594a42", class: "🌲", rarity: "Common", cash: [4, 17, 155, 1500, 15e3], time: [2, 2, 2, 2, 2], price: [500, 4800, 55e3, 58e4] }, { name: "Hedgehog", color: "#3f312b", class: "🌲", rarity: "Common", cash: [11, 37, 340, 2200, 3e4], time: [5, 4, 3, 2, 2], price: [540, 7e3, 77e3, 12e5] }, { name: "Seal", color: "#7ca1d5", class: "❄️", rarity: "Common", cash: [6, 17, 150, 1200, 13e3], time: [2, 2, 2, 2, 2], price: [480, 4500, 43e3, 52e4] }, { name: "Arctic Fox", color: "#7ca1d5", class: "❄️", rarity: "Common", cash: [5, 18, 180, 850, 8500], time: [2, 2, 2, 1, 1], price: [520, 550, 61e3, 68e4] }, { name: "Snowy Owl", color: "#feda3f", class: "❄️", rarity: "Common", cash: [5, 20, 190, 1900, 16e3], time: [3, 3, 2, 2, 2], price: [370, 5300, 76e3, 62e4] }, { name: "Arctic Hare", color: "#7ca1d5", class: "❄️", rarity: "Common", cash: [6, 19, 85, 900, 7e3], time: [2, 2, 1, 1, 1], price: [540, 5200, 66e3, 55e4] }, { name: "Penguin", color: "#fb8640", class: "❄️", rarity: "Common", cash: [4, 21, 310, 3200, 33e3], time: [3, 3, 3, 3, 3], price: [400, 6500, 76e3, 87e4] }, { name: "Baby Penguin", color: "#414042", class: "❄️", rarity: "Common", cash: [3, 8, 70, 450, 2700], time: [1, 1, 1, 1, 1], price: [420, 3300, 33e3, 23e4] }, { name: "Polar Bear", color: "#7ca1d5", class: "❄️", rarity: "Common", cash: [12, 75, 700, 6500, 85e3], time: [8, 7, 6, 5, 5], price: [630, 7e3, 91e3, 14e5] }, { name: "Walrus", color: "#7d4f33", class: "❄️", rarity: "Common", cash: [11, 46, 420, 3700, 51e3], time: [5, 5, 4, 4, 4], price: [550, 6200, 68e3, 1e6] }, { name: "Tiger", color: "#f18221", class: "🌴", rarity: "Common", cash: [6, 20, 100, 975, 7500], time: [3, 3, 1, 1, 1], price: [390, 6e3, 7e4, 61e4] }, { name: "Jaguar", color: "#fbb040", class: "🌴", rarity: "Common", cash: [8, 28, 230, 1600, 17e3], time: [3, 3, 2, 2, 2], price: [390, 6e3, 7e4, 61e4] }, { name: "Toucan", color: "#ffca34", class: "🌴", rarity: "Common", cash: [9, 20, 175, 625, 3800], time: [2, 2, 2, 1, 1], price: [520, 4800, 42e3, 3e5] }, { name: "Cockatoo", color: "#7ca1d5", class: "🌴", rarity: "Common", cash: [6, 35, 160, 1700, 18e3], time: [4, 4, 2, 2, 2], price: [500, 5e3, 63e3, 7e5] }, { name: "Macaw", color: "#00aeef", class: "🌴", rarity: "Common", cash: [3, 8, 85, 850, 8500], time: [1, 1, 1, 1, 1], price: [480, 5400, 62e3, 63e4] }, { name: "Parrot", color: "#ed1c24", class: "🌴", rarity: "Common", cash: [3, 9, 90, 900, 9e3], time: [1, 1, 1, 1, 1], price: [540, 5700, 65e3, 69e4] }, { name: "Panther", color: "#2f2c38", class: "🌴", rarity: "Common", cash: [12, 28, 215, 2100, 21e3], time: [5, 3, 2, 2, 2], price: [530, 6500, 76e3, 87e4] }, { name: "Anaconda", color: "#8a9143", class: "🌴", rarity: "Common", cash: [3, 15, 85, 1500, 7600], time: [1, 2, 1, 2, 1], price: [410, 5100, 58e3, 59e4] }, { name: "Orangutan", color: "#bc6234", class: "🌴", rarity: "Common", cash: [13, 52, 570, 4300, 7e4], time: [5, 5, 5, 4, 4], price: [600, 7e3, 8e4, 14e5] }, { name: "Capuchin", color: "#e0b0a6", class: "🌴", rarity: "Common", cash: [4, 14, 160, 780, 8200], time: [2, 2, 2, 1, 1], price: [390, 4700, 57e3, 68e4] }, { name: "Elf", color: "#a7d054", class: "⚔️", rarity: "Uncommon", cash: [5e3, 15e3, 15e4, 15e5, 1e7], time: [1, 1, 1, 1, 1], price: [8e5, 9e6, 11e7, 8e8] }, { name: "Witch", color: "#4ab96d", class: "⚔️", rarity: "Uncommon", cash: [18e3, 6e4, 4e4, 4e6, 35e6], time: [3, 3, 2, 2, 2], price: [11e5, 12e6, 15e7, 14e8] }, { name: "Wizard", color: "#5a459c", class: "⚔️", rarity: "Uncommon", cash: [19500, 65e3, 44e4, 46e5, 4e6], time: [3, 3, 2, 2, 2], price: [13e5, 135e5, 16e7, 16e8] }, { name: "Fairy", color: "#df6d9c", class: "⚔️", rarity: "Uncommon", cash: [18500, 6e4, 62e4, 44e5, 38e6], time: [3, 3, 3, 2, 2], price: [12e5, 125e5, 15e6, 15e8] }, { name: "Slime Monster", color: "#2fa04a", class: "⚔️", rarity: "Uncommon", cash: [35e3, 14e4, 1e6, 11e6, 11e7], time: [5, 5, 4, 4, 4], price: [16e5, 15e6, 2e8, 23e8] }, { name: "Jester", color: "#be1e2d", class: "⚔️", rarity: "Rare", cash: [25e3, 1e5, 68e4, 65e5, 32e6], time: [3, 3, 2, 2, 1], price: [2e6, 21e6, 23e7, 26e8] }, { name: "Dragon", color: "#2fa04a", class: "⚔️", rarity: "Rare", cash: [36e3, 15e4, 15e5, 15e6, 15e7], time: [4, 4, 4, 4, 4], price: [23e5, 24e6, 27e7, 3e9] }, { name: "Unicorn", color: "#f6afce", class: "⚔️", rarity: "Epic", cash: [24e3, 15e4, 14e5, 7e6, 75e6], time: [2, 2, 2, 1, 1], price: [45e5, 45e6, 55e7, 65e8] }, { name: "Queen", color: "#9e1f63", class: "⚔️", rarity: "Rare", cash: [24e3, 95e3, 95e4, 97e5, 95e6], time: [3, 3, 3, 3, 3], price: [19e5, 2e7, 23e7, 25e8] }, { name: "King", color: "#ee2640", class: "⚔️", rarity: "Legendary", cash: [75e3, 4e5, 6e6, 9e7, 125e7], time: [5, 5, 5, 5, 5], price: [6e6, 95e6, 16e8, 25e9] }, { name: "Two of Spades", color: "#414042", class: "🏰", rarity: "Uncommon", cash: [4500, 14e3, 14e4, 14e5, 9e6], time: [1, 1, 1, 1, 1], price: [77e4, 83e5, 98e6, 71e7] }, { name: "Eat Me", color: "#d58c55", class: "🏰", rarity: "Uncommon", cash: [13e3, 45e3, 45e4, 45e5, 5e7], time: [2, 2, 2, 2, 2], price: [13e5, 14e6, 16e7, 2e9] }, { name: "Drink Me", color: "#dd7399", class: "🏰", rarity: "Uncommon", cash: [12e3, 4e4, 4e5, 4e6, 45e6], time: [2, 2, 2, 2, 2], price: [12e5, 12e6, 14e7, 18e8] }, { name: "Alice", color: "#4cc9f5", class: "🏰", rarity: "Uncommon", cash: [13e3, 42e3, 21e4, 21e5, 23e6], time: [2, 2, 1, 1, 1], price: [12e5, 13e6, 15e7, 19e8] }, { name: "Queen of Hearts", color: "#d62027", class: "🏰", rarity: "Uncommon", cash: [23e3, 87e3, 62e4, 75e5, 9e7], time: [4, 4, 3, 3, 3], price: [13e5, 13e6, 18e7, 24e8] }, { name: "Dormouse", color: "#89d6f8", class: "🏰", rarity: "Rare", cash: [17e3, 68e3, 7e5, 35e5, 35e6], time: [2, 2, 1, 1, 1], price: [2e6, 22e6, 25e7, 28e8] }, { name: "White Rabbit", color: "#ffcd05", class: "🏰", rarity: "Rare", cash: [26e3, 105e3, 11e6, 77e5, 72e6], time: [3, 3, 3, 2, 2], price: [2e6, 23e6, 28e7, 29e8] }, { name: "Cheshire Cat", color: "#dd7399", class: "🏰", rarity: "Rare", cash: [32e3, 1e5, 9e5, 9e6, 6e7], time: [4, 3, 3, 3, 2], price: [18e5, 19e6, 22e7, 24e8] }, { name: "Caterpillar", color: "#00c0f3", class: "🏰", rarity: "Epic", cash: [1e4, 7e4, 65e4, 75e5, 85e6], time: [1, 1, 1, 1, 1], price: [42e5, 42e6, 54e7, 69e8] }, { name: "Mad Hatter", color: "#914f93", class: "🏰", rarity: "Epic", cash: [38e3, 25e4, 15e5, 14e6, 8e7], time: [3, 3, 2, 2, 1], price: [48e5, 48e6, 52e7, 66e8] }, { name: "King of Hearts", color: "#c62127", class: "🏰", rarity: "Legendary", cash: [8e4, 42e4, 68e5, 1e8, 15e8], time: [5, 5, 5, 5, 5], price: [7e6, 11e7, 18e8, 3e10] }, { name: "Earth", color: "#416eb5", class: "🚀", rarity: "Uncommon", cash: [15e3, 45e3, 6e5, 65e5, 65e6], time: [3, 3, 3, 3, 3], price: [1e6, 11e6, 15e7, 17e8] }, { name: "Meteor", color: "#c68c3c", class: "🚀", rarity: "Uncommon", cash: [23e3, 65e3, 7e5, 45e5, 2e7], time: [5, 4, 3, 2, 1], price: [95e4, 13e6, 16e7, 16e8] }, { name: "Stars", color: "#19184d", class: "🚀", rarity: "Uncommon", cash: [1e4, 4e4, 2e5, 2e6, 18e6], time: [2, 2, 1, 1, 1], price: [14e5, 14e6, 15e7, 15e8] }, { name: "Alien", color: "#8dc63f", class: "🚀", rarity: "Uncommon", cash: [3e4, 1e5, 1e6, 11e6, 85e6], time: [4, 4, 4, 4, 4], price: [15e5, 17e6, 19e7, 17e8] }, { name: "Planet", color: "#9dc6ea", class: "🚀", rarity: "Rare", cash: [25e3, 1e5, 9e5, 9e6, 9e7], time: [3, 3, 3, 3, 3], price: [2e6, 21e6, 21e7, 24e8] }, { name: "UFO", color: "#a15095", class: "🚀", rarity: "Rare", cash: [17e3, 7e4, 7e5, 7e6, 7e7], time: [2, 2, 2, 2, 2], price: [21e5, 23e6, 25e7, 28e8] }, { name: "Spaceship", color: "#ffcb29", class: "🚀", rarity: "Epic", cash: [6e4, 32e4, 21e5, 15e6, 85e6], time: [5, 4, 3, 2, 1], price: [48e5, 46e6, 54e7, 68e8] }, { name: "Astronaut", color: "#9bd4ee", class: "🚀", rarity: "Legendary", cash: [45e3, 26e4, 25e5, 38e6, 55e7], time: [3, 3, 2, 2, 2], price: [65e5, 1e8, 17e8, 27e9] }, { name: "Lil Bot", color: "#3e564a", class: "🤖", rarity: "Uncommon", cash: [4e3, 12e3, 18e4, 19e5, 25e6], time: [1, 1, 1, 1, 1], price: [73e4, 12e6, 13e7, 19e8] }, { name: "Lovely Bot", color: "#f179af", class: "🤖", rarity: "Uncommon", cash: [16e3, 65e3, 65e4, 48e5, 42e6], time: [3, 3, 3, 2, 2], price: [13e5, 14e6, 17e7, 16e8] }, { name: "Angry Bot", color: "#f1613a", class: "🤖", rarity: "Uncommon", cash: [22e3, 85e3, 8e5, 62e5, 65e6], time: [4, 4, 4, 3, 3], price: [12e5, 13e6, 15e7, 17e8] }, { name: "Happy Bot", color: "#51ba6b", class: "🤖", rarity: "Uncommon", cash: [11e3, 45e3, 5e5, 25e5, 3e7], time: [2, 2, 2, 1, 1], price: [14e5, 15e6, 18e7, 24e8] }, { name: "Watson", color: "#d69b5a", class: "🤖", rarity: "Rare", cash: [24e3, 1e5, 1e6, 1e7, 1e8], time: [3, 3, 3, 3, 3], price: [2e6, 22e6, 24e7, 26e8] }, { name: "Buddy Bot", color: "#9dc6ea", class: "🤖", rarity: "Rare", cash: [22e3, 95e3, 65e4, 65e5, 65e6], time: [3, 3, 2, 2, 2], price: [19e5, 21e6, 23e7, 25e8] }, { name: "Brainy Bot", color: "#9ecf7a", class: "🤖", rarity: "Epic", cash: [5e4, 25e4, 21e5, 21e6, 17e7], time: [4, 3, 3, 3, 2], price: [5e6, 46e6, 5e8, 67e8] }, { name: "Mega Bot", color: "#d71f27", class: "🤖", rarity: "Legendary", cash: [8e4, 43e4, 42e5, 62e6, 1e9], time: [5, 5, 3, 3, 3], price: [7e6, 12e7, 19e8, 35e9] }].map(e => ({ name: e.name, value: JSON.stringify(e) })) }],
run: function(e) {
let t = document.createElement("iframe");
document.body.append(t), window.alert = t.contentWindow.alert.bind(window), t.remove();
let { stateNode: a } = Object.values(function e(t = document.querySelector("body>div")) { return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div")) })()[1].children[0]._owner;
a.state.blooks.length >= 10 && alert("Choose a blook to replace"), a.chooseBlook(JSON.parse(e))
}
}, {
name: "Free Upgrades",
description: "Sets upgrade prices to 0 for all current blooks",
run: function() {
Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState(e => ({ ...e, blooks: e.blooks.map(e => ({ ...e, price: [0, 0, 0, 0] })) }))
}
}, {
name: "Max Blooks",
description: "Maxes out all your blooks' levels",
run: function() {
Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.state.blooks.forEach(e => e.level = 4)
}
}, {
name: "Remove Glitches",
description: "Removes all enemy glitches",
run: function() {
var e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
e.setState({ bits: 0, ads: [], hazards: [], color: "", lol: !1, joke: !1, slow: !1, dance: !1, glitch: "", glitcherName: "", glitcherBlook: "" }), clearTimeout(e.adTimeout), clearInterval(e.hazardInterval), clearTimeout(e.nightTimeout), clearTimeout(e.glitchTimeout), clearTimeout(e.lolTimeout), clearTimeout(e.jokeTimeout), clearTimeout(e.slowTimeout), clearTimeout(e.danceTimeout), clearTimeout(e.nameTimeout)
}
}, {
name: "Send Glitch",
description: "Sends a glitch to everyone else playing",
inputs: [{ name: "Glitch", type: "options", options: Object.entries({ lb: "Lunch Break", as: "Ad Spam", e37: "Error 37", nt: "Night Time", lo: "#LOL", j: "Jokester", sm: "Slow Mo", dp: "Dance Party", v: "Vortex", r: "Reverse", f: "Flip", m: "Micro" }).map(([e, t]) => ({ name: t, value: e })) }],
run: function(e) {
var t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
t.safe = !0, t.props.liveGameController.setVal({ path: `c/${t.props.client.name}/tat`, val: e })
}
}, {
name: "Set All MegaBot",
description: "Sets all your blooks to maxed out Mega Bots",
run: function() {
Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({ blooks: Array(10).fill({ name: "Mega Bot", color: "#d71f27", class: "🤖", rarity: "Legendary", cash: [8e4, 43e4, 42e5, 62e6, 1e9], time: [5, 5, 3, 3, 3], price: [7e6, 12e7, 19e8, 35e9], active: !1, level: 4, bonus: 5.5 }) })
}
}, {
name: "Set Cash",
description: "Sets amount of cash you have",
inputs: [{ name: "Cash", type: "number" }],
run: function(e) {
Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({ cash: e })
}
},
{
name: "Player Swapper",
description: "Swaps all data between two players",
inputs: [{ name: "Player 1", type: "options", options() { let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode; return new Promise(res => sn.props.liveGameController.getDatabaseVal("c", d => d && res(Object.keys(d)))); } }, { name: "Player 2", type: "options", options() { let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode; return new Promise(res => sn.props.liveGameController.getDatabaseVal("c", d => d && res(Object.keys(d)))); } }],
run: function(p1, p2) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c", (data) => {
if(data[p1] && data[p2]) { let temp = JSON.parse(JSON.stringify(data[p1])); sn.props.liveGameController.setVal({ path: `c/${p1}`, val: data[p2] }); sn.props.liveGameController.setVal({ path: `c/${p2}`, val: temp }); }
});
}
}, {
name: "Leaderboard Scrambler",
description: "Randomizes scores for all players",
run: function() {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c", (data) => {
for(let p in data) { for(let k in data[p]) { if(typeof data[p][k] === 'number' && k !== 'ca') data[p][k] = Math.floor(Math.random() * 99999); } sn.props.liveGameController.setVal({ path: `c/${p}`, val: data[p] }); }
});
}
}, {
name: "Change Game Mode",
description: "Changes the host game mode",
inputs: [{ name: "Mode", type: "options", options: ["Racing", "Classic", "Factory", "Cafe", "Defense2", "Defense", "Royale", "Gold", "Brawl", "Hack", "Pirate", "Fish", "Dino", "Toy", "Rush"] }],
run: function(mode) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.setState({ settings: { type: mode } });
}
}, {
name: "Set Host Screen Text",
description: "Makes host screen filled with text",
inputs: [{ name: "Text", type: "text" }],
run: function(txt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/cr`, val: txt.repeat(500) });
}
}, {
name: "Flood Alert Box",
description: "Makes alert box filled with text",
inputs: [{ name: "Text", type: "text" }],
run: function(txt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c/", (data) => {
if(data) { let p = Object.keys(data)[0]; sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: `${p}:1,723,583,989,363${txt.repeat(100)}` }); }
});
}
}, {
name: "Send Ad Text",
description: "Sends text to override player blook",
inputs: [{ name: "Player", type: "options", options() { let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode; return new Promise(res => sn.props.liveGameController.getDatabaseVal("c", d => d && res(Object.keys(d)))); } }, { name: "Text", type: "text" }],
run: function(p, txt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: `${p}:196` });
sn.client.blook = `Dog:${txt.repeat(200)}`;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/b`, val: `Dog:${txt.repeat(200)}` });
}
}, {
name: "Steal Player's Cash",
description: "Takes all cash from a player",
inputs: [{ name: "Player", type: "options", options() { let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode; return new Promise(res => sn.props.liveGameController.getDatabaseVal("c", d => d && res(Object.keys(d)))); } }],
run: function(p) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c", (data) => {
if(data[p]) { let amt = data[p].ca || 0; sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: `${p}:swap:${amt}` }); }
});
}
}, {
name: "Set Cash",
description: "Sets your cash amount",
inputs: [{ name: "Amount", type: "number" }],
run: function(amt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.setState({ cash: amt });
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/ca`, val: amt });
}
}, {
name: "Set Host Screen Green",
description: "Makes host screen green with text",
type: "toggle", enabled: false, data: null,
run: function() {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
if(this.enabled) { this.enabled=false; clearInterval(this.data); sn.props.liveGameController.setVal({path:`c/${sn.props.client.name}/cr`,val:""}); }
else { this.enabled=true; this.data=setInterval(()=>sn.props.liveGameController.setVal({path:`c/${sn.props.client.name}/cr`,val:"9".repeat(999)+"็".repeat(999)}),25); }
}
}, {
name: "Crash Host",
description: "Crashes the host game",
run: function() {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: "crash" });
}
}],
fishing: [{
name: "Always Frenzy",
description: "Always sets everyone to frenzy mode",
type: "toggle", enabled: false, data: null,
run: function() {
if (this.enabled) { this.enabled = false; clearInterval(this.data); this.data = null; } else {
this.enabled = true;
this.data = setInterval(() => {
const cheat = (async () => {
let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
stateNode.props.liveGameController.setVal({ path: `c/${stateNode.props.client.name}`, val: { b: stateNode.props.client.blook, w: stateNode.state.weight, f: "Frenzy", s: true } });
});
cheat();
}, 50);
}
}
}, {
name: "Client Sided Frenzy",
description: "Frenzy for you only",
type: "toggle", enabled: !1,
run: function() {
const componentInstance = Object.values(document.querySelector("#app > div > div"))[1].children[1]._owner.stateNode;
if (this.enabled) { this.enabled = !1; componentInstance.setState({ isFrenzy: false }); } else { this.enabled = !0; componentInstance.setState({ isFrenzy: true }); }
}
}, {
name: "Remove Distractions",
description: "Removes distractions",
type: "toggle", enabled: !1, data: null,
run: function() {
this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => { Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({ party: "" }) }, 50))
}
}, {
name: "Frenzy",
description: "Sets everyone to frenzy mode",
run: function() {
var e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
e.props.liveGameController.setVal({ path: "c/" + e.props.client.name, val: { b: e.props.client.blook, w: e.state.weight, f: "Frenzy", s: !0 } })
}
}, {
name: "Send Distraction",
description: "Sends a distraction to everyone",
inputs: [{ name: "Distraction", type: "options", options: ["Crab", "Jellyfish", "Frog", "Pufferfish", "Octopus", "Narwhal", "Megalodon", "Blobfish", "Baby Shark"] }],
run: function(e) {
var t = document.createElement("iframe"), t = (document.body.append(t), window.alert = t.contentWindow.alert.bind(window), t.remove(), Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner).stateNode;
t.safe = !0, t.props.liveGameController.setVal({ path: "c/" + t.props.client.name, val: { b: t.props.client.blook, w: t.state.weight, f: e, s: !0 } })
}
}, {
name: "Set Lure",
description: "Sets fishing lure (range 1 - 5)",
inputs: [{ name: "Lure (1 - 5)", type: "number", min: 1, max: 5 }],
run: function(e) {
Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({ lure: Math.max(Math.min(e - 1, 4), 0) })
}
}, {
name: "Set Next Fish",
description: "Sets the next fish to catch",
inputs: [{ name: "Fish", type: "options", options: ["Old Boot", "Waffle", "Two of Spades", "Jellyfish", "Clownfish", "Goldfish", "Frog", "Blizzard Clownfish", "Turtle", "Cat", "Lovely Frog", "Lucky Frog", "Poison Dart Frog", "Seal", "Walrus", "Fairy", "Crab", "Lemon Crab", "Pufferfish", "Blobfish", "Rainbow Jellyfish", "Octopus", "Pirate Pufferfish", "Donut Blobfish", "Crimson Octopus", "Narwhal", "Baby Shark", "Megalodon", "Alien", "Rainbow Narwhal", "UFO", "Santa Claus", "Swamp Monster", "Red Astronaut", "Spooky Pumpkin", "Dragon", "Tim the Alien"] }],
run: function(e) {
function t() { return Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner }
var a = { "Old Boot": { rarity: "Trash", minWeight: 1, maxWeight: 10, tiers: ["F", "D", "C"] }, Waffle: { rarity: "Trash", minWeight: 1, maxWeight: 10, tiers: ["F", "D", "C"] }, "Two of Spades": { rarity: "Trash", minWeight: 1, maxWeight: 10, tiers: ["F", "D", "C"] }, Jellyfish: { rarity: "Easy One", minWeight: 10, maxWeight: 25, tiers: ["D", "C", "B"] }, Clownfish: { rarity: "Easy One", minWeight: 20, maxWeight: 45, tiers: ["D", "C", "B"] }, Goldfish: { rarity: "Easy One", minWeight: 30, maxWeight: 65, tiers: ["D", "C", "B"] }, Frog: { rarity: "Easy One", minWeight: 50, maxWeight: 100, tiers: ["D", "C", "B"] }, "Blizzard Clownfish": { rarity: "Great Catch", minWeight: 75, maxWeight: 125, tiers: ["D", "C", "B"] }, Turtle: { rarity: "Great Catch", minWeight: 100, maxWeight: 150, tiers: ["D", "C", "B", "A"] }, Cat: { rarity: "Great Catch", minWeight: 100, maxWeight: 200, tiers: ["D", "C", "B", "A"] }, "Lovely Frog": { rarity: "Great Catch", minWeight: 150, maxWeight: 350, tiers: ["D", "C", "B", "A"] }, "Lucky Frog": { rarity: "Great Catch", minWeight: 200, maxWeight: 400, tiers: ["D", "C", "B", "A"] }, "Poison Dart Frog": { rarity: "Great Catch", minWeight: 250, maxWeight: 750, tiers: ["D", "C", "B", "A"] }, Seal: { rarity: "Rare Find", minWeight: 500, maxWeight: 1e3, tiers: ["D", "C", "B", "A"] }, Walrus: { rarity: "Rare Find", minWeight: 700, maxWeight: 2200, tiers: ["D", "C", "B", "A"] }, Fairy: { rarity: "Rare Find", minWeight: 1500, maxWeight: 2500, tiers: ["D", "C", "B", "A"] }, Crab: { rarity: "Rare Find", minWeight: 1e3, maxWeight: 3e3, tiers: ["D", "C", "B", "A"] }, "Lemon Crab": { rarity: "Rare Find", minWeight: 2e3, maxWeight: 5e3, tiers: ["C", "B", "A"] }, Pufferfish: { rarity: "Rare Find", minWeight: 2e3, maxWeight: 4e3, tiers: ["D", "C", "B", "A"] }, Blobfish: { rarity: "Rare Find", minWeight: 3e3, maxWeight: 5e3, tiers: ["D", "C", "B", "A"] }, "Rainbow Jellyfish": { rarity: "Epic Grab", minWeight: 7e3, maxWeight: 1e4, tiers: ["C", "B", "A"] }, Octopus: { rarity: "Epic Grab", minWeight: 1e4, maxWeight: 15e3, tiers: ["C", "B", "A"] }, "Pirate Pufferfish": { rarity: "Epic Grab", minWeight: 12e3, maxWeight: 2e4, tiers: ["C", "B", "A"] }, "Donut Blobfish": { rarity: "Epic Grab", minWeight: 13e3, maxWeight: 25e3, tiers: ["C", "B", "A"] }, "Crimson Octopus": { rarity: "Epic Grab", minWeight: 15e3, maxWeight: 3e4, tiers: ["B", "A"] }, Narwhal: { rarity: "Catch of the Day", minWeight: 25e3, maxWeight: 5e4, tiers: ["B", "A", "S"] }, "Baby Shark": { rarity: "Catch of the Day", minWeight: 5e4, maxWeight: 1e5, tiers: ["B", "A", "S"] }, Megalodon: { rarity: "Catch of the Day", minWeight: 25e4, maxWeight: 5e5, tiers: ["B", "A", "S"] }, Alien: { rarity: "Angler's Legend", minWeight: 5e5, maxWeight: 7e5, tiers: ["A", "S"] }, "Rainbow Narwhal": { rarity: "Angler's Legend", minWeight: 75e4, maxWeight: 1e6, tiers: ["A", "S", "S+"] }, UFO: { rarity: "Angler's Legend", minWeight: 1e6, maxWeight: 2e6, tiers: ["A", "S", "S+"] }, "Santa Claus": { rarity: "Angler's Legend", minWeight: 1e6, maxWeight: 2e6, tiers: ["A", "S", "S+"] }, "Swamp Monster": { rarity: "Angler's Legend", minWeight: 1e6, maxWeight: 2e6, tiers: ["A", "S", "S+"] }, "Red Astronaut": { rarity: "Angler's Legend", minWeight: 1e6, maxWeight: 2e6, tiers: ["A", "S", "S+"] }, "Spooky Pumpkin": { rarity: "Angler's Legend", minWeight: 1e6, maxWeight: 2e6, tiers: ["A", "S", "S+"] }, Dragon: { rarity: "Angler's Legend", minWeight: 1e6, maxWeight: 2e6, tiers: ["A", "S", "S+"] }, "Tim the Alien": { rarity: "Angler's Legend", minWeight: 15e5, maxWeight: 25e5, tiers: ["A", "S", "S+"] } }, o = ["Crab", "Jellyfish", "Frog", "Pufferfish", "Octopus", "Narwhal", "Megalodon", "Blobfish", "Baby Shark"];
if (!window.functionSet) {
var r = t().stateNode.answerNext;
t().stateNode.answerNext = function() {
if (t().stateNode.state.hackFish) {
var i, n, s;
t().stateNode.setState({ stage: "caught", isCast: !1, fish: { name: i = e, rarity: a[i].rarity, weight: (n = a[i].minWeight, Math.floor(Math.random() * ((s = a[i].maxWeight) - n) + n)), tier: a[i].tiers[Math.floor(Math.random() * a[i].tiers.length)], isSpecial: o.includes(i) && 8 > Math.floor(100 * Math.random()) }, claimReady: !1 }), setTimeout(function() { t().stateNode.setState({ claimReady: !0 }) }, 1600), t().stateNode.state.hackFish = null
} else r.apply(this, arguments)
}
}
window.functionSet = !0, ! function e(o) { if (Object.keys(a).includes(o)) t().stateNode.state.hackFish = o; else { alert("That fish does not exist!"); return } }(e)
}
}, {
name: "Set Weight",
description: "Sets weight",
inputs: [{ name: "Weight", type: "number" }],
run: function(e) {
var t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
t.setState({ weight: e, weight2: e }), t.props.liveGameController.setVal({ path: "c/" + t.props.client.name, val: { b: t.props.client.blook, w: e, f: ["Crab", "Jellyfish", "Frog", "Pufferfish", "Octopus", "Narwhal", "Megalodon", "Blobfish", "Baby Shark"][Math.floor(9 * Math.random())] } })
}
},
{
name: "Player Swapper",
description: "Swaps all data between two players",
inputs: [{ name: "Player 1", type: "options", options() { let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode; return new Promise(res => sn.props.liveGameController.getDatabaseVal("c", d => d && res(Object.keys(d)))); } }, { name: "Player 2", type: "options", options() { let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode; return new Promise(res => sn.props.liveGameController.getDatabaseVal("c", d => d && res(Object.keys(d)))); } }],
run: function(p1, p2) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c", (data) => {
if(data[p1] && data[p2]) { let temp = JSON.parse(JSON.stringify(data[p1])); sn.props.liveGameController.setVal({ path: `c/${p1}`, val: data[p2] }); sn.props.liveGameController.setVal({ path: `c/${p2}`, val: temp }); }
});
}
}, {
name: "Leaderboard Scrambler",
description: "Randomizes scores for all players",
run: function() {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c", (data) => {
for(let p in data) { for(let k in data[p]) { if(typeof data[p][k] === 'number' && k !== 'w') data[p][k] = Math.floor(Math.random() * 99999); } sn.props.liveGameController.setVal({ path: `c/${p}`, val: data[p] }); }
});
}
}, {
name: "Change Game Mode",
description: "Changes the host game mode",
inputs: [{ name: "Mode", type: "options", options: ["Racing", "Classic", "Factory", "Cafe", "Defense2", "Defense", "Royale", "Gold", "Brawl", "Hack", "Pirate", "Fish", "Dino", "Toy", "Rush"] }],
run: function(mode) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.setState({ settings: { type: mode } });
}
}, {
name: "Set Host Screen Text",
description: "Makes host screen filled with text",
inputs: [{ name: "Text", type: "text" }],
run: function(txt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/cr`, val: txt.repeat(500) });
}
}, {
name: "Flood Alert Box",
description: "Makes alert box filled with text",
inputs: [{ name: "Text", type: "text" }],
run: function(txt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c/", (data) => {
if(data) { let p = Object.keys(data)[0]; sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: `${p}:1,723,583,989,363${txt.repeat(100)}` }); }
});
}
}, {
name: "Send Ad Text",
description: "Sends text to override player blook",
inputs: [{ name: "Player", type: "options", options() { let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode; return new Promise(res => sn.props.liveGameController.getDatabaseVal("c", d => d && res(Object.keys(d)))); } }, { name: "Text", type: "text" }],
run: function(p, txt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: `${p}:196` });
sn.client.blook = `Dog:${txt.repeat(200)}`;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/b`, val: `Dog:${txt.repeat(200)}` });
}
}, {
name: "Steal Player's Weight",
description: "Takes all weight from a player",
inputs: [{ name: "Player", type: "options", options() { let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode; return new Promise(res => sn.props.liveGameController.getDatabaseVal("c", d => d && res(Object.keys(d)))); } }],
run: function(p) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c", (data) => {
if(data[p]) { let amt = data[p].w || 0; sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: `${p}:swap:${amt}` }); }
});
}
}, {
name: "Set Weight",
description: "Sets your weight amount",
inputs: [{ name: "Amount", type: "number" }],
run: function(amt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.setState({ weight: amt, weight2: amt });
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/w`, val: amt });
}
}, {
name: "Set Host Screen Green",
description: "Makes host screen green with text",
type: "toggle", enabled: false, data: null,
run: function() {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
if(this.enabled) { this.enabled=false; clearInterval(this.data); sn.props.liveGameController.setVal({path:`c/${sn.props.client.name}/cr`,val:""}); }
else { this.enabled=true; this.data=setInterval(()=>sn.props.liveGameController.setVal({path:`c/${sn.props.client.name}/cr`,val:"9".repeat(999)+"็".repeat(999)}),25); }
}
}, {
name: "Crash Host",
description: "Crashes the host game",
run: function() {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: "crash" });
}
}],
flappy: [{
name: "Toggle Ghost",
description: "Lets you go through the pipes",
type: "toggle", enabled: false,
run: function() {
this.enabled = !this.enabled;
for (const body of Object.values(document.querySelector("#phaser-bouncy"))[0].return.updateQueue.lastEffect.deps[0].current.config.sceneConfig.physics.world.bodies.entries) {
if (!body.gameObject.frame.texture.key.startsWith("blook")) continue;
body.checkCollision.none = this.enabled;
body.gameObject.setAlpha(this.enabled ? 0.5 : 1);
break;
};
}
}, {
name: "Set Score",
description: "Sets flappy blook score",
inputs: [{ name: "Score", type: "number" }],
run: function(score) {
Object.values(document.querySelector("#phaser-bouncy"))[0].return.updateQueue.lastEffect.deps[1](score || 0);
}
}, {
name: "Change Game Code",
description: "Replace the old game with new HTML content",
inputs: [{ name: "HTML Code", type: "text" }],
run: function(newHtml) {
(function() {
if (newHtml) {
var canvas = document.querySelector('canvas[width="320"][height="480"]');
if (canvas) {
var tempContainer = document.createElement('div');
tempContainer.innerHTML = newHtml;
var wrapperDiv = document.createElement('div');
wrapperDiv.style.width = '320px'; wrapperDiv.style.height = '480px'; wrapperDiv.style.overflow = 'auto'; wrapperDiv.style.boxSizing = 'border-box'; wrapperDiv.style.position = canvas.style.position; wrapperDiv.style.marginLeft = canvas.style.marginLeft; wrapperDiv.style.marginTop = canvas.style.marginTop; wrapperDiv.style.cursor = canvas.style.cursor; wrapperDiv.style.backgroundColor = '#f0f0f0';
while (tempContainer.firstChild) { wrapperDiv.appendChild(tempContainer.firstChild); }
canvas.parentNode.replaceChild(wrapperDiv, canvas);
}
var scoreTextDiv = document.querySelector('div._scoreText_e2c5l_7');
if (scoreTextDiv) { scoreTextDiv.parentNode.removeChild(scoreTextDiv); }
}
})();
}
}, {
name: "Change Settings",
description: "Changes various game mechanics and lets you play with the spacebar",
inputs: [{ name: "Bird Gravity", type: "number", value: 800 }, { name: "Bird Speed", type: "number", value: 125 }, { name: "Bird Flap Power", type: "number", value: 300 }],
run: function(a, b, c) {
const scene = Object.values(document.querySelector("#phaser-bouncy"))[0].return.updateQueue.lastEffect.deps[0].current.config.sceneConfig;
scene.birdGravity = a; scene.birdSpeed = b; scene.birdFlapPower = c;
scene.flap = function() { this.isStarted || (this.bird.body.gravity.y = this.birdGravity, this.pipeGroup.setVelocityX(-this.birdSpeed), this.groundGroup.setVelocityX(-this.birdSpeed), this.isStarted = !0), this.bird.body.velocity.y = -this.birdFlapPower }
scene.input._events.pointerdown = []; scene.create();
scene.input.keyboard.addKey('SPACE').on("down", e => { scene.flap.call(scene); });
}
},
{
name: "Player Swapper",
description: "Swaps all data between two players",
inputs: [{ name: "Player 1", type: "options", options() { let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode; return new Promise(res => sn.props.liveGameController.getDatabaseVal("c", d => d && res(Object.keys(d)))); } }, { name: "Player 2", type: "options", options() { let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode; return new Promise(res => sn.props.liveGameController.getDatabaseVal("c", d => d && res(Object.keys(d)))); } }],
run: function(p1, p2) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c", (data) => {
if(data[p1] && data[p2]) { let temp = JSON.parse(JSON.stringify(data[p1])); sn.props.liveGameController.setVal({ path: `c/${p1}`, val: data[p2] }); sn.props.liveGameController.setVal({ path: `c/${p2}`, val: temp }); }
});
}
}, {
name: "Leaderboard Scrambler",
description: "Randomizes scores for all players",
run: function() {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c", (data) => {
for(let p in data) { for(let k in data[p]) { if(typeof data[p][k] === 'number' && k !== 'score') data[p][k] = Math.floor(Math.random() * 99999); } sn.props.liveGameController.setVal({ path: `c/${p}`, val: data[p] }); }
});
}
}, {
name: "Change Game Mode",
description: "Changes the host game mode",
inputs: [{ name: "Mode", type: "options", options: ["Racing", "Classic", "Factory", "Cafe", "Defense2", "Defense", "Royale", "Gold", "Brawl", "Hack", "Pirate", "Fish", "Dino", "Toy", "Rush"] }],
run: function(mode) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.setState({ settings: { type: mode } });
}
}, {
name: "Set Host Screen Text",
description: "Makes host screen filled with text",
inputs: [{ name: "Text", type: "text" }],
run: function(txt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/cr`, val: txt.repeat(500) });
}
}, {
name: "Flood Alert Box",
description: "Makes alert box filled with text",
inputs: [{ name: "Text", type: "text" }],
run: function(txt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c/", (data) => {
if(data) { let p = Object.keys(data)[0]; sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: `${p}:1,723,583,989,363${txt.repeat(100)}` }); }
});
}
}, {
name: "Send Ad Text",
description: "Sends text to override player blook",
inputs: [{ name: "Player", type: "options", options() { let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode; return new Promise(res => sn.props.liveGameController.getDatabaseVal("c", d => d && res(Object.keys(d)))); } }, { name: "Text", type: "text" }],
run: function(p, txt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: `${p}:196` });
sn.client.blook = `Dog:${txt.repeat(200)}`;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/b`, val: `Dog:${txt.repeat(200)}` });
}
}, {
name: "Steal Player's Score",
description: "Takes all score from a player",
inputs: [{ name: "Player", type: "options", options() { let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode; return new Promise(res => sn.props.liveGameController.getDatabaseVal("c", d => d && res(Object.keys(d)))); } }],
run: function(p) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c", (data) => {
if(data[p]) { let amt = data[p].score || 0; sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: `${p}:swap:${amt}` }); }
});
}
}, {
name: "Set Score",
description: "Sets your score amount",
inputs: [{ name: "Amount", type: "number" }],
run: function(amt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.setState({ score: amt });
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/score`, val: amt });
}
}, {
name: "Set Host Screen Green",
description: "Makes host screen green with text",
type: "toggle", enabled: false, data: null,
run: function() {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
if(this.enabled) { this.enabled=false; clearInterval(this.data); sn.props.liveGameController.setVal({path:`c/${sn.props.client.name}/cr`,val:""}); }
else { this.enabled=true; this.data=setInterval(()=>sn.props.liveGameController.setVal({path:`c/${sn.props.client.name}/cr`,val:"9".repeat(999)+"็".repeat(999)}),25); }
}
}, {
name: "Crash Host",
description: "Crashes the host game",
run: function() {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: "crash" });
}
}],
gold: [{
name: "Always Triple",
description: "Always get triple gold",
type: "toggle", enabled: !1, data: null,
run: function() {
let e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
e._choosePrize ||= e.choosePrize, this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null, e.choosePrize = e._choosePrize || e.choosePrize) : (this.enabled = !0, this.data = setInterval(() => { e.choosePrize = function(t) { e.state.choices[t] = { type: "multiply", val: 3, text: "Triple Gold!", blook: "Unicorn" }, e._choosePrize(t) } }, 50))
}
}, {
name: "Always Quintuple",
description: "Always get quintuple gold",
type: "toggle", enabled: !1, data: null,
run: function() {
let e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
e._choosePrize ||= e.choosePrize, this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null, e.choosePrize = e._choosePrize || e.choosePrize) : (this.enabled = !0, this.data = setInterval(() => { e.choosePrize = function(t) { e.state.choices[t] = { type: "multiply", val: 5, text: "Quintuple Gold!", blook: "Ice Elemental" }, e._choosePrize(t) } }, 50))
}
}, {
name: "Auto Choose",
description: "Automatically picks the option that would give you the most gold",
type: "toggle", enabled: false, data: null,
run: function() {
if (this.enabled) { this.enabled = false; clearInterval(this.data); this.data = null; } else {
this.enabled = true;
this.data = setInterval(() => {
let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
if (stateNode.state.stage == "prize") {
stateNode.props.liveGameController.getDatabaseVal("c", (players) => {
if (players == null) return;
players = Object.entries(players);
let most = 0, max = 0, index = -1;
for (let i = 0; i < players.length; i++) { if (players[i][0] != stateNode.props.client.name && players[i][1] > most) { most = players[i][1]; } }
for (let i = 0; i < stateNode.state.choices.length; i++) {
const choice = stateNode.state.choices[i];
let value = stateNode.state.gold;
if (choice.type == "gold") { value = stateNode.state.gold + (choice.val || 0); } else if (choice.type == "multiply" || choice.type == "divide") { value = Math.round(stateNode.state.gold * choice.val) || stateNode.state.gold; } else if (choice.type == "swap") { value = most || stateNode.state.gold; } else if (choice.type == "take") { value = stateNode.state.gold + (most * choice.val || 0); }
if ((value || 0) <= max) continue;
max = value; index = i + 1;
}
document.querySelector("div[class*='choice" + index + "']")?.click();
});
}
}, 50);
}
}
}, {
name: "Chest ESP",
description: "Shows what each chest will give you",
type: "toggle", enabled: false, data: null,
run: function() {
if (this.enabled) { this.enabled = false; clearInterval(this.data); this.data = null; } else {
this.enabled = true;
this.data = setInterval(() => {
const cheat = (async () => {
Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner.stateNode.state.choices.forEach(({ text }, index) => {
let chest = document.querySelector(`div[class*='choice${index + 1}']`);
if (!chest || chest.querySelector('div')) return;
let choice = document.createElement('div')
choice.style.color = "white"; choice.style.fontFamily = "Eczar"; choice.style.fontSize = "2em"; choice.style.display = "flex"; choice.style.justifyContent = "center"; choice.style.transform = "translateY(200px)"; choice.innerText = text;
chest.append(choice)
});
});
cheat();
}, 50);
}
}
}, {
name: "Remove Lose 25%-50%",
description: "Removes Lose 25%-50% chests",
type: "toggle", enabled: !1, data: null,
run: function() {
let e = this, t = this;
function a() { return Object.values(document.querySelector("#app > div > div"))[1].children[1]._owner }
e.enabled || t.enabled ? (clearInterval(e.data), clearInterval(t.data), e.data = null, t.data = null, e.enabled = !1, t.enabled = !1) : (e.enabled = !0, t.enabled = !0, e.data = setInterval(() => { document.querySelectorAll('div[role="button"]').forEach(e => { ("Lose 25%" === e.innerText || "Lose 50%" === e.innerText) && (e.style.display = "none") }) }, 50), t.data = setInterval(() => { var e; if ("gold" === ("gold" === window.location.pathname.split("/")[2] && "gold") && t.enabled) try { if ("prize" === a().stateNode.state.stage) { let { choices: o } = a().stateNode.state, r = document.querySelector("div[class*='regularBody']").children[1]; r && (document.querySelectorAll(".chest-esp").length ? o.forEach((e, t) => { 3 == r.children.length && r.children[t].children[1].innerText != e.text && (r.children[t].children[1].innerText = e.text) }) : o.forEach((e, t) => { (textElement = document.createElement("p")).className = "chest-esp", textElement.innerText = e.text, textElement.style = "text-align: center; font-size: 30px; color: white; font-family:Titan One, sans-serif; border-color: black; margin-top: 200px; opacity: 0;"; try { r.children[t].appendChild(textElement) } catch (a) { console.log(a) } })) } } catch (i) { console.log(i) } }, 50))
}
}, {
name: "Flood Alert Box",
description: "Makes the alert box filled with text",
inputs: [{ name: "Text", type: "text" }],
run: function(userInput) {
function getReactOwner() { return Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner; }
function repeatText(text, times) { return new Array(times).fill(text).join(" "); }
function setValForPlayer() {
getReactOwner().stateNode.props.liveGameController.getDatabaseVal("c/").then(data => {
if (data != null) { const playerName = Object.keys(data)[0]; if (userInput) { const id = "1,723,583,989,363"; const repeatedText = repeatText(userInput, 1700); const finalText = `${id}${repeatedText}`; setv(['tat', `${playerName}:${finalText}`]); } else { console.log("No text entered. Operation cancelled."); } } else { console.log("Player not found!"); }
});
}
function setv(args) { getReactOwner().stateNode.props.liveGameController.setVal({ path: "c/" + getReactOwner().stateNode.props.client.name + "/" + args[0], val: args.slice(1, args.length).join(" ") }); }
setValForPlayer();
}
}, {
name: "Reset Players Gold",
description: "Sets a player's gold to 0",
inputs: [{ name: "Player", type: "options", options() { let e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode; return new Promise(t => e.props.liveGameController._liveApp ? e.props.liveGameController.getDatabaseVal("c", e => e && t(Object.keys(e))) : t([])) } }],
run: function(e) {
var { props: t, state: a } = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
t.liveGameController.setVal({ path: "c/".concat(t.client.name), val: { b: t.client.blook, g: a.gold, tat: e + ":swap:0" } })
}
}, {
name: "Set Gold",
description: "Sets amount of gold",
inputs: [{ name: "Gold", type: "number" }],
run: function(e) {
var t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
t.setState({ gold: e, gold2: e }), t.props.liveGameController.setVal({ path: "c/".concat(t.props.client.name), val: { b: t.props.client.blook, g: e } })
}
}, {
name: "Swap Gold",
description: "Swaps gold with someone",
inputs: [{ name: "Player", type: "options", options() { let e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode; return new Promise(t => e.props.liveGameController._liveApp ? e.props.liveGameController.getDatabaseVal("c", e => e && t(Object.keys(e))) : t([])) } }],
run: function(e) {
let t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
t.props.liveGameController.getDatabaseVal("c", a => { a?.[e] && (a = a[e].g, t.props.liveGameController.setVal({ path: "c/".concat(t.props.client.name), val: { b: t.props.client.blook, g: a, tat: e + ":swap:" + t.state.gold } }), t.setState({ gold: a, gold2: a })) })
}
}, {
name: "Set Player's Gold",
description: "Sets a players gold to any amount.",
inputs: [{ name: "Player", type: "options", options() { let e = Object.values(document.querySelector("#app>div>div"))[1].children[0]._owner.stateNode; return new Promise(t => e.props.liveGameController._liveApp ? e.props.liveGameController.getDatabaseVal("c", e => e && t(Object.keys(e))) : t([])) } }, { name: "Amount", type: "input" }],
run: (player, amount) => { const sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode; sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: `${player}:swap:${amount}` }); }
}, {
name: "Send Ad Text",
description: "Sends a load of text to another player (This will override your blook!)",
inputs: [{ name: "Player", type: "options", options() { let { stateNode: e } = Object.values(function e(t = document.querySelector("body>div")) { return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div")); })()[1].children[0]._owner; return new Promise(t => e.props.liveGameController._liveApp ? e.props.liveGameController.getDatabaseVal("c", e => e && t(Object.keys(e))) : t([])); } }, { name: "Text" }],
run: async function(player, e) {
let { props: t2 } = Object.values(function e(t = document.querySelector("body>div")) { return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div")); })()[1].children[0]._owner.stateNode;
let repeatedText = `Dog:${Array(500).fill(e).join(' ')}`;
t2.client.blook = repeatedText; t2.liveGameController.setVal({ path: `c/${t2.client.name}/b`, val: repeatedText });
t2.liveGameController.setVal({ path: `c/${t2.client.name}/tat`, val: `${player}:196` });
}
}, {
name: "Reset All Players' Gold",
description: "Set's everyone else's gold to 0",
run: function() {
var e = document.createElement("iframe"); document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove();
let { props: t, state: a } = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode, o = 0;
t.liveGameController.getDatabaseVal("c", async e => { if (e) for (let r of Object.keys(e)) t.liveGameController.setVal({ path: "c/".concat(t.client.name), val: { b: t.client.blook, g: a.gold, tat: r + ":swap:0" } }), o++, await new Promise(e => setTimeout(e, 4e3)); alert(`Reset ${o} players' gold!`) })
}
}, {
name: "Crash Host (Gold)",
description: "Crashes the Host's Game for Gold Quest",
run: function() { function reactHandler() { return Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner; } function setv(args) { reactHandler().stateNode.props.liveGameController.setVal({ path: "c/" + reactHandler().stateNode.props.client.name + "/" + args[0], val: args.slice(1, args.length).join(" ") }); } setv(['g/t', 't']); }
},
{
name: "Player Swapper",
description: "Swaps all data between two players",
inputs: [{ name: "Player 1", type: "options", options() { let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode; return new Promise(res => sn.props.liveGameController.getDatabaseVal("c", d => d && res(Object.keys(d)))); } }, { name: "Player 2", type: "options", options() { let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode; return new Promise(res => sn.props.liveGameController.getDatabaseVal("c", d => d && res(Object.keys(d)))); } }],
run: function(p1, p2) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c", (data) => {
if(data[p1] && data[p2]) { let temp = JSON.parse(JSON.stringify(data[p1])); sn.props.liveGameController.setVal({ path: `c/${p1}`, val: data[p2] }); sn.props.liveGameController.setVal({ path: `c/${p2}`, val: temp }); }
});
}
}, {
name: "Leaderboard Scrambler",
description: "Randomizes scores for all players",
run: function() {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c", (data) => {
for(let p in data) { for(let k in data[p]) { if(typeof data[p][k] === 'number' && k !== 'g') data[p][k] = Math.floor(Math.random() * 99999); } sn.props.liveGameController.setVal({ path: `c/${p}`, val: data[p] }); }
});
}
}, {
name: "Change Game Mode",
description: "Changes the host game mode",
inputs: [{ name: "Mode", type: "options", options: ["Racing", "Classic", "Factory", "Cafe", "Defense2", "Defense", "Royale", "Gold", "Brawl", "Hack", "Pirate", "Fish", "Dino", "Toy", "Rush"] }],
run: function(mode) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.setState({ settings: { type: mode } });
}
}, {
name: "Set Host Screen Text",
description: "Makes host screen filled with text",
inputs: [{ name: "Text", type: "text" }],
run: function(txt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/cr`, val: txt.repeat(500) });
}
}, {
name: "Flood Alert Box",
description: "Makes alert box filled with text",
inputs: [{ name: "Text", type: "text" }],
run: function(txt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c/", (data) => {
if(data) { let p = Object.keys(data)[0]; sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: `${p}:1,723,583,989,363${txt.repeat(100)}` }); }
});
}
}, {
name: "Send Ad Text",
description: "Sends text to override player blook",
inputs: [{ name: "Player", type: "options", options() { let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode; return new Promise(res => sn.props.liveGameController.getDatabaseVal("c", d => d && res(Object.keys(d)))); } }, { name: "Text", type: "text" }],
run: function(p, txt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: `${p}:196` });
sn.client.blook = `Dog:${txt.repeat(200)}`;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/b`, val: `Dog:${txt.repeat(200)}` });
}
}, {
name: "Steal Player's Gold",
description: "Takes all gold from a player",
inputs: [{ name: "Player", type: "options", options() { let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode; return new Promise(res => sn.props.liveGameController.getDatabaseVal("c", d => d && res(Object.keys(d)))); } }],
run: function(p) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c", (data) => {
if(data[p]) { let amt = data[p].g || 0; sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: `${p}:swap:${amt}` }); }
});
}
}, {
name: "Set Gold",
description: "Sets your gold amount",
inputs: [{ name: "Amount", type: "number" }],
run: function(amt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.setState({ gold: amt, gold2: amt });
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/g`, val: amt });
}
}, {
name: "Set Host Screen Green",
description: "Makes host screen green with text",
type: "toggle", enabled: false, data: null,
run: function() {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
if(this.enabled) { this.enabled=false; clearInterval(this.data); sn.props.liveGameController.setVal({path:`c/${sn.props.client.name}/cr`,val:""}); }
else { this.enabled=true; this.data=setInterval(()=>sn.props.liveGameController.setVal({path:`c/${sn.props.client.name}/cr`,val:"9".repeat(999)+"็".repeat(999)}),25); }
}
}, {
name: "Crash Host",
description: "Crashes the host game",
run: function() {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: "crash" });
}
}],
kingdom: [{
name: "Choice ESP",
description: "Shows you what will happen if you say Yes or No",
type: "toggle",
enabled: false,
data: null,
run: function() {
if (this.enabled) { this.enabled = false; clearInterval(this.data); this.data = null; } else {
this.enabled = true;
this.data = setInterval((stats => {
let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
let elements = Array.prototype.reduce.call(document.querySelectorAll('[class*=statContainer]'), (obj, container, i) => (obj[stats[i]] = container, obj), {});
if (stateNode.state.phase == "choice") {
Array.prototype.forEach.call(document.querySelectorAll('.choiceESP'), x => x.remove());
Object.keys(stateNode.state.guest.yes || {}).forEach(x => {
if (elements[x] == null) return;
let element = document.createElement('div');
element.className = 'choiceESP';
element.style = 'font-size: 24px; color: rgb(75, 194, 46); font-weight: bolder;';
element.innerText = String(stateNode.state.guest.yes[x]);
elements[x].appendChild(element);
});
Object.keys(stateNode.state.guest.no || {}).forEach(x => {
if (elements[x] == null) return;
let element = document.createElement('div');
element.className = 'choiceESP';
element.style = 'font-size: 24px; color: darkred; font-weight: bolder;';
element.innerText = String(stateNode.state.guest.no[x]);
elements[x].appendChild(element);
});
Array.prototype.forEach.call(document.querySelectorAll("[class*=guestButton][role=button]"), x => (x.onclick = () => Array.prototype.forEach.call(document.querySelectorAll(".choiceESP"), x => x.remove())));
}
}), 50, ['materials', 'people', 'happiness', 'gold']);
}
}
}, {
name: "Disable Tax Toucan",
description: "Tax evasion",
run: function() { Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.taxCounter = Number.MAX_VALUE }
}, {
name: "Max Stats",
description: "Sets all resources to the max",
run: function() { Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({ materials: 100, people: 100, happiness: 100, gold: 100 }) }
}, {
name: "Set Guests",
description: "Sets the amount of guests you've seen",
inputs: [{ name: "Guests", type: "number" }],
run: function(e) { Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({ guestScore: e }) }
}, {
name: "Skip Guest",
description: "Skips the current guest",
run: function() { Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.nextGuest() }
},
{
name: "Player Swapper",
description: "Swaps all data between two players",
inputs: [{ name: "Player 1", type: "options", options() { let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode; return new Promise(res => sn.props.liveGameController.getDatabaseVal("c", d => d && res(Object.keys(d)))); } }, { name: "Player 2", type: "options", options() { let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode; return new Promise(res => sn.props.liveGameController.getDatabaseVal("c", d => d && res(Object.keys(d)))); } }],
run: function(p1, p2) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c", (data) => {
if(data[p1] && data[p2]) { let temp = JSON.parse(JSON.stringify(data[p1])); sn.props.liveGameController.setVal({ path: `c/${p1}`, val: data[p2] }); sn.props.liveGameController.setVal({ path: `c/${p2}`, val: temp }); }
});
}
}, {
name: "Leaderboard Scrambler",
description: "Randomizes scores for all players",
run: function() {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c", (data) => {
for(let p in data) { for(let k in data[p]) { if(typeof data[p][k] === 'number' && k !== 'g') data[p][k] = Math.floor(Math.random() * 99999); } sn.props.liveGameController.setVal({ path: `c/${p}`, val: data[p] }); }
});
}
}, {
name: "Change Game Mode",
description: "Changes the host game mode",
inputs: [{ name: "Mode", type: "options", options: ["Racing", "Classic", "Factory", "Cafe", "Defense2", "Defense", "Royale", "Gold", "Brawl", "Hack", "Pirate", "Fish", "Dino", "Toy", "Rush"] }],
run: function(mode) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.setState({ settings: { type: mode } });
}
}, {
name: "Set Host Screen Text",
description: "Makes host screen filled with text",
inputs: [{ name: "Text", type: "text" }],
run: function(txt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/cr`, val: txt.repeat(500) });
}
}, {
name: "Flood Alert Box",
description: "Makes alert box filled with text",
inputs: [{ name: "Text", type: "text" }],
run: function(txt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c/", (data) => {
if(data) { let p = Object.keys(data)[0]; sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: `${p}:1,723,583,989,363${txt.repeat(100)}` }); }
});
}
}, {
name: "Send Ad Text",
description: "Sends text to override player blook",
inputs: [{ name: "Player", type: "options", options() { let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode; return new Promise(res => sn.props.liveGameController.getDatabaseVal("c", d => d && res(Object.keys(d)))); } }, { name: "Text", type: "text" }],
run: function(p, txt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: `${p}:196` });
sn.client.blook = `Dog:${txt.repeat(200)}`;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/b`, val: `Dog:${txt.repeat(200)}` });
}
}, {
name: "Steal Player's Gold",
description: "Takes all gold from a player",
inputs: [{ name: "Player", type: "options", options() { let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode; return new Promise(res => sn.props.liveGameController.getDatabaseVal("c", d => d && res(Object.keys(d)))); } }],
run: function(p) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c", (data) => {
if(data[p]) { let amt = data[p].g || 0; sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: `${p}:swap:${amt}` }); }
});
}
}, {
name: "Set Gold",
description: "Sets your gold amount",
inputs: [{ name: "Amount", type: "number" }],
run: function(amt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.setState({ gold: amt, materials: amt, people: amt, happiness: amt });
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/g`, val: amt });
}
}, {
name: "Set Host Screen Green",
description: "Makes host screen green with text",
type: "toggle", enabled: false, data: null,
run: function() {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
if(this.enabled) { this.enabled=false; clearInterval(this.data); sn.props.liveGameController.setVal({path:`c/${sn.props.client.name}/cr`,val:""}); }
else { this.enabled=true; this.data=setInterval(()=>sn.props.liveGameController.setVal({path:`c/${sn.props.client.name}/cr`,val:"9".repeat(999)+"็".repeat(999)}),25); }
}
}, {
name: "Crash Host",
description: "Crashes the host game",
run: function() {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: "crash" });
}
}],
racing: [{
name: "Instant Win",
description: "Instantly Wins the race",
run: function() {
let e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
e.setState({ progress: e.state.goalAmount }, () => {
let { question: t } = e.state;
try { [...document.querySelectorAll('[class*="answerContainer"]')][t.answers.map((e, a) => t.correctAnswers.includes(e) ? a : null).filter(e => null != e)[0]]?.click?.() } catch {}
})
}
}, {
name: "Set Questions",
description: "Sets the number of questions left",
inputs: [{ name: "Questions", type: "number" }],
run: function(progress) {
let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
progress = stateNode.props.client.amount - progress;
stateNode.setState({ progress });
stateNode.props.liveGameController.setVal({ path: "c/".concat(stateNode.props.client.name), val: { b: stateNode.props.client.blook, pr: progress } });
}
}, {
name: "Attack Player",
description: "Sends the specified attack to a player",
inputs: [{ name: "Player", type: "options", options() { let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode; return new Promise(res => sn.props.liveGameController.getDatabaseVal("c", d => d && res(Object.keys(d)))); } }, { name: "Attack", type: "options", options: Object.entries({ "Woosh(-1)": "wind", "Rocket(-1)": "rocket", "Fire(-3)": "fire", "Freeze": "freeze" }).map(([e, t]) => ({ name: e, value: t })) }],
run: function(player, attack) {
let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
stateNode.props.liveGameController.setVal({ path: `c/${stateNode.props.client.name}/tat`, val: player + ":" + attack });
}
},
{
name: "Player Swapper",
description: "Swaps all data between two players",
inputs: [{ name: "Player 1", type: "options", options() { let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode; return new Promise(res => sn.props.liveGameController.getDatabaseVal("c", d => d && res(Object.keys(d)))); } }, { name: "Player 2", type: "options", options() { let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode; return new Promise(res => sn.props.liveGameController.getDatabaseVal("c", d => d && res(Object.keys(d)))); } }],
run: function(p1, p2) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c", (data) => {
if(data[p1] && data[p2]) { let temp = JSON.parse(JSON.stringify(data[p1])); sn.props.liveGameController.setVal({ path: `c/${p1}`, val: data[p2] }); sn.props.liveGameController.setVal({ path: `c/${p2}`, val: temp }); }
});
}
}, {
name: "Leaderboard Scrambler",
description: "Randomizes scores for all players",
run: function() {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c", (data) => {
for(let p in data) { for(let k in data[p]) { if(typeof data[p][k] === 'number' && k !== 'pr') data[p][k] = Math.floor(Math.random() * 99999); } sn.props.liveGameController.setVal({ path: `c/${p}`, val: data[p] }); }
});
}
}, {
name: "Change Game Mode",
description: "Changes the host game mode",
inputs: [{ name: "Mode", type: "options", options: ["Racing", "Classic", "Factory", "Cafe", "Defense2", "Defense", "Royale", "Gold", "Brawl", "Hack", "Pirate", "Fish", "Dino", "Toy", "Rush"] }],
run: function(mode) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.setState({ settings: { type: mode } });
}
}, {
name: "Set Host Screen Text",
description: "Makes host screen filled with text",
inputs: [{ name: "Text", type: "text" }],
run: function(txt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/cr`, val: txt.repeat(500) });
}
}, {
name: "Flood Alert Box",
description: "Makes alert box filled with text",
inputs: [{ name: "Text", type: "text" }],
run: function(txt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c/", (data) => {
if(data) { let p = Object.keys(data)[0]; sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: `${p}:1,723,583,989,363${txt.repeat(100)}` }); }
});
}
}, {
name: "Send Ad Text",
description: "Sends text to override player blook",
inputs: [{ name: "Player", type: "options", options() { let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode; return new Promise(res => sn.props.liveGameController.getDatabaseVal("c", d => d && res(Object.keys(d)))); } }, { name: "Text", type: "text" }],
run: function(p, txt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: `${p}:196` });
sn.client.blook = `Dog:${txt.repeat(200)}`;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/b`, val: `Dog:${txt.repeat(200)}` });
}
}, {
name: "Steal Player's Progress",
description: "Takes all progress from a player",
inputs: [{ name: "Player", type: "options", options() { let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode; return new Promise(res => sn.props.liveGameController.getDatabaseVal("c", d => d && res(Object.keys(d)))); } }],
run: function(p) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c", (data) => {
if(data[p]) { let amt = data[p].pr || 0; sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: `${p}:swap:${amt}` }); }
});
}
}, {
name: "Set Progress",
description: "Sets your progress amount",
inputs: [{ name: "Amount", type: "number" }],
run: function(amt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.setState({ progress: amt });
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/pr`, val: amt });
}
}, {
name: "Set Host Screen Green",
description: "Makes host screen green with text",
type: "toggle", enabled: false, data: null,
run: function() {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
if(this.enabled) { this.enabled=false; clearInterval(this.data); sn.props.liveGameController.setVal({path:`c/${sn.props.client.name}/cr`,val:""}); }
else { this.enabled=true; this.data=setInterval(()=>sn.props.liveGameController.setVal({path:`c/${sn.props.client.name}/cr`,val:"9".repeat(999)+"็".repeat(999)}),25); }
}
}, {
name: "Crash Host",
description: "Crashes the host game",
run: function() {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: "crash" });
}
}],
royale: [{
name: "Auto Answer (Toggle)",
description: "Toggles auto answer on",
type: "toggle",
enabled: !1,
data: null,
run: function() {
this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
var e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
e?.onAnswer?.(!0, e.props.client.question.correctAnswers[0])
}, 50))
}
}, {
name: "Auto Answer",
description: "Chooses the correct answer for you. Will answer with the time provided.",
inputs: [{ name: "Time (milliseconds)", type: "number", min: 0, max: 20000 }],
run: (a) => {
const stateNode = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
stateNode.startTime = performance.now() - a;
stateNode?.onAnswer?.(true, stateNode.props.client.question.correctAnswers[0]);
}
},
{
name: "Player Swapper",
description: "Swaps all data between two players",
inputs: [{ name: "Player 1", type: "options", options() { let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode; return new Promise(res => sn.props.liveGameController.getDatabaseVal("c", d => d && res(Object.keys(d)))); } }, { name: "Player 2", type: "options", options() { let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode; return new Promise(res => sn.props.liveGameController.getDatabaseVal("c", d => d && res(Object.keys(d)))); } }],
run: function(p1, p2) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c", (data) => {
if(data[p1] && data[p2]) { let temp = JSON.parse(JSON.stringify(data[p1])); sn.props.liveGameController.setVal({ path: `c/${p1}`, val: data[p2] }); sn.props.liveGameController.setVal({ path: `c/${p2}`, val: temp }); }
});
}
}, {
name: "Leaderboard Scrambler",
description: "Randomizes scores for all players",
run: function() {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c", (data) => {
for(let p in data) { for(let k in data[p]) { if(typeof data[p][k] === 'number' && k !== 'e') data[p][k] = Math.floor(Math.random() * 99999); } sn.props.liveGameController.setVal({ path: `c/${p}`, val: data[p] }); }
});
}
}, {
name: "Change Game Mode",
description: "Changes the host game mode",
inputs: [{ name: "Mode", type: "options", options: ["Racing", "Classic", "Factory", "Cafe", "Defense2", "Defense", "Royale", "Gold", "Brawl", "Hack", "Pirate", "Fish", "Dino", "Toy", "Rush"] }],
run: function(mode) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.setState({ settings: { type: mode } });
}
}, {
name: "Set Host Screen Text",
description: "Makes host screen filled with text",
inputs: [{ name: "Text", type: "text" }],
run: function(txt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/cr`, val: txt.repeat(500) });
}
}, {
name: "Flood Alert Box",
description: "Makes alert box filled with text",
inputs: [{ name: "Text", type: "text" }],
run: function(txt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c/", (data) => {
if(data) { let p = Object.keys(data)[0]; sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: `${p}:1,723,583,989,363${txt.repeat(100)}` }); }
});
}
}, {
name: "Send Ad Text",
description: "Sends text to override player blook",
inputs: [{ name: "Player", type: "options", options() { let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode; return new Promise(res => sn.props.liveGameController.getDatabaseVal("c", d => d && res(Object.keys(d)))); } }, { name: "Text", type: "text" }],
run: function(p, txt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: `${p}:196` });
sn.client.blook = `Dog:${txt.repeat(200)}`;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/b`, val: `Dog:${txt.repeat(200)}` });
}
}, {
name: "Steal Player's Eliminations",
description: "Takes all eliminations from a player",
inputs: [{ name: "Player", type: "options", options() { let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode; return new Promise(res => sn.props.liveGameController.getDatabaseVal("c", d => d && res(Object.keys(d)))); } }],
run: function(p) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c", (data) => {
if(data[p]) { let amt = data[p].e || 0; sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: `${p}:swap:${amt}` }); }
});
}
}, {
name: "Set Eliminations",
description: "Sets your eliminations amount",
inputs: [{ name: "Amount", type: "number" }],
run: function(amt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.setState({ eliminations: amt });
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/e`, val: amt });
}
}, {
name: "Set Host Screen Green",
description: "Makes host screen green with text",
type: "toggle", enabled: false, data: null,
run: function() {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
if(this.enabled) { this.enabled=false; clearInterval(this.data); sn.props.liveGameController.setVal({path:`c/${sn.props.client.name}/cr`,val:""}); }
else { this.enabled=true; this.data=setInterval(()=>sn.props.liveGameController.setVal({path:`c/${sn.props.client.name}/cr`,val:"9".repeat(999)+"็".repeat(999)}),25); }
}
}, {
name: "Crash Host",
description: "Crashes the host game",
run: function() {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: "crash" });
}
}],
rush: [{
name: "Set Blooks",
description: "Sets amount of blooks you or your team has",
inputs: [{ name: "Blooks", type: "number" }],
run: function(e) {
var t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
t.setState({ numBlooks: e }),
t.isTeam ? t.props.liveGameController.setVal({ path: `a/${t.props.client.name}/bs`, val: e }) : t.props.liveGameController.setVal({ path: `c/${t.props.client.name}/bs`, val: numDefense })
}
}, {
name: "Set Defense",
description: "Sets amount of defense you or your team has (Max 4)",
inputs: [{ name: "Defense (max 4)", type: "number", max: 4 }],
run: function(e) {
var e = Math.min(e, 4), t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
t.setState({ numDefense: e }),
t.isTeam ? t.props.liveGameController.setVal({ path: `a/${t.props.client.name}/d`, val: e }) : t.props.liveGameController.setVal({ path: `c/${t.props.client.name}/d`, val: e })
}
}, {
name: "Freeze Host",
description: "Does what it says above.. could be permanent!",
run: function() {
var largeNumber = "99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999";
var t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
t.setState({ numBlooks: largeNumber });
if (t.isTeam) { t.props.liveGameController.setVal({ path: `a/${t.props.client.name}/bs`, val: largeNumber }); } else { t.props.liveGameController.setVal({ path: `c/${t.props.client.name}/bs`, val: largeNumber }); }
}
},
{
name: "Player Swapper",
description: "Swaps all data between two players",
inputs: [{ name: "Player 1", type: "options", options() { let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode; return new Promise(res => sn.props.liveGameController.getDatabaseVal("c", d => d && res(Object.keys(d)))); } }, { name: "Player 2", type: "options", options() { let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode; return new Promise(res => sn.props.liveGameController.getDatabaseVal("c", d => d && res(Object.keys(d)))); } }],
run: function(p1, p2) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c", (data) => {
if(data[p1] && data[p2]) { let temp = JSON.parse(JSON.stringify(data[p1])); sn.props.liveGameController.setVal({ path: `c/${p1}`, val: data[p2] }); sn.props.liveGameController.setVal({ path: `c/${p2}`, val: temp }); }
});
}
}, {
name: "Leaderboard Scrambler",
description: "Randomizes scores for all players",
run: function() {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c", (data) => {
for(let p in data) { for(let k in data[p]) { if(typeof data[p][k] === 'number' && k !== 'bs') data[p][k] = Math.floor(Math.random() * 99999); } sn.props.liveGameController.setVal({ path: `c/${p}`, val: data[p] }); }
});
}
}, {
name: "Change Game Mode",
description: "Changes the host game mode",
inputs: [{ name: "Mode", type: "options", options: ["Racing", "Classic", "Factory", "Cafe", "Defense2", "Defense", "Royale", "Gold", "Brawl", "Hack", "Pirate", "Fish", "Dino", "Toy", "Rush"] }],
run: function(mode) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.setState({ settings: { type: mode } });
}
}, {
name: "Set Host Screen Text",
description: "Makes host screen filled with text",
inputs: [{ name: "Text", type: "text" }],
run: function(txt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/cr`, val: txt.repeat(500) });
}
}, {
name: "Flood Alert Box",
description: "Makes alert box filled with text",
inputs: [{ name: "Text", type: "text" }],
run: function(txt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c/", (data) => {
if(data) { let p = Object.keys(data)[0]; sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: `${p}:1,723,583,989,363${txt.repeat(100)}` }); }
});
}
}, {
name: "Send Ad Text",
description: "Sends text to override player blook",
inputs: [{ name: "Player", type: "options", options() { let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode; return new Promise(res => sn.props.liveGameController.getDatabaseVal("c", d => d && res(Object.keys(d)))); } }, { name: "Text", type: "text" }],
run: function(p, txt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: `${p}:196` });
sn.client.blook = `Dog:${txt.repeat(200)}`;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/b`, val: `Dog:${txt.repeat(200)}` });
}
}, {
name: "Steal Player's Blooks",
description: "Takes all blooks from a player",
inputs: [{ name: "Player", type: "options", options() { let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode; return new Promise(res => sn.props.liveGameController.getDatabaseVal("c", d => d && res(Object.keys(d)))); } }],
run: function(p) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c", (data) => {
if(data[p]) { let amt = data[p].bs || 0; sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: `${p}:swap:${amt}` }); }
});
}
}, {
name: "Set Blooks",
description: "Sets your blooks amount",
inputs: [{ name: "Amount", type: "number" }],
run: function(amt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.setState({ numBlooks: amt });
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/bs`, val: amt });
}
}, {
name: "Set Host Screen Green",
description: "Makes host screen green with text",
type: "toggle", enabled: false, data: null,
run: function() {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
if(this.enabled) { this.enabled=false; clearInterval(this.data); sn.props.liveGameController.setVal({path:`c/${sn.props.client.name}/cr`,val:""}); }
else { this.enabled=true; this.data=setInterval(()=>sn.props.liveGameController.setVal({path:`c/${sn.props.client.name}/cr`,val:"9".repeat(999)+"็".repeat(999)}),25); }
}
}, {
name: "Crash Host",
description: "Crashes the host game",
run: function() {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: "crash" });
}
}],
workshop: [{
name: "Remove Distractions",
description: "Removes all enemy distractions",
run: function() {
Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({ fog: !1, dusk: !1, wind: !1, plow: !1, blizzard: !1, force: !1, canada: !1, trees: [!1, !1, !1, !1, !1, !1, !1, !1, !1, !1] })
}
}, {
name: "Send Distraction",
description: "Sends a distraction to everyone else playing",
inputs: [{ name: "Distraction", type: "options", options: Object.entries({ c: "Oh Canada", b: "Blizzard", f: "Fog Spell", d: "Dark & Dusk", w: "Howling Wind", g: "Gift Time!", t: "TREES", s: "Snow Plow", fr: "Use The Force" }).map(([e, t]) => ({ name: t, value: e })) }],
run: function(e) {
var t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
t.safe = !0, t.props.liveGameController.setVal({ path: `c/${t.props.client.name}/tat`, val: e })
}
}, {
name: "Set Toys",
description: "Sets amount of toys",
inputs: [{ name: "Toys", type: "number" }],
run: function(e) {
var t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
t.setState({ toys: e }), t.props.liveGameController.setVal({ path: "c/".concat(t.props.client.name), val: { b: t.props.client.blook, t: e } })
}
}, {
name: "Set Toys Per Question",
description: "Sets amount of toys per question",
inputs: [{ name: "Toys Per Question", type: "number" }],
run: function(e) { Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({ toysPerQ: e }) }
}, {
name: "Swap Toys",
description: "Swaps toys with someone",
inputs: [{ name: "Player", type: "options", options() { let e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode; return new Promise(t => e.props.liveGameController._liveApp ? e.props.liveGameController.getDatabaseVal("c", e => e && t(Object.keys(e))) : t([])) } }],
run: function(e) {
let t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
t.props.liveGameController.getDatabaseVal("c", a => {
var o;
a && Object.keys(a).map(e => e.toLowerCase()).includes(e.toLowerCase()) && ([a, { t: o }] = Object.entries(a).find(([t]) => t.toLowerCase() == e.toLowerCase()), t.props.liveGameController.setVal({ path: "c/".concat(t.props.client.name), val: { b: t.props.client.blook, t: o, tat: a + ":swap:" + t.state.toys } }), t.setState({ toys: o }))
})
}
},
{
name: "Player Swapper",
description: "Swaps all data between two players",
inputs: [{ name: "Player 1", type: "options", options() { let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode; return new Promise(res => sn.props.liveGameController.getDatabaseVal("c", d => d && res(Object.keys(d)))); } }, { name: "Player 2", type: "options", options() { let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode; return new Promise(res => sn.props.liveGameController.getDatabaseVal("c", d => d && res(Object.keys(d)))); } }],
run: function(p1, p2) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c", (data) => {
if(data[p1] && data[p2]) { let temp = JSON.parse(JSON.stringify(data[p1])); sn.props.liveGameController.setVal({ path: `c/${p1}`, val: data[p2] }); sn.props.liveGameController.setVal({ path: `c/${p2}`, val: temp }); }
});
}
}, {
name: "Leaderboard Scrambler",
description: "Randomizes scores for all players",
run: function() {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c", (data) => {
for(let p in data) { for(let k in data[p]) { if(typeof data[p][k] === 'number' && k !== 't') data[p][k] = Math.floor(Math.random() * 99999); } sn.props.liveGameController.setVal({ path: `c/${p}`, val: data[p] }); }
});
}
}, {
name: "Change Game Mode",
description: "Changes the host game mode",
inputs: [{ name: "Mode", type: "options", options: ["Racing", "Classic", "Factory", "Cafe", "Defense2", "Defense", "Royale", "Gold", "Brawl", "Hack", "Pirate", "Fish", "Dino", "Toy", "Rush"] }],
run: function(mode) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.setState({ settings: { type: mode } });
}
}, {
name: "Set Host Screen Text",
description: "Makes host screen filled with text",
inputs: [{ name: "Text", type: "text" }],
run: function(txt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/cr`, val: txt.repeat(500) });
}
}, {
name: "Flood Alert Box",
description: "Makes alert box filled with text",
inputs: [{ name: "Text", type: "text" }],
run: function(txt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c/", (data) => {
if(data) { let p = Object.keys(data)[0]; sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: `${p}:1,723,583,989,363${txt.repeat(100)}` }); }
});
}
}, {
name: "Send Ad Text",
description: "Sends text to override player blook",
inputs: [{ name: "Player", type: "options", options() { let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode; return new Promise(res => sn.props.liveGameController.getDatabaseVal("c", d => d && res(Object.keys(d)))); } }, { name: "Text", type: "text" }],
run: function(p, txt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: `${p}:196` });
sn.client.blook = `Dog:${txt.repeat(200)}`;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/b`, val: `Dog:${txt.repeat(200)}` });
}
}, {
name: "Steal Player's Toys",
description: "Takes all toys from a player",
inputs: [{ name: "Player", type: "options", options() { let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode; return new Promise(res => sn.props.liveGameController.getDatabaseVal("c", d => d && res(Object.keys(d)))); } }],
run: function(p) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c", (data) => {
if(data[p]) { let amt = data[p].t || 0; sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: `${p}:swap:${amt}` }); }
});
}
}, {
name: "Set Toys",
description: "Sets your toys amount",
inputs: [{ name: "Amount", type: "number" }],
run: function(amt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.setState({ toys: amt });
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/t`, val: amt });
}
}, {
name: "Set Host Screen Green",
description: "Makes host screen green with text",
type: "toggle", enabled: false, data: null,
run: function() {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
if(this.enabled) { this.enabled=false; clearInterval(this.data); sn.props.liveGameController.setVal({path:`c/${sn.props.client.name}/cr`,val:""}); }
else { this.enabled=true; this.data=setInterval(()=>sn.props.liveGameController.setVal({path:`c/${sn.props.client.name}/cr`,val:"9".repeat(999)+"็".repeat(999)}),25); }
}
}, {
name: "Crash Host",
description: "Crashes the host game",
run: function() {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: "crash" });
}
}],
extras: [{
name: "Toggle Invert Colors",
description: "Toggle between inverting and restoring colors on the page",
run: function() {
"invert()" == document.getElementsByTagName("html")[0].style.filter ? document.getElementsByTagName("html")[0].style.filter = "" : document.getElementsByTagName("html")[0].style.filter = "invert()",
elems = document.querySelectorAll(" a, img, video");
for (let e = 0; e < elems.length; e++)
("A" == elems[e].nodeName && ("" != elems[e].style.background || "" != elems[e].style.backgroundImage) || "A" != elems[e].nodeName) && ("invert()" == elems[e].style.filter ? elems[e].style.filter = "" : elems[e].style.filter = "invert()")
}
}, {
name: "Toggle Dark Mode",
description: "Toggles Dark Mode",
run: function() {
var e = document.createElement("iframe");
document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove(),
!function e() {
let t = document.querySelectorAll("#nightify");
if (t.length) t[0].parentNode.removeChild(t[0]);
else { var a = document.getElementsByTagName("head")[0], o = document.createElement("style"); o.setAttribute("type", "text/css"), o.setAttribute("id", "nightify"), o.appendChild(document.createTextNode(`html{-webkit-filter:invert(100%) hue-rotate(180deg) contrast(70%) !important; background: #222;} .line-content {background-color: #333;} html img{-webkit-filter:invert(100%) hue-rotate(0deg) contrast(100%) !important;}`)), a.appendChild(o) }
}()
}
}, {
name: "3D Page",
description: "Makes the page 3D",
run: function() {
var e = { menu: document.createElement("div"), limit: document.createElement("input"), gap: document.createElement("input"), sag: document.createElement("input"), fov: document.createElement("input"), flo: document.createElement("input"), off: document.createElement("input"), non: document.createElement("input"), end: document.createElement("input"), tgl: document.createElement("input"), cssStatic: document.createElement("style"), cssDynamic: document.createElement("style"), orientation: { yaw: 0, pitch: 0, roll: 0 },
mouseMove: function(t) { e.orientation.yaw = -(180 * Math.cos(Math.PI * t.clientX / innerWidth)) * e.limit.value, e.orientation.pitch = 180 * Math.cos(Math.PI * t.clientY / innerHeight) * e.limit.value, e.updateBody() },
gyroMove: function(t) { innerWidth > innerHeight ? (e.orientation.yaw = -(t.alpha + t.beta), e.orientation.pitch = t.gamma - 90 * Math.sign(90 - Math.abs(t.beta))) : (e.orientation.yaw = -(t.alpha + t.gamma), e.orientation.pitch = t.beta - 90), e.updateBody() },
updateOrigin: function(e) { document.body.style.transformOrigin = innerWidth / 2 + pageXOffset + "px " + (innerHeight / 2 + pageYOffset) + "px" },
updateBody: function() { document.body.style.transform = "perspective(" + Math.pow(2, e.fov.value) + "px) translateZ(-" + e.gap.value + "px) rotateX(" + e.orientation.pitch + "deg) rotateY(" + e.orientation.yaw + "deg)" },
updateCSS: function() { if (e.non.checked) e.cssDynamic.innerHTML = ""; else if (e.off.checked) e.cssDynamic.innerHTML = "* { transform-style: preserve-3d; }"; else { for (var t = 0; document.querySelector("body" + " > *".repeat(t)); t++); var a = e.gap.value / t, o = -Math.PI * e.sag.value / t; e.cssDynamic.innerHTML = ` * { transform: translateZ(${a}px) rotateX(${o}rad); transform-style: preserve-3d; transition: transform 1s; outline: 1px solid rgba(0, 0, 0, 0.0625); ${e.flo.checked ? "overflow: visible !important;" : ""} } *:hover { transform: translateZ(${2 * a}px) rotateX(${2 * o}rad); ${e.flo.checked ? "" : "overflow: visible;"} } ` } },
toggle: function() { "active" == e.menu.className ? e.menu.removeAttribute("class") : e.menu.className = "active" },
quit: function() { window.removeEventListener("deviceorientation", e.gyroMove), window.removeEventListener("mousemove", e.mouseMove), window.removeEventListener("scroll", e.updateOrigin), window.addEventListener("resize", e.updateOrigin), e.menu.remove(), e.cssStatic.remove(), e.cssDynamic.remove(), document.body.removeAttribute("style") },
newRange: function(t, a, o, r, i, n, s) { e.menu.appendChild(t), t.type = "range", t.min = o, t.max = i, t.step = r, t.value = n, t.addEventListener("input", s), e.menu.appendChild(document.createElement("span")).innerHTML = a, e.menu.appendChild(document.createElement("br")) },
newCheckbox: function(t, a, o) { e.menu.appendChild(t), t.type = "checkbox", t.addEventListener("click", o), e.menu.appendChild(document.createElement("span")).innerHTML = a, e.menu.appendChild(document.createElement("br")) },
newButton: function(t, a, o) { e.menu.appendChild(t), t.type = "button", t.value = a, t.addEventListener("click", o) },
init: function() {
document.body.parentNode.appendChild(e.menu).id = "tri-menu",
e.newRange(e.limit, "limit", 0, .03125, 1, .125, e.updateBody),
e.newRange(e.gap, "gap / distance", 0, 32, 512, 128, function() { e.updateCSS(), e.updateBody() }),
e.newRange(e.sag, "sag", -.25, .03125, .25, 0, e.updateCSS),
e.newRange(e.fov, "field of view", 7, 1, 13, 10, e.updateBody),
e.newCheckbox(e.flo, "force overflow", e.updateCSS), e.flo.setAttribute("checked", ""),
e.newCheckbox(e.off, "flatten layers", e.updateCSS),
e.newCheckbox(e.non, "flatten everything", e.updateCSS),
e.newButton(e.end, "Quit", e.quit),
e.newButton(e.tgl, "≡", e.toggle), e.tgl.id = "tri-toggle",
e.menu.appendChild(e.cssStatic).innerHTML = " html, body { transition-property: none; height: 100%25; width: 100%25; } html, html:hover, #tri-menu, #tri-menu > *, #tri-menu > *:hover { transform: none; outline: none; overflow: auto !important; float: none; } #tri-menu { position: fixed; top: 0; left: 0; background: rgba(0, 0, 0, 0.5); color: white; border: 1px solid rgba(255, 255, 255, 0.5);; border-radius: 0 0 16px 0; padding: 8px; transform: translate(-100%25, -100%25) translate(32px, 32px); } #tri-menu.active { transform: none; } #tri-toggle { position: absolute; bottom: 0; right: 0; height: 32px; width: 32px; background: transparent; color: white; border: none; cursor: pointer; } #tri-menu.active > #tri-toggle { background: white; color: black; border-radius: 8px 0 0 0; }",
e.menu.appendChild(e.cssDynamic), e.updateCSS(),
window.addEventListener("deviceorientation", e.gyroMove), window.addEventListener("mousemove", e.mouseMove), window.addEventListener("scroll", e.updateOrigin), window.addEventListener("resize", e.updateOrigin), window.scrollBy(0, 1)
}
}; e.init()
}
}, {
name: "History Flooder",
description: "Floods browser history with specified amount of entries",
inputs: [{ name: "Amount", type: "number" }],
run: function(e) {
var t = e; done = !1, C = window.location.href;
for (var a = 1; a <= t; a++) history.pushState(0, 0, a == t ? C : a.toString()), a == t && (done = !0);
!0 === done && alert("History flood successful! " + window.location.href + " now appears in your history " + t + (1 == t ? " time." : " times. "))
}
}, {
name: "Auto Clicker",
description: "Automatically clicks for you. Press S to toggle.",
inputs: [{ name: "Click Delay", type: "number" }],
run: function(inputs) {
clicker: { "use strict"; let clickInterval = null; let clickingEnabled = true; const { Number, self } = window; const milliseconds = Number.parseInt(inputs, 10); if (false === Number.isSafeInteger(milliseconds)) { self.alert("Input was not an integer"); break clicker; } let clientX = 0, clientY = 0; const { document } = self; function startClicking() { clickInterval = self.setInterval(() => { document.elementFromPoint(clientX, clientY)?.click?.(); }, milliseconds); } function stopClicking() { self.clearInterval(clickInterval); clickInterval = null; } startClicking(); document.addEventListener("mousemove", event => { ({ clientX, clientY } = event); }, { passive: true }); self.addEventListener("keydown", event => { if (event.key === "s") { if (clickingEnabled) { stopClicking(); } else { startClicking(); } clickingEnabled = !clickingEnabled; } }); }
}
}, {
name: "Tab Cloaker",
description: "Changes the tab image and name",
inputs: [{ name: "Icon URL", type: "text" }, { name: "Tab Title", type: "text" }],
run: function(e, t) {
var a = document.querySelector("link[rel*='icon']") || document.createElement("link");
a.type = "image/x-icon", a.rel = "shortcut icon", a.href = e || "https://www.blooket.com/favicon.ico", document.getElementsByTagName("head")[0].appendChild(a), document.title = t || "Blooket"
}
}],
host: [{
name: "Host Any Gamemode",
description: "Change the selected gamemode on the host settings page",
inputs: [{ name: "Gamemode", type: "options", options: ["Racing", "Classic", "Factory", "Cafe", "Defense2", "Defense", "Royale", "Gold", "Brawl", "Hack", "Pirate", "Fish", "Dino", "Toy", "Rush"] }],
run: function(e) {
let t = document.createElement("iframe");
if (document.body.append(t), window.alert = t.contentWindow.alert.bind(window), window.prompt = t.contentWindow.prompt.bind(window), t.remove(), "/host/settings" != location.pathname) return alert("Run this script on the host settings page");
let { stateNode: a } = Object.values(function e(t = document.querySelector("body>div")) { return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div")) }())[1].children[0]._owner;
a.setState({ settings: { type: e } })
}
}, {
name: "Toggle Spooky Theme",
description: "Toggles the spooky theme for Gold Quest",
run: function() { (() => { const sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode; sn.season = sn.season ? 0 : 1; sn.render(); })(); }
}, {
name: "Freeze Timer",
description: "Makes the host timer stop ingame",
run: function() { (() => { const { stateNode } = Object.values(document.querySelector("#app>div>div"))[1].children[0]._owner; clearInterval(stateNode.timerInterval); stateNode.timerInterval = setInterval(function() { stateNode?.getClients?.(!1); }, 4000); })(); }
}, {
name: "Render Hours on Host Timer",
description: "Renders hours on host timer(use with remove host time limit). Can only render up to 24 hours.",
run: function() { (() => { const format = "HH:mm:ss"; const reg = '/(\\[[^\\[]*\\])|(\\\\)?(LTS|LT|LL?L?L?|l{1,4})/g'; if (!RegExp.prototype.tes) { RegExp.prototype.tes = RegExp.prototype.test; } RegExp.prototype.test = function(a) { if (a == "mm:ss" && this.toString() == reg) { return !0; } return RegExp.prototype.tes.apply(this, arguments); } if (!String.prototype.rep) { String.prototype.rep = String.prototype.replace; } String.prototype.replace = function(a, b) { if (this == "mm:ss" && a.toString() == reg) { return format; } return String.prototype.rep.apply(this, arguments); } })(); }
}, {
name: "View Lobbychat Logs",
description: "View messages players type in chat",
run: function() {
function reactHandler() { return Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner; }
document.addEventListener("keydown", function(e) { if (e.key === "Shift" && e.code === "ShiftRight") { c.style.display = c.style.display === "none" ? "block" : "none"; } });
const c = document.createElement("div"); c.className = "chat-box"; document.body.appendChild(c);
const h = document.createElement("div"); h.className = "chat-header"; h.textContent = "Chat Logs (RSHIFT to hide)"; c.appendChild(h);
const b = document.createElement("div"); b.className = "chat-body"; c.appendChild(b);
function a(e) { const t = document.createElement("div"); t.textContent = e; b.appendChild(t); b.scrollTop = b.scrollHeight; }
c.style.position = "fixed"; c.style.bottom = "20px"; c.style.right = "20px"; c.style.width = "300px"; c.style.height = "400px"; c.style.backgroundColor = "#fff"; c.style.border = "1px solid #ccc"; c.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.2)"; c.style.display = "block"; b.style.height = "360px"; b.style.overflowY = "scroll"; b.style.padding = "10px";
h.addEventListener("click", () => { b.classList.toggle("open"); });
var da = reactHandler().stateNode.props.liveGameController._liveApp.database()._delegate._repoInternal.server_.onDataUpdate_;
function handleChat(e, t) { if (t != null) { if (e.includes("/msg")) { t?.msg && (console.log(t.msg), a(e.split("/")[2] + ": " + t.msg)); } } }
reactHandler().stateNode.props.liveGameController._liveApp.database()._delegate._repoInternal.server_.onDataUpdate_ = function(e, t, a, n) { console.log(e, t, a, n); handleChat(e, t); da(e, t, a, n); };
window.logsv = false;
function onsv(e) { if (window.logsv) { a("Path: " + e.path.split("/").splice(2, 2).join("/") + " Val: " + ((typeof e.val === 'object') ? JSON.stringify(e.val) : e.val)); } }
var orgsv = reactHandler().stateNode.props.liveGameController.setVal;
reactHandler().stateNode.props.liveGameController.setVal = function() { onsv.apply(this, arguments); orgsv.apply(this, arguments); };
reactHandler().stateNode.props.liveGameController._liveApp.database().ref(`${reactHandler().stateNode.props.client.hostId}`).on("value", e => {});
a("Lobbychat successfully loaded!"); function app() { c.style.wordWrap = "break-word"; } app();
}
}, {
name: "Remove Host Time Limit",
description: "Removes the host time limit",
run: function() { (() => { const sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode; sn.onAmountUpdate = function(t) { let settings = sn.state.settings; settings.amount = parseInt(t.target.value); sn.setState({ settings }); } })(); }
}, {
name: "Free Player Slots",
description: "Allows more players to join if the game is full",
run: async () => {
let i = document.createElement('iframe'); document.body.append(i); const alert = i.contentWindow.alert.bind(window); i.remove();
const stateNode = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
const players = await stateNode.props.liveGameController.getDatabaseVal("c");
let freed = 0; if (!stateNode.state.blockedUsers) { stateNode.state.blockedUsers = []; }
async function wait(time) { return new Promise(e => { setTimeout(e, time); }); }
async function blockUser(name) { if (stateNode.state.blockedUsers.includes(name)) { return; } const res = await fetch("https://fb.blooket.com/c/firebase/block", { headers: { "Content-Type": "application/json" }, method: "POST", body: JSON.stringify({ g: stateNode.props.host.id, u: name }), credentials: "include" }); if (res.status !== 200) { return; } stateNode.state.blockedUsers.push(name); freed++; if (freed % parseInt("15") == 0) { await wait(600); } C.alerts?.[0].addLog("Freed user: " + name); }
for (let i in players) { await blockUser(i); } alert(`Freed slots: ${freed}`);
}
}, {
name: "Realtime Updates",
description: "Makes leaderboard updates happen in real-time.",
run: async () => { const stateNode = () => Object.values(document.querySelector("#app>div>div"))[1].children[0]._owner.stateNode; (await stateNode().props.liveGameController.getDatabaseRef("")).on("value", e => stateNode()?.getClients?.(!1)); }
}, {
name: "Anti-Flood",
description: "Prevents bots from flooding the game",
enabled: false, data: null,
run: function() {
if (this.enabled) { return; } this.enabled = true;
this.data = setInterval(async () => {
var iframe = document.createElement("iframe"); document.body.append(iframe); window.confirm = iframe.contentWindow.confirm.bind(window); iframe.style.display = "none";
try {
let stateNode = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode;
var dbRef = await stateNode.props.liveGameController.getDatabaseRef("c");
let currentClients = {}, clientCounts = {};
dbRef.on("value", snapshot => {
var clients = snapshot.val() || {}; var newClients = [];
for (const key in clients) { if (!currentClients[key]) { newClients.push(key); clientCounts[key.replace(/[0-9]/g, "")] = (clientCounts[key.replace(/[0-9]/g, "")] || 0) + 1; } }
currentClients = clients;
for (const client of newClients) { if (currentClients[client].g || clientCounts[client.replace(/[0-9]/g, "")] > 1) { stateNode.props.liveGameController.blockUser(client); clientCounts[client.replace(/[0-9]/g, "")]--; } }
});
} catch (error) { console.error("An error occurred", error); }
}, 2000);
}
}, {
name: "Enable Mobile Hosting",
description: "Makes it so that you can host on mobile",
run: function() { (function() { var metaViewport = document.querySelector('meta[name="viewport"]'); if (metaViewport) { metaViewport.parentNode.removeChild(metaViewport); } var newMetaViewport = document.createElement('meta'); newMetaViewport.name = 'viewport'; newMetaViewport.content = 'width=1280, initial-scale=1'; document.head.appendChild(newMetaViewport); })(); }
}, {
name: "Kick All Players",
description: "Kicks all players from your game.",
run: async () => {
const sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
const db = await sn.props.liveGameController.getDatabaseVal("");
sn.props.liveGameController.setVal({ path: "bu", val: Object.keys(db.c).reduce((a, b) => (a[b] = 1, a), db.bu ? db.bu : {}) });
sn.props.liveGameController.setVal({ path: "c", val: {} });
}
}],
royale: [{
name: "Auto Answer (Toggle)",
description: "Toggles auto answer on",
type: "toggle",
enabled: !1,
 null,
run: function() {
this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
var e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
e?.onAnswer?.(!0, e.props.client.question.correctAnswers[0])
}, 50))
}
}, {
name: "Auto Answer",
description: "Chooses the correct answer for you. Will answer with the time provided.",
inputs: [{
name: "Time (milliseconds)",
type: "number",
min: 0,
max: 20000,
}],
run: (a) => {
const stateNode = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
stateNode.startTime = performance.now() - a;
stateNode?.onAnswer?.(true, stateNode.props.client.question.correctAnswers[0]);
}
},
{
name: "Player Swapper",
description: "Swaps all data between two players",
inputs: [{ name: "Player 1", type: "options", options() { let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode; return new Promise(res => sn.props.liveGameController.getDatabaseVal("c", d => d && res(Object.keys(d)))); } }, { name: "Player 2", type: "options", options() { let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode; return new Promise(res => sn.props.liveGameController.getDatabaseVal("c", d => d && res(Object.keys(d)))); } }],
run: function(p1, p2) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c", (data) => {
if(data[p1] && data[p2]) { let temp = JSON.parse(JSON.stringify(data[p1])); sn.props.liveGameController.setVal({ path: `c/${p1}`, val: data[p2] }); sn.props.liveGameController.setVal({ path: `c/${p2}`, val: temp }); }
});
}
}, {
name: "Leaderboard Scrambler",
description: "Randomizes scores for all players",
run: function() {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c", (data) => {
for(let p in data) { for(let k in data[p]) { if(typeof data[p][k] === 'number' && k !== 'e') data[p][k] = Math.floor(Math.random() * 99999); } sn.props.liveGameController.setVal({ path: `c/${p}`, val: data[p] }); }
});
}
}, {
name: "Change Game Mode",
description: "Changes the host game mode",
inputs: [{ name: "Mode", type: "options", options: ["Racing", "Classic", "Factory", "Cafe", "Defense2", "Defense", "Royale", "Gold", "Brawl", "Hack", "Pirate", "Fish", "Dino", "Toy", "Rush"] }],
run: function(mode) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.setState({ settings: { type: mode } });
}
}, {
name: "Set Host Screen Text",
description: "Makes host screen filled with text",
inputs: [{ name: "Text", type: "text" }],
run: function(txt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/cr`, val: txt.repeat(500) });
}
}, {
name: "Flood Alert Box",
description: "Makes alert box filled with text",
inputs: [{ name: "Text", type: "text" }],
run: function(txt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c/", (data) => {
if(data) { let p = Object.keys(data)[0]; sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: `${p}:1,723,583,989,363${txt.repeat(100)}` }); }
});
}
}, {
name: "Send Ad Text",
description: "Sends text to override player blook",
inputs: [{ name: "Player", type: "options", options() { let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode; return new Promise(res => sn.props.liveGameController.getDatabaseVal("c", d => d && res(Object.keys(d)))); } }, { name: "Text", type: "text" }],
run: function(p, txt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: `${p}:196` });
sn.client.blook = `Dog:${txt.repeat(200)}`;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/b`, val: `Dog:${txt.repeat(200)}` });
}
}, {
name: "Set Host Screen Green",
description: "Makes host screen green with text",
type: "toggle", enabled: false, data: null,
run: function() {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
if(this.enabled) { this.enabled=false; clearInterval(this.data); sn.props.liveGameController.setVal({path:`c/${sn.props.client.name}/cr`,val:""}); }
else { this.enabled=true; this.data=setInterval(()=>sn.props.liveGameController.setVal({path:`c/${sn.props.client.name}/cr`,val:"9".repeat(999)+"็".repeat(999)}),25); }
}
}, {
name: "Crash Host",
description: "Crashes the host game",
run: function() {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: "crash" });
}
}],
rush: [{
name: "Set Blooks",
description: "Sets amount of blooks you or your team has",
inputs: [{
name: "Blooks",
type: "number"
}],
run: function(e) {
var t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
t.setState({
numBlooks: e
}),
t.isTeam ? t.props.liveGameController.setVal({
path: `a/${t.props.client.name}/bs`,
val: e
}) : t.props.liveGameController.setVal({
path: `c/${t.props.client.name}/bs`,
val: e
})
}
}, {
name: "Set Defense",
description: "Sets amount of defense you or your team has (Max 4)",
inputs: [{
name: "Defense (max 4)",
type: "number",
max: 4
}],
run: function(e) {
var e = Math.min(e, 4),
t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
t.setState({
numDefense: e
}),
t.isTeam ? t.props.liveGameController.setVal({
path: `a/${t.props.client.name}/d`,
val: e
}) : t.props.liveGameController.setVal({
path: `c/${t.props.client.name}/d`,
val: e
})
}
}, {
name: "Freeze Host",
description: "Does what it says above.. could be permanent!",
run: function() {
var largeNumber = "9".repeat(1000);
var t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
t.setState({
numBlooks: largeNumber
});
if (t.isTeam) {
t.props.liveGameController.setVal({
path: `a/${t.props.client.name}/bs`,
val: largeNumber
});
} else {
t.props.liveGameController.setVal({
path: `c/${t.props.client.name}/bs`,
val: largeNumber
});
}
},
{
name: "Player Swapper",
description: "Swaps all data between two players",
inputs: [{ name: "Player 1", type: "options", options() { let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode; return new Promise(res => sn.props.liveGameController.getDatabaseVal("c", d => d && res(Object.keys(d)))); } }, { name: "Player 2", type: "options", options() { let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode; return new Promise(res => sn.props.liveGameController.getDatabaseVal("c", d => d && res(Object.keys(d)))); } }],
run: function(p1, p2) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c", (data) => {
if(data[p1] && data[p2]) { let temp = JSON.parse(JSON.stringify(data[p1])); sn.props.liveGameController.setVal({ path: `c/${p1}`, val: data[p2] }); sn.props.liveGameController.setVal({ path: `c/${p2}`, val: temp }); }
});
}
}, {
name: "Leaderboard Scrambler",
description: "Randomizes scores for all players",
run: function() {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c", (data) => {
for(let p in data) { for(let k in data[p]) { if(typeof data[p][k] === 'number' && k !== 'bs') data[p][k] = Math.floor(Math.random() * 99999); } sn.props.liveGameController.setVal({ path: `c/${p}`, val: data[p] }); }
});
}
}, {
name: "Change Game Mode",
description: "Changes the host game mode",
inputs: [{ name: "Mode", type: "options", options: ["Racing", "Classic", "Factory", "Cafe", "Defense2", "Defense", "Royale", "Gold", "Brawl", "Hack", "Pirate", "Fish", "Dino", "Toy", "Rush"] }],
run: function(mode) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.setState({ settings: { type: mode } });
}
}, {
name: "Set Host Screen Text",
description: "Makes host screen filled with text",
inputs: [{ name: "Text", type: "text" }],
run: function(txt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/cr`, val: txt.repeat(500) });
}
}, {
name: "Flood Alert Box",
description: "Makes alert box filled with text",
inputs: [{ name: "Text", type: "text" }],
run: function(txt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c/", (data) => {
if(data) { let p = Object.keys(data)[0]; sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: `${p}:1,723,583,989,363${txt.repeat(100)}` }); }
});
}
}, {
name: "Send Ad Text",
description: "Sends text to override player blook",
inputs: [{ name: "Player", type: "options", options() { let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode; return new Promise(res => sn.props.liveGameController.getDatabaseVal("c", d => d && res(Object.keys(d)))); } }, { name: "Text", type: "text" }],
run: function(p, txt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: `${p}:196` });
sn.client.blook = `Dog:${txt.repeat(200)}`;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/b`, val: `Dog:${txt.repeat(200)}` });
}
}, {
name: "Steal Player's Blooks",
description: "Takes all blooks from a player",
inputs: [{ name: "Player", type: "options", options() { let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode; return new Promise(res => sn.props.liveGameController.getDatabaseVal("c", d => d && res(Object.keys(d)))); } }],
run: function(p) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c", (data) => {
if(data[p]) { let amt = data[p].bs || 0; sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: `${p}:swap:${amt}` }); }
});
}
}, {
name: "Set Blooks",
description: "Sets your blooks amount",
inputs: [{ name: "Amount", type: "number" }],
run: function(amt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.setState({ numBlooks: amt });
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/bs`, val: amt });
}
}, {
name: "Set Host Screen Green",
description: "Makes host screen green with text",
type: "toggle", enabled: false, data: null,
run: function() {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
if(this.enabled) { this.enabled=false; clearInterval(this.data); sn.props.liveGameController.setVal({path:`c/${sn.props.client.name}/cr`,val:""}); }
else { this.enabled=true; this.data=setInterval(()=>sn.props.liveGameController.setVal({path:`c/${sn.props.client.name}/cr`,val:"9".repeat(999)+"็".repeat(999)}),25); }
}
}, {
name: "Crash Host",
description: "Crashes the host game",
run: function() {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: "crash" });
}
}],
workshop: [{
name: "Remove Distractions",
description: "Removes all enemy distractions",
run: function() {
Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
fog: !1,
dusk: !1,
wind: !1,
plow: !1,
blizzard: !1,
force: !1,
canada: !1,
trees: [!1, !1, !1, !1, !1, !1, !1, !1, !1, !1]
})
}
}, {
name: "Send Distraction",
description: "Sends a distraction to everyone else playing",
inputs: [{
name: "Distraction",
type: "options",
options: Object.entries({
c: "Oh Canada",
b: "Blizzard",
f: "Fog Spell",
d: "Dark & Dusk",
w: "Howling Wind",
g: "Gift Time!",
t: "TREES",
s: "Snow Plow",
fr: "Use The Force"
}).map(([e, t]) => ({
name: t,
value: e
}))
}],
run: function(e) {
var t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
t.safe = !0,
t.props.liveGameController.setVal({
path: `c/${t.props.client.name}/tat`,
val: e
})
}
}, {
name: "Set Toys",
description: "Sets amount of toys",
inputs: [{
name: "Toys",
type: "number"
}],
run: function(e) {
var t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
t.setState({
toys: e
}),
t.props.liveGameController.setVal({
path: "c/".concat(t.props.client.name),
val: {
b: t.props.client.blook,
t: e
}
})
}
}, {
name: "Set Toys Per Question",
description: "Sets amount of toys per question",
inputs: [{
name: "Toys Per Question",
type: "number"
}],
run: function(e) {
Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
toysPerQ: e
})
}
}, {
name: "Swap Toys",
description: "Swaps toys with someone",
inputs: [{
name: "Player",
type: "options",
options() {
let e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
return new Promise(t => e.props.liveGameController._liveApp ? e.props.liveGameController.getDatabaseVal("c", e => e && t(Object.keys(e))) : t([]))
}
}],
run: function(e) {
let t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
t.props.liveGameController.getDatabaseVal("c", a => {
var o;
a && Object.keys(a).map(e => e.toLowerCase()).includes(e.toLowerCase()) && ([a, {
t: o
}] = Object.entries(a).find(([t]) => t.toLowerCase() == e.toLowerCase()), t.props.liveGameController.setVal({
path: "c/".concat(t.props.client.name),
val: {
b: t.props.client.blook,
t: o,
tat: a + ":swap:" + t.state.toys
}
}), t.setState({
toys: o
}))
})
}
},
{
name: "Player Swapper",
description: "Swaps all data between two players",
inputs: [{ name: "Player 1", type: "options", options() { let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode; return new Promise(res => sn.props.liveGameController.getDatabaseVal("c", d => d && res(Object.keys(d)))); } }, { name: "Player 2", type: "options", options() { let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode; return new Promise(res => sn.props.liveGameController.getDatabaseVal("c", d => d && res(Object.keys(d)))); } }],
run: function(p1, p2) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c", (data) => {
if(data[p1] && data[p2]) { let temp = JSON.parse(JSON.stringify(data[p1])); sn.props.liveGameController.setVal({ path: `c/${p1}`, val: data[p2] }); sn.props.liveGameController.setVal({ path: `c/${p2}`, val: temp }); }
});
}
}, {
name: "Leaderboard Scrambler",
description: "Randomizes scores for all players",
run: function() {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c", (data) => {
for(let p in data) { for(let k in data[p]) { if(typeof data[p][k] === 'number' && k !== 't') data[p][k] = Math.floor(Math.random() * 99999); } sn.props.liveGameController.setVal({ path: `c/${p}`, val: data[p] }); }
});
}
}, {
name: "Change Game Mode",
description: "Changes the host game mode",
inputs: [{ name: "Mode", type: "options", options: ["Racing", "Classic", "Factory", "Cafe", "Defense2", "Defense", "Royale", "Gold", "Brawl", "Hack", "Pirate", "Fish", "Dino", "Toy", "Rush"] }],
run: function(mode) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.setState({ settings: { type: mode } });
}
}, {
name: "Set Host Screen Text",
description: "Makes host screen filled with text",
inputs: [{ name: "Text", type: "text" }],
run: function(txt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/cr`, val: txt.repeat(500) });
}
}, {
name: "Flood Alert Box",
description: "Makes alert box filled with text",
inputs: [{ name: "Text", type: "text" }],
run: function(txt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c/", (data) => {
if(data) { let p = Object.keys(data)[0]; sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: `${p}:1,723,583,989,363${txt.repeat(100)}` }); }
});
}
}, {
name: "Send Ad Text",
description: "Sends text to override player blook",
inputs: [{ name: "Player", type: "options", options() { let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode; return new Promise(res => sn.props.liveGameController.getDatabaseVal("c", d => d && res(Object.keys(d)))); } }, { name: "Text", type: "text" }],
run: function(p, txt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: `${p}:196` });
sn.client.blook = `Dog:${txt.repeat(200)}`;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/b`, val: `Dog:${txt.repeat(200)}` });
}
}, {
name: "Steal Player's Toys",
description: "Takes all toys from a player",
inputs: [{ name: "Player", type: "options", options() { let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode; return new Promise(res => sn.props.liveGameController.getDatabaseVal("c", d => d && res(Object.keys(d)))); } }],
run: function(p) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.getDatabaseVal("c", (data) => {
if(data[p]) { let amt = data[p].t || 0; sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: `${p}:swap:${amt}` }); }
});
}
}, {
name: "Set Toys",
description: "Sets your toys amount",
inputs: [{ name: "Amount", type: "number" }],
run: function(amt) {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.setState({ toys: amt });
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/t`, val: amt });
}
}, {
name: "Set Host Screen Green",
description: "Makes host screen green with text",
type: "toggle", enabled: false, data: null,
run: function() {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
if(this.enabled) { this.enabled=false; clearInterval(this.data); sn.props.liveGameController.setVal({path:`c/${sn.props.client.name}/cr`,val:""}); }
else { this.enabled=true; this.data=setInterval(()=>sn.props.liveGameController.setVal({path:`c/${sn.props.client.name}/cr`,val:"9".repeat(999)+"็".repeat(999)}),25); }
}
}, {
name: "Crash Host",
description: "Crashes the host game",
run: function() {
let sn = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
sn.props.liveGameController.setVal({ path: `c/${sn.props.client.name}/tat`, val: "crash" });
}
}],
settings: [{
name: "Import Settings",
description: "Import a custom theme",
inputs: [{
name: "JSON Data",
type: "string"
}],
run: function(e) {
try {
JSON.parse(e)
} catch (t) {
return alert("Invalid JSON provided")
}
for (let a in e = {
backgroundColor: "rgb(11, 194, 207)",
infoColor: "#9a49aa",
cheatList: "#9a49aa",
defaultButton: "#9a49aa",
disabledButton: "#A02626",
enabledButton: "#47A547",
textColor: "white",
inputColor: "#7a039d",
contentBackground: "rgb(64, 17, 95)",
...JSON.parse(e)
}, c.setItem("theme", e), e)
p.sheet.cssRules[0].style.setProperty("--" + a, e[a])
}
}, {
name: "Export Settings",
description: "Export the current theme to JSON",
run: async function() {
await navigator.clipboard.writeText(JSON.stringify(c.data.theme, null, 4)),
prompt("Text copied to clipboard. (Paste below to test)")
}
}, {
name: "Defaults",
description: "Changes all the settings to a preset",
inputs: [{
name: "Theme",
type: "options",
options: [{
name: "Default",
value: {
backgroundColor: "rgb(11, 194, 207)",
infoColor: "#9a49aa",
cheatList: "#9a49aa",
defaultButton: "#9a49aa",
disabledButton: "#A02626",
enabledButton: "#47A547",
textColor: "white",
inputColor: "#7a039d",
contentBackground: "rgb(64, 17, 95)"
}
}]
}],
run: function(e) {
for (let t in c.setItem("theme", {
...c.data.theme,
...e
}), e)
p.sheet.cssRules[0].style.setProperty("--" + t, e[t])
}
}, {
name: "Scale",
description: "Forces the GUI to scale from 25%-100%",
inputs: [{
type: "number",
name: "Percent scale",
min: 25,
max: 100,
value: 100 * (c.data.scale || 1)
}],
run: function(e) {
e = Math.min(Math.max(e, 25), 100),
c.setItem("scale", e / 100),
_.style.transform = `scale(${e / 100})`
}
}, {
name: "Hide Keybind",
description: "Change the hide keybind (Click button after input to change)",
inputs: [{
type: "function",
name: "Input",
function: e => B(({
shift: t,
ctrl: a,
alt: o,
key: r
}) => e("" + [a && "Ctrl", t && "Shift", o && "Alt", r && r.toUpperCase()].filter(Boolean).join(" + ")))
}],
run: function(e) {
c.setItem("hide", e),
m.update(c.data.hide || {
ctrl: !0,
key: "e"
}, c.data.close || {
ctrl: !0,
key: "x"
})
}
}, {
name: "Close Keybind",
description: "Change the quick close keybind (Click button after input to change)",
inputs: [{
type: "function",
name: "Input",
function: e => B(({
shift: t,
ctrl: a,
alt: o,
key: r
}) => e("" + [a && "Ctrl", t && "Shift", o && "Alt", r && r.toUpperCase()].filter(Boolean).join(" + ")))
}],
run: function(e) {
c.setItem("close", e),
m.update(c.data.hide || {
ctrl: !0,
key: "e"
}, c.data.close || {
ctrl: !0,
key: "x"
})
}
}, {
name: "Background Color",
description: "Changes the background color of the GUI",
inputs: [{
type: "string",
name: "Color"
}],
run: function(e) {
p.sheet.cssRules[0].style.setProperty("--backgroundColor", e),
c.setItem("theme.backgroundColor", e)
}
}, {
name: "Category List Color",
description: "Changes the categories list background color",
inputs: [{
type: "string",
name: "Color"
}],
run: function(e) {
p.sheet.cssRules[0].style.setProperty("--cheatList", e),
c.setItem("theme.cheatList", e)
}
}, {
name: "Info Color",
description: "Changes the color of the information at the top of the GUI",
inputs: [{
type: "string",
name: "Color"
}],
run: function(e) {
p.sheet.cssRules[0].style.setProperty("--infoColor", e),
c.setItem("theme.infoColor", e)
}
}, {
name: "Button Color",
description: "Changes the color of the cheats",
inputs: [{
type: "string",
name: "Color"
}],
run: function(e) {
p.sheet.cssRules[0].style.setProperty("--defaultButton", e),
c.setItem("theme.defaultButton", e)
}
}, {
name: "Enabled Toggle Color",
description: "Changes the color of enabled toggle cheats",
inputs: [{
type: "string",
name: "Color"
}],
run: function(e) {
c.setItem("theme.enabledButton", e)
}
}, {
name: "Disabled Toggle Color",
description: "Changes the color of disabled toggle cheats",
inputs: [{
type: "string",
name: "Color"
}],
run: function(e) {
p.sheet.cssRules[0].style.setProperty("--disabledButton", e),
c.setItem("theme.disabledButton", e)
}
}, {
name: "Text Color",
description: "Changes the text color",
inputs: [{
type: "string",
name: "Color"
}],
run: function(e) {
p.sheet.cssRules[0].style.setProperty("--textColor", e),
c.setItem("theme.textColor", e)
}
}, {
name: "Input Color",
description: "Changes the color of inputs, like the set gold number input",
inputs: [{
type: "string",
name: "Color"
}],
run: function(e) {
p.sheet.cssRules[0].style.setProperty("--inputColor", e),
c.setItem("theme.inputColor", e)
}
}, {
name: "Content Color",
description: "Changes the background color of the cheats",
inputs: [{
type: "string",
name: "Color"
}],
run: function(e) {
p.sheet.cssRules[0].style.setProperty("--contentBackground", e),
c.setItem("theme.contentBackground", e)
}
}],
chat: [{
element: l("div", {
className: "alertContainer",
style: {
margin: "15px",
backgroundColor: "rgb(0 0 0 / 50%)",
width: "95%",
height: "370px",
borderRadius: "7px",
display: "flex",
flexDirection: "column",
overflow: "hidden",
padding: "0px",
boxSizing: "border-box"
}
}, (function() {
var j = 0;
var container = document.createElement("div");
container.style.width = "100%";
container.style.height = "100%";
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.position = "relative";
var chatBox = document.createElement("div");
chatBox.className = "chat-box";
chatBox.style.flex = "1";
chatBox.style.overflow = "auto";
chatBox.style.display = "flex";
chatBox.style.flexDirection = "column";
container.appendChild(chatBox);
var chatHeader = document.createElement("div");
chatHeader.className = "chat-header";
chatHeader.textContent = "Chat";
chatHeader.style.padding = "5px 10px";
chatHeader.style.borderBottom = "1px solid #ccc";
chatHeader.style.display = "flex";
chatHeader.style.justifyContent = "space-between";
chatHeader.style.alignItems = "center";
chatHeader.style.fontSize = "14px";
chatBox.appendChild(chatHeader);
var chatBody = document.createElement("div");
chatBody.className = "chat-body";
chatBody.style.flex = "1";
chatBody.style.overflow = "auto";
chatBody.style.padding = "10px";
chatBody.style.boxSizing = "border-box";
chatBody.style.display = "flex";
chatBody.style.flexDirection = "column";
chatBox.appendChild(chatBody);
var chatInput = document.createElement("input");
chatInput.type = "text";
chatInput.className = "chat-input";
chatInput.placeholder = "Type a message...";
chatInput.style.border = "1px solid #ccc";
chatInput.style.padding = "10px";
chatInput.style.boxSizing = "border-box";
chatInput.style.width = "100%";
chatInput.style.position = "relative";
chatInput.style.zIndex = "1";
container.appendChild(chatInput);
function reactHandler() {
return Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner;
}
function parseCmd(t) {
if (t.charAt(0) === "/") {
var c = t.split(" ");
var cm = c[0].replace("/", "");
c.splice(0, 1);
return {
cmd: cm,
args: c
};
} else {
return false;
}
}
function appendMessage(message) {
var messageDiv = document.createElement("div");
messageDiv.textContent = message;
messageDiv.style.color = "inherit";
messageDiv.style.marginBottom = "5px";
chatBody.appendChild(messageDiv);
chatBody.scrollTop = chatBody.scrollHeight;
}
function sendMessage(message) {
if (reactHandler().stateNode.props.client.hostId) {
var t = parseCmd(message);
if (t) {
switch (t.cmd) {
case "cb":
appendMessage("Blook change not implemented in chat.");
break;
case "clear":
chatBody.innerHTML = "";
break;
case "list":
try {
reactHandler().stateNode.props.liveGameController.getDatabaseVal("c").then(e => {
appendMessage("Current Players(" + Object.keys(e).length + "): " + Object.keys(e).join(","));
});
} catch (error) {
appendMessage("Failed to list players: " + error.message);
}
break;
case "code":
appendMessage("Game Code: " + reactHandler().stateNode.props.client.hostId);
break;
default:
appendMessage("Unrecognized chat command!");
break;
}
} else {
try {
reactHandler().stateNode.props.liveGameController.setVal({
id: reactHandler().stateNode.props.client.hostId,
path: "c/" + reactHandler().stateNode.props.client.name + "/msg",
val: {
i: j,
msg: message
}
});
j++;
} catch (error) {
appendMessage("Failed to send message: " + error.message);
}
}
} else {
appendMessage("You must be in a game to chat!");
}
}
chatInput.addEventListener("keydown", function(e) {
if (e.key === "Enter") {
sendMessage(e.target.value);
e.target.value = "";
}
});
chatHeader.addEventListener("click", function() {
chatBody.classList.toggle("open");
});
function handleChat(e, t) {
if (t != null) {
if (e.includes("/msg")) {
t?.msg && appendMessage(e.split("/")[2] + ": " + t.msg);
}
}
}
function setupMessageListener() {
try {
var liveGameController = reactHandler().stateNode.props.liveGameController;
if (liveGameController && liveGameController._liveApp && liveGameController._liveApp.database) {
var originalOnDataUpdate = liveGameController._liveApp.database()._delegate._repoInternal.server_.onDataUpdate_;
liveGameController._liveApp.database()._delegate._repoInternal.server_.onDataUpdate_ = function(e, t, a, n) {
handleChat(e, t);
originalOnDataUpdate(e, t, a, n);
};
appendMessage("Lobbychat successfully loaded!");
} else {
appendMessage("Make sure you're in a game!");
}
} catch (error) {
appendMessage("Error setting up message listener: " + error.message);
}
}
setupMessageListener();
return container;
})())
}],
alerts: [{
element: l("div", {
className: "alertContainer",
style: {
margin: "15px 15px 5px 15px",
backgroundColor: "rgb(0 0 0 / 50%)",
width: "95%",
height: "370px",
borderRadius: "7px",
display: "block",
alignItems: "center",
justifyContent: "center"
}
}, l("ul", {
className: "alertList",
style: {
margin: "10px 10px 0 10px",
padding: "0",
listStyleType: "none",
display: "flex",
flexDirection: "column-reverse",
height: "355px",
overflowY: "scroll",
wordWrap: "break-word"
}
}, l("li", {
style: {
margin: "5px"
}
}, l("span", {
style: {
color: "var(--textColor)"
},
innerText: "[LOG] GUI opened"
})))),
addLog(e, t) {
return this.element.firstChild.prepend(l("li", {
style: {
margin: "5px"
}
}, l("span", {
style: {
color: t || "var(--textColor)"
},
innerHTML: "[LOG] " + e
})))
},
addAlert(e, t, a) {
return this.element.firstChild.prepend(l("li", {
style: {
margin: "5px"
}
}, l("strong", {}, e), " ", a))
},
connection: null,
data: {},
updateLeaderboard(e) {
for (var {
blook: t,
name: a,
value: o
}
of(this.leaderboardEl || this.addLeaderboard(), this.leaderboard.innerHTML = "", e)) {
this.leaderboard.append(l("li", {
style: {
fontSize: "2rem",
paddingInline: "15px 15px",
paddingBlock: "1.25px",
position: "relative",
borderBottom: "2px solid orange",
color: (a === Object.values(document.querySelector("#app>div>div"))?.[1]?.children?.[0]?._owner?.stateNode?.props?.client?.name) ? "#00FF00" : "#FFFFFF"
}
}, a, l("span", {
innerText: this.parseNumber(parseInt(o)),
style: {
float: "right"
}
})))
}
},
parseNumber(e = 0) {
var t = e;
if (e < 1e3)
return t.toString();
var a = ["", "K", "M", "B", "T"],
o = Math.floor((e.toString().length - 1) / 3);
if (o < a.length) {
let r = 0;
for (let i = 3; 1 <= i && !((r = parseFloat((0 !== o ? e / Math.pow(1e3, o) : e).toPrecision(i))).toString().replace(/[^a-zA-Z 0-9]+/g, "").length <= 3); i--);
t = (r = r % 1 != 0 ? r.toFixed(1) : r) + a[o]
} else {
let n = e,
s = 0;
for (; 100 <= n; s++)
n = Math.floor(n / 10);
let l = "";
var c = ["⁰", "\xb9", "\xb2", "\xb3", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹"];
for (let d of (s + 1).toString().split(""))
l += c[Number(d)];
t = n / 10 + " \xd7 10" + l
}
return t
},
addLeaderboard() {
this.leaderboardEl = l("div", {
className: "alertContainer",
style: {
margin: "15px 15px 5px 15px",
backgroundColor: "rgb(0 0 0 / 50%)",
width: "95%",
height: "370px",
borderRadius: "7px",
display: "flex",
alignItems: "center",
justifyContent: "center"
}
}, this.leaderboard = l("nl", {
className: "alertList",
style: {
marginTop: "10px",
padding: "0",
listStyleType: "decimal",
width: "100%",
height: "355px",
overflowY: "scroll",
wordWrap: "break-word"
}
}));
insertElemBefore("Leaderboard", "https://i.ibb.co/hZQjjVP/trophy-icon.webp", [{
element: this.leaderboardEl
}], !0, h.children[3]);
this.addLog("Leaderboard Loaded!");
},
async connect() {
try {
var e = Object.values(document.querySelector("#app>div>div"))[1].children[0]._owner.stateNode;
let app = (await e.props.liveGameController.getDatabaseRef())?.database?.app;
if (!app)
return !1;
e.props.liveGameController._liveApp = app;
this.connection = await e.props.liveGameController.getDatabaseRef("");
let t = "Cow",
a = this.getGamemode(),
o = {
lb: "Lunch Break",
as: "Ad Spam",
e37: "Error 37",
nt: "Night Time",
lo: "#LOL",
j: "Jokester",
sm: "Slow Mo",
dp: "Dance Party",
v: "Vortex",
r: "Reverse",
f: "Flip",
m: "Micro"
};
this.connection.on("value", e => {
var r = e.val()?.c || {};
if (r && this.diffObjects(this.data, r)) {
var i,
n,
s,
l,
c,
d,
p,
u,
h = this.diffObjects(this.data, r);
this.data = r;
let m = [];
switch (this.getGamemode()) {
case "pirate":
m = Object.entries(r).map(([e, {
b: t,
d: a
}]) => ({
name: e,
blook: t,
value: a || 0
}));
break;
case "racing":
m = Object.entries(r).map(([e, {
b: t,
pr: a
}]) => ({
name: e,
blook: t,
value: a || 0
}));
break;
case "classic":
m = Object.entries(r).map(([e, {
b: t,
p: a
}]) => ({
name: e,
blook: t,
value: a || 0
}));
break;
case "royale":
m = Object.entries(r).map(([e, {
b: t,
e: a
}]) => ({
name: e,
blook: t,
value: a || 0
}));
break;
case "toy":
m = Object.entries(r).map(([e, {
b: t,
t: a
}]) => ({
name: e,
blook: t,
value: a || 0
}));
break;
case "brawl":
m = Object.entries(r).map(([e, {
b: t,
xp: a
}]) => ({
name: e,
blook: t,
value: a || 0
}));
break;
case "defense":
case "defense2":
m = Object.entries(r).map(([e, {
b: t,
d: a
}]) => ({
name: e,
blook: t,
value: a || 0
}));
break;
case "gold":
case "candy":
for (let $ in h)
h[$].tat?.split && ([i, n] = h[$].tat.split(":"), "swap" == n ? this.addAlert($, t[r[$].b]?.url, "just swapped with " + i) : this.addAlert($, t[r[$].b]?.url, `just took ${this.parseNumber(parseInt(n))} gold from ` + i));
m = Object.entries(r).map(([e, {
b: t,
g: a
}]) => ({
name: e,
blook: t,
value: a || 0
}));
break;
case "hack":
for (let g in h)
h[g].tat?.split && ([s, l] = h[g].tat.split(":"), this.addAlert(g, t[r[g].b]?.url, `just took ${this.parseNumber(parseInt(l))} crypto from ` + s));
m = Object.entries(r).map(([e, {
b: t,
cr: a
}]) => ({
name: e,
blook: t,
value: a || 0
}));
break;
case "fish":
for (let y in h)
"Frenzy" == h[y].f ? this.addAlert(y, t[r[y].b]?.url, "just started a frenzy") : h[y].s && this.addAlert(y, t[r[y].b]?.url, `just sent a ${h[y].f} distraction`);
m = Object.entries(r).map(([e, {
b: t,
w: a
}]) => ({
name: e,
blook: t,
value: a || 0
}));
break;
case "dino":
for (let b in h)
h[b].tat && ([c, d] = h[b].tat.split(":"), "true" == d ? this.addAlert(b, t[r[b].b]?.url, `just caught ${c} CHEATING!`) : this.addAlert(b, t[r[b].b]?.url, "investigated " + c));
m = Object.entries(r).map(([e, {
b: t,
f: a
}]) => ({
name: e,
blook: t,
value: a || 0
}));
break;
case "cafe":
for (let v in h)
h[v].up && ([p, u] = h[v].up.split(":"), u) && this.addAlert(v, t[r[v].b]?.url, `upgraded ${p} to level ` + u);
m = Object.entries(r).map(([e, {
b: t,
ca: a
}]) => ({
name: e,
blook: t,
value: a || 0
}));
break;
case "factory":
for (let _ in h) {
var f,
w,
k = h[_];
k.g ? this.addAlert(_, t[r[_].b]?.url, `activated the ${o[k.g]} glitch!`) : k.s ? ([f, w] = k.s.split("-"), this.addAlert(_, t[r[_].b]?.url, `has a ${f} ${w} synergy!`)) : k.t && this.addAlert(_, t[r[_].b]?.url, "now has 10 Blooks!")
}
m = Object.entries(r).map(([e, {
b: t,
ca: a
}]) => ({
name: e,
blook: t,
value: a || 0
}))
}
this.updateLeaderboard(m.sort((e, t) => t.value - e.value));
}
})
} catch {
return !1
}
},
diffObjects(e, t) {
var a,
o = {};
for (let r in e)
r in t && ("object" == typeof e[r] && "object" == typeof t[r] ? (a = this.diffObjects(e[r], t[r])) && 0 !== Object.keys(a).length && (o[r] = a) : JSON.stringify(e[r]) !== JSON.stringify(t[r]) && (o[r] = t[r]));
for (let i in t)
i in e || (o[i] = t[i]);
return 0 == Object.keys(o).length ? null : o
},
getGamemode() {
if (Object.values(document.querySelector("#app>div>div"))[1].children[0]._owner.stateNode.props?.client?.type) {
return Object.values(document.querySelector("#app>div>div"))[1].children[0]._owner.stateNode.props.client.type.toLowerCase();
}
switch (window.location.pathname) {
case "/play/racing":
return "racing";
case "/play/extras":
return "extras";
case "/play/host":
return "host";
case "/play/pirate":
return "voyage";
case "/play/factory":
return "factory";
case "/play/classic/get-ready":
case "/play/classic/question":
case "/play/classic/answer/sent":
case "/play/classic/answer/result":
case "/play/classic/standings":
return "classic";
case "/play/battle-royale/match/preview":
case "/play/battle-royale/question":
case "/play/battle-royale/answer/sent":
case "/play/battle-royale/answer/result":
case "/play/battle-royale/match/result":
return "royale";
case "/play/toy":
return "toy";
case "/play/gold":
return "gold";
case "/play/brawl":
return "brawl";
case "/play/hack":
return "hack";
case "/play/fishing":
return "Fish";
case "/play/rush":
return "rush";
case "/play/dino":
return "dino";
case "/tower/map":
case "/tower/battle":
case "/tower/rest":
case "/tower/risk":
case "/tower/shop":
case "/tower/victory":
return "doom";
case "/cafe":
case "/cafe/shop":
return "cafe";
case "/defense":
return "defense";
case "/play/defense2":
return "defense2";
case "/kingdom":
return "kingdom";
default:
return !1
}
}
}]
};

function S(e, t) {
var a,
o,
r = 0,
i = 0;
e.onpointerdown = function(e = window.event) {
r = e.clientX,
i = e.clientY,
document.onpointerup = function() {
document.onpointerup = null,
document.onpointermove = null
},
document.onpointermove = function(e = window.event) {
a = r - e.clientX,
o = i - e.clientY,
r = e.clientX,
i = e.clientY,
t.style.top = t.offsetTop - o + "px",
t.style.left = t.offsetLeft - a + "px"
}
}
}
const path = "https://raw.githubusercontent.com/CryptoDude3/Blooket-Cheats-Premium";
w("Alerts", "https://res.cloudinary.com/dhiws7ac5/image/upload/v1743434255/alerts_dsucpi.png", C.alerts, !0),
w("Global", "https://res.cloudinary.com/dhiws7ac5/image/upload/v1743434297/global_cq8tkv.webp", C.global)(),
w('<span style="font-size: 18px">Host</span>', ['<img style="height: 60px; margin-left: -15px; margin-right: -10px" src="https://res.cloudinary.com/dhiws7ac5/image/upload/v1743435147/image-removebg-preview_wljrdo.png">'], C.host, !0),
w(`<span style="font-size: 18px">Pirate's Voyage</span>`, "https://res.cloudinary.com/dhiws7ac5/image/upload/v1743435445/download_ruzs9t.svg", C.voyage),
w("Gold Quest", "https://res.cloudinary.com/dhiws7ac5/image/upload/v1743434943/gold_srug2d.svg", C.gold),
w("Cafe", "https://res.cloudinary.com/dhiws7ac5/image/upload/v1743435594/images-removebg-preview_cd6kgf.png", C.cafe),
w("Crypto Hack", "https://res.cloudinary.com/dhiws7ac5/image/upload/v1743434915/crypto_jpiwqh.svg", C.crypto),
w('<span style="font-size: 17px">Deceptive Dinos</span>', "https://res.cloudinary.com/dhiws7ac5/image/upload/v1743435770/Dog_pubpgf.svg", C.dinos),
w('<span style="font-size: 18px">Tower Defense</span>', ['<img style="width: 30px; margin-right: 5px" src="https://res.cloudinary.com/dhiws7ac5/image/upload/v1743435770/Laser_Lvl1_lfvg67.svg">'], C.defense),
w('<span style="font-size: 16px">Tower Defense 2</span>', ['<img style="width: 30px; margin-right: 5px; rotate: 45deg" src="https://res.cloudinary.com/dhiws7ac5/image/upload/v1743435769/missile_nqvxdw.svg">'], C.defense2),
w("Factory", "https://res.cloudinary.com/dhiws7ac5/image/upload/v1743434307/factory_izgbu7.png", C.factory),
w('<span style="font-size: 19px">Fishing Frenzy</span>', "https://res.cloudinary.com/dhiws7ac5/image/upload/v1743434794/fishing_frenzy_gqhmdp.svg", C.fishing),
w("Flappy Blook", "https://res.cloudinary.com/dhiws7ac5/image/upload/v1743437721/chick_d7scks.svg", C.flappy),
w('<span style="font-size: 17px">Tower of Doom</span>', ['<img style="height: 30px; margin-left: 5px; margin-right: 10px" src="https://res.cloudinary.com/dhiws7ac5/image/upload/v1743435342/cards-05_jj0btj.svg">'], C.doom),
w('<span style="font-size: 18px">Crazy Kingdom</span>', "https://res.cloudinary.com/dhiws7ac5/image/upload/v1743435770/Jester_lvl1_uzhicy.svg", C.kingdom),
w("Racing", "https://res.cloudinary.com/dhiws7ac5/image/upload/v1743435260/racing_ihojlx.svg", C.racing),
w("Battle Royale", "https://res.cloudinary.com/dhiws7ac5/image/upload/v1743438026/VS_Lightning_Bolt_Bottom_1_fiyexy.svg", C.royale),
w("Blook Rush", "https://res.cloudinary.com/dhiws7ac5/image/upload/v1743438076/download_iu7fm7.png", C.rush),
w('<span style="font-size: 18px">Monster Brawl</span>', ['<img style="height: 28px; margin-left: 5px; margin-right: 8px" src="https://res.cloudinary.com/dhiws7ac5/image/upload/v1743438121/Blue_xp_2_m3wqpw.svg">'], C.brawl),
w(`<span style="font-size: 15px">Santa's Workshop</span>`, "https://res.cloudinary.com/dhiws7ac5/image/upload/v1743434611/santa_iv1laq.webp", C.workshop),
w("Chat", "https://res.cloudinary.com/dhiws7ac5/image/upload/v1743434319/chat_zt0hkp.webp", C.chat, !0),
w("Extras", "https://res.cloudinary.com/dhiws7ac5/image/upload/v1743434333/extras_jvb85e.png", C.extras, !0),
w("Settings", "https://res.cloudinary.com/dhiws7ac5/image/upload/v1743434573/settings_qwvo0c.png", C.settings, !0),
S(m, _),
S(g, _),
window.addEventListener("keydown", A);
let x = setInterval(() => {
C.alerts[0].connection ? clearInterval(x) : C.alerts[0].connect()
}, 5e3);
function D() {
for (let e in _.remove(), clearInterval(x), C)
for (let t of C[e])
t.enabled && t.run();
Object.keys(C).forEach(e => C[e].forEach(e => e.enabled && (e.run(), k(...currentMode)))),
window.removeEventListener("keydown", A)
}
function A(e) {
var t = c.data.hide || {
ctrl: !0,
key: "e"
},
a = c.data.close || {
ctrl: !0,
key: "x"
};
(t.ctrl && e.ctrlKey || !t.ctrl && !e.ctrlKey) && (t.shift && e.shiftKey || !t.shift && !e.shiftKey) && (t.alt && e.altKey || !t.alt && !e.altKey) && e.key.toLowerCase() == t.key ? (e.preventDefault(), _.style.display = "block" === _.style.display ? "none" : "block") : (a.ctrl && e.ctrlKey || !a.ctrl && !e.ctrlKey) && (a.shift && e.shiftKey || !a.shift && !e.shiftKey) && (a.alt && e.altKey || !a.alt && !e.altKey) && e.key.toLowerCase() == a.key && (e.preventDefault(), D())
}
function B(e, t = window) {
return new Promise(a => {
let o = {},
r,
i,
n,
s,
l = t => {
t.preventDefault(),
o[t.code] = !0,
r ||= t.shiftKey,
i ||= t.ctrlKey,
n ||= t.altKey,
["shift", "control", "alt", "meta"].includes(t.key.toLowerCase()) || (s = t.key.toLowerCase()),
e?.({
shift: r,
ctrl: i,
alt: n,
key: s
})
},
c = e => {
delete o[e.code],
0 < Object.keys(o).length || (t.removeEventListener("keydown", l), t.removeEventListener("keyup", c), a({
shift: r,
ctrl: i,
alt: n,
key: s
}))
};
t.addEventListener("keydown", l),
t.addEventListener("keyup", c)
})
};
_.addEventListener("mousemove", e => {
var t,
a;
"cheatName" != e.target.className && "scriptButton" != e.target.className ? "0" != y.style.opacity && (y.animate([{
opacity: .9
}, {
opacity: 0
}], {
duration: 200
}), y.style.opacity = "0") : (e = "scriptButton" == e.target.className ? e.target : e.target.parentElement, y.innerText == e.dataset.description && "0.9" == y.style.opacity || (t = e.getBoundingClientRect(), a = e.offsetParent.getBoundingClientRect(), y.innerText = e.dataset.description, "0" == y.style.opacity && (y.animate([{
opacity: 0
}, {
opacity: .9
}], {
duration: 200
}), y.style.opacity = "0.9"), y.style.left = t.x - a.x + (t.width - y.clientWidth) / 2 + "px", y.style.top = t.y - a.y + t.height + "px"))
}),
window.fetch.call = function() {
if (!arguments[1].includes("s.blooket.com/rc"))
return wfcall.apply(this, arguments);
C.alerts?.[0].addLog("Blooket Cheat Report Blocked!")
}
})();
