const { error } = require("console");
const { postgresql } = require("./../adapters/database.js");

exports.createVehicle = async (req, res) => {
  const data = {
    vehicle_plate: req.body.vehicle_plate,
    current_status: req.body.current_status,
    is_active: req.body.is_active,
  };
  const values = [data.vehicle_plate, data.current_status, data.is_active];
  await postgresql.query(
    "INSERT INTO vehicles (vehicle_plate, current_status, is_active) VALUES ($1,$2,$3) RETURNING *",
    values,
    (error, results) => {
      if (error) {
        throw error;
      }
      res
        .status(201)
        .send(`Vehicle added with vehicle plate ${data.vehicle_plate}`);
    }
  );
};

// "INSERT INTO vehicles (vehicle_plate, current_status, is_active) VALUES ($1,$2,true)"
