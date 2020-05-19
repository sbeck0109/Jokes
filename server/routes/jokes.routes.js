const jokesController = require("../controllers/jokes.controller");

module.exports = (app) => {
  app.get("/api/jokes", jokesController.getAll);
  app.get("/api/jokes/:id", jokesController.getOne);
  app.post("/api/jokes", jokesController.create);
  app.put("/api/jokes/:id", jokesController.update);
  app.delete("/api/jokes/:id", jokesController.delete);
};
