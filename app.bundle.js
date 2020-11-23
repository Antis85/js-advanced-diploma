!function(e){var t={};function a(s){if(t[s])return t[s].exports;var i=t[s]={i:s,l:!1,exports:{}};return e[s].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=e,a.c=t,a.d=function(e,t,s){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(s,i,function(t){return e[t]}.bind(null,i));return s},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=1)}([function(e,t,a){},function(e,t,a){"use strict";a.r(t);a(0);class s{constructor(){this.boardSize=8,this.container=null,this.boardEl=null,this.cells=[],this.cellClickListeners=[],this.cellEnterListeners=[],this.cellLeaveListeners=[],this.newGameListeners=[],this.saveGameListeners=[],this.loadGameListeners=[]}bindToDOM(e){if(!(e instanceof HTMLElement))throw new Error("container is not HTMLElement");this.container=e}drawUi(e){this.checkBinding(),this.container.innerHTML='\n      <div class="controls">\n        <button data-id="action-restart" class="btn">New Game</button>\n        <button data-id="action-save" class="btn">Save Game</button>\n        <button data-id="action-load" class="btn">Load Game</button>\n      </div>\n      <div class="board-container">\n        <div data-id="board" class="board"></div>\n      </div>\n    ',this.newGameEl=this.container.querySelector("[data-id=action-restart]"),this.saveGameEl=this.container.querySelector("[data-id=action-save]"),this.loadGameEl=this.container.querySelector("[data-id=action-load]"),this.newGameEl.addEventListener("click",e=>this.onNewGameClick(e)),this.saveGameEl.addEventListener("click",e=>this.onSaveGameClick(e)),this.loadGameEl.addEventListener("click",e=>this.onLoadGameClick(e)),this.boardEl=this.container.querySelector("[data-id=board]"),this.boardEl.classList.add(e);for(let e=0;e<this.boardSize**2;e+=1){const s=document.createElement("div");s.classList.add("cell","map-tile","map-tile-"+(t=e,a=this.boardSize,t?t===a-1?"top-right":t<a?"top":t===a*(a-1)?"bottom-left":t%a?t===a**2-1?"bottom-right":(t+1)%a?t>a*(a-1)?"bottom":"center":"right":"left":"top-left")),s.addEventListener("mouseenter",e=>this.onCellEnter(e)),s.addEventListener("mouseleave",e=>this.onCellLeave(e)),s.addEventListener("click",e=>this.onCellClick(e)),this.boardEl.appendChild(s)}var t,a;this.cells=Array.from(this.boardEl.children)}redrawPositions(e){for(const e of this.cells)e.innerHTML="";for(const a of e){const e=this.boardEl.children[a.position],s=document.createElement("div");s.classList.add("character",a.character.type);const i=document.createElement("div");i.classList.add("health-level");const r=document.createElement("div");r.classList.add("health-level-indicator","health-level-indicator-"+((t=a.character.health)<15?"critical":t<50?"normal":"high")),r.style.width=a.character.health+"%",i.appendChild(r),s.appendChild(i),e.appendChild(s)}var t}addCellEnterListener(e){this.cellEnterListeners.push(e)}addCellLeaveListener(e){this.cellLeaveListeners.push(e)}addCellClickListener(e){this.cellClickListeners.push(e)}addNewGameListener(e){this.newGameListeners.push(e)}addSaveGameListener(e){this.saveGameListeners.push(e)}addLoadGameListener(e){this.loadGameListeners.push(e)}onCellEnter(e){e.preventDefault();const t=this.cells.indexOf(e.currentTarget);this.cellEnterListeners.forEach(e=>e.call(null,t))}onCellLeave(e){e.preventDefault();const t=this.cells.indexOf(e.currentTarget);this.cellLeaveListeners.forEach(e=>e.call(null,t))}onCellClick(e){const t=this.cells.indexOf(e.currentTarget);this.cellClickListeners.forEach(e=>e.call(null,t))}onNewGameClick(e){e.preventDefault(),this.newGameListeners.forEach(e=>e.call(null))}onSaveGameClick(e){e.preventDefault(),this.saveGameListeners.forEach(e=>e.call(null))}onLoadGameClick(e){e.preventDefault(),this.loadGameListeners.forEach(e=>e.call(null))}static showError(e){alert(e)}static showMessage(e){alert(e)}selectCell(e,t="yellow"){this.deselectCell(e),this.cells[e].classList.add("selected","selected-"+t)}deselectCell(e){const t=this.cells[e];t.classList.remove(...Array.from(t.classList).filter(e=>e.startsWith("selected")))}showCellTooltip(e,t){this.cells[t].title=e}hideCellTooltip(e){this.cells[e].title=""}showDamage(e,t){return new Promise(a=>{const s=this.cells[e],i=document.createElement("span");i.textContent=t,i.classList.add("damage"),s.appendChild(i),i.addEventListener("animationend",()=>{s.removeChild(i),a()})})}setCursor(e){this.boardEl.style.cursor=e}checkBinding(){if(null===this.container)throw new Error("GamePlay not bind to DOM")}}class i{constructor(e,t="generic"){if(this.level=e,this.attack=0,this.defence=0,this.health=100,this.type=t,"Character"===new.target.name)throw new Error("new Character depricated")}levelUp(){return this.level>=4&&this.health<=0?null:(this.level+=1,this.attack=Math.round(Math.max(this.attack,this.attack*(90+65*this.health/100)/100)),this.defence=Math.round(Math.max(this.defence,this.defence*(90+65*this.health/100)/100)),this.health=Math.round(Math.min(this.health+80,100)),!0)}}class r extends i{constructor(e){super(e),this.attack=25,this.defence=25,this.type="bowman"}}class l extends i{constructor(e){super(e),this.attack=10,this.defence=40,this.type="daemon"}}class n extends i{constructor(e){super(e),this.attack=10,this.defence=40,this.type="magician"}}class h extends i{constructor(e){super(e),this.attack=40,this.defence=10,this.type="swordsman"}}class c extends i{constructor(e){super(e),this.attack=40,this.defence=10,this.type="undead"}}class o extends i{constructor(e){super(e),this.attack=25,this.defence=25,this.type="vampire"}}function*d(e,t){const a=Math.floor(Math.random()*e.length),s=Math.ceil(Math.random()*t),i=new(0,e[a])(s);if(s>1){for(let e=0;e<s-1;e+=1)i.levelUp();i.level=s}yield i}function m(e,t,a){const s=[];for(let i=0;i<a;i+=1){const a=d(e,t);s.push(a.next().value)}return s}class p{constructor(e,t){if(!(e instanceof i))throw new Error("character must be instance of Character or its children");if("number"!=typeof t)throw new Error("position must be a number");this.character=e,this.position=t}}class u{constructor(){this.allowedTypesPlayer=[r,h,n],this.allowedTypesNpc=[l,c,o],this.maxLevel=1,this.characterCount=2,this.player=[],this.npc=[],this.boardSize=8}getRndNumber(e){this.numbers=e;const t=Math.floor(Math.random()*this.numbers.length);return this.numbers[t]}generateTeamPlayer(e=this.maxLevel,t=this.characterCount){const a=m(this.allowedTypesPlayer,e,t),s=[];for(let e=0;e<this.boardSize**2;e+=1)e%this.boardSize&&(e-1)%this.boardSize||s.push(e);const i=[];for(;i.length<t+this.player.length;){const e=this.getRndNumber(s);i.includes(e)||i.push(e)}this.player.length&&(this.player.slice().map(e=>e.character).forEach(e=>a.push(e)),this.player=[]),a.forEach((e,t)=>{const a=i[t];this.player.push(new p(e,a))})}generateTeamNpc(e=this.maxLevel,t=this.characterCount){const a=m(this.allowedTypesNpc,e,t),s=[];for(let e=0;e<this.boardSize**2;e+=1)(e+1)%this.boardSize&&(e+2)%this.boardSize||s.push(e);const i=[];for(;i.length<t;){const e=this.getRndNumber(s);i.includes(e)||i.push(e)}a.forEach((e,t)=>{const a=i[t];this.npc.push(new p(e,a))})}generateGameSet(){this.generateTeamPlayer(),this.generateTeamNpc()}reloadGameSet(e=[],t=[]){if(!e&&!t)return null;this.player=[],this.npc=[];const a=t;return e.forEach(e=>{const t=[...this.allowedTypesPlayer,...this.allowedTypesNpc].map(e=>new e).find(t=>t.type===e.character.type);t.level=e.character.level,t.health=e.character.health,t.attack=e.character.attack,t.defence=e.character.defence,this.player.push(new p(t,e.position))}),a.forEach(e=>{const t=[...this.allowedTypesPlayer,...this.allowedTypesNpc].map(e=>new e).find(t=>t.type===e.character.type);t.level=e.character.level,t.health=e.character.health,t.attack=e.character.attack,t.defence=e.character.defence,this.npc.push(new p(t,e.position))}),!0}}var g={prairie:"prairie",desert:"desert",arctic:"arctic",mountain:"mountain"};function f(e,t,a){let s=0;const i=Math.abs(Math.floor(t/8)-Math.floor(a/8)),r=Math.abs(t%8-a%8);switch(e){case"magician":case"daemon":s=4;break;case"bowman":case"vampire":s=2;break;case"swordsman":case"undead":s=1}return Math.max(i,r)<=s}function y(e,t){const a=Math.abs(Math.floor(e/8)-Math.floor(t/8)),s=Math.abs(e%8-t%8);return Math.max(a,s)}const v=new s;v.bindToDOM(document.querySelector("#game-container"));const T=new class{constructor(e){this.storage=e}save(e){this.storage.setItem("state",JSON.stringify(e))}load(){try{return JSON.parse(this.storage.getItem("state"))}catch(e){throw console.log(e),new Error("Invalid state")}}}(localStorage);new class{constructor(e,t){this.gamePlay=e,this.stateService=t,this.gameTeam=void 0,this.selectedPlayer=void 0,this.targetNpc=void 0,this.currentTurn="player",this.highscore=0,this.scores=0,this.isLocked=!1,this.level=1,this.levelTheme=g.prairie,this.resumeGame=!0}init(){this.resumeGame&&this.stateService.load()&&this.onLoadGameClick(),this.stateService.load()||(this.gameTeam=new u,this.gameTeam.generateGameSet()),this.gamePlay.drawUi(this.levelTheme),this.gamePlay.redrawPositions([...this.gameTeam.player,...this.gameTeam.npc]),this.gamePlay.addCellClickListener(this.onCellClick.bind(this)),this.gamePlay.addCellEnterListener(this.onCellEnter.bind(this)),this.gamePlay.addCellLeaveListener(this.onCellLeave.bind(this)),this.gamePlay.addNewGameListener(this.onNewGameClick.bind(this)),this.gamePlay.addSaveGameListener(this.onSaveGameClick.bind(this)),this.gamePlay.addLoadGameListener(this.onLoadGameClick.bind(this)),this.npcActions()}onNewGameClick(){this.resumeGame=!1,this.scores=0,this.isLocked=!1,this.level=1,this.levelTheme=g.prairie,this.currentTurn="player",this.selectedPlayer=void 0,this.targetNpc=void 0,this.gameTeam=new u,this.gameTeam.generateGameSet(),this.init()}onSaveGameClick(){this.stateService.save(this.createStateObj())}onLoadGameClick(){try{const e=this.stateService.load();e&&(this.highscore=e.highscore,this.scores=e.scores,this.isLocked=e.isLocked,this.level=e.level,this.levelTheme=e.levelTheme,this.currentTurn=e.currentTurn,this.gameTeam=new u,this.gameTeam.reloadGameSet(e.playerTeam,e.npcTeam),this.resumeGame=!1,this.init())}catch(e){console.log(e),s.showMessage("Ошибка при загрузке игры!")}}async onCellClick(e){if(this.isLocked)return null;if(this.targetNpc=this.gameTeam.npc.find(t=>t.position===e),!this.selectedPlayer&&this.targetNpc)s.showError("Необходимо выбрать персонаж игрока!");else if(this.targetNpc&&this.isAttackable){this.isLocked=!0;const t=Math.max(this.selectedPlayer.character.attack-this.targetNpc.character.defence,1*this.selectedPlayer.character.attack);this.selectedPlayer=void 0,this.gamePlay.cells.forEach((e,t)=>this.gamePlay.deselectCell(t)),await this.gamePlay.showDamage(e,t),this.targetNpc.character.health-=t,this.targetNpc.character.health<=0&&(this.gameTeam.npc=this.gameTeam.npc.filter(e=>e.position!==this.targetNpc.position)),this.currentTurn="npc",setTimeout(()=>{this.npcActions()},200)}this.gameTeam.player.find(t=>t.position===e)&&(this.gameTeam.player.forEach(e=>this.gamePlay.deselectCell(e.position)),this.gamePlay.selectCell(e),this.selectedPlayer=this.gameTeam.player.find(t=>t.position===e));const t=this.gamePlay.cells[e].children.length;return this.selectedPlayer&&this.isMoveable&&!t&&(this.isLocked=!0,this.selectedPlayer.position=e,this.selectedPlayer=void 0,this.gamePlay.cells.forEach((e,t)=>this.gamePlay.deselectCell(t)),this.currentTurn="npc",setTimeout(()=>{this.npcActions()},200)),this.gamePlay.redrawPositions([...this.gameTeam.player,...this.gameTeam.npc]),!this.gameTeam.npc.length&&this.level<=4&&(this.gameTeam.player.forEach(e=>{this.scores+=e.character.health}),s.showMessage("!!!PLAYER WIN!!!LEVELUP!!!NEXTLEVEL!!!"),this.isLocked=!0,this.nextLevel()),!0}nextLevel(){switch(this.level+=1,this.level){case 2:this.gameTeam.player.forEach(e=>e.character.levelUp()),this.levelTheme=g.desert,this.gamePlay.drawUi(this.levelTheme),this.gameTeam.generateTeamPlayer(1,1),this.gameTeam.generateTeamNpc(2,this.gameTeam.player.length);break;case 3:this.gameTeam.player.forEach(e=>e.character.levelUp()),this.levelTheme=g.arctic,this.gamePlay.drawUi(this.levelTheme),this.gameTeam.generateTeamPlayer(2,2),this.gameTeam.generateTeamNpc(3,this.gameTeam.player.length);break;case 4:this.gameTeam.player.forEach(e=>e.character.levelUp()),this.levelTheme=g.mountain,this.gamePlay.drawUi(this.levelTheme),this.gameTeam.generateTeamPlayer(3,2),this.gameTeam.generateTeamNpc(4,this.gameTeam.player.length);break;default:s.showMessage(`!!!YOU ARE THE WINNER OF <<RETRO GAME>> WHITH ${this.scores} SCORES!!!`)}this.gamePlay.redrawPositions([...this.gameTeam.player,...this.gameTeam.npc]),this.isLocked=!1,this.currentTurn="player",this.level>4&&(this.isLocked=!0)}onCellEnter(e){const t=this.gamePlay.cells[e].children.length,a=this.gameTeam.npc.some(t=>t.position===e);if(this.selectedPlayer&&(this.isMoveable=function(e,t,a){let s=0;const i=Math.abs(Math.floor(t/8)-Math.floor(a/8)),r=Math.abs(t%8-a%8);switch(e){case"magician":case"daemon":s=1;break;case"bowman":case"vampire":s=2;break;case"swordsman":case"undead":s=4}return Math.max(i,r)<=s}(this.selectedPlayer.character.type,this.selectedPlayer.position,e),this.isAttackable=f(this.selectedPlayer.character.type,this.selectedPlayer.position,e)),t){const{character:t}=[...this.gameTeam.player,...this.gameTeam.npc].find(t=>t.position===e),a=`🎖 ${t.level} ⚔ ${t.attack} 🛡 ${t.defence} ❤ ${t.health}`;this.gamePlay.showCellTooltip(a,e)}if(a||this.gamePlay.setCursor("pointer"),!this.selectedPlayer&&a&&this.gamePlay.setCursor("not-allowed"),this.selectedPlayer&&a){if(this.gamePlay.selectCell(e,"red"),this.gamePlay.setCursor("crosshair"),this.isAttackable)return null;this.gamePlay.setCursor("not-allowed"),this.gamePlay.deselectCell(e)}if(this.selectedPlayer&&!t){if(this.gamePlay.selectCell(e,"green"),this.isMoveable)return null;this.gamePlay.setCursor("not-allowed"),this.gamePlay.deselectCell(e)}return!0}onCellLeave(e){this.gamePlay.hideCellTooltip(e),this.selectedPlayer&&this.gameTeam.npc.some(t=>t.position===e)&&this.gamePlay.deselectCell(e),this.gamePlay.cells.forEach((e,t)=>{e.children.length||this.gamePlay.deselectCell(t)})}async npcActions(){if("npc"!==this.currentTurn)return null;const e=function(e,t){const a=[],s=[];return t.forEach(t=>{e.forEach(e=>{const i=f(t.character.type,e.position,t.position),r=y(t.position,e.position);i&&a.push([t.position,e.position]),i||s.push([t.position,e.position,r])})}),[a,s]}(this.gameTeam.player,this.gameTeam.npc),t=e[0],a=e[1];if(t.length){const e=function(e,t){const a=e.sort((e,t)=>y(e[0],e[1])-y(t[0],t[1])),s=y(a[0][0],a[0][1]),i=a.filter(e=>y(e[0],e[1])===s).sort((e,a)=>t.find(e=>e.position===a[1]).character.attack-t.find(t=>t.position===e[1]).character.attack),r=i.filter(e=>t.find(e=>e.position===i[0][1]).character.attack===t.find(t=>t.position===e[1]).character.attack).sort((e,a)=>t.find(t=>t.position===e[1]).character.health-t.find(e=>e.position===a[1]).character.health);return r.filter(e=>t.find(e=>e.position===r[0][1]).character.health===t.find(t=>t.position===e[1]).character.health)}(function(e,t){const a=e.sort((e,a)=>t.find(e=>e.position===a[0]).character.attack-t.find(t=>t.position===e[0]).character.attack);return e.filter(e=>t.find(t=>t.position===e[0]).character.attack===t.find(e=>e.position===a[0][0]).character.attack)}(t,this.gameTeam.npc),this.gameTeam.player);let a=e[0][1],s=e[0][0];if(e.length>1){const t=Math.floor(Math.random()*e.length);a=e[t][1],s=e[t][0]}const i=this.gameTeam.player.find(e=>e.position===a),r=this.gameTeam.npc.find(e=>e.position===s),l=Math.max(r.character.attack-i.character.defence,1*r.character.attack);await this.gamePlay.showDamage(a,l),i.character.health-=l,i.character.health<=0&&(this.gameTeam.player=this.gameTeam.player.filter(e=>e.position!==i.position))}if(a.length&&!t.length){const e=function(e){const t=[];return e.forEach(e=>{const a=Math.floor(e[0]/8)-Math.floor(e[1]/8),s=e[0]%8-e[1]%8;let i=e[0];!a&&s>0&&t.push([e[0],e[0]-1]),!a&&s<0&&t.push([e[0],e[0]+1]),a>0&&!s&&t.push([e[0],e[0]-8]),a<0&&!s&&t.push([e[0],e[0]+8]),a&&s&&(s>0&&(i-=1),s<0&&(i+=1),a>0&&(i-=8),a<0&&(i+=8),t.push([e[0],i]))}),t}(function(e,t){const a=e.sort((e,t)=>e[2]-t[2]),s=a.filter(e=>a[0][2]===e[2]).sort((e,a)=>t.find(t=>t.position===e[0]).character.attack-t.find(e=>e.position===a[0]).character.attack);return s.filter(e=>t.find(e=>e.position===s[0][0]).character.attack===t.find(t=>t.position===e[0]).character.attack)}(a,this.gameTeam.npc)).filter(e=>!this.gameTeam.npc.find(t=>t.position===e[1]));let t=e[0];if(e.length>1){const a=Math.floor(Math.random()*e.length);t=e[a]}this.gameTeam.npc.find(e=>e.position===t[0]).position=t[1],this.gameTeam.npc.find(e=>e.position===t[1])}return t.length||a.length||console.warn("NPC не имеет доступных действий!"),this.gamePlay.redrawPositions([...this.gameTeam.player,...this.gameTeam.npc]),this.currentTurn="player",this.isLocked=!1,this.gameTeam.player.length||s.showMessage("!!!JAVASCRIPT WIN, TRY AGAIN!!!"),!0}createStateObj(){const{currentTurn:e,scores:t,isLocked:a,level:s,levelTheme:i}=this,r=this.gameTeam.player,l=this.gameTeam.npc;this.highscore<this.scores&&(this.highscore=this.scores);const{highscore:n}=this;return class{static from(e){return e||null}}.from({highscore:n,scores:t,isLocked:a,level:s,levelTheme:i,playerTeam:r,npcTeam:l,currentTurn:e})}}(v,T).init()}]);