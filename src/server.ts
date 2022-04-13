import express from 'express';
import { 
    Request, 
    Response,
} from 'express';

const app = express();
const PORT = 8000;

app.get('/', (req: Request, res: Response) => {
  res.send('Application works!');
});

app.listen(PORT, () => {
  console.log(`Application started on port ${PORT}!`);
});