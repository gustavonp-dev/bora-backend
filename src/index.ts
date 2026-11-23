import 'dotenv/config';
import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    service: 'bora-backend',
    timestamp: new Date().toISOString(),
  });
});

app.listen(port, () => {
  console.log(`[BORA-BACKEND] Servidor Express rodando na porta ${port}`);
});

export default app;
