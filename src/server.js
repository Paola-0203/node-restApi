import express, {json} from 'express';

const app = express();

//routes
import IndexRoutes from './routes/index.routes'
import TaskRoutes from './routes/task.routes'

//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(json());

//Routes
app.use(IndexRoutes);
app.use('/task', TaskRoutes);

export default app;