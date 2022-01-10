import Assignments from "./assignment";

let nextId = 1;
let data: Assignments[] = [];

createAssignment({
     name:"Statistics Exam",
     completed: true,
     total: 25,
     score: 24
    })
createAssignment({
    name:"Biology Quiz",
    completed: true,
    total: 10,
    score: 10
    })
createAssignment({
    name:"AP Lang Essay",
    completed: false,
    total: 50,
    score: 0
     })
createAssignment({
    name:"Forensics",
    completed: true,
    total: 15,
    score: 12
     })



export function createAssignment(assignment: Assignments): void{
    assignment.id = nextId++;
    data.push(assignment);
}

export function readAllAssignments():Assignments[]{
    return data; 
}

export function deleteAssignment(id:number): boolean{
    const index = data.findIndex(assignment => assignment.id === id);
    if(index == -1){
        return false;
    } else{
        data.splice(index, 1);
        return true;
    }
}



export function calculateAverage():number{
    let average:number = 0;
    let totalScore:number = 0;
    let totalPossibleScore:number = 0 ;
    for(let i = 0; i<data.length; i++){
        if(data.length === 0){
            return 0;
        } else if(data[i].completed === true){
           totalScore += data[i].score;
           //console.log(totalScore);

           totalPossibleScore += data[i].total
           //console.log(totalPossibleScore);           
        }
    }
    average = ((totalScore/totalPossibleScore) *100);
    return average; 
}

export function readAssignmentById(id:number): Assignments| undefined{
    return data.find(assignment=>assignment.id===id);
}
