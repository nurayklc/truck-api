# Node.js API 

### Kullanılan Teknolojiler
- Node.js
- PostgreSQL
- Postman
- MVC Yapısı
- Express Framework
- Nodemon
- Dotenv

---
### Projeyi Çalıştırmak İçin 
``` 
npm install
npm start
```
Browser da **http://localhost:3000** yazarak açabilirsiniz.

---
## Postman Requestleri

Parent root -> /vehicle

Get -> /vehicle_list

Post-> /vehicle_add

Patch-> /vehicle_update/:id

Delete-> /vehicle_delete/:id

---
Parent root -> /device

Get -> /device_list

Post-> /device_add

Patch-> /device_update/:id

Delete-> /device_delete/:id

---
Parent root -> /device_type

Get -> /type_list

Post-> /type_add

Delete-> /device_delete/:id

---
Parent root -> /log_temperature

Get -> /temp_list

Post-> /temp_add

---
Parent root -> /log_location

Get -> /gps_list

Post-> /gps_add

