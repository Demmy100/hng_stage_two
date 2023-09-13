## Setup Instructions


Clone the repository: git clone https://github.com/yourusername/your-api-repo.git
Install dependencies: npm install
Start the server: node server.js
Access the API locally: http://localhost:4001/api


# REST API Documentation

## Introduction

This API allows you to manage person records. You can create, read, update, and delete person records.

Base URL: `http://localhost:3000/api`

## Endpoints

### Create a new person

**Endpoint:** `POST /api`

**Request:**
json
{
  "name": "John Doe",
}
Response (Success):

json
{
  "_id": "5f4f7e4ccbc06525b491a6e3",
  "name": "John Doe",
}
Response (Error):

json
{
  "error": "An error occurred"
}
Read details of a person by user_id
Endpoint: GET /api/:user_id

Response (Success):

json
{
  "_id": "5f4f7e4ccbc06525b491a6e3",
  "name": "John Doe",
}
Response (Error - Person not found):

json
{
  "error": "Person not found"
}
Response (Error - Internal Server Error):

json
{
  "error": "An error occurred"
}
Update details of an existing person by user_id
Endpoint: PUT /api/:user_id

Request:

json
{
  "name": "Updated Name",
}
Response (Success):

json
Copy code
{
  "_id": "5f4f7e4ccbc06525b491a6e3",
  "name": "Updated Name",
}
Response (Error - Person not found):

json
{
  "error": "Person not found"
}
Response (Error - Internal Server Error):

json
{
  "error": "An error occurred"
}
Delete a person by user_id
Endpoint: DELETE /api/:user_id

Response (Success):

HTTP Status: 204 No Content
Response (Error - Person not found):

json
{
  "error": "Person not found"
}
Response (Error - Internal Server Error):

json
{
  "error": "An error occurred"
}
## Known Limitations:

The API does not include authentication or authorization. It assumes that the endpoints are accessible to anyone.





