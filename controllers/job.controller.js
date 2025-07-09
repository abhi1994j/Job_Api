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

const updateJobs = async (req, res, next) => {
  console.log(req.body);
  const { _id, ...updatedData } = req.body
  try {
    // await JobsModel.updateOne(
    //   { _id: req.body._id },
    //   {
    //     $set: { ...req.body }
    //   })
    const result_data = await JobsModel.findByIdAndUpdate(_id, updatedData)
    res.json({
      success: true,
      message: "Update job api",
      result: result_data
    })
  }
  catch (err) {
    console.log(err);
    res.status(400).json({
      success: false,
      message: "Data not updated"
    })

  }
}

// const updateJobs = async (req, res, next) => {
//   try {
//     const { _id, ...updateData } = req.body;

//     if (!_id) {
//       return res.status(400).json({
//         success: false,
//         message: "Job ID is required for update"
//       });
//     }

//     const updatedJob = await JobsModel.findByIdAndUpdate(_id, updateData, {
//       new: true, // return updated document
//       runValidators: true // ensure schema validation
//     });

//     if (!updatedJob) {
//       return res.status(404).json({
//         success: false,
//         message: "Job not found"
//       });
//     }

//     res.json({
//       success: true,
//       message: "Job updated successfully",
//       result: updatedJob
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({
//       success: false,
//       message: "Internal Server Error"
//     });
//   }
// };

const removeJobs = async (req, res, next) => {
  const { _id } = req.body;
  // await JobsModel.deleteOne(_id)
  // await JobsModel.deleteMany(_id)
  await JobsModel.findByIdAndDelete(_id)
  res.json({
    success: true,
    message: "Delete job api"
  })
}

export { getJobs, createJobs, updateJobs, removeJobs }