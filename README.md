# gullible-interest-3767
Introduction
This is a car rental website that allows users to register, login and book cars. The website has a user-friendly interface that makes it easy to navigate and use. Users can access their dashboards where they can view, edit or delete their bookings. There is also an admin portal that allows the admin to manage the website.

Features
User registration and login
User dashboard to view, edit and delete bookings
Admin portal to manage the website
Admin can view registered users on the website
Admin can view bookings data of the website
Technology Stack
HTML, CSS and JavaScript for frontend development
Node.js and MongoDB for backend development
Getting Started
Clone the repository to your local machine
Configure the database connection details in the config.js file located in the config folder
Open the index.html file in your web browser to access the website
How to Use
Register as a user on the website
Login using your registered credentials
Browse available cars and make a booking
View, edit or delete your bookings from your dashboard
Admin can login to the admin portal to manage the website
Note: The backend is already deployed, so there is no need to install Node.js on your machine. You only need to configure the database connection details and open the index.html file in your web browser to access the website.


API Endpoints
The following API endpoints are available for this project:

Authentication Endpoints
POST /api/login: User login
POST /api/register: User registration
User Endpoints
GET /api/user/:id: Get user details by ID
PUT /api/user/:id: Update user details by ID
DELETE /api/user/:id: Delete user by ID
Booking Endpoints
GET /api/booking/user/:userId: Get all bookings of a user by user ID
GET /api/booking/:id: Get booking details by ID
POST /api/booking: Create a new booking
PUT /api/booking/:id: Update booking details by ID
DELETE /api/booking/:id: Delete booking by ID
Admin Endpoints
GET /api/admin/users: Get all users
GET /api/admin/bookings: Get all bookings
Note: The authentication endpoints do not require a token, while the other endpoints require a valid token for access. The token is generated upon successful login and must be included in the Authorization header of each request.

Landing Page With Sticky Navbar And Mega Menu Bar

![Screenshot_20230227_112721](https://user-images.githubusercontent.com/114407593/221486636-2efad9e2-2efc-464a-b9e0-0a8c0e4025b5.png)

Footer

![Screenshot_20230227_112741](https://user-images.githubusercontent.com/114407593/221486745-879fd4c8-b203-4851-b135-baf18f16b22c.png)

Sign-up Page

![Screenshot_20230227_112758](https://user-images.githubusercontent.com/114407593/221486830-74814ffb-665c-41da-9a56-57fcb5fd4521.png)

User Login Page

![Screenshot_20230227_112821](https://user-images.githubusercontent.com/114407593/221486887-b6945d6d-3ae2-476e-9281-3230585932a8.png)

Admin Login Page With Sound Alerts

![Screenshot_20230227_112906](https://user-images.githubusercontent.com/114407593/221486950-e1345eaf-fe19-4e47-a052-4aa505189f9e.png)

User's Data on Admin Dash-Board

![Screenshot_20230227_112919](https://user-images.githubusercontent.com/114407593/221486977-91677b1f-89bb-4685-b460-71612f5b3766.png)

Booking's Data on Admin Dash-Board

![Screenshot_20230227_112954](https://user-images.githubusercontent.com/114407593/221487050-f5d94a20-5135-4f92-9fac-abc58f5923d0.png)
