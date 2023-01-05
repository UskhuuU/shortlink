const express = require("express");
const router = express.Router();

const {
    
    createLink,
    getLinks,
    deleteLink,
    getLink,

} = require("../controller/linkController")
 
router 

    .get("/", getLinks)
    .post('/', createLink)
    .delete('/:id', deleteLink)
    .get("/:id", getLink)

module.exports = router;