import express from "express";
import { getJobs , updateJobs ,createJobs ,removeJobs} from "../controllers/job.controller.js";

const router = express.Router();

router.get("/list" , getJobs)

router.post("/create" , createJobs)

router.patch("/update" , updateJobs)

router.delete("/remove" , removeJobs)

export {router};