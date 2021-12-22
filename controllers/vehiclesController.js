const { error } = require("console");
const pg = require("./../adapters/database");

exports.createVehicle = async (req, res) => {
  const vehicle_plate = req.body.vehicle_plate;
  console.log(req.body)
  const current_status = req.body.current_status;
  const  is_active = req.body.is_active
  await pg.query(
    "INSERT INTO vehicles (vehicle_plate, current_status, is_active) VALUES ($1,$2,true)",
    [vehicle_plate, current_status],
    (error, results) => {
      if (error) throw error;
      res.status(201).send({
          'vehicle_plate':vehicle_plate,
          'current_status' : current_status,
          'is_active' :is_active
      });
    }
  );
};
