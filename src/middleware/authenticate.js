// src/middleware/authenticate.js

// تحديد وسيط المصادقة
const authenticate = (req, res, next) => {
    // يمكنك تنفيذ المنطق اللازم للتحقق من مصادقة المستخدم هنا
    next();
};

module.exports = authenticate;
