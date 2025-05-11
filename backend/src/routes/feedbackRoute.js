const express = require("express");
const feedbackRouter = express.Router();

feedbackRouter.post("/create" , createFeedback)
feedbackRouter.put("/update/:id" , updateFeedback);
feedbackRouter.delete("/delete/:id" , deleteFeedback );

//admin
