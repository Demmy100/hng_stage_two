const express = require("express")
const { createPerson, getPerson, updatePerson, deletePerson } = require("../controllers/personController")
const router = express.Router()

router.post("/", createPerson)
router.get("/:user_id", getPerson)
router.put("/:user_id", updatePerson)
router.delete("/:user_id", deletePerson)

module.exports = router