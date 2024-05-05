class Book {
    constructor(title, author, publicationDate) {
        this.title = title;
        this.author = author;
        this.publicationDate = publicationDate;
    }

    // دالة للحصول على كافة الكتب
    static async getAllBooks() {
        // هنا يجب عمل الاستعلام أو العملية المناسبة للحصول على كافة الكتب من قاعدة البيانات
        // يمكنك استخدام أية تقنية أو مكتبة تفضلها للقيام بذلك
        // هذا مثال بسيط للتوضيح فقط
        return [
            new Book('Book 1', 'Author 1', '2022-01-01'),
            new Book('Book 2', 'Author 2', '2022-02-01'),
            new Book('Book 3', 'Author 3', '2022-03-01')
        ];
    }
}

module.exports = Book;
