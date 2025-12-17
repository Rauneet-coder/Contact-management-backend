const express = require ("express")
require('dotenv').config()

const app = express();

app.use("/api/contact", require("./Routes/UserContact"))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))