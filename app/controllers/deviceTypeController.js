const { postgresql } = require("../adapters/database");

exports.getAllDeviceType = async (req, res) => {
  await postgresql.query("SELECT id,device_name, device_description, is_active from devices_type", (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

exports.createDeviceType = async (req, res) => {
  const data = {
    device_name: req.body.device_name,
    device_description: req.body.device_description,
    is_active: req.body.is_active,
  };
  const values = [data.device_name, data.device_description, data.is_active];
  await postgresql.query(
    "INSERT INTO devices_type (device_name, device_description, is_active) VALUES ($1,$2,$3)",
    values,
    (error, results) => {
      if (error) throw error;
      res
        .status(201)
        .send(`Device added with device name "${data.device_name}"`);
    }
  );
};

exports.deleteDeviceType = async (req, res) => {
  const id = req.params.id;
  await postgresql.query(
    "DELETE FROM devices_type WHERE id = $1",
    [id],
    (error, results) => {
      if (error) throw error;
      res.status(200).send(`Device Type deleted with id: ${id}`);
    }
  );
};
