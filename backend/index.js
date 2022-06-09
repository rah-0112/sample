const express = require('express')
const cors = require('cors')
const db = require('./database');

const app = express();
const PORT = 5000;

app.use(cors());

app.get("/", async (req, res) => {
    try {
        const result = await db.query("select * from student");
        res.json(result.rows);
        console.log(result.rows);
    } catch (error) {
        console.error(error);
    }
});

app.listen(PORT, (err) => {
    if (err)
        console.error(err);
    else
        console.log(`Server running in port ${PORT}`);
})