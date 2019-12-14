import React from 'react';
import first from '../image/1.jpg';
import second from '../image/2.jpg';
import third from '../image/3.jpg'; 

function Team() {
    return(
    <div id="team">
        <hr /><br />
        <span className="firstheading"><h1 >Team</h1></span>
        <span className="secondheading"><h1>MOR Restaurant</h1></span>
        
        <div className="teamtext">
        <br />
        <h4>Chef Michael</h4>
        <img src={first} alt="pic" />
        <br />
        <a href="www.facebook.com">Contact</a>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore distinctio iusto cumque commodi explicabo blanditiis alias, placeat sed, qui, at esse? Unde voluptate, eaque reiciendis numquam repellat suscipit deleniti voluptatum?</p>
        </div>

        <div className="teamtext">
        <br />
        <h4>Sara Tsotsobe</h4>    
        <img src={second} alt="pic" />
        <br />
        <a href="www.facebook.com">Contact</a>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore distinctio iusto cumque commodi explicabo blanditiis alias, placeat sed, qui, at esse? Unde voluptate, eaque reiciendis numquam repellat suscipit deleniti voluptatum?</p>
        </div>

        <div className="teamtext">
        <br />
        <h4>Liam Green</h4>    
        <img src={third} alt="pic" />
        <br />
        <a href="www.facebook.com">Contact</a>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore distinctio iusto cumque commodi explicabo blanditiis alias, placeat sed, qui, at esse? Unde voluptate, eaque reiciendis numquam repellat suscipit deleniti voluptatum?</p>
        </div>
    </div>
    );
}

export default Team;