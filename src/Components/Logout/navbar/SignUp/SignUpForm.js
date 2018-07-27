import React,{ Component } from 'react';
import '../SignUp/css/form.css';
import '../SignUp/js/form.js';



export default class SignupForm extends Component {
    
  componentDidMount()
  {
    
//jQuery time

var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

window.$(".next").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = window.$(this).parent();
	next_fs = window.$(this).parent().next();
	
	//activate next step on progressbar using the index of next_fs
	window.$("#progressbar li").eq(window.$("fieldset").index(next_fs)).addClass("active");
	
	//show the next fieldset
	next_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale current_fs down to 80%
			scale = 1 - (1 - now) * 0.2;
			//2. bring next_fs from the right(50%)
			left = (now * 50)+"%";
			//3. increase opacity of next_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({
        'transform': 'scale('+scale+')',
        'position': 'absolute'
      });
			next_fs.css({'left': left, 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
});

window.$(".previous").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = window.$(this).parent();
	previous_fs = window.$(this).parent().prev();
	
	//de-activate current step on progressbar
	window.$("#progressbar li").eq(window.$("fieldset").index(current_fs)).removeClass("active");
	
	//show the previous fieldset
	previous_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale previous_fs from 80% to 100%
			scale = 0.8 + (1 - now) * 0.2;
			//2. take current_fs to the right(50%) - from 0%
			left = ((1-now) * 50)+"%";
			//3. increase opacity of previous_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({'left': left});
			previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
});

window.$(".submit").click(function(){
	return false;
});

  }

    render() {
      
      return(
        <div>
          {/* multistep form */}
          <form id="msform">
            {/* progressbar */}
            <ul id="progressbar">
              <li className="active">Account Setup</li>
              <li>Social Profiles</li>
              <li>Personal Details</li>
            </ul>
            {/* fieldsets */}
            <fieldset>
              <h2 className="fs-title">Create your account</h2>
              <h3 className="fs-subtitle">This is step 1</h3>
              <input type="text" name="email" placeholder="Email" />
              <input type="password" name="pass" placeholder="Password" />
              <input type="password" name="cpass" placeholder="Confirm Password" />
              <input type="button" name="next" className="next action-button" defaultValue="Next" />
            </fieldset>
            <fieldset>
              <h2 className="fs-title">Social Profiles</h2>
              <h3 className="fs-subtitle">Your presence on the social network</h3>
              <input type="text" name="twitter" placeholder="Twitter" />
              <input type="text" name="facebook" placeholder="Facebook" />
              <input type="text" name="gplus" placeholder="Google Plus" />
              <input type="button" name="previous" className="previous action-button" defaultValue="Previous" />
              <input type="button" name="next" className="next action-button" defaultValue="Next" />
            </fieldset>
            <fieldset>
              <h2 className="fs-title">Personal Details</h2>
              <h3 className="fs-subtitle">We will never sell it</h3>
              <input type="text" name="fname" placeholder="First Name" />
              <input type="text" name="lname" placeholder="Last Name" />
              <input type="text" name="phone" placeholder="Phone" />
              <textarea name="address" placeholder="Address" defaultValue={""} />
              <input type="button" name="previous" className="previous action-button" defaultValue="Previous" />
              <input type="submit" name="submit" className="submit action-button" defaultValue="Submit" />
            </fieldset>
          </form>
        </div>
      );
    };
}