import EmployeeModel from "../models/employeeModel.js";
import UserModel from "../models/userModel.js"; 
import BranchModel from "../models/branchModel.js"; 

// Thêm mới nhân viên
const addEmployee = async (req, res) => {
    try {
        const { BranchID, UserID, Position, Status } = req.body;
        const user = await UserModel.findById(UserID);
        if (!user) {
            return res.status(404).json({ message: "Người dùng không tồn tại" });
        }

        const branch = await BranchModel.findById(BranchID);
        if (!branch) {
            return res.status(404).json({ message: "Chi nhánh không tồn tại" });
        }
        const newEmployee = new EmployeeModel({
            BranchID,
            UserID,
            Position,
            Status
        });
        await newEmployee.save();
        res.status(201).json({ message: "Nhân viên đã được thêm thành công", employee: newEmployee });
    } catch (error) {
        console.error("Lỗi khi thêm nhân viên:", error);
        res.status(500).json({ message: "Lỗi khi thêm nhân viên", error });
    }
};

const updateEmployee = async (req, res) => {
    try {
        const { id } = req.params;
        const { Position, Status } = req.body;

        const updatedEmployee = await EmployeeModel.findByIdAndUpdate(id, { Position, Status }, { new: true });

        if (!updatedEmployee) {
            return res.status(404).json({ message: "Không tìm thấy nhân viên để cập nhật" });
        }

        res.status(200).json({ message: "Nhân viên được cập nhật thành công", employee: updatedEmployee });
    } catch (error) {
        console.error("Lỗi khi cập nhật nhân viên:", error);
        res.status(500).json({ message: "Lỗi khi cập nhật nhân viên", error });
    }
};

const deleteEmployee = async (req, res) => {
    try {
        const { id } = req.params;

        const employee = await EmployeeModel.findById(id);
        if (!employee) {
            return res.status(404).json({ message: "Không tìm thấy nhân viên" });
        }

        if (employee.Status !== "active") {
            await EmployeeModel.findByIdAndDelete(id);
            return res.status(200).json({ message: "Nhân viên đã được xóa thành công" });
        } else {
            return res.status(400).json({ message: "Không thể xóa nhân viên đang làm việc" });
        }
    } catch (error) {
        console.error("Lỗi khi xóa nhân viên:", error);
        res.status(500).json({ message: "Lỗi khi xóa nhân viên", error });
    }
};



const getAllEmployees = async (req, res) => {
    try {
        const employees = await EmployeeModel.find()
            .populate('BranchID', 'BranchName')  // Populate only the BranchName
            .populate('UserID', 'name email');  // Populate User's name and email

        res.status(200).json({ employees });
    } catch (error) {
        console.error("Error fetching employees:", error);
        res.status(500).json({ message: "Error fetching employees", error });
    }
};

export { addEmployee, updateEmployee, deleteEmployee, getAllEmployees };
