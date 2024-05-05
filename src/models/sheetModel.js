// sheetModel.js

class Sheet {
    constructor(title, subject, date) {
        this.title = title;
        this.subject = subject;
        this.date = date;
    }

    // دالة للحصول على كافة الشيتات
    static async getAllSheets() {
        // هنا يمكنك استبدال هذا الجزء بالاستعلام إلى قاعدة البيانات
        // لكن لأغراض التجربة، سنقوم بإرجاع بيانات مثالية فقط
        return [
            new Sheet('Sheet 1', 'Subject 1', '2022-01-01'),
            new Sheet('Sheet 2', 'Subject 2', '2022-02-01'),
            new Sheet('Sheet 3', 'Subject 3', '2022-03-01')
        ];
    }
}

module.exports = Sheet;
