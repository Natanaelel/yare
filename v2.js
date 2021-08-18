function setup(g){
    my_spirits.forEach(addSpirit)
    
    var home_star = distance(base, star_zxq) < 700 ? star_zxq : star_a1c
    
}
if(tick == 0)setup(this)


function addSpirit(spirit){
    memory[spirit.id] = {
        task: "farm",
        subtask: "go home",
        subsubtask: ""
    }
    
    //tasks:
    //  farm:
    //    "find star", "harvest energy", "go home", "charge base"
    //  attack:
    //    
}


function main(){
    my_spirits.forEach(spirit=>{
        if(!memory[spirit.id])addSpirit(spirit)
    })
    my_spirits.forEach(doTask)
    my_spirits.forEach((s, i)=>{
        Math.random()<0.3&&s.shout(`${memory[s.id].task}: ${memory[s.id].subtask}`)
    })
    // console.log(my_spirits.length)
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
            spirit.move(enemy_base.position)
	        spirit.energize(enemy_base)
            break
    }
    
}
function farm(spirit){
    let mem = memory[spirit.id]
    // console.log(mem.task, mem.subtask)
    // console.log(spirit.id)
    if(mem.subtask == "find star"){
        spirit.move(home_star.position)
        if(distance(spirit.position, home_star.position) < 200){
            mem.subtask = "harvest energy"
        }
    }else if(mem.subtask == "harvest energy"){
        spirit.energize(spirit)
        if(spirit.energy == spirit.energy_capacity || home_star.energy < 8){
            mem.subtask = "go home"
        }
    }else if(mem.subtask == "go home"){
        spirit.move(base.position)
        if(distance(spirit.position, base.position) < 200){
            mem.subtask = "charge base"
        }
    }else if(mem.subtask == "charge base"){
        spirit.energize(base)
        // console.log(spirit.id)
        if(spirit.energy == 0){
            mem.subtask = "find star"
        }
    }
}

function attack(spirit){
    let mem = memory[spirit.id]
    console.log(spirit.id)
    spirit.move(enemy_base.position)
    spirit.energize(enemy_base)
    
}

function distance(pos1, pos2){
    return Math.sqrt((pos1[0] - pos2[0]) ** 2 + (pos1[1] - pos2[1]) ** 2)
}


// console.log(my_spirits.length)
// my_spirits = my_spirits.filter(s=>s.hp==1)


main()

my_spirits.forEach(s=>memory[s.id].task = "attack")

