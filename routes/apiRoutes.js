const router = require('express').Router();
const path = require('path');

router.get('/notes', (req, res) => {
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


module.exports = router;