import { app } from "./app"; 

// Define the port on which the server will listen for incoming requests
const PORT = process.env.PORT || 8000;

// Start the Express server, listening on the specified port
app.listen(PORT, () => {
    // Log a message indicating that the server is running and on which port
    console.log(`Server is running on port ${PORT}`);
});
