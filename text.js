function setup(g){
    my_spirits.forEach(addSpirit)
    
    
    
}
if(tick == 0)setup(this)


function addSpirit(spirit){
    memory[spirit.id] = {
        task: "farm",
        subtask: "find star",
        subsubtask: ""
    }
}


function main(){
    my_spirits.forEach(spirit=>{
        if(!memory[spirit.id])addSpirit(spirit)
    })
    my_spirits.forEach(doTask)
    
}
function doTask(spirit){
    switch (memory[spirit.id].task) {
        case "farm":
            
            break;
        
        default:
            // code
    }
    for(s of my_spirits){
        s.move(enemy_base.position)
	    s.energize(enemy_base)
    }    
    
    
}




main()
