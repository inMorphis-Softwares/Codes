/*
Add Event Listener on key down event for CTRL+S 
*/
document.addEventListener("keydown", function(event) {
	 
	//keycode 83 is for s
	//identify main key ==> metakey || ctrlkey
  if ((window.navigator.platform.toUpperCase().indexOf('MAC')>=0 ? event.metaKey : event.ctrlKey)  && event.keyCode == 83) {
	  
	  //Get the event value, "event.which" is for FF
	  event=event||window.event||event.which;
	  
	  //stopPropagation works only in FF
	   if (event.stopPropagation) {
		event.stopPropagation();
	  }
	  
	  //Prevent the dafault function called by CTRL+S
	  event.preventDefault();
    	
	  //Get full element of the form
	  var _form=g_form.getFormElement();
	  
	  //Get the sys_id value from the URL to check which UI Action needs to be called
	  var _sys=getParameterFromURL("sys_id").toString();
	  
	  //Based on value of sys_id, we will decide that which UI Action needs to be called, either for insert or Update
	  var _btnAction=_sys=="-1"?"sysverb_insert_and_stay":"sysverb_update_and_stay";
	  
	  //call the UI Action
	  gsftSubmit(null, _form, _btnAction);
	  
  }
}, false);