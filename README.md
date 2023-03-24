
# Jamison's Dream Garage

This project is conceived by me (not from a tutorial) and built from scratch to showcase the following: 

### Back End:
- API w/ router endpoints
    - /cars
        - [ ] GET - Load all cars w matching user_id into garage on load of component
        - [ ] PUT - Update appropriate car
        - [ ] POST - Add new car
        - [ ] DELETE - Remove appropriate car
    - /users
        - [ ] POST - register
        - [ ] POST - login
- Middleware
    - [ ] Clean username/password data before submitting???
        <!-- Maybe not necessary because of validation in front end??? -->
    - [ ] Check username existence
    - [ ] Restricted to block routes w/out authorization
- Database structure
    - [x] Table for tracking vehicles
        - [x] car_id (auto-incrementing)
        - [x] user_id (required)
        - [x] make (required)
        - [x] model (required)
        - [x] trim (required)
        - [x] img_url (required)
        - [x] price
        - [x] build_url
    - [ ] Table for tracking users
        - [x] user_id (auto-incrementing)
        - [x] username (required, unique)
        - [x] password (required)
    - [x] Foreign keys to assign vehicle to user
- Database access
    - Users
        - [ ] findBy(username) to verify existence
        - [ ] insertUser() to register new user
        - [ ] something to login???
    - Cars
        - [ ] findAll() to find all cars matching user
        - [ ] insertCar() to add new car
        - [ ] updateCar() to modify existing car
        - [ ] deleteCar() to delete indicated car
    - [x] seeds and migrations
- Authentication and protected routes
    - [ ] Protect welcome, garage, add, update, delete and delete pages
    - [x] JWT for authentication
    <!-- JWT doesn't allow for logout. Switch to session storage??? -->
