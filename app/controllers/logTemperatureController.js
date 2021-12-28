const { postgresql } = require('./../adapters/database')

exports.getAllLogTemperature = async (req, res) => {
    await postgresql.query('SELECT id,vehicle_id,device_id,read_data,created_at FROM log_temperature', (error, results) =>{
        if(error) throw error
        res.status(200).json(results.rows)
    })
}

exports.createLogTemperature = async (req,res) => {
    const data = {
        vehicle_id: req.body.vehicle_id,
        device_id: req.body.device_id,
        read_data: req.body.read_data,
        created_at: new Date(Date.now())
      };
      const values = [
        data.vehicle_id,
        data.device_id,
        data.read_data,
        data.created_at
      ];
      await postgresql.query(
        "INSERT INTO log_temperature (vehicle_id,device_id,read_data,created_at) VALUES ($1,$2,$3,$4)",
        values,
        (error, results) => {
          if (error) throw error;
          res.status(201).send(`Temperature logged.`);
        }
      );
}