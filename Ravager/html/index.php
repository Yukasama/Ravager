<!DOCTYPE html>
<html lang="en">
<head>

    <!-- MODIFY -->
    <title>Ravager - Build your website efficiently</title> <!-- SELECT PAGENAME -->
    <link rel="stylesheet" href="../css/classes.css">
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/custom.css">
    <link rel="stylesheet" href="../css/index.css">
    <link rel="icon" href="../img/Pageicon_1.png"> <!-- SELECT PAGEICON -->

    <!-- IMPLEMENTATIONS OF FORMATS, ICONS -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="refresh" content="100000">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <!-- Example: <i class="material-icons">eg. school</i> -->    

    <script src="https://kit.fontawesome.com/04b8e834da.js" crossorigin="anonymous"></script>
        <!-- Example: <i class="fa-regular fa-square"></i> --> 

</head>
<body>

    <!-- IMPLEMENTING FRAGMENTS -->
    <?php
        include "../html/fragments/contact.php";
        include "../html/fragments/navbar.php";
        include "../html/fragments/sidebar.php";
    ?>


    <!-- TECHNICAL PAGE -->
    <div class="main flex">
        <div class="main_background"></div>
        <div class="main_container flex">
            <div class="main_header">A Website that will <br>
                help you grow.</div>
            <div class="main_text">Are you searching for a website to boost the <br>
            reputation of your business? Runtime will help you <br> build the
            website of your dreams!</div>
            <div class="main_buttons flex">
                <div class="smart_button main_button">Get Started</div>
                <div class="smart_button main_button">Explore</div>
            </div>
        </div>
        <div class="main_wrapper flex">
            <div class="main_img"></div>
        </div>
    </div>

    <!-- PHOTO-BASED PAGE -->
    <div class="home">
        <div class="home_container flex">
            <i class="material-icons home_icon">chevron_left</i>
            <img class="home_img" src="../img/Image1.jpeg">
            <i class="material-icons home_icon">chevron_right</i>
        </div>
    </div>
    

    <!-- JAVASCRIPT -->
    <script src="https://cdn.jsdelivr.net/npm/js-cookie@3.0.1/dist/js.cookie.min.js"></script>
        <!-- USED FOR COOKIES -->

    <script src="../js/script.js"></script>
    <script src="../js/custom.js"></script>
    <script src="../js/vanilla-tilt.js"></script>
    <script>

        //VANILLA TILT SETTINGS
        VanillaTilt.init(document.querySelectorAll(".your_element"), {
            max: 25,
            speed: 400,
            scale: 1.07,
        });

        //ELEMENT SLIDING
        const slideOptions = {
            threshhold: 0,
            rootMargin: "0px 0px -300px 0px"
        };
        const your_element = document.querySelectorAll(".your_element");
        const slideOnScroll = new IntersectionObserver(function(
            entries,
            slideOnScroll
        ) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    return;
                }
                else {
                    entry.target.classList.add("slide");
                    slideOnScroll.unobserve(entry.target);
                }
            })
        
        }, slideOptions);
    
        //ENTER YOUR ELEMENT
        your_element.forEach(element => {
            slideOnScroll.observe(element);
        });

    </script>
</body>
</html>