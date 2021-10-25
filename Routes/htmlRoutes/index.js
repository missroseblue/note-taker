const path = require('path');
const router = require('express').Router();

//links the main html page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
});

//links the notes page
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/notes.html"));
});

//wildcard route
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
});

module.exports = router;