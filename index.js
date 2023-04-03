

let audioTurn=new Audio('assets/drop.mp3');
let gameOver=new Audio('assets/gameover.mp3');

let box=document.getElementsByClassName('box');

let  turnFor=document.querySelector('.infopara');

let boxtextAll=document.querySelectorAll('.boxtext');

let boxtextAllarray= Array.from(boxtextAll);


let overmsg=document.querySelector('.infp');

let excited=document.querySelector('.excited');

let winn=document.querySelector('.winner');



let gameEnd=false;

let global;


turnFor.innerText='X';

console.log(typeof box);


let turn ='X';

//Switching turn variable

function Turn()
{
    return turn==='X'?'O':'X';
}

// win logic

function winner()

{

    let winpos=[
        [0, 1, 2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]

    ]
    
    winpos.forEach(element=>{

if((boxtextAllarray[element[0]].innerText===boxtextAllarray[element[1]].innerText)&&  (boxtextAllarray[element[1]].innerText===boxtextAllarray[element[2]].innerText) && boxtextAllarray[element[0]].innerText!=='')

{


    global=element;
        gameOver.play();
        gameEnd=true;

        boxes[element[0]].style.backgroundColor="violet";
        boxes[element[1]].style.backgroundColor="violet";
        boxes[element[2]].style.backgroundColor="violet";



}

    })

    

}



// Container ka Logic

let boxes=Array.from(box)

boxes.forEach(element =>{

    let boxtext=element.querySelector('.boxtext');


    element.addEventListener('click',()=>{

            if(boxtext.innerText==='')
            {
                boxtext.innerText=turn;

                audioTurn.play();
                winner();
               

                if(gameEnd)
                {
                  


                    overmsg.style.display="none";

                    winn.innerText=`${turn} is the Winner 🤷‍♂️`;
                   
                    excited.style.transform=`scale(1)`;



                }

                else
                {
                    turn=Turn();
                    
                    turnFor.innerText=turn;

                
                }


              
            }

    })

})


// reset button logic


let resetBtn=document.querySelector('.rebtn')

resetBtn.addEventListener('click', ()=>{

    

       boxtextAllarray.forEach(element=>{

                element.innerText="";


       })

       

        turn='X';

        
        winn.innerText="";
        excited.style.transform="scale(0)"

        overmsg.style.display="block";
        turnFor.innerText=turn;
       

        
        boxes[global[0]].style.backgroundColor="";
        boxes[global[1]].style.backgroundColor="";
        boxes[global[2]].style.backgroundColor="";


        gameEnd=false;

    })




let start=document.querySelector('.start');


let landing=document.querySelector('.landing')

let container=document.querySelector('.game-container');

let navbar=document.querySelector('.navbox');


start.addEventListener('click',()=>{

    landing.style.display="none";

    container.style.display="flex";

    navbar.style.display="block";





})