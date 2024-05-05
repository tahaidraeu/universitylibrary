// src/middleware/admin.js

// تحديد وسيط الإدارة
const admin = (req, res, next) => {
    // يمكنك تنفيذ المنطق اللازم للتحقق من صلاحيات المستخدم كمسؤول هنا
    next();
};

module.exports = admin;
