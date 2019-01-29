const 
  express = require('express'),
  router = express.Router(),
  controllers = require('../controllers')

router.post('/signup', controllers.user.signup);
router.post('/login', controllers.user.login)
router.delete('/:userId', controllers.user.delete)
// router.get('/', controllers.user.index)

module.exports = router;