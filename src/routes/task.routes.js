import { Router } from 'express';
const router = Router();

//database connection
import { connect } from '../database'
import { ObjectId } from 'mongodb';

router.get('/', async (req,res) => {
    const db = await connect();
    const result = await db.collection('task').find({}).toArray();
    res.json(result);
});

router.post('/', async (req,res) => {
    const db = await connect();
    const tasks = {
        titulo : req.body.titulo ,
        autor : req.body.autor 
    };
    const result = await db.collection('task').insert(tasks);
    res.json(result);
});

router.get('/:id', async (req,res) => {
    const {id} = req.params;
    const db = await connect();
    const result = await db.collection('task').findOne({_id : ObjectId(id)});
    res.json(result);
});

router.delete('/:id', async (req, res) => {
    const {id} = req.params;
    const db = await connect();
    const result = await db.collection('task').deleteOne({_id : ObjectId(id)});
    res.json({
        message: `task ${id} deleted`,
        result
    });
});

router.put('/:id', async (req, res) => {
    const {id} = req.params;
    const updateTasks = {
        titulo : req.body.titulo ,
        autor : req.body.autor 
    };
    const db = await connect();
    const result = await db.collection('task').updateOne({_id : ObjectId(id)}, {$set: updateTasks});
    res.json({
        message: `task ${id} actualizada`,
        result
    });
});

export default router;