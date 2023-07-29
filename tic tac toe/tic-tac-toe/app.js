const cases=document.querySelectorAll(".case")
const player=document.querySelector(".player")
const container=document.querySelector(".container")
let JoueurActif="X"
let EtatJeu=["","","","","","","","",""]
let ConditionsVictoire=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

player.innerHTML=`C'est au tour du joueur ${JoueurActif}`

cases.forEach((cell,indexcase) =>{
     cell.addEventListener("click",() =>{
        cell.innerHTML=JoueurActif  
         
        JoueurActif=JoueurActif == "X"? "O":"X"
        player.innerHTML=`C'est au tour du joueur ${JoueurActif}`
        
        EtatJeu[indexcase]=JoueurActif
        
        Victoire()
        reset_grid(EtatJeu)
        
     })
})

function reset_grid(liste){
     if (!liste.includes("")) {
        player.innerHTML="Egalité"    
        for (let index = 0; index < liste.length - 1; index++) {
            liste[index]=""
    
        }
        
     }

     
}

function Victoire() {
    for (let index = 0; index < ConditionsVictoire.length - 1; index++) {
        const element =ConditionsVictoire[index];
        let val1=element[0]
        let val2=element[1]
        let val3=element[2]

        if (EtatJeu[val1] === "X" && EtatJeu[val2] ==="X" && EtatJeu[val3] === "X" || 
        EtatJeu[val1] ==="O" && EtatJeu[val2] ==="O" && EtatJeu[val3] === "O") {
           
            if (JoueurActif == "X") {
              player.innerHTML="Victoire du joueur O"
            } else {
                player.innerHTML="Victoire du joueur X"

            }
          
       }
        
    }
}