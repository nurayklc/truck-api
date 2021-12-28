const { postgresql } = require("./../adapters/database.js");

exports.getAllVehicle = async (req, res) => {
  await postgresql.query(
    "SELECT id,vehicle_plate, current_status, is_active from vehicles ORDER BY id ASC",
    (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    }
  );
};

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

exports.updateVehicle = async (req, res) => {
  const data = {
    vehicle_plate: req.body.vehicle_plate,
    current_status: req.body.current_status,
    is_active: req.body.is_active,
    id: req.params.id,
  };
  const values = [
    data.vehicle_plate,
    data.current_status,
    data.is_active,
    data.id,
  ];
  await postgresql.query(
    "UPDATE vehicles SET vehicle_plate = $1, current_status = $2, is_active = $3 WHERE id = $4",
    values,
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).send(`Vehicle updated with id ${data.vehicle_plate}`);
    }
  );
};

exports.deleteVehicle = async (req, res) => {
  const id = req.params.id;
  await postgresql.query(
    "DELETE FROM vehicles WHERE id = $1",
    [id],
    (error, result) => {
      if (error) throw error;
      res.status(200).send(`Vehicle deleted with id: ${id}`);
    }
  );
};
