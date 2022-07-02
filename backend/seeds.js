const mongoose = require("mongoose");
require("./models/User");
require("./models/Item");
require("./models/Comment");

mongoose.connect(
  process.env.MONGODB_URI, 
  { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("MONGOOSE DB CONNECTED")
  }).catch((e) => {
    console.error(e)
  })


var Item = mongoose.model("Item");
var Comment = mongoose.model("Comment");
var User = mongoose.model("User");


const seed = async () => {
  await User.deleteMany({})
  await Item.deleteMany({})
  await Comment.deleteMany({})
  for (let i = 0;i<100;i++) {
    let user = new User({
      username: `test${i}`,
      email: `test-${i}@example.com`,
    })
    await user.save()
    let item = new Item({
      title: `product ${i}`,
      description: 'product description',
      seller: user
    })
    await item.save()
    let comment = new Comment({
      seller: user,
      item,
      body: `Comment ${i}`
    })
    await comment.save()
    console.log(`saving item ${i}`)
  }
}

seed()
process.exit()
