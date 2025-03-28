import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  BranchID: { type: mongoose.Schema.Types.ObjectId, ref: "Branch", required: true },
  UserID: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  Position: { type: String, required: true, maxlength: 50 },
  Status: { type: String, enum: ["active", "inactive", "on_leave"], default: "active" },
}, { timestamps: true });

const EmployeeModel = mongoose.models.Employee || mongoose.model("Employee", employeeSchema);

export default EmployeeModel;
