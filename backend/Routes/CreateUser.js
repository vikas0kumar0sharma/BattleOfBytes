import express from "express"
const router=express.Router()
import USER from "../Modals/User.js"

router.post('/', async (req, res) => {
  try {
    const user = await USER.findOne({ email: req.body.email })
    if (user) {
      console.log('user already has account')
      if(req.body.voted===true) USER.findOneAndUpdate({email:user.email},{voted:true})
      return res.json({ already:"Yes",voted:user.voted })
    }
    await USER.create({
      name: req.body.name,
      email: req.body.email
    })
    console.log('user account created successfully!')
    return res.json({ already: "No" })
  } catch (error) {
    console.log(error)
    return res.json({already:"IDK"})
  }
})

export default router