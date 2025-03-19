// Filename: api-routes.js
// Initialize express router
import express from 'express'
import verifyToken from '../auth/auth.js'
// Import controllers 
import * as userController from "../controllers/userController.js"

const router = express.Router()
// Set default API response
router.get('/', function (req, res) {
res.json({
status: 'API is Working',
message: 'Welcome to my REST API!'
});
});


// define routes here
router.route('/login')
.post(userController.login);

router.route('/admin')
.get([verifyToken, userController.admin]);

// Export API routes. As it is the only export, we make it the default.
export default router;