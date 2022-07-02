const mongoose = require("mongoose");
require("./models/User");
require("./models/Item");
require("./models/Comment");

const seed = async () => {
  try {
      mongoose.connect(
      process.env.MONGODB_URI, 
      { useNewUrlParser: true, useUnifiedTopology: true })
      var Item = mongoose.model("Item");
      var Comment = mongoose.model("Comment");
      var User = mongoose.model("User");
      await User.deleteMany({})
      await Item.deleteMany({})
      await Comment.deleteMany({})      
      for (let i = 0;i<100;i++) {
        let user = await User.create({
          username: `test${i}`,
          email: `test-${i}@example.com`,
        })
        
        let item = await Item.create({
          title: `product ${i}`,
          description: 'product description',
          seller: user
        })
        
        await Comment.create({
          seller: user,
          item,
          body: `Comment ${i}`
        })
        console.log(`saved item ${i}`)        
      }
  } catch(err) {
    console.error({err: JSON.stringify(err)})
  }
}

seed().then(() => {
  mongoose.disconnect().then(() => {
    process.exit()
  })
})