// app.js

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// استيراد ملفات التوجيه
const homeRoutes = require('./src/routes/homeRoutes');
const searchRoutes = require('./src/routes/searchRoutes');
const cmsRoutes = require('./src/routes/cmsRoutes');

// استيراد وسيط المصادقة ووسيط الإدارة
const authenticate = require('./src/middleware/authenticate');
const admin = require('./src/middleware/admin');

// استخدام مكونات مساعدة
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// تسجيل مسارات التوجيه
app.use('/', homeRoutes);
app.use('/', searchRoutes);
app.use('/cms', cmsRoutes);

// استخدام وسيط المصادقة ووسيط الإدارة
app.use(authenticate);
app.use('/cms', admin);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

