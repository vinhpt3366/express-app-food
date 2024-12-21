import app from "./app.js";
import { PORT } from "./common/constant/app.constant.js";

const startServer = () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error while starting the application:", error);
  }
};

startServer();
