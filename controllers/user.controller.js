const User = require('../models/user')
const bcrypt = require('bcryptjs')


exports.registerUser = async (req, res) => {

    const SearchUser = { ...req.body }
    const email = SearchUser.email
    const searchRes = await User.findOne({ email })

    if (searchRes) return res.status(402).json({ msg: "Email already exist" })

    try {
        const newUser = await new User({ ...SearchUser })

        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(newUser.password, salt)

        newUser.password = hash

        await newUser.save()
        res.status(200).json({ msg: "User register successfly" })
    } catch (error) {
        res.status(401).json({ msg: "User register failed" })
    }
}