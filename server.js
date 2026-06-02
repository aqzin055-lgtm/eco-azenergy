const express = require('express'); 
const cors = require('cors'); 
const app = express(); 
const PORT = 3000; 
app.use(cors()); 
app.use(express.json()); 
app.use(express.static('.')); 
app.post('/api/contact', (req, res) => { 
  res.json({ success: true, message: 'Mesaj alindi' }); 
}); 
app.get('/', (req, res) => { 
  res.sendFile(__dirname + '/index.html'); 
}); 
app.listen(PORT, () => console.log(`Server http://localhost:${PORT}`)); 
