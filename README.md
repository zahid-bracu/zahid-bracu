<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Professional Banner</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&family=Poppins:wght@300;500;700&display=swap');

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            /* GitHub Dark Theme Background */
            background-color: #0d1117; 
            color: #c9d1d9;
            font-family: 'Poppins', sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            overflow: hidden;
        }

        .banner-container {
            width: 800px;
            height: 300px;
            background: linear-gradient(145deg, #161b22, #0d1117);
            border: 1px solid #30363d;
            border-radius: 15px;
            padding: 40px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: relative;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
            overflow: hidden;
        }

        /* Decorative glowing circles */
        .banner-container::before {
            content: '';
            position: absolute;
            top: -50px;
            right: -50px;
            width: 200px;
            height: 200px;
            background: rgba(88, 166, 255, 0.1);
            border-radius: 50%;
            filter: blur(40px);
        }

        .banner-container::after {
            content: '';
            position: absolute;
            bottom: -50px;
            left: -50px;
            width: 200px;
            height: 200px;
            background: rgba(46, 160, 67, 0.1);
            border-radius: 50%;
            filter: blur(40px);
        }

        .greeting {
            color: #8b949e;
            font-size: 1.2rem;
            margin-bottom: 5px;
            font-family: 'Fira Code', monospace;
        }

        .name {
            font-size: 3rem;
            font-weight: 700;
            color: #c9d1d9;
            margin-bottom: 10px;
        }

        .name span {
            color: #58a6ff; /* GitHub Blue */
        }

        .academic-bg {
            font-size: 1.5rem;
            color: #2ea043; /* GitHub Green */
            font-weight: 500;
            height: 35px;
            display: flex;
            align-items: center;
        }

        /* Cursor Animation */
        .cursor {
            display: inline-block;
            width: 3px;
            height: 24px;
            background-color: #2ea043;
            margin-left: 5px;
            animation: blink 0.8s infinite;
        }

        @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
        }

        .skills {
            margin-top: 25px;
            display: flex;
            gap: 15px;
        }

        .skill-badge {
            background: #21262d;
            border: 1px solid #30363d;
            padding: 8px 15px;
            border-radius: 20px;
            font-size: 0.9rem;
            font-family: 'Fira Code', monospace;
            color: #8b949e;
            transition: all 0.3s ease;
        }

        .skill-badge:hover {
            border-color: #8b949e;
            color: #c9d1d9;
            cursor: default;
        }
    </style>
</head>
<body>

    <div class="banner-container">
        <div class="greeting">Hi there, I'm</div>
        <div class="name">Your <span>Name</span></div>
        <div class="academic-bg">
            <span id="typing-text"></span><span class="cursor"></span>
        </div>
        
        <div class="skills">
            <div class="skill-badge">&lt;/&gt; Code</div>
            <div class="skill-badge">📊 Research</div>
            <div class="skill-badge">⚙️ Problem Solving</div>
        </div>
    </div>

    <script>
        // ----------------------------------------------------
        // Update this array with your actual Academic Background
        // ----------------------------------------------------
        const texts = [
            "B.Sc in Computer Science", 
            "Data Enthusiast & Researcher", 
            "Lifelong Learner"
        ];
        
        let count = 0;
        let index = 0;
        let currentText = "";
        let letter = "";
        let isDeleting = false;

        (function type() {
            if (count === texts.length) {
                count = 0;
            }
            currentText = texts[count];

            if (isDeleting) {
                letter = currentText.slice(0, --index);
            } else {
                letter = currentText.slice(0, ++index);
            }

            document.getElementById('typing-text').textContent = letter;

            let typeSpeed = isDeleting ? 50 : 100;

            if (!isDeleting && letter.length === currentText.length) {
                typeSpeed = 2000; // Pause at end of word
                isDeleting = true;
            } else if (isDeleting && letter.length === 0) {
                isDeleting = false;
                count++;
                typeSpeed = 500; // Pause before typing next word
            }

            setTimeout(type, typeSpeed);
        }());
    </script>

</body>
</html>
