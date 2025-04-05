import express from 'express';
import AIRoutes from "./routes/AI.routes.js";
const app = express();

app.use(express.json());

app.use("/ai",AIRoutes);

app.listen(5001, () => {
  console.log('Server is running on port 3000');
});