# BFHL Full Stack API – VIT Assignment

## Description
This project is a **RESTful API** built for the **Bajaj Finserv Health Full Stack assignment at VIT**.  
The API accepts an array via a **POST request** and returns categorized data, sum of numbers, and a processed concatenated string.

### Key Features
- Categorizes input data into:  
  - **Even numbers**  
  - **Odd numbers**  
  - **Alphabets** (converted to uppercase)  
  - **Special characters**  
- Calculates **sum of all numbers** (returned as a string)  
- Generates **concatenated string** of all alphabets in **reverse order with alternating case**  
- Returns `user_id`, `email`, `roll_number`, and `is_success`  
- Handles invalid input gracefully  

---

Technology Used

Node.js – Server-side runtime environment for JavaScript

Express.js – Web framework for building REST APIs

Render – Cloud hosting platform to deploy the API

Postman – API testing tool

---

## Hosted API
**Endpoint:**  
[https://bfhl-fullstack-api-1.onrender.com/bfhl](https://bfhl-fullstack-api-1.onrender.com/bfhl)


## Request Format
**POST JSON body:**
```json
{
  "data": ["2","a","y","4","&","-","*","5","92","b"]
}

Response Format
{
  "is_success": true,
  "user_id": "john_doe_17091999",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["5"],
  "even_numbers": ["2","4","92"],
  "alphabets": ["A","Y","B"],
  "special_characters": ["&","-","*"],
  "sum": "103",
  "concat_string": "ByA"
}
```


```Folder Structure
bfhl-fullstack-api/
├── server.js
├── routes/bfhl.js
├── controllers/bfhlController.js
├── utils/dataProcessor.js
├── config/config.js
├── package.json
├── .gitignore
└── README.md
```

Postman Testing

Request & Response for input:["a","1","334","4","R","$"]
<img width="1772" height="1033" alt="image" src="https://github.com/user-attachments/assets/55f7b7ae-1ea5-41d1-918a-54c36fbef00e" />

Request & Response for input:["2","a","y","4","&","-","*","5","92","b"]
<img width="1655" height="901" alt="image" src="https://github.com/user-attachments/assets/c2cd3ad5-d71d-453b-a274-4fddcc169171" />

Request & Response for input:["A","ABcD","DOE"]
<img width="1750" height="840" alt="image" src="https://github.com/user-attachments/assets/3c056f0c-e741-4278-897b-29072d82d2b1" />

-----
## Setup Instructions (Local Development)

Clone the repository:

```bash
git clone https://github.com/cernpavan/bfhl-fullstack-api.git

```
Navigate to the project directory:
```
cd bfhl-fullstack-api
```

Install dependencies:
```
npm install
```
Start the server locally:
```
node server.js
```
Test the API locally at:
```
http://localhost:5000/bfhl
```


----
Submission Details

Hosted API URL:
```
https://bfhl-fullstack-api-1.onrender.com/bfhl
```
GitHub Repository:
```
https://github.com/cernpavan/bfhl-fullstack-api
```
✅ Notes:

Tested for all sample inputs

Numbers returned as strings

is_success indicates the operation status

