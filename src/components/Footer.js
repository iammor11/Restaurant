import React from 'react';
import fb from '../image/fb.png';
import twi from '../image/twi5.png';
import ins from '../image/ins1.jpg';
import lin from '../image/lin5.png';

function Footer() {
    return(
        <div id="footer">
        <footer>
            <div className="card">
            <br />
            <div className="card-body">
            <h3 className="card-title">About Us</h3>
            <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus natus earum non molestias suscipit</p>
            <a href="/"><img src={fb} alt="social media" height="50px" width="50px" /></a>
            <a href="/"><img src={twi} alt="social media" height="50px" width="50px" /></a>
            <a href="/"><img src={ins} alt="social media" height="50px" width="50px" /></a>
            <a href="/"><img src={lin} alt="social media" height="50px" width="50px" /></a>
            </div>
            </div>
      
            <div className="card">
            <br />
            <div className="card-body">
            <h3 className="card-title">Opening Hours</h3>
            <p className="text">Monday to Friday: 7PM to 1AM</p>
            <p className="text">Saturday: 1PM to 1AM</p>
            <p className="text">Sunday: 1PM to 3AM</p>
            </div>
            </div>

            <div className="card">
            <br />
            <div className="card-body">
            <h3 className="card-title">Contact Info</h3>
            <p className="text">Address: Shahrah-e-faisal near FTC, Karachi</p>
            <p className="text">Phone: 090078601</p>
            <p className="text">Email: osamarizwan444@gmail.com</p>
            </div>
            </div>

        <div><br /><br />
            <p id="rights">All rights reserved | This template is made by MOR.</p><br />
        </div>
        </footer>
    </div>
);
}
export default Footer;