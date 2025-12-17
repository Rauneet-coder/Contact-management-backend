const getContact = (req, res) => {
    res.status(200).json({ message: "User" })
}
const postContact = (req, res) => {
    res.status(201).json({ message: "Contact Created" })
}
const putContact = (req, res) => {
    res.status(201).json({ message: `Contact Updated for ${req.params.id}` })
}
const getContactid = (req, res) => {
    res.status(200).json({ message: `Get contact ${req.params.id}` })
}
const deleteContact = (req, res) => {
    res.status(201).json({ message: `delete contact ${req.params.id}` })
}

module.exports = {
    getContact,
    postContact,
    putContact,
    deleteContact,
    getContactid
}


