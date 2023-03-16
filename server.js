const path = require ('path');
const express = require ('express');
const app = express();
const PORT = process.env.PORT || 3001;

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
// app.use('/api', apiRoutes);
// app.use('/', htmlRoutes);
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'))
});

app.get('/api/notes', (req, res) => {
    console.log('return notes info ')
    res.json([
        {
            "title":"Test Title",
            "text":"Test text",
            "note":"Current Note"
        }
    ]
    )
    // res.sendFile(path.join(__dirname, './public/notes.html'))
});

// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
