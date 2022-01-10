import express from 'express';
import Assignments from '../models/assignment';
import { calculateAverage, createAssignment, deleteAssignment, readAllAssignments} from '../models/assignment-functions';

const routes = express.Router();

routes.get('/', function(req,res){
    const assignments = readAllAssignments();
    const average = calculateAverage();
    res.render("homepage", {assignments, average});
})

export default routes;