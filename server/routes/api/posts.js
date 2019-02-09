const express = require('express')
const mongodb = require('mongodb')
const Slug = require('slug')
const fs = require('fs');

const router = express.Router()

const loadPostsCollection = async function() {
  const client = await mongodb.MongoClient.connect(
    'mongodb://lekka:lekka123@ds255463.mlab.com:55463/tinasheblog',
    {
      useNewUrlParser: true
    }
  )
  return client.db('tinasheblog').collection('posts')
}

//Get Posts
router.get('/', async (req, res) => {
  const posts = await loadPostsCollection()
  res.send(await posts.find({}).toArray())
})

//Add Post
router.post('/', async (req, res) => {
  const posts = await loadPostsCollection()
  var title = req.body.title
  var slug = Slug(title, {lower: true})
  var filePath = './pages/blog/' + slug + '.vue'
  try {
    fs.closeSync(fs.openSync(filePath, 'w'))
  }catch(err) {
    console.log(err)
  }
  

  await posts.insertOne({
    title: title,
    slug: slug,
    author: req.body.author,
    category: req.body.category,
    imagename: req.body.imagename,
    videourl: req.body.videourl,
    description: req.body.description,
    content: req.body.content,
    createdAt: new Date()
  })
  res.status(201).send()
})

//Delete Post
router.delete('/:id', async (req, res) => {
  const posts = await loadPostsCollection()
  await posts.deleteOne({
    _id: new mongodb.ObjectID(req.params.id)
  })
  res.status(200).send()
})

//GetPost
router.get('/blog/:slug', async (req, res) => {
  const posts = await loadPostsCollection()
  res.send(await posts.findOne({ slug: req.params.slug }))
})

//EditPost
router.put('/blog/:id', async (req, res) => {
  const posts = await loadPostsCollection()
  let params = { updatedAt: new Date() }
  if (req.body.title) {
    params.slug = Slug(req.body.title).toLowerCase()
  }
  await posts.updateOne(
    { _id: new mongodb.ObjectID(req.params.id) },
    { $set: Object.assign(params, req.body) },
    { upsert: true }
  )
  res.status(201).send()
})

module.exports = router
