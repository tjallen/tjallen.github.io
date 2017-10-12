function clearBoard(e){for(console.log("clearing board"),Grid.cells=[],Game.stats.generation=0,y=0;y<Game.board.rows;y++)for(x=0;x<Game.board.cols;x++)Grid.cells.push(Cell.create(x,y,0));e&&"function"==typeof e&&e()}function invertCellState(e){console.log("invertCellState",e),1===e.status?(Cell.change(Game.events.targX,Game.events.targY,0),Grid.render(Game.events.currentInteractedCells)):(Cell.change(Game.events.targX,Game.events.targY,1),Grid.render(Game.events.currentInteractedCells))}function cellInteract(e){console.log("cellInteract",e.type);var t=Math.floor((e.clientX+window.scrollX-canvas.offsetLeft)/10),n=Math.floor((e.clientY+window.scrollY-canvas.offsetTop)/10);Game.events.targX=t,Game.events.targY=n;var r=Grid.findCell(Game.events.targX,Game.events.targY);"mousedown"===e.type&&(Game.events.currentInteractedCells.push(r),invertCellState(r)),"mousemove"!==e.type||r.x===Game.events.passedCellX&&r.y===Game.events.passedCellY||(Game.events.currentInteractedCells.push(r),invertCellState(r)),Game.events.passedCellX=r.x,Game.events.passedCellY=r.y}function addShape(e,t){for(var n=e||[],r=Game.board.cols/2,a=Game.board.rows/2,l=0;l<n.length;l++)Cell.change(n[l][0]+r,n[l][1]+a,1);t&&"function"==typeof t&&t()}var Game={stats:{generation:0,get livingCells(){return Grid.getLivingCellCount()}},rules:{},events:{currentInteractedCells:[],dragging:!1,passedCellX:0,passedCellY:0,lastEventX:null,lastEventY:null},board:{cols:80,rows:50,cellW:10,cellH:10}},$canvas=$("#game"),$start=$("#start"),$stop=$("#stop"),$onestep=$("#onestep"),$clear=$("#clear"),$genCounter=$("#gencounter"),$cellCounter=$("#cellcounter"),$tumbler=$("#tumbler"),$glider=$("#glider"),$glidergun=$("#glidergun"),$ten=$("#ten"),canvas=document.getElementById("game");canvas.width=Game.board.cols*Game.board.cellW,canvas.height=Game.board.rows*Game.board.cellH;var $ctx=$canvas[0].getContext("2d");$start.on("click",function(){buttonHandler.startGenerationProgress()}),$stop.on("click",function(){buttonHandler.stopGenerationProgress()}),$onestep.on("click",function(){Grid.step(Grid.render)}),$clear.on("click",function(){buttonHandler.stopGenerationProgress(),clearBoard(Grid.render)});var buttonHandler=function(){function e(){r=setInterval(n,150),$start.attr("disabled","disabled"),$start.addClass("selected"),$stop.removeAttr("disabled","disabled"),$stop.removeClass("selected")}function t(){clearInterval(r),$stop.attr("disabled","disabled"),$stop.addClass("selected"),$start.removeAttr("disabled","disabled"),$start.removeClass("selected")}function n(){Grid.step(Grid.render)}var r;return{startGenerationProgress:e,stopGenerationProgress:t}}(),Grid={cells:[],newGeneration:function(){var e=(Grid.cells,[]);return Grid.cells.forEach(function(t){var n,r=Grid.neighboursAlive(t.x,t.y);n=1===t.status&&2>r?0:1===t.status&&r>3?0:0===t.status&&3===r?1:t.status,e.push(Cell.create(t.x,t.y,n))}),e},step:function(e){Game.stats.generation++,Grid.cells=Grid.newGeneration(),e&&"function"==typeof e&&e()},findCell:function(e,t){e=(Game.board.cols+e)%Game.board.cols,t=(Game.board.rows+t)%Game.board.rows;var n=Grid.cells[Game.board.cols*t+e];return void 0!==n?n:void 0},neighboursAlive:function(e,t){var n=[Grid.findCell(e-1,t-1),Grid.findCell(e,t-1),Grid.findCell(e+1,t-1),Grid.findCell(e+1,t),Grid.findCell(e+1,t+1),Grid.findCell(e,t+1),Grid.findCell(e-1,t+1),Grid.findCell(e-1,t)],r=0;for(i=0;i<n.length;i++)void 0!==n[i]&&1===n[i].status&&r++;return r},getLivingCellCount:function(){var e=0;return Grid.cells.forEach(function(t){1===t.status&&e++}),e},updateStats:function(){$genCounter.html(Game.stats.generation),$cellCounter.html(Game.stats.livingCells)},render:function(e){var t=e?e:Grid.cells,n=0;Array.isArray(t)&&t.forEach(function(e){n++,e.status?$ctx.fillStyle=Cell.styles.alive:$ctx.fillStyle=Cell.styles.dead;var t=Math.floor(e.x)/10*100,r=Math.floor(e.y)/10*100;$ctx.strokeStyle="#EEEEEE",$ctx.fillRect(t,r,Game.board.cellW,Game.board.cellH),$ctx.strokeRect(t,r,Game.board.cellW,Game.board.cellH)}),console.log(n+" cells rendered by Grid.render()"),Grid.updateStats()}},Cell={styles:{dead:"#F5F5F5",alive:"#263238"},create:function(e,t,n){var r=Object.create(this);return r.x=e,r.y=t,r.status=n,r.nextState=void 0,r},change:function(e,t,n){var r=Grid.findCell(e,t);0===n&&(r.status=0),1===n&&(r.status=1)},x:0,y:0,status:0,possibleNeighbours:[[this.x-1,this.y-1],[this.x,this.y-1],[this.x+1,this.y-1],[this.x+1,this.y],[this.x+1,this.y+1],[this.x,this.y+1],[this.x-1,this.y+1],[this.x-1,this.y]]};$canvas.mousedown(function(){0===event.button&&(cellInteract(event),Game.events.dragging=!0)}).mouseup(function(){Game.events.dragging=!1}).mousemove(function(){Game.events.dragging!==!1&&cellInteract(event)}),$(window).mouseup(function(){Game.events.dragging=!1,Game.events.currentInteractedCells=[]}),canvas.addEventListener("contextmenu",function(e){e.preventDefault();var t=Math.floor((e.clientX+window.scrollX-canvas.offsetLeft)/10),n=Math.floor((e.clientY+window.scrollY-canvas.offsetTop)/10);console.log("========== debug ========="),console.log("nbz: "+Grid.neighboursAlive(t,n)),console.log(Grid.findCell(t,n))});var Shapes={glider:[[2,1],[3,2],[3,3],[2,3],[1,3]],glidergun:[[24,0],[22,1],[24,1],[12,2],[13,2],[20,2],[21,2],[34,2],[35,2],[11,3],[15,3],[20,3],[21,3],[34,3],[35,3],[0,4],[1,4],[10,4],[16,4],[20,4],[21,4],[0,5],[1,5],[10,5],[14,5],[16,5],[17,5],[22,5],[24,5],[10,6],[16,6],[24,6],[11,7],[15,7],[12,8],[13,8]],tumbler:[[0,3],[0,4],[0,5],[1,0],[1,1],[1,5],[2,0],[2,1],[2,2],[2,3],[2,4],[4,0],[4,1],[4,2],[4,3],[4,4],[5,0],[5,1],[5,5],[6,3],[6,4],[6,5]],ten:[[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],[9,0]]};$(".shapes button").on("click",function(){$(this).attr("disabled","disabled"),$(this).siblings().removeAttr("disabled","disabled"),$(this).addClass("selected"),$(this).siblings().removeClass("selected"),clearBoard()}),$glider.on("click",function(){addShape(Shapes.glider,Grid.render)}),$tumbler.on("click",function(){addShape(Shapes.tumbler,Grid.render)}),$ten.on("click",function(){addShape(Shapes.ten,Grid.render)}),$glidergun.on("click",function(){addShape(Shapes.glidergun,Grid.render)}),function(){clearBoard(),addShape(Shapes.glidergun,Grid.render),$glidergun.attr("disabled","disabled"),$glidergun.addClass("selected"),buttonHandler.stopGenerationProgress()}();
//# sourceMappingURL=main.js.map