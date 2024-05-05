// src/routes/homeRoutes.js

const express = require('express');
const router = express.Router();

// يمكنك استيراد المنطق المناسب هنا
const homeController = require('../controllers/homeController');

// تحديد مسار الصفحة الرئيسية
router.get('/', homeController.getHomePage);

module.exports = router;
