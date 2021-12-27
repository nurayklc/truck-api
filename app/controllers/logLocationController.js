const { postgresql } = require('./../adapters/database')

exports.getAllLogLocation = async (req, res) => {
    await postgresql.query('SELECT * FROM log_location', (error, results) =>{
        if(error) throw error
        res.status(200).json(results.rows)
    })
}

exports.createLogLocation = async (req,res) => {
    const data = {
        vehicle_id: req.body.vehicle_id,
        device_id: req.body.device_id,
        latitude: req.body.latitude,
        longitude : req.body.longitude,
        created_at: new Date(Date.now())
      };
      const values = [
        data.vehicle_id,
        data.device_id,
        data.latitude,
        data.longitude,
        data.created_at
      ];
      await postgresql.query(
        "INSERT INTO log_location (vehicle_id,device_id,latitude, longitude,created_at) VALUES ($1,$2,$3,$4,$5)",
        values,
        (error, results) => {
          if (error) throw error;
          res.status(201).send(`Location logged.`);
        }
      );
}