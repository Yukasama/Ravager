
<!-- CONTACT -->
<form action="../php/logic.php" method="POST" class="contact flex">
    <div class="contact_page contact_page1 flex">
        <div class="circle circle1"></div>
        <div class="contacting flex">
            <i class="material-icons contact_icon">location_on</i>
            <div class="info_contact">
                <p class="contact_header">Address</p>
                <p class="contact_text">Funny Street</p>
                <p class="contact_text">Chicago, Illinois</p>
                <p class="contact_text">60007</p>
            </div>
        </div>
        <div class="contacting flex">
            <i class="material-icons contact_icon">local_phone</i>
            <div class="info_contact">
                <p class="contact_header">Phone</p>
                <p class="contact_text">+49 911 420 69</p>
            </div>
        </div>
        <div class="contacting flex">
            <i class="material-icons contact_icon">mail</i>
            <div class="info_contact">
                <p class="contact_header">E-Mail</p>
                <p class="contact_text">info.ravager@gmail.com</p>
            </div>
        </div>
    </div>
    <div class="contact_page contact_page2 flex">
        <div class="circle circle2"></div>
        <div class="hamburger_2">
            <div class="hamburger_line hamburger_line2"></div>
            <div class="hamburger_line hamburger_line2"></div>
            <div class="hamburger_line hamburger_line2"></div>
        </div>
        <p class="contact_header">Let's talk!</p>

        <!-- Form begins here -->
        <div class="contactInfo flex">            
            <div class="contactBox">
                <input type="text" name="firstname" required="required">
                <span>First Name</span>
            </div>
            <div class="contactBox">
                <input type="text" name="lastname" required="required">
                <span>Last Name</span>
            </div>
        </div>
        <div class="contactBox">
            <input type="text" name="mail" required="required">
            <span>E-mail</span>
        </div>
        <div class="contactBox">
            <input type="text" name="subject" required="required">
            <span>Subject</span>
        </div>
        <div class="contactBox">
            <textarea type="text" name="message" required="required"></textarea>
            <span>Enter Message...</span>
        </div>
        <input class="smart_button contact_button" name="submit" type="submit">
    </div>
</form>