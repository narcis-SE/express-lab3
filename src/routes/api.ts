import express from 'express';
import { readAllAssignments, calculateAverage } from '../models/assignment-functions';

const routes = express.Router();

routes.get("/api/assignments", function(req,res){
    const assignments = readAllAssignments();
    res.json(assignments);
    res.status(200);
})


routes.get("/api/summary", function(req,res){
    const average = calculateAverage();
    res.json(average);
})

export default routes;