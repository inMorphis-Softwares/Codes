addLoadEvent(function(){
try{
if(g_user.hasRoles()){
	
	var _header=getTopWindow().document.querySelector(".nav.navbar-right");
//Knowledge Message
	var k="<div class='navpage-header-content'><a target='gsft_main' href='$knowledge.do?'id='knowledgeMessageText' style='margin-right: 20px; font-size: 100%; color: #fff;text-decoration: underline;'><span style='margin-right:1%;'><i class='icon-alert'></i></span><span style='width:inherit'>Recent ServiceNow Updates</span></a></div>";
$j(_header).prepend(k);
}
}catch(e){}
});