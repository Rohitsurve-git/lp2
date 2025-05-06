const express = require('express'); 
const app = express(); 
const PORT = 3000; 
// Serve static files like CSS 
app.use(express.static('public')); 
// Serve HTML 
app.get('/', (req, res) => { 
res.sendFile(__dirname + 'index.html'); 
}); 
// Start server 
app.listen(PORT, () => { 
console.log(`Dashboard running at http://localhost:${PORT}`); 
});