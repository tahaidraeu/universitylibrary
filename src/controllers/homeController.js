// استيراد النماذج
const bookModel = require('../models/bookModel');
const researchModel = require('../models/researchModel');
const lectureModel = require('../models/lectureModel');
const Sheet = require('../models/sheetModel'); // تم تغيير هذا السطر
const onlineResourceModel = require('../models/onlineResourceModel');

// دالة لتحميل بيانات الصفحة الرئيسية
async function getHomePage(req, res) {
    try {
        // استعلامات للحصول على بيانات الكتب والأبحاث والمحاضرات والشيتات والمصادر عبر الإنترنت
        const books = await bookModel.getAllBooks();
        const researches = await researchModel.getAllResearches();
        const lectures = await lectureModel.getAllLectures();
        const sheets = await Sheet.getAllSheets(); // تم تغيير هذا السطر
        const onlineResources = await onlineResourceModel.getAllOnlineResources();

        // إرسال البيانات إلى العميل
        res.json({
            books,
            researches,
            lectures,
            sheets,
            onlineResources
        });
    } catch (error) {
        console.error("Error loading home page data:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

// تصدير الدالة
module.exports = {
    getHomePage
};



