class Research {
    constructor(title, author, publicationDate) {
        this.title = title;
        this.author = author;
        this.publicationDate = publicationDate;
    }

    // دالة للحصول على كافة الأبحاث
    static async getAllResearches() {
        // يمكنك هنا عمل الاستعلام أو أي عملية للحصول على الأبحاث من قاعدة البيانات
        // هذا مثال بسيط للتوضيح فقط
        return [
            new Research('Research 1', 'Author 1', '2022-01-01'),
            new Research('Research 2', 'Author 2', '2022-02-01'),
            new Research('Research 3', 'Author 3', '2022-03-01')
        ];
    }
}

module.exports = Research;
