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
    my_spirits.forEach(s=>{
        s.shout(`${memory[s.id].task}: ${memory[s.id].subtask}`)
    })
    
}
function doTask(spirit){
    switch (memory[spirit.id].task) {
        case "farm":
            farm(spirit)
            break;
        case "attack":
            attack(spirit)
            break
        default:
            s.move(enemy_base.position)
	        s.energize(enemy_base)
            break
    }
    
}
function farm(spirit){
    let mem = memory[spirit.id]
    if(mem.subtask == "find star"){
        spirit.move(star_zxq.position)
        if(distance(spirit.position, star_zxq.position) < 200){
            mem.subtask = "harvest energy"
        }
    }else if(mem.subtask == "harvest energy"){
        spirit.energize(spirit)
        if(spirit.energy == spirit.energy_capacity || star_zxq.energy < 8){
            mem.subtask = "go home"
        }
    }else if(mem.subtask == "go home"){
        spirit.move(base.position)
        if(distance(spirit.position, base.position) < 200){
            mem.subtask = "charge base"
        }
    }else if(mem.subtask == "charge base"){
        spirit.energize(base)
        if(spirit.energy == 0){
            mem.subtask = "find star"
        }
    }
}

function distance(pos1, pos2){
    return Math.sqrt((pos1[0] - pos2[0]) ** 2 + (pos1[1] - pos2[1]) ** 2)
}





my_spirits = my_spirits.filter(s=>s.hp==1)

main()
