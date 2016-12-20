"use strict";

require('../common/flexible');
 
import GoTop from '../common/gotop';
 

function bootstrap(){
	new GoTop(document.getElementById('gotop'));
}
 
if(typeof window.addEventListener){
    window.addEventListener("DOMContentLoaded",bootstrap);
}else{
    window.attachEvent('onload',bootstrap);
}
