import mongoose from "mongoose";

const jobsSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required:true
    },
    location: {
      type: String,
      required:true
    },
    minExp: {
      type: Number,
      default: 0
    },
    salary: {
      type: Number,
      default: 0
    },
    description: {
      type: String,
      required:true
    },
    company: {
      type: String,
      required:true
    },
    skills: {
      type: [String]
    }
  }
)
const JobsModel = mongoose.model("jobs" , jobsSchema);
// console.log(mongoose);
export default JobsModel ;