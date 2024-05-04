import React from 'react';
import mapicon from '../assets/map-icon.svg';
import supporticon from '../assets/support-icon.svg';


export default function Countact() {
  return (
    <section className="contact-area">
      <div className="custom-container">
        <div className="custom-row">
          <div className="contact-form-wrap">
            <div className="contact-form-body">
              <h5 className="section-subtitle">Contact</h5>
              <h1 className="section-title">Lets get in touch</h1>
              <p>You can reach us anytime via <a href="mailto:info@ooglesoft.com">info@ooglesoft.com</a></p>
              <form action="#" method="POST" className="contact-form">
                <div className="input-row">
                  <div className="input-group">
                    <label htmlFor="first_name">First Name</label>
                    <input id="first_name" type="text" name="first_name" placeholder="First Name" />
                  </div>
                  <div className="input-group">
                    <label htmlFor="last_name">Last Name</label>
                    <input id="last_name" type="text" name="last_name" placeholder="Last Name" />
                  </div>
                </div>
                <div className="input-row">
                  <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Your Email" />
                  </div>
                </div>
                <div className="input-row">
                  <div className="input-group phone-number">
                    <select className="number-prefix">
                      <option value="uk">UK</option>
                      <option value="us">US</option>
                      <option value="ind">IND</option>
                    </select>
                    <label htmlFor="phone_number">Phone Number</label>
                    <input id="phone_number" type="text" name="phone_number" placeholder="Your Number" />
                  </div>
                  <div className="input-group">
                    <label htmlFor="country">Country</label>
                    <input type="text" id="homeland" name="country" placeholder="Your Country" />
                  </div>
                </div>
                <div className="input-row">
                  <div className="input-group">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" placeholder="Leave us a message...." defaultValue={""} />
                  </div>
                </div>
                <div className="input-row">
                  <div className="input-group input-checkbox">
                    <input type="checkbox" id="privacy_policy_accept" />
                    <label htmlFor="privacy_policy_accept">You agree to our <a href="#">terms and conditions.</a></label>
                  </div>
                </div>
                <div className="input-row">
                  <div className="input-group">
                    <button id="submit" className="theme-btn">Get Started</button>
                  </div>
                </div>
                <div className="input-row">
                  <div className="input-group alert-notification">
                    <div id="alert-message" className="alert-msg" />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="contact-experience">
            <ul>
              <li>
                <h1>3+ <span>Years</span></h1>
                <p>Field Experience </p>
              </li>
              <li>
                <h1>100+ <span>Projects</span></h1>
                <p>Done Around World </p>
              </li>
              <li>
                <h1>99%</h1>
                <p>Client Satisfaction</p>
              </li>
              <li>
                <h1>2021 <span>Year</span></h1>
                <p>Established On</p>
              </li>
              <li>
                <h1>2 <span>Mins</span></h1>
                <p>Response Time</p>
              </li>
            </ul>
          </div>
          <div className="contact-infos">
            <div className="contact-infos-inner">
              <div className="contact-info">
                <img src={supporticon} alt="Support" />
                <h3>Contact Info</h3>
                <p>
                  +91 978-462-6443 <br />
                  info@ooglesoft.com
                </p>
              </div>
              <div className="contact-office-info contact-info">
                <img src={mapicon} alt="Map" />
                <h3>Visit our office</h3>
                <p>52/210, Padmani VT Rd,<br />
                  Ward 27, Mansarovar Sector 5,<br />
                  Mansarovar, Jaipur, Rajasthan, 302020</p>
              </div>
              <ul className="contact-social-links">
                <li>
                  <a href="https://www.youtube.com/channel/UCFHyvOqurXKr-t0FLMdHVIQ">
                    {/*?xml version="1.0" encoding="UTF-8"?*/}<i className="iconoir-youtube" />
                    Dribbble
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/OogleSoft">
                    {/*?xml version="1.0" encoding="UTF-8"?*/}<i className="iconoir-twitter" />
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/ooglesoft/?hl=en">
                    {/*?xml version="1.0" encoding="UTF-8"?*/}<i className="iconoir-instagram" />
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/ooglesoft-oogel-574382274/">
                    {/*?xml version="1.0" encoding="UTF-8"?*/}<i className="iconoir-linkedin" />
                    linkedin
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>



  )
}
