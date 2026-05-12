(function () {
    const STORAGE_KEY = 'syntax-academy-language';
    const DEFAULT_LANGUAGE = 'en';
    const HINDI_LANGUAGE = 'hi';

    const translations = {
        'Home': 'होम',
        'Courses': 'कोर्स',
        'Explore Courses': 'कोर्स देखें',
        'My Enrolls': 'मेरे एनरोलमेंट',
        'Contact': 'संपर्क',
        'FAQ': 'सवाल',
        'About': 'परिचय',
        'Platform': 'प्लेटफॉर्म',
        'India': 'भारत',
        'Mon – Sat': 'सोम - शनि',
        'Mon â€“ Sat': 'सोम - शनि',
        'New To Programming?': 'प्रोग्रामिंग में नए हैं?',
        'Start Learning': 'सीखना शुरू करें',
        'All Rights Reserved.': 'सर्वाधिकार सुरक्षित।',
        'A beginner friendly platform to learn programming, build projects, and become job-ready without confusion.': 'प्रोग्रामिंग सीखने, प्रोजेक्ट बनाने और बिना उलझन जॉब-रेडी बनने के लिए शुरुआती छात्रों के अनुकूल प्लेटफॉर्म।',
        'Start from absolute basics — no prior experience required. Follow our beginner friendly path and build real projects.': 'बिल्कुल बेसिक्स से शुरू करें - पहले अनुभव की जरूरत नहीं। हमारी आसान learning path फॉलो करें और असली प्रोजेक्ट बनाएं।',
        'Start from absolute basics â€” no prior experience required. Follow our beginner friendly path and build real projects.': 'बिल्कुल बेसिक्स से शुरू करें - पहले अनुभव की जरूरत नहीं। हमारी आसान learning path फॉलो करें और असली प्रोजेक्ट बनाएं।',

        'Build Skills. Write Code.': 'स्किल बनाएं। कोड लिखें।',
        'Shape Your Future.': 'अपना भविष्य बनाएं।',
        'Learn programming, web development, and problem-solving from industry-ready mentors.': 'इंडस्ट्री-रेडी मेंटर्स से प्रोग्रामिंग, वेब डेवलपमेंट और problem-solving सीखें।',
        'Explore': 'देखें',
        'Top Courses': 'टॉप कोर्स',
        'Start With Our Best Picks': 'हमारे बेहतरीन कोर्स से शुरुआत करें',
        'View All Courses': 'सभी कोर्स देखें',
        'How It Works': 'यह कैसे काम करता है',
        'From First Click to Certificate': 'पहली क्लिक से सर्टिफिकेट तक',
        'Pick Course': 'कोर्स चुनें',
        'Choose the course that matches your level, goals, and learning path.': 'अपने level, goals और learning path के हिसाब से कोर्स चुनें।',
        'Watch Lessons': 'लेसन देखें',
        'Learn with structured lessons, hands-on topics, and focused weekly progress.': 'Structured lessons, hands-on topics और focused weekly progress के साथ सीखें।',
        'Get Certified': 'सर्टिफिकेट पाएं',
        'Complete the course journey and unlock a certificate that proves your skills.': 'कोर्स पूरा करें और अपनी skills साबित करने वाला certificate पाएं।',
        'Learner Reviews': 'छात्रों के रिव्यू',
        'What Our Students Say': 'हमारे छात्र क्या कहते हैं',
        'Real feedback from learners building skills with Syntax Academy.': 'Syntax Academy पर skills बना रहे learners की असली feedback।',
        'Great learning experience and a course worth recommending.': 'बेहतरीन learning experience और recommend करने लायक course।',
        'Reviews will appear here once students start sharing feedback.': 'Students feedback share करेंगे तो reviews यहां दिखेंगे।',
        'Ready to Start Your Coding Journey?': 'अपनी coding journey शुरू करने के लिए तैयार हैं?',
        'Join thousands of students at Syntax Academy.': 'Syntax Academy पर हजारों students से जुड़ें।',
        'Enroll Now': 'अभी एनरोल करें',
        'No courses available right now.': 'अभी कोई course available नहीं है।',

        'Explore All Courses': 'सभी कोर्स देखें',
        'All Courses': 'सभी कोर्स',
        'Browse every course available at Syntax Academy and pick the path that fits your goals.': 'Syntax Academy पर available हर course देखें और अपने goals के हिसाब से path चुनें।',

        'We Don’t Teach Syntax.': 'हम सिर्फ syntax नहीं सिखाते।',
        'We Donâ€™t Teach Syntax.': 'हम सिर्फ syntax नहीं सिखाते।',
        'We Teach Thinking.': 'हम सोचने का तरीका सिखाते हैं।',
        'Learn logic, problem solving, and development skills that companies actually hire for.': 'Logic, problem solving और development skills सीखें जिनकी companies सच में demand करती हैं।',
        'Students Learning': 'सीख रहे छात्र',
        'Lessons': 'लेसन',
        'Practice Questions': 'प्रैक्टिस सवाल',
        'Real': 'असली',
        'Project Based': 'प्रोजेक्ट आधारित',
        'Our Story': 'हमारी कहानी',
        'Most students quit programming because tutorials are confusing and unstructured. Syntax Academy was created to fix that problem.': 'कई students programming इसलिए छोड़ देते हैं क्योंकि tutorials confusing और unstructured होते हैं। Syntax Academy इसी problem को solve करने के लिए बनाई गई है।',
        'We designed a learning system where each topic builds naturally on the previous one — exactly how real understanding works.': 'हमने ऐसा learning system बनाया है जहां हर topic पिछले topic पर naturally build होता है - जैसे real understanding बनती है।',
        'We designed a learning system where each topic builds naturally on the previous one â€” exactly how real understanding works.': 'हमने ऐसा learning system बनाया है जहां हर topic पिछले topic पर naturally build होता है - जैसे real understanding बनती है।',
        'Our Goal': 'हमारा लक्ष्य',
        'Make coding simple enough for beginners but powerful enough for real careers.': 'Coding को beginners के लिए आसान और real careers के लिए powerful बनाना।',
        'Your Learning Journey': 'आपकी learning journey',
        'Basics': 'बेसिक्स',
        'Understand logic & syntax': 'Logic और syntax समझें',
        'Practice': 'प्रैक्टिस',
        'Quizzes & problems': 'Quizzes और problems',
        'Projects': 'प्रोजेक्ट्स',
        'Build real applications': 'Real applications बनाएं',
        'Confidence': 'Confidence',
        'Interview ready': 'Interview ready',
        'Platform Features': 'Platform features',
        'Structured Courses': 'Structured courses',
        'No random tutorials — step-by-step roadmap': 'Random tutorials नहीं - step-by-step roadmap',
        'No random tutorials â€” step-by-step roadmap': 'Random tutorials नहीं - step-by-step roadmap',
        'Built-in Quiz System': 'Built-in quiz system',
        'Track your understanding instantly': 'अपनी understanding तुरंत track करें',
        'Project Based Learning': 'Project based learning',
        'Build real apps while learning': 'सीखते हुए real apps बनाएं',
        'Clean Learning UI': 'Clean learning UI',
        'No distractions, only focus': 'Distractions नहीं, सिर्फ focus',
        'Created For Learners': 'Learners के लिए बनाया गया',
        'Syntax Academy is designed for students who want clarity instead of confusion. Every lesson is optimized to reduce overwhelm and increase understanding.': 'Syntax Academy उन students के लिए design की गई है जिन्हें confusion की जगह clarity चाहिए। हर lesson overwhelm कम करने और understanding बढ़ाने के लिए optimized है।',

        'Frequently Asked Questions': 'अक्सर पूछे जाने वाले सवाल',
        'Everything you need to know about': 'जरूरी जानकारी',
        'Everything you need to know about Syntax Academy': 'Syntax Academy के बारे में जरूरी जानकारी',
        'What is Syntax Academy?': 'Syntax Academy क्या है?',
        'Syntax Academy is a platform where beginners can learn programming through structured courses, quizzes, and hands-on practice.': 'Syntax Academy एक platform है जहां beginners structured courses, quizzes और hands-on practice से programming सीख सकते हैं।',
        'Are the courses beginner friendly?': 'क्या courses beginners के लिए हैं?',
        'Yes. Most courses start from the fundamentals and gradually move to advanced concepts with practical examples.': 'हां। ज्यादातर courses fundamentals से शुरू होते हैं और practical examples के साथ advanced concepts तक जाते हैं।',
        'Do I need prior coding experience?': 'क्या पहले coding experience चाहिए?',
        'No experience is required. Syntax Academy is designed to help complete beginners start their programming journey.': 'कोई experience जरूरी नहीं। Syntax Academy complete beginners को programming journey शुरू करने में help करती है।',
        'How do quizzes work?': 'Quizzes कैसे काम करते हैं?',
        'After completing a lesson you can attempt quizzes to test your understanding and track your progress.': 'Lesson पूरा करने के बाद आप understanding test करने और progress track करने के लिए quizzes attempt कर सकते हैं।',
        'Is Syntax Academy free?': 'क्या Syntax Academy free है?',
        'Many learning resources are free. More advanced courses may be added in the future.': 'कई learning resources free हैं। Future में advanced courses add हो सकते हैं।',

        "Let's Build Something": 'आइए कुछ बनाते हैं',
        'Amazing': 'बेहतरीन',
        'Have questions about courses, enrollments or collaboration? Weâ€™d love to hear from you.': 'Courses, enrollments या collaboration को लेकर सवाल हैं? हमें आपकी बात सुनकर खुशी होगी।',
        "Have questions about courses, enrollments or collaboration? We'd love to hear from you.": 'Courses, enrollments या collaboration को लेकर सवाल हैं? हमें आपकी बात सुनकर खुशी होगी।',
        'Email Us': 'हमें ईमेल करें',
        'Call Us': 'हमें कॉल करें',
        'Location': 'लोकेशन',
        'Ahmedabad, India': 'अहमदाबाद, भारत',
        'Send Message': 'मैसेज भेजें',
        'Message Sent Successfully': 'Message सफलतापूर्वक भेजा गया',

        'Login': 'लॉगिन',
        'Admin Login': 'Admin login',
        'Back to Student Login': 'Student login पर वापस जाएं',
        'Loading admin login': 'Admin login load हो रहा है',
        'Forgot Password?': 'पासवर्ड भूल गए?',
        'Create Account': 'अकाउंट बनाएं',
        'Already have an account? Login': 'पहले से अकाउंट है? लॉगिन करें',
        'Forgot Password': 'पासवर्ड भूल गए',
        'Send OTP': 'OTP भेजें',
        'Set New Password': 'नया पासवर्ड सेट करें',
        'Update Password': 'पासवर्ड अपडेट करें',
        'Verify OTP': 'OTP verify करें',
        'Logout': 'लॉगआउट',
        'Full Name': 'पूरा नाम',
        'Mobile Number': 'मोबाइल नंबर',
        'Password': 'पासवर्ड',
        'Current Password': 'वर्तमान पासवर्ड',
        'New Password': 'नया पासवर्ड',
        'Email Address': 'ईमेल एड्रेस',
        'Email': 'ईमेल',
        'Username': 'Username',
        'Code': 'कोड',
        'Experience Level': 'Experience level',
        'Beginner - New to coding': 'Beginner - coding में नए',
        'Intermediate - Some experience': 'Intermediate - थोड़ा experience',
        'Advanced - Confident coder': 'Advanced - confident coder',
        'Pro Developer - Expert level': 'Pro Developer - expert level',

        'Learning Overview': 'Learning overview',
        'Quizzes Attempted': 'Attempted quizzes',
        'Average Score': 'Average score',
        'Best Score': 'Best score',
        'Community Activity': 'Community activity',
        'Comments Posted': 'Posted comments',
        'Replies Given': 'दिए गए replies',
        'My Enrolled Courses': 'मेरे enrolled courses',
        'Account Settings': 'Account settings',
        'Edit Profile': 'Profile edit करें',
        'Save Changes': 'Changes save करें',
        'Change Password': 'Password change करें',

        'My Enrolled Courses': 'मेरे enrolled courses',
        'Total Courses': 'कुल courses',
        'Download Receipt': 'Receipt download करें',
        'No enrolled courses yet': 'अभी कोई enrolled course नहीं है',
        'Browse Courses': 'Courses browse करें',

        'Dashboard': 'डैशबोर्ड',
        'Monitor platform activity | Syntax Academy': 'Platform activity monitor करें | Syntax Academy',
        'Syntax Academy Admin': 'Syntax Academy एडमिन',
        'Course Management': 'Course management',
        'Course Editor': 'Course editor',
        'Course Library': 'Course library',
        'Create New Course': 'नया course बनाएं',
        'Edit Course': 'Course edit करें',
        'Update Course': 'Course update करें',
        'Add Course': 'Course add करें',
        'Course Name': 'Course name',
        'Duration (Weeks)': 'Duration (weeks)',
        'Description': 'विवरण',
        'Thumbnail': 'Thumbnail',
        'Mark as Featured Course': 'Featured course mark करें',
        'All Courses': 'सभी courses',
        'Search courses...': 'Courses search करें...',
        'Search, review and manage every published course from one place.': 'हर published course को एक जगह से search, review और manage करें।',
        'Shape your academy catalog with a polished dashboard-style workflow': 'Polished dashboard workflow से academy catalog manage करें',
        'Refresh the details below and keep the listing sharp.': 'नीचे details refresh करें और listing clean रखें।',
        'Add the essentials for a strong first impression in your course library.': 'Course library में strong first impression के लिए जरूरी details add करें।',
        'No courses yet': 'अभी कोई courses नहीं',
        'Start with your first course above and your library will appear here.': 'ऊपर पहला course add करें और आपकी library यहां दिखाई देगी।',
        'Briefly describe what students will learn...': 'Students क्या सीखेंगे, संक्षेप में लिखें...',
        'e.g. Python for Beginners': 'जैसे Python for Beginners',
        'e.g. 8': 'जैसे 8',
        'Student Management': 'Student management',
        'Student Editor': 'Student editor',
        'Student Directory': 'Student directory',
        'Add New Student': 'नया student add करें',
        'Edit Student': 'Student edit करें',
        'Update Student': 'Student update करें',
        'Add Student': 'Student add करें',
        'Mobile': 'मोबाइल',
        'Password (leave blank to keep current)': 'Password (current रखने के लिए blank छोड़ें)',
        'Latest learners in your academy': 'आपकी academy के latest learners',
        'Keep student details, level settings, and credentials in one premium control panel.': 'Student details, level settings और credentials को एक premium control panel में manage करें।',
        'Search by learner name, email, or mobile, then filter by level to manage students faster.': 'Learner name, email या mobile से search करें, फिर level filter से students जल्दी manage करें।',
        'Search students...': 'Students search करें...',
        'No students yet': 'अभी कोई students नहीं',
        'Add your first student to see learner avatars, level insights, and directory actions here.': 'Learner avatars, level insights और directory actions देखने के लिए पहला student add करें।',
        'Join date pending': 'Join date pending',
        'Quiz System': 'Quiz system',
        'Quiz Management': 'Quiz management',
        'Quiz Upload': 'Quiz upload',
        'Add Quiz JSON': 'Quiz JSON add करें',
        'Choose course, add quiz name, and paste JSON.': 'Course चुनें, quiz name add करें और JSON paste करें।',
        'Language / Course': 'Language / Course',
        'Choose course': 'Course चुनें',
        'Quiz Name': 'Quiz name',
        'Enter quiz name': 'Quiz name डालें',
        'Quiz JSON': 'Quiz JSON',
        'Upload Quiz JSON': 'Quiz JSON upload करें',
        'Quiz Directory': 'Quiz directory',
        'Course quizzes': 'Course quizzes',
        'Search by quiz title or course, then filter by course level to manage assessments faster.': 'Quiz title या course से search करें, फिर level filter से assessments जल्दी manage करें।',
        'Search quizzes...': 'Quizzes search करें...',
        'Active Quizzes': 'Active quizzes',
        'Quiz': 'Quiz',
        'Questions': 'Questions',
        'Attempts': 'Attempts',
        'Avg Score': 'Avg score',
        'No quizzes yet': 'अभी कोई quizzes नहीं',
        'Once quizzes are attached to courses, they will appear here with question and attempt counts.': 'Courses से quizzes attach होने पर वे question और attempt counts के साथ यहां दिखाई देंगे।',
        'Other': 'अन्य',
        'Comments & Replies': 'Comments और replies',
        'Comments and reply threads': 'Comments और reply threads',
        'Most Discussed Courses': 'Most discussed courses',
        'Where learner conversations are most active.': 'जहां learner conversations सबसे active हैं।',
        'Moderation Guide': 'Moderation guide',
        'Keep the discussion area fast and clean.': 'Discussion area को fast और clean रखें।',
        'Prioritize open threads first so student questions do not sit unanswered.': 'Open threads को पहले prioritize करें ताकि student questions unanswered न रहें।',
        'Remove duplicate or harmful replies while keeping useful learner context visible.': 'Useful learner context रखते हुए duplicate या harmful replies remove करें।',
        'Watch for repeated questions on the same course to identify missing lesson clarity.': 'Missing lesson clarity identify करने के लिए same course पर repeated questions देखें।',
        'Discussion Board': 'Discussion board',
        'Search by learner, course, or message text and filter down to unresolved threads when needed.': 'Learner, course या message text से search करें और जरूरत पर unresolved threads filter करें।',
        'Search conversations...': 'Conversations search करें...',
        'All Threads': 'All threads',
        'Open': 'Open',
        'Replied': 'Replied',
        'No conversations yet': 'अभी कोई conversations नहीं',
        'Once students start commenting on courses, their discussion threads will appear here.': 'Students courses पर comment करेंगे तो discussion threads यहां दिखाई देंगे।',
        'No course discussions yet.': 'अभी कोई course discussions नहीं।',
        'Students': 'छात्र',
        'Enrollments': 'एनरोलमेंट',
        'Enrollment Management': 'Enrollment management',
        'Enrollment Directory': 'Enrollment directory',
        'Student-course enrollments': 'Student-course enrollments',
        'Search by student or course, then filter by course level to review enrollments faster.': 'Student या course से search करें, फिर course level filter से enrollments जल्दी review करें।',
        'Search enrollments...': 'Enrollments search करें...',
        'Active Students': 'Active students',
        'Active Courses': 'Active courses',
        'Enrollment Revenue': 'Enrollment revenue',
        'Average order value': 'Average order value',
        'Enrolled On': 'Enrolled on',
        'Payment': 'भुगतान',
        'No enrollments yet': 'अभी कोई enrollments नहीं',
        'Once students join courses, their enrollment activity will appear here.': 'Students courses join करेंगे तो enrollment activity यहां दिखाई देगी।',
        'Quizzes': 'क्विज़',
        'Results': 'रिजल्ट',
        'Quiz Results': 'Quiz results',
        'Result Directory': 'Result directory',
        'Student quiz attempts': 'Student quiz attempts',
        'Track learner attempts, scores, and pass status across every course quiz.': 'हर course quiz में learner attempts, scores और pass status track करें।',
        'Search by learner, quiz, or course, then filter by level to review attempts faster.': 'Learner, quiz या course से search करें, फिर level filter से attempts जल्दी review करें।',
        'Search results...': 'Results search करें...',
        'Learner': 'Learner',
        'Score': 'स्कोर',
        'Submitted': 'जमा किया गया',
        'Quiz attempt': 'Quiz attempt',
        'Passed': 'पास',
        'Failed': 'फेल',
        'No results yet': 'अभी कोई results नहीं',
        'Once learners submit quizzes, their scores will appear here.': 'Learners quizzes submit करेंगे तो scores यहां दिखाई देंगे।',
        'Contact Messages': 'Contact messages',
        'Inbox': 'Inbox',
        'Latest contact messages': 'Latest contact messages',
        'Search by name, email, or message text to review conversations faster.': 'Name, email या message text से search करके conversations जल्दी review करें।',
        'Search messages...': 'Messages search करें...',
        'Sender': 'Sender',
        'Message': 'Message',
        'Received': 'Received',
        'Reply email sent successfully.': 'Reply email successfully sent.',
        'Reply Message': 'Reply message',
        'Subject': 'Subject',
        'Reply from Syntax Academy': 'Reply from Syntax Academy',
        'Send Reply': 'Reply send करें',
        'No messages yet': 'अभी कोई messages नहीं',
        'New contact form submissions will appear here.': 'New contact form submissions यहां दिखाई देंगे।',
        'Total Students': 'Total students',
        'Total Enrollments': 'Total enrollments',
        'Total Revenue': 'Total revenue',
        'Recent Enrollments': 'Recent enrollments',
        'Recent Reviews': 'Recent reviews',
        'No recent enrollments': 'अभी recent enrollments नहीं हैं',
        'No recent reviews': 'अभी recent reviews नहीं हैं',
        'Loading admin page': 'Admin page load हो रहा है',
        'Select language': 'Language select करें',
        'Lesson Management': 'Lesson management',
        'Lesson Editor': 'Lesson editor',
        'Lesson Library': 'Lesson library',
        'Add New Lesson': 'नया lesson add करें',
        'Edit Lesson': 'Lesson edit करें',
        'Add Lesson': 'Lesson add करें',
        'Update Lesson': 'Lesson update करें',
        'Lesson Name': 'Lesson name',
        'Lesson Video': 'Lesson video',
        'Create a course first so lessons can be assigned correctly.': 'Lessons assign करने के लिए पहले course create करें।',
        'Select course': 'Course select करें',
        'All Lessons': 'All lessons',
        'Search lesson uploads, review course mapping and manage files from one place.': 'Lesson uploads search करें, course mapping review करें और files एक जगह manage करें।',
        'Search lessons...': 'Lessons search करें...',
        'Lesson': 'Lesson',
        'Video File': 'Video file',
        'Preview': 'Preview',
        'No lessons yet': 'अभी कोई lessons नहीं',
        'Add your first lesson above and the library will populate here.': 'ऊपर पहला lesson add करें और library यहां populate होगी।',
        'No lessons available': 'अभी कोई lessons available नहीं',
        'e.g. Python variables overview': 'जैसे Python variables overview',
        'Notes Management': 'Notes management',
        'Note Name': 'Note name',
        'Note File': 'Note file',
        'Add New Note': 'नया note add करें',
        'Edit Note': 'Note edit करें',
        'Add Note': 'Note add करें',
        'Update Note': 'Note update करें',
        'All Notes': 'All notes',
        'Search notes...': 'Notes search करें...',
        'Note': 'Note',
        'File': 'File',
        'No notes yet': 'अभी कोई notes नहीं',
        'No notes available': 'अभी कोई notes available नहीं',
        'e.g. Python basics PDF notes': 'जैसे Python basics PDF notes',
        'Review Management': 'Review management',
        'Average rating': 'Average rating',
        'Rating Breakdown': 'Rating breakdown',
        'Top Rated Courses': 'Top rated courses',
        'Review Feed': 'Review feed',
        'How learners are rating your academy.': 'Learners आपकी academy को कैसे rate कर रहे हैं।',
        'Courses earning the best learner sentiment.': 'Best learner sentiment पाने वाले courses।',
        'Latest feedback from learners': 'Learners की latest feedback',
        'Search reviews...': 'Reviews search करें...',
        'No reviews yet': 'अभी कोई reviews नहीं',
        'No review data yet to rank courses.': 'Courses rank करने के लिए अभी review data नहीं है।',
        'Question Editor': 'Question editor',
        'Edit Question JSON': 'Question JSON edit करें',
        'JSON Payload': 'JSON payload',
        'Update Question': 'Question update करें',
        'Question Actions': 'Question actions',
        'Edit or delete existing questions': 'Existing questions edit या delete करें',
        'Question List': 'Question list',
        'Questions in this quiz': 'इस quiz के questions',
        'No questions yet': 'अभी कोई questions नहीं',
        'Back to Quizzes': 'Quizzes पर वापस जाएं',
        'Edit question': 'Question edit करें',
        'Delete question': 'Question delete करें',
        'All': 'सभी',
        'Level': 'लेवल',
        'Duration': 'अवधि',
        'Status': 'स्थिति',
        'Created': 'बनाया गया',
        'Actions': 'Actions',
        'Contact': 'संपर्क',
        'Spend': 'खर्च',
        'Beginner': 'Beginner',
        'Intermediate': 'Intermediate',
        'Advanced': 'Advanced',
        'Pro Developer': 'Pro developer',
        'Active': 'Active',
        'Inactive': 'Inactive',
        'Cancel': 'रद्द करें',
        'Edit': 'Edit',
        'Delete': 'Delete',
        'Delete quiz': 'Quiz delete करें',
        'Delete result': 'Result delete करें',
        'Delete enrollment': 'Enrollment delete करें',
        'Delete message': 'Message delete करें',
        'Reply by email': 'Email से reply करें',
        'No enrollments yet.': 'अभी कोई enrollments नहीं।',
        'No reviews yet.': 'अभी कोई reviews नहीं।',

        'Search Results for': 'Search results for',
        'No courses found for': 'इसके लिए कोई course नहीं मिला:',
        'Try searching with a different keyword.': 'किसी अलग keyword से search करें।',
        'Continue Learning': 'Learning continue करें',
        'Welcome back,': 'Welcome back,',
        'You have not enrolled in any course yet. Explore the course list and start your learning journey.': 'आपने अभी किसी course में enroll नहीं किया है। Course list explore करें और अपनी learning journey शुरू करें।',
        'Enrolled': 'Enrolled',
        'No lesson selected': 'कोई lesson selected नहीं',
        'Select a lesson from the right to start learning': 'Learning शुरू करने के लिए right side से lesson चुनें',
        'Notes': 'नोट्स',
        'Course Quiz': 'Course quiz',
        'Quiz Locked': 'Quiz locked',
        'Attempt Quiz': 'Quiz attempt करें',
        'Download Certificate': 'Certificate download करें',
        'Student Comments': 'Student comments',
        'Please': 'कृपया',
        'login': 'login',
        'to post a comment.': 'comment post करने के लिए।',
        'Post': 'Post',
        'No comments yet': 'अभी कोई comments नहीं',
        'Rate This Course': 'इस course को rate करें',
        'Share your experience...': 'अपना experience share करें...',

        'Quiz Not Available': 'Quiz available नहीं',
        'This course does not have a quiz yet.': 'इस course में अभी quiz नहीं है।',
        'Previous': 'Previous',
        'Next': 'Next',
        'Submit Quiz': 'Quiz submit करें',

        'Student': 'Student',
        'Payment ID': 'Payment ID',
        'Date': 'Date',
        'Total Paid': 'कुल payment',
        'Course Price': 'Course price',
        'UPI': 'UPI',
        'Cards': 'Cards',
        'NetBanking': 'NetBanking',

        'Signing you out...': 'आपको sign out किया जा रहा है...',
        'Redirecting you now.': 'अब redirect किया जा रहा है।',
        'Search Results': 'Search results',
        'Loading homepage': 'Homepage load हो रहा है',
        'Loading courses': 'Courses load हो रहे हैं',
        'Loading course': 'Course load हो रहा है',
        'Loading about page': 'About page load हो रहा है',
        'Loading contact page': 'Contact page load हो रहा है',
        'Loading FAQ': 'FAQ load हो रहा है',
        'Loading login form': 'Login form load हो रहा है',
        'Loading registration form': 'Registration form load हो रहा है',
        'Loading profile': 'Profile load हो रही है',
        'Loading enrolled courses': 'Enrolled courses load हो रहे हैं',
        'Loading receipt': 'Receipt load हो रही है',
        'Loading payment page': 'Payment page load हो रहा है',
        'Loading quiz': 'Quiz load हो रहा है',
        'Loading forgot password form': 'Forgot password form load हो रहा है',
        'Loading reset password form': 'Reset password form load हो रहा है',
        'Loading OTP form': 'OTP form load हो रहा है',

        'Your Name': 'आपका नाम',
        'Your Message': 'आपका message',
        'Enter registered email': 'Registered email डालें',
        'Mobile Number': 'मोबाइल नंबर',
        'Search Python, Django, C, Java...': 'Python, Django, C, Java खोजें...',
        'Write your comment...': 'अपना comment लिखें...',
        'Write a reply...': 'Reply लिखें...',
        'New Password': 'नया पासवर्ड',
        'Switch language': 'भाषा बदलें',
        'Download Note': 'Note download करें',
        'Back 10 seconds': '10 seconds पीछे',
        'Forward 10 seconds': '10 seconds आगे',
        'Review navigation': 'Review navigation',
        'Scroll reviews left': 'Reviews left scroll करें',
        'Scroll reviews right': 'Reviews right scroll करें',
        'Enter a valid email address.': 'Valid email address डालें।'
    };

    const regexTranslations = [
        {
            pattern: /^(\d+)\s+Lessons$/,
            replace: function (match) {
                return match[1] + ' लेसन';
            }
        },
        {
            pattern: /^(\d+)\s+Weeks$/,
            replace: function (match) {
                return match[1] + ' सप्ताह';
            }
        },
        {
            pattern: /^(\d+)\s+Students$/,
            replace: function (match) {
                return match[1] + ' छात्र';
            }
        },
        {
            pattern: /^(\d+)\s+out of 5 stars$/,
            replace: function (match) {
                return '5 में से ' + match[1] + ' स्टार';
            }
        },
        {
            pattern: /^(\d+)\s+review(s?)$/,
            replace: function (match) {
                return match[1] + ' रिव्यू';
            }
        },
        {
            pattern: /^(\d+)\s+student(s?)$/,
            replace: function (match) {
                return match[1] + ' student';
            }
        },
        {
            pattern: /^(\d+)\s+week(s?)$/,
            replace: function (match) {
                return match[1] + ' week';
            }
        },
        {
            pattern: /^Enrolled on\s+(.+)$/,
            replace: function (match) {
                return match[1] + ' को enrolled';
            }
        },
        {
            pattern: /^Joined\s+(.+)$/,
            replace: function (match) {
                return match[1] + ' को joined';
            }
        },
        {
            pattern: /^Attached to\s+(.+)$/,
            replace: function (match) {
                return match[1] + ' से attached';
            }
        },
        {
            pattern: /^No courses found for\s+"(.+)"$/,
            replace: function (match) {
                return '"' + match[1] + '" के लिए कोई course नहीं मिला';
            }
        },
        {
            pattern: /^Welcome back,\s+(.+)\.\s+Here are all the courses you have enrolled in so you can continue learning anytime\.$/,
            replace: function (match) {
                return 'Welcome back, ' + match[1] + '. यहां आपके सभी enrolled courses हैं ताकि आप कभी भी learning continue कर सकें।';
            }
        },
        {
            pattern: /^You scored\s+(.+)%\s+in the quiz\.\s+Your certificate is ready to download\.$/,
            replace: function (match) {
                return 'आपने quiz में ' + match[1] + '% score किया। आपका certificate download के लिए ready है।';
            }
        },
        {
            pattern: /^(.+)\s+left$/,
            replace: function (match) {
                return match[1] + ' बाकी';
            }
        },
        {
            pattern: /^🚫\s*Quiz Not Available$/,
            replace: function () {
                return 'Quiz available नहीं';
            }
        },
        {
            pattern: /^(.+)\s+average stars$/,
            replace: function (match) {
                return match[1] + ' average stars';
            }
        },
        {
            pattern: /^(.+)\s+star review$/,
            replace: function (match) {
                return match[1] + ' star review';
            }
        }
    ];

    const textOriginals = new WeakMap();
    const attributeNames = ['placeholder', 'aria-label', 'title'];
    const originalDocumentTitle = document.title;
    let currentLanguage = DEFAULT_LANGUAGE;
    let isApplying = false;

    const normalizeText = function (value) {
        return String(value || '').replace(/\s+/g, ' ').trim();
    };

    const translateText = function (text) {
        const normalized = normalizeText(text);

        if (!normalized) {
            return text;
        }

        if (translations[normalized]) {
            return translations[normalized];
        }

        if (normalized.endsWith(' | Syntax Academy')) {
            const title = normalized.replace(' | Syntax Academy', '');
            return translateText(title) + ' | Syntax Academy';
        }

        for (let index = 0; index < regexTranslations.length; index += 1) {
            const rule = regexTranslations[index];
            const match = normalized.match(rule.pattern);

            if (match) {
                return rule.replace(match);
            }
        }

        return normalized;
    };

    const preserveSpacing = function (original, translated) {
        const leading = String(original).match(/^\s*/)[0];
        const trailing = String(original).match(/\s*$/)[0];
        return leading + translated + trailing;
    };

    const shouldSkipElement = function (element) {
        if (!element) {
            return false;
        }

        return Boolean(element.closest('script, style, noscript, pre, code, textarea, [data-language-selector], [data-no-translate]'));
    };

    const translateTextNode = function (node) {
        const parent = node.parentElement;

        if (shouldSkipElement(parent)) {
            return;
        }

        if (!textOriginals.has(node)) {
            textOriginals.set(node, node.nodeValue);
        }

        const original = textOriginals.get(node);
        const nextText = currentLanguage === HINDI_LANGUAGE
            ? preserveSpacing(original, translateText(original))
            : original;

        if (node.nodeValue !== nextText) {
            node.nodeValue = nextText;
        }
    };

    const translateAttributes = function (root) {
        attributeNames.forEach(function (attributeName) {
            const selector = '[' + attributeName + ']';
            const elements = [];

            if (root.nodeType === Node.ELEMENT_NODE && root.matches(selector)) {
                elements.push(root);
            }

            if (root.querySelectorAll) {
                root.querySelectorAll(selector).forEach(function (element) {
                    elements.push(element);
                });
            }

            elements.forEach(function (element) {
                if (shouldSkipElement(element)) {
                    return;
                }

                const originalAttribute = 'data-i18n-original-' + attributeName;

                if (!element.hasAttribute(originalAttribute)) {
                    element.setAttribute(originalAttribute, element.getAttribute(attributeName) || '');
                }

                const original = element.getAttribute(originalAttribute) || '';
                const nextValue = currentLanguage === HINDI_LANGUAGE
                    ? translateText(original)
                    : original;

                if (element.getAttribute(attributeName) !== nextValue) {
                    element.setAttribute(attributeName, nextValue);
                }
            });
        });
    };

    const translateNodeTree = function (root) {
        if (!root || shouldSkipElement(root.nodeType === Node.ELEMENT_NODE ? root : root.parentElement)) {
            return;
        }

        if (root.nodeType === Node.TEXT_NODE) {
            translateTextNode(root);
            return;
        }

        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
        let node = walker.nextNode();

        while (node) {
            translateTextNode(node);
            node = walker.nextNode();
        }

        translateAttributes(root);
    };

    const updateLanguageControls = function () {
        document.querySelectorAll('[data-language-selector]').forEach(function (selector) {
            selector.querySelectorAll('[data-language-option]').forEach(function (button) {
                const isActive = button.dataset.languageOption === currentLanguage;

                button.classList.toggle('is-active', isActive);
                button.setAttribute('aria-pressed', String(isActive));
            });
        });
    };

    const applyLanguage = function (language) {
        currentLanguage = language === HINDI_LANGUAGE ? HINDI_LANGUAGE : DEFAULT_LANGUAGE;
        isApplying = true;

        document.documentElement.lang = currentLanguage;
        document.title = currentLanguage === HINDI_LANGUAGE ? translateText(originalDocumentTitle) : originalDocumentTitle;
        translateNodeTree(document.body);
        updateLanguageControls();

        window.setTimeout(function () {
            isApplying = false;
        }, 0);
    };

    const setLanguage = function (language) {
        try {
            window.localStorage.setItem(STORAGE_KEY, language);
        } catch (error) {}

        applyLanguage(language);
    };

    const getSavedLanguage = function () {
        try {
            return window.localStorage.getItem(STORAGE_KEY) || DEFAULT_LANGUAGE;
        } catch (error) {
            return DEFAULT_LANGUAGE;
        }
    };

    document.addEventListener('DOMContentLoaded', function () {
        currentLanguage = getSavedLanguage();
        applyLanguage(currentLanguage);

        document.addEventListener('click', function (event) {
            const option = event.target.closest('[data-language-option]');

            if (!option) {
                return;
            }

            setLanguage(option.dataset.languageOption);
        });

        const observer = new MutationObserver(function (mutations) {
            if (isApplying || currentLanguage !== HINDI_LANGUAGE) {
                return;
            }

            mutations.forEach(function (mutation) {
                mutation.addedNodes.forEach(function (node) {
                    translateNodeTree(node);
                });

                if (mutation.type === 'characterData') {
                    translateTextNode(mutation.target);
                }
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true,
            characterData: true
        });
    });
})();
