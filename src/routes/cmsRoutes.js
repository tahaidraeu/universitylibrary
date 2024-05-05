// استيراد المكتبة المطلوبة
const express = require('express');
const router = express.Router();

// استيراد المنطق المناسب هنا
const cmsController = require('../controllers/cmsController');

// تحديد مسارات إدارة المحتوى (CMS)
router.get('/login', cmsController.getLoginPage);
router.post('/login', cmsController.login);
router.get('/resources/add', cmsController.addResource);
router.post('/resources/add', cmsController.addResource);
router.get('/resources/edit/:id', cmsController.getEditResourcePage);
router.post('/resources/edit/:id', cmsController.editResource);
router.post('/resources/delete/:id', cmsController.deleteResource);

module.exports = router;

