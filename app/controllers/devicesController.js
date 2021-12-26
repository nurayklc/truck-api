const { postgresql } = require("../adapters/database");

exports.getAllDevices = async (req, res) => {
  await postgresql.query(
    "SELECT vehicle_id, device_type_id, device_name, is_active FROM devices",
    (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    }
  );
};

exports.createDevice = async (req, res) => {
  const data = {
    vehicle_id: req.body.vehicle_id,
    device_type_id: req.body.device_type_id,
    device_name: req.body.device_name,
    is_online: req.body.is_online,
    is_active: req.body.is_active,
  };
  const values = [
    data.vehicle_id,
    data.device_type_id,
    data.device_name,
    data.is_online,
    data.is_active,
  ];
  await postgresql.query(
    "INSERT INTO devices (vehicle_id,device_type_id,device_name,is_online,is_active) VALUES ($1,$2,$3,$4,$5)",
    values,
    (error, results) => {
      if (error) throw error;
      res.status(201).send(`Device added with device name ${data.device_name}`);
    }
  );
};

exports.updateDevices = async (req, res) => {
  const data = {
    vehicle_id: req.body.vehicle_id,
    device_type_id: req.body.device_type_id,
    device_name: req.body.device_name,
    is_online: req.body.is_online,
    is_active: req.body.is_active,
    id: req.params.id,
  };
  const values = [
    data.vehicle_id,
    data.device_type_id,
    data.device_name,
    data.is_online,
    data.is_active,
    data.id,
  ];
  await postgresql.query(
    "UPDATE devices SET vehicle_id = $1, device_type_id = $2, device_name = $3,is_online = $4, is_active = $5 WHERE id = $6",
    values,
    (error, results) => {
      if (error) throw error;
      res.status(200).send(`Updated device info with id ${data.id}`);
    }
  );
};

exports.deleteDevices = async (req, res) => {
  const id = req.params.id;
  await postgresql.query(
    "DELETE FROM devices WHERE id = $1",
    [id],
    (error, results) => {
      if (error) throw error;
      res.status(200).send(`Deleted device with id ${id}`);
    }
  );
};
