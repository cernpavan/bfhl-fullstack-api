// Import the Express module
const express = require('express');

// Initialize an Express application
const app = express();

// Middleware to parse JSON bodies in requests
app.use(express.json());

// Define POST route /bfhl
app.post('/bfhl', (req, res) => {
    try {
        // Extract 'data' array from the request body
        const data = req.body.data;

        // Validate input: check if 'data' exists and is an array
        if (!data || !Array.isArray(data)) {
            return res.status(400).json({ 
                is_success: false, 
                message: "Invalid input: 'data' must be an array" 
            });
        }

        // Initialize arrays for categorizing data
        let odd_numbers = [];
        let even_numbers = [];
        let alphabets = [];
        let special_characters = [];

        // Variables for sum of numbers and raw concatenation of alphabets
        let sum = 0;
        let concat_string_raw = '';

        // Iterate through each element in the data array
        data.forEach(item => {
            if (!isNaN(item)) { 
                // Item is a number
                let num = parseInt(item); // Convert to integer
                sum += num; // Add to total sum

                // Categorize as even or odd
                if (num % 2 === 0) {
                    even_numbers.push(item.toString());
                } else {
                    odd_numbers.push(item.toString());
                }

            } else if (/^[a-zA-Z]+$/.test(item)) { 
                // Item is alphabetic
                alphabets.push(item.toUpperCase()); // Convert to uppercase for output
                concat_string_raw += item; // Store for reversed concatenation

            } else { 
                // Item is a special character
                special_characters.push(item);
            }
        });

        // Prepare concatenated string: reverse the collected alphabets and alternate case
        let concat_string = '';
        concat_string_raw.split('').reverse().forEach((char, index) => {
            concat_string += index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
        });

        // Send response in JSON format
        res.status(200).json({
            is_success: true,
            user_id: "john_doe_17091999",
            email: "john@xyz.com",
            roll_number: "ABCD123",
            odd_numbers,              // Array of odd numbers as strings
            even_numbers,             // Array of even numbers as strings
            alphabets,                // Array of alphabets converted to uppercase
            special_characters,       // Array of special characters
            sum: sum.toString(),      // Total sum of numbers as string
            concat_string             // Concatenated alphabets in reverse with alternating caps
        });

    } catch (err) {
        // Handle any unexpected errors
        res.status(500).json({ is_success: false, message: err.message });
    }
});

// Start the server on specified PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
