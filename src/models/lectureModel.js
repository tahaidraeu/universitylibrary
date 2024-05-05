class Lecture {
    constructor(title, instructor, date) {
        this.title = title;
        this.instructor = instructor;
        this.date = date;
    }

    // دالة للحصول على كافة المحاضرات
    static async getAllLectures() {
        // يمكنك هنا عمل الاستعلام أو أي عملية للحصول على المحاضرات من قاعدة البيانات
        // هذا مثال بسيط للتوضيح فقط
        return [
            new Lecture('Lecture 1', 'Instructor 1', '2022-01-01'),
            new Lecture('Lecture 2', 'Instructor 2', '2022-02-01'),
            new Lecture('Lecture 3', 'Instructor 3', '2022-03-01')
        ];
    }
}

module.exports = Lecture;
