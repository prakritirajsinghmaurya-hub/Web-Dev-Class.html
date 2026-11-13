let canvas=document.querySelector("canvas")
let pen=canvas.getContext("2d")
let arr=[[0,0]]
let cell=50
let direction="right"
document.addEventListener("keydown",(e)=>{
   if(e.key=="ArrowUp"){
    direction='up'
   }else if(e.key=="ArrowDown"){
    direction='down'
   }else if(e.key=="ArrowLeft"){
    direction="left"
   }else{
    direction="right"
   }
    
})


function shape(){
    pen.clearRect(0,0,1200,600)
    for(let i of arr){
        pen.fillStyle="red"
        pen.fillRect(i[0],i[1],cell,cell)
    }
}
function update(){
  let headX=  arr[arr.length-1][0]
  let headY=  arr[arr.length-1][1]


     let newX
     let newY
     if(direction=="right"){
        newX=headX+cell
        newY=headY
     }
     else if(direction=="left"){
        newX=headX-cell
        newY=headY
     }
     else if(direction=="up"){
        newX=headX
        newY=headY-cell
     }else{
        newX=headX
        newY=headY+cell
     }
     arr.push([newX,newY])
     arr.shift()
  
}


setInterval(()=>{
    shape()
    update()


},100)