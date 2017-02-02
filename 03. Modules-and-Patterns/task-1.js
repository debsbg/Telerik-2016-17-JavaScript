function solve() {
    var Course = (function() {
        let courseTitle,
            courseStudents,
            coursePresentations,
            idGenerator;

        return {
            init: function(title, presentations) {
                if (!title || !presentations) {
                    throw "throw missing title or presentations for the course";
                }

                if (!Array.isArray(presentations)) {
                    throw "presentations must be an array";
                }

                if (presentations.length === 0) {
                    throw "presentations legnth must be greater than zero";
                }

                validateTitle(title);
                presentations.forEach(p => validateTitle(p));

                courseTitle = title;
                courseStudents = [];
                coursePresentations = presentations;
                idGenerator = getID();

                return this;
            },
            addStudent: function(name) {
                validateStudentName(name);

                let names = name.split(' ');

                let firstName = names[0];
                let lastName = names[1];
                let id = idGenerator();

                courseStudents.push({ firstName: firstName, lastName: lastName, id: id, homeworks: 0, examResult: 0 });

                return id;
            },
            getAllStudents: function() {
                let result = [];

                courseStudents.forEach(function(student) {
                    result.push({ firstname: student.firstName, id: student.id, lastname: student.lastName });
                });

                return result;
            },
            submitHomework: function(studentID, homeworkID) {
                validateStudentId(studentID);
                validateHomeworkId(homeworkID);

                for (let st of courseStudents) {
                    if (st.id === studentID) {
                        st.homeworks += 1;
                    }
                }
            },
            pushExamResults: function(results) {
                if (!results) {
                    throw "results are undefined";
                }
                if (!Array.isArray(results)) {
                    throw "results must be an array";
                }

                for (let res of results) {
                    if (!res.hasOwnProperty('score')) {
                        throw "all results must have a score property";
                    }

                    if (!res.hasOwnProperty('StudentID')) {
                        throw "all results must have student id property";
                    }

                    if (!courseStudents.some(s => s.id === res.StudentID)) {
                        throw "invalid sutdent id";
                    }

                    for (let st of courseStudents) {
                        if (st.id === res.StudentID) {
                            if (st.examResult !== 0) {
                                throw "student already has exam result";
                            }

                            st.examResult = res.score;
                        }
                    }
                }
            },
            getTopStudents: function() {

                let topStudents = [];

                for (let st of courseStudents) {
                    st.finalScore = (st.examResult * 0.75) + (st.homeworks * 0.25);
                }

                courseStudents.sort(function(a, b) {
                    if (a.finalScore > b.finalScore) {
                        return -1;
                    } else if (a.finalScore < b.finalScore) {
                        return 1;
                    } else {
                        return 0;
                    }
                });

                for (let i = 0; i < 10; i += 1) {
                    if (i >= courseStudents.length) {
                        return topStudents;
                    }

                    topStudents.push({ firstName: courseStudents[i].firstName, lastName: courseStudents[i].lastName, finalScore: courseStudents[i].finalScore });
                }
            }
        };

        function validateStudentId(studentID) {
            if (!courseStudents.some(s => s.id === studentID)) {
                throw "invadid student id";
            }
        }

        function validateHomeworkId(homeworkID) {
            if (homeworkID <= 0 || homeworkID > coursePresentations.length) {
                throw "invalid homework id";
            }
        }

        function validateStudentName(name) {
            if (!name) {
                throw "name is undefined";
            }

            if (typeof name !== 'string') {
                throw "name must be a string";
            }

            let names = name.split(' ');

            if (names.length !== 2) {
                throw "invalid name format";
            }

            let firstName = names[0];
            let lastName = names[1];


            validateName(firstName);
            validateName(lastName);
        }

        function validateName(name) {
            if (name.length === 0) {
                throw "invalid name";
            }

            if (name[0] !== name[0].toUpperCase()) {
                throw "invalid name casing";
            }

            for (let i = 1; i < name.length; i += 1) {
                if (name[i] !== name[i].toLowerCase()) {
                    throw "invalid name casing";
                }
            }
        }


        function getID() {
            let counter = 0;

            return function() {
                return counter += 1;
            };
        }

        function validateTitle(title) {
            if (title.length === 0) {
                throw "invalid title";
            }

            if (title[0] === ' ' || title[title.length - 1] === ' ') {
                throw "invalid title";
            }

            for (let i = 1; i < title.length; i += 1) {
                if (title[i] === ' ' && title[i - 1] === ' ') {
                    throw "invalid title";
                }
            }
        }
    })();

    return Course;
}
module.exports = solve;
