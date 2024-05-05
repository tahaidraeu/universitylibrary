// src/routes/searchRoutes.js

const express = require('express');
const router = express.Router();

// يمكنك استيراد المنطق المناسب هنا
const searchController = require('../controllers/searchController');

// تحديد مسار البحث
router.get('/search', searchController.searchAndFilter); // استخدام searchAndFilter بدلاً من search

module.exports = router;
