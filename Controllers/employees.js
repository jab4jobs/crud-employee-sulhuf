const Models = require("../Models");


const sendSuccess = function (successMsg, statuscode, data) {
    return {statusCode:statuscode, message: successMsg, data: data || null};
};


const getEmployees = async (req, res) => {
    try {
        const employee= await Models.employees.find();
        
        res.json(sendSuccess('Get All Employees', 200, employee));
    } catch(error) {
        res.status(404).json({message: error.message});
    }
};

const getSpecEmployee = async (req,res) => {
    const id = req.params.id;
    try {
            const emp = await Models.employees.findOne({_id: id});
            res.json(sendSuccess('Get Employee Details', 200, emp));
        } catch(error) {
            res.status(404).json({ message: error.message});
        }
};

const createEmployee =  async (req, res) => {
    console.log(req.body);
    const newEmployee = new Models.employees({
        name:req.body.name,
        roll:req.body.roll,
        email:req.body.email,
        phone:req.body.phone,
        address:req.body.address,
        country:req.body.country
    })
    try {
        await newEmployee.save();
        res.json(sendSuccess('Created Employee', 201, newEmployee));
    } catch(error) {
        res.status(400).json({ message : error.message});
    }
};

const updateEmployee = async (req,res) => {
    const id = req.params.id;
    try {
            const emp = await Models.employees.findOneAndUpdate({_id: id}, req.body, {new: true});
            res.json(sendSuccess('Updated Employee', 200, emp));
        } catch(error) {
            res.status(404).json({ message: error.message});
        }
};

const deleteEmployee = async (req,res) => {
    const id = req.params.id;
    try {
            const emp = await Models.employees.findOneAndDelete({_id: id});
            res.json(sendSuccess('Deleted Employee', 204, emp));
        } catch(error) {
            res.status(404).json({ message: error.message});
        }
};

module.exports = {
    getEmployees: getEmployees,
    getSpecEmployee: getSpecEmployee,
    createEmployee: createEmployee,
    updateEmployee: updateEmployee,
    deleteEmployee: deleteEmployee
}
