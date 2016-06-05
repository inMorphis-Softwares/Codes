addLoadEvent(function(){
try{
if(g_user.hasRoles()){
//Knowledge Message
	var knowledgeMessage = "<a target='gsft_main' href='$knowledge.do?'id='knowledgeMessageText' style='margin-right: 20px; font-size: 100%; color: #000;text-decoration: underline;'><span style='margin-right:1%;'><i class='icon-alert'></i></span><span>Recent ServiceNow Updates</span></a>"; //);
$('textsearch').insert({before:knowledgeMessage});
}
}catch(e){}
});