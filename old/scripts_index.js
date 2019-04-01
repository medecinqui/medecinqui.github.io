/*
    scripts for Andy's Home Website
*/

"use strict";
var lnk, img, str;
lnk = "andy.wong";
lnk += "@";
lnk += "berkeley.edu";
img = '<i class="fa fa-envelope-square fa-3x" aria-hidden="true"></i>'
str = '<a href="mailto:'.concat(lnk).concat('">').concat(img).concat("</a>");
document.getElementById("myemail").innerHTML= str;

lnk = "https://www.linkedin.com/in/andy-wong-3735a9116"
img = '<i class="fa fa-linkedin-square fa-3x" aria-hidden="true"></i>'
str = '<a href="'.concat(lnk).concat('">').concat(img).concat("</a>");
document.getElementById("mylinkedin").innerHTML= str;

lnk = "https://www.github.com/medecinqui"
img = '<i class="fa fa-github-square fa-3x" aria-hidden="true"></i>'
str = '<a href="'.concat(lnk).concat('">').concat(img).concat("</a>");
document.getElementById("mygithub").innerHTML= str;

lnk = "http://facebook.com/medecinqui"
img = '<i class="fa fa-facebook-official fa-2x" aria-hidden="true"></i>'
str = '<a href="'.concat(lnk).concat('">').concat(img).concat("</a>");
document.getElementById("myfacebook").innerHTML= str;

lnk = "https://www.instagram.com/broskolnikov/"
img = '<i class="fa fa-instagram fa-2x" aria-hidden="true"></i>'
str = '<a href="'.concat(lnk).concat('">').concat(img).concat("</a>");
document.getElementById("myinstagram").innerHTML= str;

lnk = "http://steamcommunity.com/id/medecinqui/"
img = '<i class="fa fa-steam-square fa-2x" aria-hidden="true"></i>'
str = '<a href="'.concat(lnk).concat('">').concat(img).concat("</a>");
document.getElementById("mysteam").innerHTML= str;


/*
Envelope: <i class="fa fa-envelope" aria-hidden="true"></i>
Google: <i class="fa fa-google fa-2x" aria-hidden="true"></i>
Github: <i class="fa fa-github fa-2x" aria-hidden="true"></i>
Linkedin: <i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>

Facebook: <i class="fa fa-facebook-official" aria-hidden="true"></i>
Instagram: <i class="fa fa-instagram" aria-hidden="true"></i>
Slack: <i class="fa fa-slack" aria-hidden="true"></i>
Spotify: <i class="fa fa-spotify" aria-hidden="true"></i>
Steam: <i class="fa fa-steam-square" aria-hidden="true"></i>
Tumblr: <i class="fa fa-tumblr-square" aria-hidden="true"></i>

star wars empire: <i class="fa fa-empire" aria-hidden="true"></i>
star wars rebels: <i class="fa fa-rebel" aria-hidden="true"></i>

<---    
from index.html
	<div id="left-section">
		<h2 style="text-align: center">Perhaps you're interested in...</h2>
		<ul>
			<li>
				<dl><dt><a href="https://medecinqui.github.io/cs-education-refresh">CS Education Refresh</a>
				<dd> The start of a project to create a web-based simulator to aid students in writting software for competition robots ala PiE or FRC.
				</dl>
            </li>
			<li>
				<dl><dt><a href="https://medecinqui.github.io/page2.html">page2</a>
				<dd>
				</dl>
            </li>
		</ul>
            
	</div>
    --->

*/