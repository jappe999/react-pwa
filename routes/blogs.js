const Router = require('express').Router
const JsonDB = require('node-json-db')
const uuid = require('uuid/v4')

const router = Router()

const db = () => new JsonDB('blogs', true, false)

const getId = () => `${Date.now}${uuid()}`

const formatAsArray = object =>
	Object.keys(object).map(key => object[key])

const fetch = nodeName => {
  try {
    return db().getData(nodeName)
  } catch (e) {
    console.error(e)
    return {}
  }
}

const push = (name, value) => {
  try {
    db().push(name, value, false)
    return true
  } catch (e) {
    console.log(e)
    return false
  }
}

/* GET blogs listing. */
router.get('/', (req, res, next) => {
	const posts = formatAsArray(fetch('/')).reverse()
  res.json(posts)
})

/* POST blog */
router.post('/', (req, res, next) => {
	const id = getId()
	const post = {
		...req.body,
		date: Date.now(),
		id,
	}
	if (push(`/${id}`, post))
		res.status(201).json(post)
	else
		res.sendStatus(500)
})

module.exports = router
