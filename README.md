## API Endpoints

All API Request must be prepended with /api


### Authentication Endpoints

The Authentication flow for the application is:

METHOD | ENDPOINT             |ROL                       | TOKEN | DESCRIPTION              | POST PARAMS REQUIRED                               | RETURNS
-------|----------------------|-------------------------|-------|--------------------------|-------------------------------------------------|--------------------
POST   | /api/auth/signup     | Client,Admin,Employee   |-      | User Signup              | name, username, email, password                 | token
POST   | /api/auth/login      | Client,Admin,Employee   |-      | User Login               | username, password                              | token


### Clients Endpoints

METHOD  | ENDPOINT                 | ROL                      | TOKEN | DESCRIPTION                  | POST PARAMS REQUIRED              | RETURNS
--------|--------------------------|--------------------------|-------|-----------------------------|-----------------------------------|--------------------
GET     | /api/clients/profile     |Client,Admin,Employee     | Yes   | View own client information |                                   | Client information
GET     | /api/clients             |Admin                     | Yes   | View list of clients        |                                   | List of clients information
GET     | /api/clients/:clientId   |Admin                     | Yes   | View specific client        | clientId                          | Specific client information
PUT     | /api/clients/profile     |Client,Admin,Employee     | Yes   | Update own information      |                                   | Updated information
DELETE  | /api/clients/:clientId   |Admin                     | Yes   | Delete specific client      | clientId                          | Delete specific client


### Employees Endpoints

METHOD  | ENDPOINT                     | ROL                      | TOKEN | DESCRIPTION                   | POST PARAMS REQUIRED              | RETURNS
--------|------------------------------|--------------------------|-------|-------------------------------|-----------------------------------|--------------------
GET     | /api/employees               |Admin                     | Yes   | View list of employees        |                                   | List of employees information
GET     | /api/employees/:employeeId   |Admin                     | Yes   | View specific employee        | employeeId                        | Specific employee information
GET     | /api/employees/profile       |Admin,Employee            | Yes   | View own employee information |                                   | Employee information
PUT     | /api/employees/profile       |Admin,Employee            | Yes   | Update own information        |                                   | Updated information
PUT     | /api/employees/:employeeId   |Admin                     | Yes   | Update specific employee      | employeeId                        | Updated employee information
DELETE  | /api/employees/:employeeId   |Admin                     | Yes   | Delete specific employee      | employeeId                        | Delelete pecific employee 


### Restaurants Endpoints

METHOD  | ENDPOINT                         | ROL                  | TOKEN | DESCRIPTION                        | POST PARAMS REQUIRED      | RETURNS
--------|----------------------------------|----------------------|-------|------------------------------------|---------------------------|--------------------
GET     | /api/restaurants                 |Client,Admin          | Yes   | View list of restaurants           |                           | List of restaurants information
GET     | /api/restaurants/:restaurantId   |Client,Admin          | Yes   | View specific restaurant           | restaurantId              | Specific restaurant information
GET     | /api/restaurants/profile         |Admin,Employee        | Yes   | View own restaurant information    |                           | Restaurant information
PUT     | /api/restaurants/profile         |Admin,Employee        | Yes   | Update own restaurant information  |                           | Updated information
PUT     | /api/restaurants/:restaurantId   |Admin                 | Yes   | Update specific restaurant         | restaurantId              | Updated specific restaurant information
DELETE  | /api/restaurants/:restaurantId   |Admin                 | Yes   | Delete specific restaurant         | restaurantId              | Delete specific restaurant information
DELETE  | /api/restaurants/profile         |Admin,Employee        | Yes   | Delete own restaurant              |                           | Delete own restaurant 

### Tables Endpoints

METHOD  | ENDPOINT                         | ROL                  | TOKEN | DESCRIPTION                        | POST PARAMS REQUIRED      | RETURNS
--------|----------------------------------|----------------------|-------|------------------------------------|---------------------------|--------------------
GET     | /api/tables                      |Admin                 | Yes   | View list of tables                |                           | List of tables information
GET     | /api/tables/:tableId             |Admin                 | Yes   | View specific table                | tableId                   | Specific table information
GET     | /api/restaurants/profile         |Admin,Employee        | Yes   | View own restaurant information    |                           | Restaurant information
PUT     | /api/restaurants/profile         |Admin,Employee        | Yes   | Update own restaurant information  |                           | Updated information
PUT     | /api/restaurants/:restaurantId   |Admin                 | Yes   | Update specific restaurant         | tableId              | Updated specific restaurant information
DELETE  | /api/restaurants/:restaurantId   |Admin                 | Yes   | Delete specific restaurant         | tableId              | Delete specific restaurant information

### Reservations Endpoints

METHOD  | ENDPOINT                         | ROL                  | TOKEN | DESCRIPTION                        | POST PARAMS REQUIRED      | RETURNS
--------|----------------------------------|----------------------|-------|------------------------------------|---------------------------|--------------------
GET     | /api/reservations                |Admin                 | Yes   | View list of reservations          |                           | List of reservations information
GET     | /api/reservations/:reservationId |Admin                 | Yes   | View specific reservations         | reservationId             | Specific reservation information




GET     | /api/restaurants/profile         |Admin,Employee        | Yes   | View own restaurant information    |                           | Restaurant information
PUT     | /api/restaurants/profile         |Admin,Employee        | Yes   | Update own restaurant information  |                           | Updated information
PUT     | /api/restaurants/:restaurantId   |Admin                 | Yes   | Update specific restaurant         | restaurantId              | Updated specific restaurant information
DELETE  | /api/restaurants/:restaurantId   |Admin                 | Yes   | Delete specific restaurant         | restaurantId              | Delete specific restaurant information
DELETE  | /api/restaurants/profile         |Admin,Employee        | Yes   | Delete own restaurant              |                           | Delete own restaurant 
