import "./Contact.scss";
import useGATracker from "./useGATracker";

function Contact() {
    useGATracker();
    
    return (
        <div className="contact">
            <div className="contact-intro">
                <p id="heading"> I'm a <span className="important">model, actress, singer, dancer, artist, writer,</span> with 9+ years of experience </p>
                <p id="subheading">So, let's talk!</p>
            </div>


            <form
                class="contact-form"
                action="https://formspree.io/f/mknpojpn"
                method="POST"
                target="response"
            >
                <div class="contact-form-item">
                    <h3>First Name *</h3>
                    <input name="first-name" type="text" placeholder="First*" required></input>
                </div>

                <div class="contact-form-item">
                    <h3>Last Name *</h3>
                    <input name="last-name" type="text" placeholder="Last*" required></input>
                </div>

                <div class="contact-form-item">
                    <h3>Email *</h3>
                    <input name="email" type="email" placeholder="E-mail*" required></input>
                </div>

                <div class="contact-form-item">
                    <h3>Subject</h3>
                    <input name="subject" placeholder="Subject"></input>
                </div>

                <div class="contact-form-item">
                    <h3>Message *</h3>
                    <textarea name="message" placeholder="Write something ... *" required></textarea>
                </div>

                <center>
                    <input class="submit-btn" type="submit" value="SUBMIT"></input>
                </center>
            </form>


        </div>
    );
}

export default Contact;