import JobsModel from "../models/job.model.js"

const getJobs = async (req, res, next) => {
  const minSalary = req.query.minSalary || 0;
  console.log(minSalary);
  try {
    const jobs = await JobsModel.find({
      salary: {
        $gte: minSalary
      }
    })
    
    res.json({
      success: true,
      message: "Get job api",
      result: jobs
    })

  }
  catch (err) {
    res.status(404).json({
      success: false,
      message: "Data not found"
    })
    console.log(err);
  }
}

const createJobs = async (req, res, next) => {
  console.log(req.body);
  try {
    await JobsModel.create(req.body)
    res.status(201).json({
      success: true,
      message: "Create job"
    })
  }
  catch (err) {
    console.log(err);
    res.status(400).json({
      success: false,
      message: "Data not found"
    })

  }
}

const updateJobs = (req, res, next) => {
  res.json({
    success: true,
    message: "Update job api"
  })
}

const removeJobs = (req, res, next) => {
  res.json({
    success: true,
    message: "Delete job api"
  })
}

export { getJobs, createJobs, updateJobs, removeJobs }