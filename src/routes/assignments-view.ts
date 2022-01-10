import e from 'express';
import express from 'express';
import Assignments from '../models/assignment';
import { calculateAverage, createAssignment, deleteAssignment, readAllAssignments, readAssignmentById} from '../models/assignment-functions';

const routes = express.Router();

routes.get('/', function(req,res){
    const assignments = readAllAssignments();
    const average = calculateAverage();
    res.render("homepage", {assignments, average});
})

routes.get("/add-assignment", function(req,res){
    res.render("add-assignment");
})

routes.post("/assignment-added", function(req,res){
   const assignment: Assignments = {
       name: req.body.name,
       completed: req.body.complete,
       total: req.body.total,
       score:req.body.score
   }

   if(assignment.completed === false){
       assignment.completed = false;
   } else{
       assignment.completed = true;
   }

   createAssignment(assignment);
   res.render("assignment-added", {assignment})
})


routes.get("/assigments/:id/delete", function(req,res){
    const id = parseInt(req.params.id);
    const assignment = readAssignmentById(id);

    if(assignment){
        deleteAssignment(id);
        res.render("delete-assigment-confirmation", {name: assignment.name})
    } else{
        res.status(404);
    }
})

export default routes;